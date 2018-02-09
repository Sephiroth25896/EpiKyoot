import React, { Component } from 'react'
import ProductListItem from "./ProductListItem";

export default class extends Component {

   constructor(props) {
       super(props);
       this.state = props;
   }

   //Call when component is starting
   componentDidMount() {

   }

   renderList() {
       let products = [{name: 'a'}, {name: 'b'}, {name: 'c'}]; //example, replace by products get in request
       if (products) {
           return products.map(product => {
               return (
                   <ProductListItem product={product}/>
               )
           })
       } else {
           return (
               <div>
                   No product
               </div>
           )
       }
   }

    render () {
        return (
            <div>
                {this.renderList()}
            </div>
        )
    }
}

