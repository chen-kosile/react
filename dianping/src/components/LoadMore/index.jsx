import React, { Component } from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'

import './style.css'

export default class LoadMore extends Component {
  constructor(props, context) {
    super(props, context);
    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
  }
  render() {
    return (
      <div className="load-more" ref="wrapper">
        {
          this.props.isLoadingMore
          ? <span>加载中...</span>
          : <span onClick={this.loadMoreHandle}>加载更多</span>
        }

      </div>
    )
  }
  loadMoreHandle = () => {
    this.props.LoadMoreFn();
  }
  componentDidMount() {
    // 使用滚动加载更多
    const loadMoreFn = this.props.loadMoreFn;
    const wrapper = this.refs.wrapper
    let timeoutId
    function callback() {
      const top = wrapper.getBoundingClientRect().top
      const windowHeight = window.screen.height
      if(top && top < windowHeight) {
        loadMoreFn()
      }
    }
    window.addEventListener('scroll', function() {
      if(this.props.isLoadingMore) {
        return
      }
      if(timeoutId) {
        clearTimeout(timeoutId)
      }
      timeoutId = setTimeout(callback, 50)
    }.bind(this), false)
  }
}
