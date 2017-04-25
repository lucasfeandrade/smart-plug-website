import React, { Component } from 'react'
import { observer, inject} from 'mobx-react'
import Paper from 'material-ui/Paper';
import TextField from 'material-ui/TextField';
import classes from '../css/components/login.scss';
import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';

import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();


@inject('loginStore') @observer
export default class Login extends Component {
  handleLogin = () => {
    console.log('Tried to login')
  }

  handleCreateAccount = () => {
    console.log('Tried to create new account')
  }
  render() {
    const username = this.props.loginStore.username
    return (<div>
              <Paper zDepth={1}>
                <TextField
                  hintText='Hint Text'
                  floatingLabelText='Floating Label Text'
                  /><br />
                <TextField
                  hintText='Password Field'
                  floatingLabelText='Password'
                  type='password'
                /><br />
                <RaisedButton
                  label='Login'
                  primary={true}
                  onTouchTap={this.handleLogin}/>
                <div>
                  Don't you have an account?
                  <FlatButton
                    label='Create one!'
                    secondary={true}
                    onTouchTap={this.handleCreateAccount}/>
                </div>
              </Paper>
           </div>)
  }
}
