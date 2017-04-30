import React, { Component } from 'react'
import { observer, inject} from 'mobx-react'
import Paper from 'material-ui/Paper';
import TextField from 'material-ui/TextField';
import classes from '../css/components/login.scss';
import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';

import injectTapEventPlugin from 'react-tap-event-plugin';

const styles = {
  body: {
   margin: "1em"
  },
  paper: {
    margin: "5em"
  },
  papercomponent: {
    margin: "5px"
  }
}

@inject('loginStore') @observer
export default class CreateUser extends Component {
  handleCreateUser = () => {
    console.log('Tried to login')
    fetch('/api',{
      accept: 'application/json',
    }).then(function(res) {
      console.log(JSON.stringify(res))
      console.log(res)
      var contentType = res.headers.get("content-type");
      if(contentType && contentType.indexOf("application/json") !== -1) {
        console.log(res.json())
      }
  })
  }

  handleBackToLogin = () => {
    console.log('Back to login')
    this.props.router.push('/login')

  }
  render() {
    const username = this.props.loginStore.username
    return (<div>
              <Paper zDepth={1} style={styles.body}>
                <div style={styles.paper}>
                  <div>Create your new account</div>
                  <TextField
                    style={styles.papercomponent}
                    hintText='Hint Text'
                    floatingLabelText='Your Username'
                    /><br />
                    <TextField
                      style={styles.papercomponent}
                      hintText='Hint Text'
                      floatingLabelText='Your Email'
                      /><br />
                  <TextField
                    style={styles.papercomponent}
                    hintText='Password Field'
                    floatingLabelText='Your Password'
                    type='password'
                  /><br />
                <div>
                  <RaisedButton
                    style={styles.papercomponent}
                    label='Create Account'
                    primary={true}
                    onTouchTap={this.handleCreateUser}/>
                    <RaisedButton
                      style={styles.papercomponent}
                      label='Back to login'
                      secondary={true}
                      onTouchTap={this.handleBackToLogin}/>
                  </div>
                </div>
              </Paper>
           </div>)
  }
}
