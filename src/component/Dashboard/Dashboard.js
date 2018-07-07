import React, { Component } from 'react'

export default class Dashboard extends Component {
   constructor(props){
       super(props);
       this.state = {
      urlInput: this.props.urlInput,
      productNameInput: this.props.productNameInput,
      priceInput: this.props.priceInput
     }
     this.baseState = this.state;
}

    render(){
        return(
            <div className='maindiv'>

            <div className='dashboard'>
            <div className='dashboardinput'>
            <span>Image URL:</span>
            <input className='url' value={this.state.urlInput} onChange={(e) => {this.setState({urlInput: e.target.value})}}></input>
            <span>Product Name:</span>
            <input className='productname' value={this.state.productNameInput} onChange={(e) => {this.setState({productNameInput: e.target.value})}}></input>
            <span>Price:</span>
            <input className='price' value={this.state.priceInput} onChange={(e) => {this.setState({priceInput: e.target.value})}}></input> 
            </div>
            <div className='buttons'>
            <button className='redbutton' onClick={() => this.setState(this.baseState)}>Cancel</button>
            </div>
            </div>
            </div>
        )
    }
}