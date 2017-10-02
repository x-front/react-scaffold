import React from 'react';
import classNames from 'classnames';
import './news-small.less';

export default React.createClass({
    render() {
        let newsitem = this.props.scontent;

        return (
            <section className="news-small">
                <div className="left">
                    <div className="title">
                        {newsitem.title}
                    </div>
                    <div className="info">
                        <span className="source">{newsitem.source}</span>
                        <div className="comment"><span>{newsitem.commentnum}</span><span>评论</span></div>
                        <span className="forbid">x</span>
                    </div>
                </div>
                <div className="right">
                    <img className="pic" src={newsitem.imgsrc}/>
                </div>
            </section>
        );
    }
});
