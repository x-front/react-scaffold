import React from 'react';
import Link from 'react-router'
import './comment.less';

export default React.createClass({
    render() {
        return (
            <section className="comment">
                <div className="comment-wrap">
                    <input className="write-comment" placeholder="写评论..."></input>
                    <div className="ico-right">
                        <span className="iconfont icon-favouriten">
                        </span>
                        <span className="iconfont icon-qipao">
                        </span>
                        <span className="iconfont icon-sendOut"></span>
                    </div>
                </div>
            </section>
        );
    },
});
