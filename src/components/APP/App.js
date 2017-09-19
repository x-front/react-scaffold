import React from 'react';
import NewsHeader from '../news-header';
import NewsNav from '../news-nav';
import './App.less';

export default React.createClass({
    render() {
        const navlist = [
            { text: '推荐' },
            { text: '视频' },
            { text: '社会' },
            { text: '图片' },
            { text: '娱乐' },
            { text: '问答' },
            { text: '科技' },
            { text: '汽车' },
            { text: '财经' },
            { text: '军事' },
            { text: '体育' },
            { text: '段子' },
            { text: '美女' },
            { text: '国际' }
        ];

        return (
            <section className="toutiao">
                <NewsHeader className="header"></NewsHeader>
                <NewsNav className="nav" navlist={navlist}></NewsNav>
                <div className="news-list"></div>
            </section>
        );
    },
});
