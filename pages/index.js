import Link                     from 'next/link'
import React, { Component }     from 'react'

export default class extends Component {

    static getInitialProps ({ query: { id } }) {
        return { postId: id }
    }

    render () {
        return (
            <div>
                <h1>EpiKyoot</h1>
                <ul>
                    <li><Link href='/example' as='/example'><a>Example</a></Link></li>
                    <li><Link href='/login' as='/login'><a>Login</a></Link></li>
                    <li><Link href='/products'><a>Product List</a></Link></li>
                </ul>
            </div>
        )
    }
}
