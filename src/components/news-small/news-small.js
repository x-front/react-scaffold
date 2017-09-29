import React from 'react';
import classNames from 'classnames';
import './news-small.less';

export default React.createClass({
    getInitialState(){
        return {
            title:'',
            source:'',
            commmentnum:0,
            imgsrc:''
        }
    },

    render() {
        return (
            /*<section className="news-small">
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
            </section>*/
            'dd'
        );
    }
});
