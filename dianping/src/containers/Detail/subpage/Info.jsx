import React, { Component } from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'

import DetailInfo from '../../../components/DetailInfo'
import { getInfoData } from '../../../fetch/detail/detail'


export default class Info extends Component {
  constructor(props, context) {
    super(props, context);
    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    this.state = {
      info: false,
      data: ''
    }
  }
  render() {
    return (
      <div>
        {
          this.state.info 
          ? <DetailInfo data={this.state.data}/> 
          : ''
        }
      </div>
    )
  }
  componentDidMount() {
    this.getInfo()
  }
  getInfo = () => {
    const id = this.props.id;
    const result = getInfoData(id)
    result
      .then(res => res.json())
      .then(json => {
        this.setState({
          info: true,
          data: json
        })
      }).catch(err => {
        console.error('详情页获取商户信息出错')
      })
  }
}
