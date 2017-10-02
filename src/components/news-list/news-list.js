import React from 'react';
import NewsSmall from '../news-small'
import NewsMultiple from '../news-multiple'
import './news-list.less';

export default React.createClass({
    render() {
        let newsitem = this.props.newscontent.map((element,index) => {
            let newstype = element.type;
            if(newstype === 'small'){
                return(
                    <NewsSmall key={index} scontent={element}></NewsSmall>
                )
            } else if(newstype === 'multiple') {
                return(
                    <NewsMultiple  key={index} mcontent={element}></NewsMultiple>
                )
            }
        });
        return (
            <section className="news-list">
                {newsitem}
            </section>
        );
    },
});
