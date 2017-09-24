import React from 'react';
import classNames from 'classnames';
import './news-small.less';

export default React.createClass({
    render() {
        return (
            <section className="news-small">
                <div className="left">
                    <div className="title">
                        习近平助推中国智慧渐成国际共识
                    </div>
                    <div className="info">
                        <span className="source">央广网</span>
                        <div className="comment"><span>0</span><span>评论</span></div>
                        <span className="forbid">x</span>
                    </div>
                </div>
                <div className="right">
                    <div className="pic"></div>
                </div>
            </section>
        );
    }
});
