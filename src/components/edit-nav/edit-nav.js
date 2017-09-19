import React from 'react';
import classNames from 'classnames';
import './edit-nav.less';

export default React.createClass({
    handleHide(){
        this.props.hide();
    },

    render() {
        let myChanelList = this.props.navlist;
        const SuggestChannelList = [
            { text: '+热点' },
            { text: '+东莞' },
            { text: '+小视频' },
            { text: '+时尚' },
            { text: '+历史' },
            { text: '+育儿' },
            { text: '+直播' },
            { text: '+搞笑' },
            { text: '+数码' },
            { text: '+美食' },
            { text: '+养生' },
            { text: '+电影' },
            { text: '+手机' },
            { text: '+旅游' },
            { text: '+宠物' },
            { text: '+情感' }
        ];
        //console.log(myChanelList,SuggestChannelList);
        
        let myChanelItem = myChanelList.map((item,index) => {
            return (
                <span key={index}>
                    {item.text}
                </span>
            );
        });

        let SuggestChannelItem = SuggestChannelList.map((item,index) => {
            return (
                <span key={index}>
                    {item.text}
                </span>
            );
        });

        console.log(myChanelItem,SuggestChannelItem);

        return (
            <section className={classNames("editnav",{ 'show': this.props.show })}>
                <div className="close" onClick={this.handleHide}>X</div>
                <div className="myChanel">
                    <div className="myChanelHeader">
                        <span className="title">我的频道</span>
                        <span className="click">点击进入频道</span>
                        <span className="edit">编辑</span>
                    </div>
                    <div className="mychanelList">
                        {myChanelItem}
                    </div>
                </div>
                <div className="chanelRec">
                    <div className="chanelRecHeader">
                        <span className="title">频道推荐</span>
                        <span className="click">点击添加频道</span>
                    </div>
                    <div className="chanelRecList">
                        {SuggestChannelItem}
                    </div>
                </div>
            </section>
        );
    },
});
