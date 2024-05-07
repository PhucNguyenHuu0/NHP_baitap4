import React, { Component } from 'react';
import  NhpProductsAdd from './components/NhpProductsAdd';
import  NhpProductsList from './components/NhpProductsList';


export default class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      products : [
        { title: 'Iqoo', id: 1 , status: 1},
        { title: 'Xiaomi', id: 2, status: 1},
        { title: 'Samsung', id: 3, status: 0},
        { title: 'Apple',id: 4, status: 1},
        { title: 'Redmi',id: 5, status: 0},

      ]
  }
}

  nhpHandleSubmit = (param)=>{
    console.log("App:",param);
    // thêm vào mảng dữ liệu products
    let {products} = this.state;
    products.push(param);
    this.setState({
      products:products
    })
  }
  
  render() {
    return (
      <div className='container border mt-5'>
        <h1>Nguyen Huu Phuc  - Render Data - Event Form</h1>
        <hr/>
        <NhpProductsList renderProducts={this.state.products} />
        <hr />
        <NhpProductsAdd onSubmit = {this.nhpHandleSubmit}/>
      </div>
    );
  }
}
