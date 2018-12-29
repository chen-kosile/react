import React, { Component } from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'

import './style.less'

export default class HomeHead extends Component {
  constructor(props, context) {
    super(props, context)
    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
  }
  render() {
    return (
      <div className="clear-fix">
        <div className="float-left">深圳</div>
        <div className="float-right">用户中心</div>
        <div><input/></div>
      </div>
    )
  }
}
