import React, { Component } from 'react';
import PureRenderMixinx from 'react-addons-pure-render-mixin';
import LocalStore from '../util/localStore';
import {CITYNAME} from '../config/localStoreKey'
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import * as userInfoActionsFormOtherFile from '../actions/userinfo.js'

class App extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      ininDone: false
    }
    this.shouldComponentUpdate = PureRenderMixinx.shouldComponentUpdate.bind(this);
  }
  render() {
    return (
      <div className="App">
        {
          this.state.initDone ? 
          this.props.children : 
          <div>...加载中</div>
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
      ininDone: true
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

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
