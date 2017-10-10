import React from 'react';
import classNames from 'classnames';
import './list-multiple.less';

export default React.createClass({
    render() {
        let newsitem = this.props.mcontent;
        return (
            <section className="news-multiple">
                <div className="title">{newsitem.title}</div>
                <div className="newsimage">
                    <img className="pic" src={newsitem.imgsrc1}/>
                    <img className="pic" src={newsitem.imgsrc2}/>
                    <img className="pic" src={newsitem.imgsrc3}/>
                </div>
                <div className="info">
                        <span className="source">{newsitem.source}</span>
                        <div className="comment"><span>{newsitem.commentnum}</span>评论<span></span></div>
                        <span className="posttime">{newsitem.posttime}</span>
                        <span className="forbid">x</span>
                </div>
            </section>
        );
    }
});
