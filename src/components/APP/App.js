import React from 'react';
import NewsHeader from '../news-header';
import NewsNav from '../news-nav';
import './App.less';

export default React.createClass({
    render() {
        return (
            <section className="toutiao">
                <NewsHeader className="header"></NewsHeader>
                <NewsNav className="nav"></NewsNav>
                <div className="news-list"></div>
            </section>
        );
    },
});
