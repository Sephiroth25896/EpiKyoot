import React, { Component } from 'react'
import ButtonInputCookie            from '../components/example/ButtonInputCookie';
import List                         from '../components/example/List';
import One                          from '../components/example/One';

export default class extends Component {

    static getInitialProps ({ query: { id } }) {
        return { Id: id }
    }

    render () {
        return (
            <div>
                <h1>Examples</h1>

                <h2>Bouton & Input & Cookie</h2>
                <ButtonInputCookie/>

                <h2>Simple</h2>
                <One/>

                <h2>Liste</h2>
                <List/>

            </div>
        )
    }
}

