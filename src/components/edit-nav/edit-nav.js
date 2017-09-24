import React from 'react';
import classNames from 'classnames';
import './edit-nav.less';

export default React.createClass({
    getInitialState(){
        return {
            myChannelList : this.props.navlist,
            SuggestChannelList : [
                { text: '热点' },
                { text: '东莞' },
                { text: '小视频' },
                { text: '时尚' },
                { text: '历史' },
                { text: '育儿' },
                { text: '直播' },
                { text: '搞笑' },
                { text: '数码' },
                { text: '美食' },
                { text: '养生' },
                { text: '电影' },
                { text: '手机' },
                { text: '旅游' },
                { text: '宠物' },
                { text: '情感' },
            ],
            btnEditText : '编辑',
            iconClose: false,
        };
    },
    
    //隐藏菜单编辑面板
    handleHide(){
        this.props.hide(this.state.myChannelList);
    },

    //点击我的频道编辑按钮
    btnEdit(){
        if(this.state.btnEditText === '编辑'){
            this.setState({
                btnEditText: '完成',
                iconClose: true
            });
        } else {
            this.setState({
                btnEditText: '编辑',
                iconClose: false,
            });
        }
    },

    //编辑我的频道
    editMyChannel(evl,idx){
        
        if(this.state.btnEditText === '完成'){
            //获取当前点击的频道序号
            let curSelected = idx.split('$')[1]-0;
            //获取我的频道中当前点击的频道
            let deletedChannel = this.state.myChannelList[curSelected];
            //把当前点击的频道推入推荐频道 为什么不能直接往数组里推？不是数组？—— this.state不能直接操作
            let newSuggestChannel =  this.state.SuggestChannelList.map((item) =>{
                return item;
            });
            //把当前点击的频道推入新的推荐频道数组
            newSuggestChannel.unshift(deletedChannel);

            //删除我的频道中当前点击的频道
            let newMyChannel = [];
            this.state.myChannelList.forEach((item) => {
                if(item.text !== deletedChannel.text){
                    newMyChannel.push(item);
                }   
            });

            //React必须通过state去刷新
            this.setState({
                myChannelList : newMyChannel,
                SuggestChannelList : newSuggestChannel
            });
        }
    },
    
    //推荐频道点击添加到我的频道
    addChannel(evl,idx){
        //获取当前点击的频道序号
        let curSelected = idx.split('$')[1]-0;
        //获取当前点击的频道
        let addedChannel = this.state.SuggestChannelList[curSelected];
        //把当前点击的频道推入我的频道 为什么不能直接往数组里推？不是数组？—— this.state不能直接操作
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

        //React必须通过state去刷新
        this.setState({
            myChannelList : newMyChannel,
            SuggestChannelList : newSuggestChannel
        });
    },

    

    render() {
        let myChanelItem = this.state.myChannelList.map((item,index) => {
            return (
                <span key={index} className={classNames("chanelWrap",{'curSelected':index === this.props.navCurrent})} onClick={this.editMyChannel}>
                    {item.text}
                    <label className={classNames("delChannel",{'iconClose':this.state.iconClose})}>X</label>
                </span>
            );
        });

        let SuggestChannelItem = this.state.SuggestChannelList.map((item,index) => {
            return (
                <span key={index} onClick={this.addChannel} className="chanelWrap">
                    {'+ '+item.text}
                </span>
            );
        });


        return (
            <section className={classNames("editnav",{ 'show': this.props.show })}>
                <div className="closeEditNav" onClick={this.handleHide}>X</div>
                <div className="myChanel">
                    <ul className="myChanelHeader">
                        <span className="title">我的频道</span>
                        <span className="click">点击进入频道</span>
                        <span className="edit" onClick={this.btnEdit}>{this.state.btnEditText}</span>
                    </ul>
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
