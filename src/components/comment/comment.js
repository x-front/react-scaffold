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
                        <span className="ico-readcomment">查看</span>
                        <span className="ico-favourite">收藏</span>
                        <span className="ico-send">发送</span>
                    </div>
                </div>
            </section>
        );
    },
});
