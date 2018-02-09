import React, { Component } from 'react'

export default class extends Component {

   constructor(props) {
       super(props);
       this.state = props;
   }

   //Call when component is starting
   componentDidMount() {

   }

    render () {
        return (
            <div style={{padding: 10, backgroundColor: 'pink', margin: 10}}>
                {this.state.product.name} ===> *** DO PRODUCT ITEM ***
            </div>
        )
    }
}

