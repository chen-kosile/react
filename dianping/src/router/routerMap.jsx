import React, { Component } from 'react'
import { BrowserRouter as Router, Route ,Switch } from 'react-router-dom'

import App from '../containers'
import Home from '../containers/Home'
import City from '../containers/City'
import User from '../containers/User'
import Search from '../containers/Search'
import Detail from '../containers/Detail'
import NotFound from '../containers/404'

export default class routerMap extends Component {
  render() {
    return (
      <Router>
        <div>
          <Switch>
            <Route path='/' exact component={Home}/>
            {/* <Route path='/search/:type(/:keyword)' component={Search}/>
            <Route path='/detail/:id' component={Detail}/>
            <Route path='/city' component={City}/>
            <Route path='/user'component={User}/> */}
            <Route path='*' component={NotFound}/>
          </Switch>
          <App/>
        </div>
      </Router>
    )
  }
}
