import React from 'react';
import classNames from 'classnames';
import './edit-nav.less';

export default React.createClass({
    getInitialState(){
        return {
            myChannelList : this.props.navlist,
            SuggestChannelList : [
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
                { text: '+情感' },
            ],
        };
    },
    //隐藏菜单编辑面板
    handleHide(){
        this.props.hide();
    },
    //点击添加到我的频道
    addChannel(evl,idx){
        //获取当前点击的频道序号
        let curSelected = idx.split('$')[1]-0;
        //获取当前点击的频道
        let addedChannel = this.state.SuggestChannelList[curSelected];
        //把当前点击的频道推入我的频道 为什么不能直接往数组里推？不是数组？
        //用map将myChannelList转为数组
        let newMyChannel =  this.state.myChannelList.map((item) =>{
            return item;
        });
        //把当前点击的频道推入newMyChannel数组
        newMyChannel.push(addedChannel);

        //删除推荐频道中当前点击的频道
        let newSuggestChannel = [];
        this.state.SuggestChannelList.forEach((item) => {
            if(item.text !== addedChannel.text){
                newSuggestChannel.push(item);
            }   
        });

        //为什么通过setState设置？不能在67、75行直接用this.new直接用？
        this.setState({
            myChannelList : newMyChannel,
            SuggestChannelList : newSuggestChannel
        });
    },

    render() {
        //定义菜单列表 可以在render外定义变量吗？

        //console.log(myChanelList,SuggestChannelList);
        
        let myChanelItem = this.state.myChannelList.map((item,index) => {
            return (
                <span key={index}>
                    {item.text}
                </span>
            );
        });

        let SuggestChannelItem = this.state.SuggestChannelList.map((item,index) => {
            return (
                <span key={index} onClick={this.addChannel}>
                    {item.text}
                </span>
            );
        });

        //console.log(myChanelItem,SuggestChannelItem);

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
