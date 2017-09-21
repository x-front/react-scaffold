import React from 'react';
import classNames from 'classnames';
import EditNav from '../edit-nav';
import './news-nav.less';


export default React.createClass({
    getInitialState() {
        return {
            currentSelected: 0,
            show: false,
            navlist : [
                { text: '推荐' },
                { text: '视频' },
                { text: '社会' },
                { text: '图片' },
                { text: '娱乐' },
                { text: '问答' },
                { text: '科技' },
                { text: '汽车' },
                { text: '财经' },
                { text: '军事' },
                { text: '体育' },
                { text: '段子' },
                { text: '美女' },
                { text: '国际' },
            ]
        };
    },

    changeCurrent(evl,idx) { //React会传两个参数进来，形参名随意
        this.setState({
            currentSelected : idx.split('$')[1] - 0
        });
    },

    showStatus() {
        this.setState({
           show : true
        });
    },

    hideStatus(newNavItem) {
        this.setState({
           show : false,
           navlist : newNavItem
        });
    },

    render() {
        //console.log(this.props.navlist);
        let navitem = this.state.navlist.map((item, index) => {
            return (
                <li key={index} onClick={this.changeCurrent} className={classNames({ 'current': index === this.state.currentSelected })}>{item.text}</li>
            );
        });

        return (
            <section className="news-nav">
                <ul>
                    {navitem}
                </ul>
                <span className="plus" onClick={this.showStatus}>+</span>
                <EditNav show={this.state.show} hide={this.hideStatus} navlist={this.state.navlist} navCurrent={this.state.currentSelected}></EditNav>
            </section>
        );
    },
});
