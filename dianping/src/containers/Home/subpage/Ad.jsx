import React, { Component } from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import HomeAd from '../../../components/HomeAd/index'
import { getAdData } from '../../../fetch/home/home'
import Loading from '../../../components/Loading'

export default class Ad extends Component {
  constructor(props, context) {
    super(props, context);
    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    this.state = {
      data: []
    }
  }
  componentDidMount() {
    // 获取广告数据
    const result = getAdData();
    result.then(res => res.json())
      .then(json => {
        // console.log(json)
        if (json.success) {
          const data = json.data
          if(data.length) {
            this.setState({
              data: data
            })
          }
        }
      }).catch(err => {
        console.error('首页广告数据出错', err.message);
      })
  }
  render() {
    return (
      <div>
        {
          this.state.data.length > 0
          ? <HomeAd data={this.state.data}></HomeAd>
          : <Loading/>
        }
      </div>
    )
  }
}
