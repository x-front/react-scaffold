import React from 'react';
import classNames from 'classnames';
import EditNav from '../edit-nav';
//import { NavLink } from 'react-router-dom';
import Link from 'react-router'
import './news-nav.less';


export default React.createClass({
    getInitialState() {
        return {
            currentSelected: 0,
            show: false,
            navlist : [
                { 
                    text: '推荐',
                    path: 'home' 
                },
                { 
                    text: '视频',
                    path: 'video' 
                },
                { 
                    text: '视频',
                    path: 'social' 
                },
                { 
                    text: '图片',
                    path: 'image' 
                },
                { 
                    text: '娱乐',
                    path: 'entertainment' 
                },
                { 
                    text: '问答',
                    path: 'ask' 
                },
                { 
                    text: '科技',
                    path: 'science' 
                },
                { 
                    text: '汽车',
                    path: 'car' 
                },
                { 
                    text: '财经',
                    path: 'finance' 
                },
                { 
                    text: '军事',
                    path: 'military' 
                },
                { 
                    text: '体育',
                    path: 'gym' 
                },
                { 
                    text: '段子',
                    path: 'joke' 
                },
                { 
                    text: '美女',
                    path: 'girl' 
                },
                { 
                    text: '国际',
                    path: 'world' 
                },
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
                //<li key={index} onClick={this.changeCurrent} className={classNames({ 'current': index === this.state.currentSelected })}><Link to={{ pathname:'/${item.path}',search:`?id=${id}` }}>{item.text}</Link></li>
                <li key={index} onClick={this.changeCurrent} className={classNames({ 'current': index === this.state.currentSelected })}>{item.text}</li>
                //<NavLink to={`/${item.path}`} activeClassName="current">{item.text}</NavLink>
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
