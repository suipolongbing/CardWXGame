/*
* name;
*/
var VideoADUtil = /** @class */ (function () {
    function VideoADUtil() {
    }
    /**
     * 播放视频
     * @param success 视频播放成功回调
     * @param loadFail 视频加载失败回调
     * @param notFinish 视频未播放完毕回调
     */
    VideoADUtil.playVideo = function (success, loadFail, notFinish) {
        if (loadFail === void 0) { loadFail = null; }
        if (notFinish === void 0) { notFinish = null; }
        if (VideoADUtil.sIsPlayVideo)
            return;
        wxCore.uo.loadingVideo(function (oked) {
            if (oked) {
                VideoADUtil.sIsPlayVideo = true;
                wxCore.uo.showVideoAD(function (played) {
                    if (played) {
                        VideoADUtil.sIsPlayVideo = false;
                        if (success != undefined && success != null) {
                            success();
                            GameMain.app.mWX.reportData(1);
                        }
                    }
                    else {
                        VideoADUtil.sIsPlayVideo = false;
                        if (notFinish != null)
                            notFinish();
                    }
                });
            }
            else {
                VideoADUtil.sIsPlayVideo = false;
                if (loadFail != null) {
                    loadFail();
                }
                else {
                    wx.showToast({
                        title: "视频获取失败",
                        icon: "none",
                        image: "",
                        duration: 2000
                    });
                }
            }
        });
    };
    // 1.更新wxcore，增加了initVideoAD\haevVideo\loadingVideo\showVideoAD等函数
    // 2.记得调用initVideoAD()进行初始化；
    // 根据需求选择：调用loadingVideo(null)进行提前加载
    // 3.增加playVideo()，使用时调用该函数。注意看参数注释
    VideoADUtil.sIsPlayVideo = false; // 过滤快速重复点击看视频
    return VideoADUtil;
}());
//# sourceMappingURL=VideoADUtil.js.map