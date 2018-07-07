import React, { Component } from 'react';
import './App.css';
import Dashboard from './component/Dashboard/Dashboard';
import Form from './component/Form/Form';
import Header from './component/Header/Header';
import Product from './component/Product/Product';
import axios from 'axios';

class App extends Component {
  constructor () {
    super();
    this.state = {
      inventoryList: [],
      urlInput: '',
      productNameInput: '',
      priceInput: '',
    }
  }
  componentDidMount(){
    axios.get('/api/inventory').then(res =>{
       this.setState({
         inventoryList: res.data
        })
    }
  )
}

 
  render() {
    const listInventory = this.state.inventoryList.map((e,i) => {return <div key={i}>{e.name} {e.price} {e.image}</div>})
    console.log(this.state.inventoryList)
    return (
      <div className="App">
      <div className='mainleft'>
      {listInventory}
      </div>
      <div className='mainright'>
       <Dashboard inventoryList={this.state.inventoryList} urlInput={this.state.urlInput} productNameInput={this.state.productNameInput} priceInput={this.state.priceInput}/>
       <Form  inventoryList={this.state.inventoryList} urlInput={this.state.urlInput} productNameInput={this.state.productNameInput} priceInput={this.state.priceInput}/>
       <Header/>
       <Product/>
       </div>
      </div>
    );
  }
}

export default App;
