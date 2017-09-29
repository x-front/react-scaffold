import React from 'react';
import NewsSmall from '../news-small'
import NewsMultiple from '../news-multiple'
import './news-list.less';

export default React.createClass({
    render() {
        let NewsSmallCon = [];
        let NewsMultipleCon = [];
        this.props.newscontent.forEach(function(element) {
            let newstype = element.type;
            if(newstype === 'small'){
                NewsSmallCon.unshift(element);
            } else if(newstype === 'multiple') {
                NewsMultipleCon.unshift(element);
            }
        });
        return (
            <section className="news-list">
                <NewsSmall scontent={this.NewsSmallCon}></NewsSmall>
                <NewsMultiple mcontent={this.NewsMultipleCon}></NewsMultiple>
            </section>
        );
    },
});
