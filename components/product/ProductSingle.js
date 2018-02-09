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
            <div style={{}}>
                {this.state.id} ===> *** DO PRODUCT ITEM ***
            </div>
        )
    }
}

