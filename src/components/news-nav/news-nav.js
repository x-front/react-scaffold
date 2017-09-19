import React from 'react';
import classNames from 'classnames';
import EditNav from '../edit-nav';
import './news-nav.less';


export default React.createClass({
    getInitialState() {
        return {
            currentSelected: 0,
            show: false
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

    hideStatus() {
        this.setState({
           show : false
        });
    },

    render() {
        //console.log(this.props.navlist);
        let navitem = this.props.navlist.map((item, index) => {
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
                <EditNav show={this.state.show} hide={this.hideStatus} navlist={this.props.navlist}></EditNav>
            </section>
        );
    },
});
