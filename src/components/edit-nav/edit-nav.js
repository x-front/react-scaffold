import React from 'react';
import classNames from 'classnames';
import './edit-nav.less';

export default React.createClass({
    handleHide(){
        this.props.hide();
    },

    render() {
        return (
            <section className={classNames("editnav",{ 'show': this.props.show })}>
                <div></div>
                <div className="close" onClick={this.handleHide}>关闭</div>
            </section>
        );
    },
});
