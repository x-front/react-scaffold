import React from 'react';
import './detail-pic.less';

export default React.createClass({
    render() {
        return (
            <section className="detail-pic">
                <h1 className="title"></h1>
                <div className="info">
                    <div className="left">
                        <span className="pic"></span>
                        <div>
                            <span>新华网</span>
                            <div>
                                <span className="posttime">4小时前</span>
                                <span className="author">新华网官方头条号</span>
                            </div>
                        </div>
                    </div>
                    <div className="right">
                        <div className="btn-favourite">关注</div>
                    </div>
                </div>
                <div className="content">
                    <p>由于 iPad 自带的视频播放器是不支持 rmvb 视频格式的，但是我们可以下载一些第三方视频播放软件，比如快播应用软件。然后在通过 iTunes 软件把 rmvb 视频导入到 iPad 上的快播软件里，就可以在快播里观看视频了。在参考资料中有关于如何在 iPad 上安装快播软件的方法。</p>
                </div>
            </section>
        );
    }
});
