import React, { Component } from 'react'
import { observer, inject} from 'mobx-react'
import Paper from 'material-ui/Paper';
import TextField from 'material-ui/TextField';
import classes from '../css/components/login.scss';
import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';

import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

const styles = {
  body: {
    margin: "3em"
  },
  paper: {
    margin: "4em"
  },
  papercomponent: {
    margin: "5px"
  }
}

@inject('loginStore') @observer
export default class Login extends Component {
  handleLogin = () => {

    console.log('Tried to login')
    fetch('/api',{
      accept: 'application/json',
    }).then(function(res) {
      let contentType = res.headers.get("content-type");
      if(contentType && contentType.indexOf("application/json") !== -1) {
          return res.json();
      }
    }).then(function(data) {
      console.log(data);  // { "userId": 1, "id": 1, "title": "...", "body": "..." }
    });
  }

  handleCreateAccount = () => {
    console.log('Tried to create new account')
    this.props.router.push('/newaccount')
  }
  render() {
    const username = this.props.loginStore.username
    return (<div>
              <Paper zDepth={1} style={styles.body}>
                <div style={styles.paper}>
                  <TextField
                    style={styles.papercomponent}
                    hintText='Hint Text'
                    floatingLabelText='Username'
                    /><br />
                  <TextField
                    style={styles.papercomponent}
                    hintText='Password Field'
                    floatingLabelText='Password'
                    type='password'
                  /><br />
                  <RaisedButton
                    style={styles.papercomponent}
                    label='Login'
                    primary={true}
                    onTouchTap={this.handleLogin}/>
                  <div>
                    Don't you have an account?
                    <FlatButton
                      style={styles.papercomponent}
                      label='Create one!'
                      secondary={true}
                      onTouchTap={this.handleCreateAccount}/>
                  </div>
                </div>
              </Paper>
           </div>)
  }
}
