import React, { Component } from 'react';
import PureRenderMixinx from 'react-addons-pure-render-mixin';
import LocalStore from '../util/localStore';
import {CITYNAME} from '../config/localStoreKey'
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import { withRouter } from 'react-router-dom'
import * as userInfoActionsFormOtherFile from '../store/actions/userinfo.js'

import Loading from '../components/Loading'

class App extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      initDone: false
    }
    this.shouldComponentUpdate = PureRenderMixinx.shouldComponentUpdate.bind(this);
  }
  render() {
    return (
      <div className="App">
        {
          this.state.initDone ? this.props.children : <Loading></Loading>
        }
      </div>
    );
  }
  componentDidMount() {
    // 从localStore里面获取城市
    let cityName = LocalStore.getItem(CITYNAME);
    if(cityName == null) {
      cityName = '北京'
    }
    this.props.userInfoActions.update({
      cityName: cityName
    })
    this.setState({
      initDone: true
    })
  }
}

function mapStateToProps(state) {
  return {
  }
}

function mapDispatchToProps(dispatch) {
  return {
    userInfoActions: bindActionCreators(userInfoActionsFormOtherFile, dispatch)
  }
}

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(App));
