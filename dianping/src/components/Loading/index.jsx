import React, { Component } from 'react'
import loading from './loading.gif'
import './loading.css'

export default class index extends Component {
  render() {
    return (
      <div className="loading-container">
        <img src={loading} alt="loaing" width="30px" height="30px"/>
        <div>加载中...</div>
      </div>
    )
  }
}
