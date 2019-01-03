import React, { Component }from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

import Header from '../../components/Header'
import CurrentCity from '../../components/CurrentCity'
import CityList from '../../components/CityList'

import * as userInfoActionsFromOtherFile from '../../actions/userinfo'

import { CITYNAME } from '../../config/localStoreKey'
import localStore from '../../util/localStore'

class City extends Component {
  constructor(props, context) {
    super(props, context);
    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
  }
  render() {
    return (
      <div>
        <Header title="选择城市"/>
        <CurrentCity cityName={this.props.userinfo.cityName}/>
        <CityList changeFn={this.changeCity}/>
      </div>
    )
  }
  changeCity = (newCity) => {
    let {history} = this.props;
    if(newCity == null) {
      return
    }
    const userinfo = this.props.userinfo;
    userinfo.cityName = newCity;
    this.props.userinfoActions.update(userinfo);
    // 修改cookie
    localStore.setItem(CITYNAME, newCity);
    // 使用withRouter来获得history跳转页面
    history.push('/');
  }
}

function mapStateToProps(state) {
  return {
    userinfo: state.userinfo
  }
}
function mapDispatchToProps(dispatch) {
  return {
    userinfoActions: bindActionCreators(userInfoActionsFromOtherFile, dispatch)
  }
}

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(City))
