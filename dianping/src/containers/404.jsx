import React, { Component } from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
export default class NotFound extends Component {
  constructor(props, context) {
    super(props, context);
    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
  }
  render() {
    return (
      <div>
        <h1>404 not found page</h1>
      </div>
    )
  }
}
