import React from 'react';
import detail from '../detail'
import './news-small.less';

export default React.createClass({
    render() {
        let item = this.props.scontent;
        let itemid = this.props.key
        return (
            <li className="list-small">
                <link to="detail-mix" param={{id:itemid}}></link>
                <div className="left">
                    <div className="title">
                        {item.title}
                    </div>
                    <div className="info">
                        <span className="source">{item.source}</span>
                        <div className="comment"><span>{item.commentnum}</span><span>评论</span></div>
                        <span className="forbid">x</span>
                    </div>
                </div>
                <div className="right">
                    <img className="pic" src={item.imgsrc}/>
                </div>
            </li>
        );
    }
});
