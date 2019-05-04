import React, { Component } from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import {Link} from 'react-router-dom'
import './style.css'

export default class ListComponent extends Component {
  constructor(props, context) {
    super(props, context);
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
      <div className="list-container">
        {
          this.props.data.map((item, index) => {
            
            return (
              <div className="list-item clear-fix" key={index}>
                <Link to={`/detail/${item.id}`}>
                  <div className="item-img-container float-left">
                    <img src={item.img} alt={item.title} referrerPolicy="no-referrer"/>
                  </div>
                  <div className="item-content">
                    <div className="item-title-container clear-fix">
                        <h3 className="float-left">{item.title}</h3>
                        <span className="float-right">{item.distance}</span>
                    </div>
                    <p className="item-sub-title">
                        {item.subTitle}
                    </p>
                    <div className="item-price-container clear-fix">
                        <span className="price float-left">￥{item.price}</span>
                        <span className="mumber float-right">已售{item.number}</span>
                    </div>
                  </div>
                </Link>
              </div>
            )
          })
        }
      </div>
    )
  }
}
