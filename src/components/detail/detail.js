import React from 'react';
import DetailMix from '../detail-mix'
import DetailPic from '../detail-pic'
import './detail.less';

export default React.createClass({
    render() {
        let newsid = this.props.location.query.id;
        let newstype = this.props.location.query.type;
        console.log(this.props.location.query);
        return(
                <DetailMix key={newsid}></DetailMix>
            ) 
    },
    componentDidMount() {
        console.log(this.props.location.query);
    }
});
