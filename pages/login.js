import React, { Component } from 'react'
import LoginForm            from '../components/login/LoginForm'

export default class extends Component {

    static getInitialProps ({ query: { id } }) {
        return { Id: id }
    }

    render () {
        return (
            <div>
                <h1>Login</h1>
                <LoginForm/>
            </div>
        )
    }
}

