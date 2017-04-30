import React from 'react'
import ReactDOM from 'react-dom'
import { Router, Route, IndexRoute, browserHistory} from 'react-router';
import { Provider } from 'mobx-react'

import loginStore from './stores/loginStore'
import Login from './components/Login'
import CreateUser from './components/CreateUser'
import './css/main.css'

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

const stores = { loginStore }
const app = document.getElementById('app')
ReactDOM.render(
  <MuiThemeProvider>
    <Provider {...stores}>
      <Router history={browserHistory}>
        <Route path='/login' component={Login}/>
        <Route path='/newaccount' component={CreateUser}/>
      </Router>
    </Provider>
  </MuiThemeProvider>,
  app)
