import React from 'react';
import NewsHeader from '../news-header';
import NewsNav from '../news-nav';
import NewsSmall from '../news-small'
import NewsMultiple from '../news-multiple'
import './App.less';

export default React.createClass({
    getInitialState (){
        return {
            newslist: [
                {
                    title:'儿子身价过亿 父母靠种田生活：地荒了可惜',
                    source:'中国青年网',
                    commentnub:7,
                    posttime:'1分钟前',
                    newstype:'multiple',
                    imgsrc:'https://p1.pstatp.com/list/190x124/317300037562deb5a14e'
                },
                {
                    title:'一张卫星图像不过瘾？来看卫星拍摄的中国',
                    source:'高品图像',
                    commentnub:2567,
                    posttime:'9分钟前',
                    newstype:'multiple',
                    imgsrc:'https://p1.pstatp.com/list/190x124/317300037562deb5a14e'
                },
                {
                    title:'儿子身价过亿 父母靠种田生活：地荒了可惜',
                    source:'中国青年网',
                    commentnub:7,
                    posttime:'1分钟前',
                    newstype:'multiple',
                    imgsrc1:'https://p1.pstatp.com/list/190x124/317300037562deb5a14e',
                    imgsrc2:'https://p1.pstatp.com/list/190x124/317300037562deb5a14e',
                    imgsrc3:'https://p1.pstatp.com/list/190x124/317300037562deb5a14e'
                },
                {
                    title:'一张卫星图像不过瘾？来看卫星拍摄的中国',
                    source:'高品图像',
                    commentnub:2567,
                    posttime:'9分钟前',
                    newstype:'multiple',
                    imgsrc1:'https://p1.pstatp.com/list/190x124/317300037562deb5a14e',
                    imgsrc2:'https://p1.pstatp.com/list/190x124/317300037562deb5a14e',
                    imgsrc3:'https://p1.pstatp.com/list/190x124/317300037562deb5a14e'
                },
                {
                    title:'儿子身价过亿 父母靠种田生活：地荒了可惜',
                    source:'中国青年网',
                    commentnub:7,
                    posttime:'1分钟前',
                    newstype:'small',
                    imgsrc:'https://p1.pstatp.com/list/190x124/317300037562deb5a14e'
                },
                {
                    title:'一张卫星图像不过瘾？来看卫星拍摄的中国',
                    source:'高品图像',
                    commentnub:2567,
                    posttime:'9分钟前',
                    newstype:'small',
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
                    <NewsSmall></NewsSmall>
                    <NewsMultiple></NewsMultiple>
                </div>
            </section>
        );
    },
});
