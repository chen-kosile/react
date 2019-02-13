import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { withRouter } from 'react-router-dom';

import * as storeActionsFromFile from '../../../store/actions/store';

import BuyAndStore from '../../../components/BuyAndStore';

class Buy extends React.Component {
  constructor(props) {
    super(props);
    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    this.state = {
      isStore: false
    }
  }
  render() {
    return (
      <BuyAndStore isStore={ this.state.isStore } buyHandle={this.buyHandle} storeHandle={this.storeHandle}/>
    )
  }
  componentDidMount() {
    // 验证是否收藏
    this.checkStoreState();
  }
  // 检验当前商户是否被收藏
  checkStoreState() {
    const { storeReducer, id, userinfo } = this.props;
    console.log(storeReducer, userinfo);
    storeReducer.forEach(item => {
      if (item.id === id) {
        // 已经被收藏
        this.setState({
          isStore: true
        })
        return false;
      }
    })
  }
  // 检查登录状态
  loginCheck() {
    const { id, userinfo, history } = this.props;

    if (!userinfo.username) {
      // 跳转到登录页面的时候， 要传入目标router， 以便登录完可以自己跳转回来
      history.push('/login/' + encodeURIComponent('/detail' + id));
      return false;
    }
    return true;
  }
  // 购买
  buyHandle = () => {
    // 验证登录, 为登录则return
    const { history } = this.props;
    const loginFlag = this.loginCheck();
    if(!loginFlag) {
      return;
    }
    // 跳转到用户主页
    history.push('/User');
  }
  // 收藏
  storeHandle = () => {
    const loginFlag = this.loginCheck();
    if (!loginFlag) {
      return;
    }
    const { id, storeActions } = this.props;
    if (this.state.isStore) {
      // 已经被收藏则取消收藏
      storeActions.rm({ id: id });
    } else {
      // 未收藏， 则添加到收藏中
      storeActions.add({id: id});
    }
    // 修改状态
    this.setState({
      isStore: !this.state.isStore
    })
  }
}

function mapStateToProps(state) {
  console.log(state)
  return {
    userinfo: state.userinfo,
    storeReducer: state.storeReducer
  }
}

function mapDispatchToProps(dispatch) {
  return {
    storeActions: bindActionCreators(storeActionsFromFile, dispatch)
  }
}

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(Buy))