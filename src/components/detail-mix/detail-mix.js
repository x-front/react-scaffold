import React from 'react';
import './detail-mix.less';

export default React.createClass({
    render() {
        return (
            <section className="detail-mix">
                <div className="header">
                    <span className="btn-back"></span>
                    <span className="btn-menu"></span>
                </div>
                <div className="content">
                    <h1 className="title">RMVB视频怎么导入iPad</h1>
                    <div className="info">
                            <span className="pic"></span>
                            <div className="author">
                                <span>新华网</span>
                                <div>
                                    <span className="posttime">4小时前</span>
                                    <span className="authorname">新华网官方头条号</span>
                                </div>
                            </div>
                        <div className="btn-favourite">关注</div>
                    </div>
                    <div className="text">
                        <p>由于 iPad 自带的视频播放器是不支持 rmvb 视频格式的，但是我们可以下载一些第三方视频播放软件，比如快播应用软件。然后在通过 iTunes 软件把 rmvb 视频导入到 iPad 上的快播软件里，就可以在快播里观看视频了。在参考资料中有关于如何在 iPad 上安装快播软件的方法。</p>
                        <p></p>
                    </div>
                </div>
            </section>
        );
    }
});
