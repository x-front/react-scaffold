import React from 'react';
import ListSmall from '../list-small'
import ListMultiple from '../list-multiple'
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
                    <ListMultiple key={index} mcontent={element}></ListMultiple>
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
