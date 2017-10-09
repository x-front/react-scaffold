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
                    <ListSmall key={index} scontent={element}></ListSmall>
                )
            } else if(newstype === 'multiple') {
                return(
                    <ListMultiple  key={index} mcontent={element}></ListMultiple>
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
