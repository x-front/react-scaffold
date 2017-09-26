import React from 'react';
import classNames from 'classnames';
import './news-multiple.less';

export default React.createClass({
    render() {
        return (
            <section className="news-multiple">
                <div className="title">老板娘，我要一个大杯奶茶</div>
                <div className="newsimage">
                    <img className="pic" src="https://p1.pstatp.com/list/190x124/317300037562deb5a14e"/>
                    <img className="pic" src="https://p1.pstatp.com/list/190x124/317300037562deb5a14e"/>
                    <img className="pic" src="https://p1.pstatp.com/list/190x124/317300037562deb5a14e"/>
                </div>
                <div className="info">
                        <span className="source">央广网</span>
                        <div className="comment"><span>0</span><span>评论</span></div>
                        <span className="posttime">19分钟前</span>
                        <span className="forbid">x</span>
                </div>
            </section>
        );
    }
});
