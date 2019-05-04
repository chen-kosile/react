import React, { Component } from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'

import {getListData} from '../../../fetch/home/home'
import ListComponent from '../../../components/ListComponent'
import Loading from '../../../components/Loading'

import './style.css'
import LoadMore from '../../../components/LoadMore';

export default class List extends Component {
  constructor(props, context) {
    super(props, context);
    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    this.state = {
      data: [],
      hasMore: false,
      isLoadingMore: false,
      page: 0
    }
  }
  componentWillMount() {
    this.loadFirstPageData();
  }
  loadFirstPageData = () => {
    const cityName = this.props.cityName;
    const result = getListData(cityName, 0)
    this.resultHandle(result);
  }
  loadMoreData = () => {
    this.setState({
      isLoadingMore: true
    })
    const cityName = this.props.cityName
    const page = this.state.page
    const result = getListData(cityName, page)
    this.resultHandle(result)
    this.setState({
      page: page + 1,
      isLoadingMore: false
    })
  }
  // 处理数据, 数据获取的一页一页的获取， 
  // 当获取下一页的数据的时候需要将前面的数据拼接起来
  resultHandle = (result) => {
    result.then(res => res.json())
      .then(json => {
        if (json.success) {
          const hasMore = json.hasMore
          const data = json.data
          this.setState({
            hasMore,
            data: this.state.data.concat(data)
          })
        }
      }).catch(err => {
        console.error('首页猜你喜欢获取数据报错', err.message)
      })
  }
  render() {
    return (
      <div>
        <h2 className="home-list-title">猜你喜欢</h2>
        {
          this.state.data.length > 0
          ? <ListComponent data={this.state.data}/>
          : <Loading/>
        }
        {
          this.state.hasMore
          ? <LoadMore 
          isLoadingMore={this.state.isLoadingMore}
          loadMoreFn={this.loadMoreData}/>
          : ''
        }
      </div>
    )
  }
}
