import React, { Component } from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'

import './style.css'

export default class HomeAd extends Component {
  constructor(props, context){
    super(props, context)
    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
  }
  getImage(url){
    // console.log(url);
    // 把现在的图片连接传进来，返回一个不受限制的路径
    if(url !== undefined){
        return url[0].replace(/http\w{0,1}:\/\/p/g,'https://images.weserv.nl/?url=p');
    }
  }
  render() {
    return (
      <div id="home-ad">
        <h2>超值特惠</h2>
        <div className="ad-container clear-fix">
          {
            this.props.data.map((item, index) => {
              return (
                <div key={index} className="ad-item float-left">
                  <a href={item.link} target="_blank" rel='noreferrer noopener'>
                    <img src={item.img} alt={item.title} referrerPolicy="no-referrer"/>
                  </a>
                </div>
              )
            })
          }
        </div>
      </div>
    )
  }
}
