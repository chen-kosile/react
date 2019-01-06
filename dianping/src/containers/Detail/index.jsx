import React, { Component } from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'

import Buy from './subpage/Buy'
import Comment from './subpage/Comment'
import Info from './subpage/Info'
import Header from '../../components/Header'

export default class Detail extends Component {
  constructor(props, context) {
    super(props, context)
    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
  }
  render() {
    const id = this.props.match.params.id;
    // console.log(this.props)
    return (
      <div>
        <Header title="商户详情" type="share"/>
        <Info id={id}/>
        {/* <Buy id={id}/>
        <Comment id={id}/> */}
      </div>
    )
  }
}
