import React from 'react';
import DetailMix from './detail-mix'
import './detail.less';

export default React.createClass({
    render() {
        let detail = this.props.newscontent.map((element,index) => {
            let newstype = element.type;
            if(newstype === 'small'){
                return(
                    <DetailMix key={index} scontent={element}></DetailMix>
                )
            }
        });
        return (
            {detail}
        );
    }
});
