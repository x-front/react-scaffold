import React from 'react';
import NewsHeader from '../news-header';
import NewsNav from '../news-nav';
import NewsSmall from '../news-small'
import NewsMultiple from '../news-multiple'
import NewsList from '../news-list'
import './App.less';

export default React.createClass({
    getInitialState (){
        return {
            news: [
                {
                    title:'1过亿 父母靠种田生活：地荒了可惜',
                    source:'中国青年网',
                    commentnum:7,
                    posttime:'1分钟前',
                    type:'small',
                    imgsrc:'https://p1.pstatp.com/list/190x124/317300037562deb5a14e',
                    content:'中国青年网中国青年网中国青年网中国青年网中国青年网中国青年网中国青年网中国青年网中国青年网中国青年网中国青年网中国青年网中国青年网中国青年网中国青年网中国青年网中国青年网中国青年网中国青年网中国青年网',
                },
                {
                    title:'2一张卫星图像不过瘾？来看卫星拍摄的中国',
                    source:'高品图像',
                    commentnum:2567,
                    posttime:'9分钟前',
                    type:'small',
                    imgsrc:'https://p1.pstatp.com/list/190x124/317300037562deb5a14e'
                },
                {
                    title:'3儿子身价过亿 父母靠种田生活：地荒了可惜',
                    source:'中国青年网',
                    commentnum:7,
                    posttime:'1分钟前',
                    type:'multiple',
                    imgsrc1:'https://p1.pstatp.com/list/190x124/317300037562deb5a14e',
                    imgsrc2:'https://p1.pstatp.com/list/190x124/317300037562deb5a14e',
                    imgsrc3:'https://p1.pstatp.com/list/190x124/317300037562deb5a14e'
                },
                {
                    id:4,
                    title:'4一张卫星图像不过瘾？来看卫星拍摄的中国',
                    source:'高品图像',
                    commentnum:2567,
                    posttime:'9分钟前',
                    type:'multiple',
                    imgsrc1:'https://p1.pstatp.com/list/190x124/317300037562deb5a14e',
                    imgsrc2:'https://p1.pstatp.com/list/190x124/317300037562deb5a14e',
                    imgsrc3:'https://p1.pstatp.com/list/190x124/317300037562deb5a14e'
                },
                {
                    title:'5儿子身价过亿 父母靠种田生活：地荒了可惜',
                    source:'中国青年网',
                    commentnum:7,
                    posttime:'1分钟前',
                    type:'small',
                    imgsrc:'https://p1.pstatp.com/list/190x124/317300037562deb5a14e'
                },

            ]
        };
    },

    render() {
        return (
            <section className="toutiao">
                <NewsHeader className="header"></NewsHeader>
                <NewsNav className="nav"></NewsNav>
                <div className="news-list">
                    <NewsList newscontent={this.state.news}></NewsList>
                </div>
            </section>
        );
    },
});
