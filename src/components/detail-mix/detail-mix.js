import React from 'react';
import Comment from '../comment';
import './detail-mix.less';

export default React.createClass({
    render() {
        return (
            <section className="detail-mix">
                <div className="header">
                    <span className="btn-goback"></span>
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
                        <p>有关负责人介绍，事业单位通过公开招聘专业技术人员、管理人员和工勤人员的，适用本《规定》。应聘人员、招聘单位、招聘工作人员在公开招聘过程中，包括发布公告、报名、资格审查、笔试、面试、实际操作能力测试、体检、考察、公示、聘用等各环节违纪违规行为的认定与处理，适用本《规定》。</p>
                        <p>对应聘人员违纪违规行为作出处理决定前，应当告知应聘人员拟作出的处理决定及相关事实、理由和依据，并告知应聘人员依法享有陈述和申辩的权利。作出处理决定的部门对应聘人员提出的事实、理由和证据，应当进行复核。应聘人员对处理决定不服的，可以依法申请行政复议或者提起行政诉讼。参与公开招聘的工作人员因违纪违规行为受到处分不服的，可以依法申请复核或者提出申诉。</p>
                    </div>
                </div>
                <Comment></Comment>
            </section>
        );
    }
});
