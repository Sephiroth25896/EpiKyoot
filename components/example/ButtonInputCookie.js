import React, { Component } from 'react'
import Cookie               from 'js-cookie';

export default class extends Component {

   constructor(props) {
       super(props);
       this.state = props;
   }

   //Call when component is starting
   componentDidMount() {

   }

   onValueChange(input) {
       this.setState({value: input.target.value});
   }

   onClickValidate() {
       Cookie.set('myCookie', this.state.value);
       this.setState({success: true})
   }

   onClickShowCookie() {
       let show = !!this.state.showCookie;
       console.log(show)
       this.setState({showCookie: !show});
   }

   renderSuccess() {
       if (this.state.success) {
           return (
               <div style={{color: 'green'}}>
                    Cookie set: '{Cookie.get('myCookie')}'<br/>
                </div>
           )
       }
   }

   renderCookie() {
       if (this.state.showCookie) {
           return (
               <div style={{color: 'green'}}>
                   Cookie get: '{Cookie.get('myCookie')}'<br/>
               </div>
           )
       }
   }

    render () {
        return (
            <div style={{}}>
              <input value={this.state.value} onChange={this.onValueChange.bind(this)}/>
                <button onClick={this.onClickValidate.bind(this)}>OK</button><br/>
                {this.renderSuccess()}<br/>
                Set des cookie est utile pour stocker le token de connexion qu'on obtient lors d'un login<br/>
                <button onClick={this.onClickShowCookie.bind(this)}>{!this.state.showCookie ? 'Afficher le cookie' : 'Masquer le cookie'}</button><br/>
                {this.renderCookie()}<br/>
            </div>
        )
    }
}

