import React, { Component } from "react"
import { observer, inject} from "mobx-react"

@inject('loginStore') @observer
export default class Login extends Component {
  render() {
    const username = this.props.loginStore.username
    return (<div>
              <h1>Login Page: {username}</h1>
           </div>)
  }
}
