import React, { Component } from 'react'
import axios from 'axios';

export default class Form extends Component {
   constructor(props){
       super(props);
       this.state = {
       inventoryList: this.props.inventoryList,
     }
}
createProduct = () => {
    axios.post('/api/product', {name: this.props.productNameInput, price: this.props.priceInput, image: this.props.urlInput}).then(res => this.setState({inventoryList: res.data}))
  }
    render(){
        return(
            <button className='redbutton' onClick={() => this.createProduct()}>Add to Inventory</button>
        )
    }
}
