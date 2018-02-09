import React, { Component }     from 'react'
import ProductList              from '../components/product/ProductList'

export default class extends Component {

    static getInitialProps ({ query: { id } }) {
        return { Id: id }
    }

    render () {
        return (
            <div>
                <h1>Products list</h1>
                <ProductList />
            </div>
        )
    }
}

