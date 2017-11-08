import React from 'react';
import { Link } from 'react-router';
import './list-small.less';

export default React.createClass({
    render() {
        let item = this.props.scontent;
        let id = '2';
        return (
                <li className="list-small">
                    <div className="left">
                            <div className="title">
                                <Link to="/detail" query={{ id:1 }}>{item.title}</Link>
                            </div>
                            <div className="info">
                                <span className="source">{item.source}</span>
                                <div className="comment"><span>{item.commentnum}</span><span>评论</span>
                                <span className="forbid">x</span>
                            </div>
                        </div>
                    </div>
                    <div className="right">
                        <img className="pic" src={item.imgsrc}/>
                    </div>
                </li>
        );
    }
});
