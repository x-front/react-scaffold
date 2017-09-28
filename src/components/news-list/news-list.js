import React from 'react';
import NewsSmall from '../news-small'
import NewsMultiple from '../news-multiple'
import './news-list.less';

export default React.createClass({
    render() {
        let newsitem = this.props.newscontent.map((index,item) => {
            let NewsSmallCon = [],
            if(item.type === "small") {
                NewsSmallCon.unshift(item);
            } else if(item.type === "multiple"){
                NewsMultipleCon.unshift(item);
            }
        });

        console.log(NewsSmallCon)

        return (
            <section className="news-list">
                    <NewsSmall scontent={NewsSmallCon}></NewsSmall>
                    <NewsMultiple></NewsMultiple>
            </section>
        );
    },
});
