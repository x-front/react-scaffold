import React from 'react';
import NewsHeader from '../news-header';
import NewsNav from '../news-nav';
import './App.less';

export default React.createClass({
    render() {
        const list = [
            { text: '推荐' },
            { text: '健康' },
            { text: '热点' },
            { text: '汽车' },
            { text: '社会' },
            { text: '美食' },
            { text: '科技' },
            { text: '娱乐' },
            { text: '纪实' },
            { text: '历史' },
        ];

        return (
            <section className="toutiao">
                <NewsHeader className="header"></NewsHeader>
                <NewsNav className="nav" navlist={list}></NewsNav>
                <div className="news-list"></div>
            </section>
        );
    },
});
