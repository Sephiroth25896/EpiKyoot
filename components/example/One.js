import React, { Component } from 'react'
import API                  from '../../lib/MyAPI';

export default class extends Component {

    constructor(props) {
        super(props);
        this.state = props;
    }

    //Call when component is starting
    componentDidMount() {
        this.requestGetUser();
    }

    requestGetUser() {
        this.setState({loading: true, error: false});
        API.request('GET', '/v1/users/5a5f31c0ceef3706481567a0') // ID en dur
            .then(user => {
                this.setState({loading: false, error: false, user: user});
            }).catch(error => {
            this.setState({loading: false, error: true});
        })
    }

    renderUser() {
        if (this.state.loading) {
            return (<div style={{color: 'blue'}}>Chargement ...</div>);
        } else if (this.state.error) {
            return (<div style={{color: 'red'}}>Une erreur est survenue</div>);
        } else if (this.state.user) {
            let user = this.state.user;
            let avatarUrl = 'https://res.cloudinary.com/closebrace/image/upload/w_400/v1491315007/usericon_id76rb.png';
            if (user.avatarUrl)avatarUrl = API.getPictureURL(user.avatarUrl.key, 50, 50);
            return (
                <div key={user._id} style={{marginLeft: 10, color: 'green'}}>
                    <img src={avatarUrl} style={{width: 50, height: 50}}/><br/>
                    <label>{user._id}</label><br/>
                    <label>{user.username}</label><br/><br/>
                </div>
            )
        }
    }

    render () {
        return (
            <div style={{}}>
                <h4>Afficher un utilisateur</h4>
                {this.renderUser()}
            </div>
        )
    }
}

