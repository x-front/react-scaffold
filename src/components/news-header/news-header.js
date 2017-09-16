import React from 'react';
import './news-header.less';

export default React.createClass({
    render() {
        return (
            <section className="news-header">
                <span className="left icon"></span>
                <span className="title">今日头条</span>
                <span className="right icon"></span>
            </section>
        );
    },
});
