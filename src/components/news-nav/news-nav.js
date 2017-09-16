import React from 'react';
import classNames from 'classnames';
import './news-nav.less';


export default React.createClass({
    render() {
        let list = [
            { text: '推荐' },
            { text: '健康' },
            { text: '热点' },
            { text: '汽车' },
            { text: '社会' },
            { text: '美食' },
            { text: '科技' },
            { text: '娱乐' },
        ];

        let listElement = list.map((item, index) => {
            return (
                <li key={index} className={classNames({ 'current': index === 0 })}>{item.text}</li>
            );
        });

        return (
            <section className="news-nav">
                <ul>
                    {listElement}
                </ul>
                <span className="plus"></span>
            </section>
        );
    },
});
