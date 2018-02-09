import React, { Component } from 'react'
import ProductSingle        from '../components/product/ProductSingle';

export default class extends Component {

    static getInitialProps ({ query: { id } }) {
        return { Id: id }
    }

    render () {
        return <div>
            <h1>Product #{this.props.id}</h1>
            <ProductSingle id={this.props.id}/>
        </div>
    }
}
