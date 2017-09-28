import React from 'react';
import classNames from 'classnames';
import './news-small.less';

export default React.createClass({
    render() {
        /*let newsitem = this.props.scontent.map((item,index) => {
            return (
                <div className="itemwrap">
                    <div className="left">
                    <div className="title">
                        {this.state.title}
                    </div>
                    <div className="info">
                        <span className="source">{source}</span>
                        <div className="comment"><span>{commentnum}}</span><span>评论</span></div>
                        <span className="forbid">x</span>
                    </div>
                    </div>
                    <div className="right">
                        <img className="pic" src={imgsrc}/>
                    </div>
                </div>
            );
        });*/
        return (
            <section className="news-small">
                'newsitem'
            </section>
        );
    }
});
