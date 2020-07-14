var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
/*
* name;
*/
var SceneRank = /** @class */ (function (_super) {
    __extends(SceneRank, _super);
    function SceneRank() {
        var _this = _super.call(this) || this;
        _this.wRankData = []; // 世界排行已经读取的数据
        _this.dataPage = 0; // 后端数据的页数
        _this.cWRankPage = 0; // 前端展示的页数
        _this.mType = 0; // 排行的类型
        _this.isWorld = false;
        _this.qiansige = 0;
        return _this;
        // this.all.visible = false;
        // this.mSelf.visible = false;
    }
    SceneRank.prototype.init = function () {
        if (GameMain.app.mScreenHeight > 667) {
            this.all.y = GameMain.app.mScreenHeight - 667;
        }
        // this.mList.renderHandler = new Laya.Handler(this, this.updateUser);
        this.isWorld = true;
        this.showRank();
        // let point: Laya.Point = GameMain.app.mWX.getMenuButtonTop_CenterPoint();
        // this.btnBack.y = point.x + point.y / 2;
    };
    SceneRank.prototype.onShow = function (bool) {
        if (bool) {
            // if (GameMain.app.mWX.gameClub != null) GameMain.app.mWX.gameClub.hide();
            // if (GameMain.app.gameInstance.sceneMenu != null)
            //     GameMain.app.gameInstance.sceneMenu.luntan.visible = false;
            this.visible = true;
            this.addEvent();
            this.init();
            this.zOrder = 2;
            this.qiansige = 0;
            this.showADBanner();
        }
        else {
            if (GameMain.app.mWX.gameClub != null)
                GameMain.app.mWX.gameClub.show();
            this.visible = false;
            this.removeEvent();
            this.hideADBanner();
        }
    };
    //监听事件
    SceneRank.prototype.addEvent = function () {
        this.btnBack.on(Laya.Event.MOUSE_DOWN, this, this.onBack);
        this.mLastPage.on(Laya.Event.CLICK, this, this.onChangePage, ["previous"]);
        this.mNextPage.on(Laya.Event.CLICK, this, this.onChangePage, ["next"]);
    };
    //移除监听
    SceneRank.prototype.removeEvent = function () {
        this.mLastPage.off(Laya.Event.MOUSE_DOWN, this, this.onChangePage);
        this.mNextPage.off(Laya.Event.MOUSE_DOWN, this, this.onChangePage);
        this.btnBack.off(Laya.Event.MOUSE_DOWN, this, this.onBack);
    };
    SceneRank.prototype.onBack = function () {
        wx.postMessage({
            type: "rank", show: 0
        });
        this.rankSprite.removeChildByName("rank");
        // GameMain.app.gameInstance.onMenu();
        this.close();
        this.onShow(false);
        this.hideADBanner();
    };
    // 渲染排行榜
    SceneRank.prototype.updateUser = function (cell, index) {
        var face = cell.getChildByName("face");
        var name = cell.getChildByName("name");
        // var rank: Laya.Label = cell.getChildByName("rk").getChildByName("rank") as Laya.Label;
        //var level: Laya.Label = cell.getChildByName("ll").getChildByName("level") as Laya.Label;
        var mark = cell.getChildByName("mk");
        var ss = cell.dataSource['name'].length > 6 ? cell.dataSource['name'].substring(0, 6) + '...' : cell.dataSource['name'];
        name.changeText(ss);
        face.skin = cell.dataSource['avatar'];
        // rank.visible = false;
        // rank.text = cell.dataSource['rank'];
        //level.text = cell.dataSource['level'];
        // if (cell.dataSource['mark'] >= 1000000 && cell.dataSource['mark'] < 1000000000) {
        //     mark.text = Math.floor(cell.dataSource['mark'] / 1000000) + "M" + GameMain.app.unit;
        // } else if (cell.dataSource['mark'] >= 1000000000 && cell.dataSource['mark'] < 1000000000000) {
        //     mark.text = Math.floor(cell.dataSource['mark'] / 1000000000) + "B" + GameMain.app.unit;
        // } else if (cell.dataSource['mark'] > 1000000000000) {
        //     mark.text = "无限";
        // } else if (cell.dataSource['mark'] >= 1000 && cell.dataSource['mark'] < 1000000) {
        //     mark.text = Math.floor(cell.dataSource['mark'] / 1000) + "K" + GameMain.app.unit;
        // } else {
        mark.text = '第' + cell.dataSource['mark'] + '关';
        // }
    };
    // 翻页
    SceneRank.prototype.onChangePage = function (dir) {
        //////console.log("onChangePage : " + this.mType + " , " + dir);
        // 好友
        if (this.mType == 1) {
            // if (dir === "next") {
            //     this.qiansige = this.qiansige + 1;
            // } else if (dir === "previous") {
            //     this.qiansige = this.qiansige - 1;
            //     if (this.qiansige < 0) {
            //         this.qiansige = 0;
            //     }
            // }
            // if (this.qiansige == 0) {
            //     this.no1.visible = true;
            //     this.no2.visible = true;
            //     this.no3.visible = true;
            //     this.no4.visible = true;
            // } else {
            //     this.no1.visible = false;
            //     this.no2.visible = false;
            //     this.no3.visible = false;
            //     this.no4.visible = false;
            // }
            wx.postMessage({
                type: "rank", show: 1, level: 0, info: wxCore.uo.mWeUser, dir: dir
            });
            return;
        }
        if (dir === "previous")
            this.cWRankPage--;
        else if (dir === "next")
            this.cWRankPage++;
        //////console.log("cWRankPage: " + this.cWRankPage)
        var pages = Math.floor(this.wRankData.length / 5) + 1;
        if (this.wRankData.length % 5 == 0)
            pages--;
        if (this.cWRankPage < 1) {
            this.cWRankPage = 1;
            return;
        }
        if (this.cWRankPage > pages) {
            if (pages % 10 == 0) {
                this.dataPage++;
                GameMain.app.mWX.showWorldRank(this.dataPage);
            }
            else {
                this.cWRankPage--;
            }
            return;
        }
        this.parseRankData();
    };
    // 读取当前页的数据
    SceneRank.prototype.parseRankData = function () {
        var mDate = [];
        var starIndex = (this.cWRankPage - 1) * 5;
        for (var i = starIndex; i < starIndex + 5; i++) {
            var mInfo = this.wRankData[i];
            if (mInfo == null || mInfo == undefined)
                break;
            mDate.push(mInfo);
        }
    };
    SceneRank.prototype.close = function () {
        if (GameMain.app.mWX == null)
            return;
        wx.postMessage({
            type: "rank", show: 0
        });
        wx.postMessage({
            type: "group", show: 0
        });
        this.rankSprite.removeChildByName("rank");
        GameMain.app.mWX.getMyMark(); // 获取我的最佳成绩
    };
    SceneRank.prototype.show = function () {
        if (GameMain.app.mWX == null)
            return;
        // let best: number = GameMain.app.mWX.mMarks[0];
        // let level: number = GameMain.app.mLevel.length;
        // for (let i = 0; i < GameMain.app.mLevel.length; i++) {
        //     if (Math.floor(best) < GameMain.app.mLevel[i]) {
        //         level = i + 1;
        //         break;
        //     }
        // }
        // this.myLevel.text = GameMain.app.mLevelName[level - 1].toString();
        // this.selfFace.skin = GameMain.app.mWX.mUser['avatarUrl'];
        // this.mName.text = GameMain.app.mWX.mUser['nickName'];
    };
    // 好友排行
    SceneRank.prototype.showRank = function () {
        this.isWorld = false;
        GameMain.app.mWX.getMyMark();
        this.close();
        this.show();
        this.mType = 1;
        // this.rankbk.visible = false;
        // if (GameMain.app.mWX.mMyRank > 0) {
        //     this.rankbk.visible = true;
        //     if (GameMain.app.mWX.mMyRank < 999999)
        //         this.mRank.text = GameMain.app.mWX.mMyRank.toString();
        //     else
        //         this.mRank.text = "未上榜";
        // }
        // if (GameMain.app.mWX.mMarks[0] == 0)
        //     this.mMark.changeText("暂无成绩");
        // else
        //     this.mMark.changeText(Math.floor(GameMain.app.mWX.mMarks[0]).toString() + GameMain.app.unit); /*更改 ---------- 需要根据自己的游戏更改单位 ---------- */
        wx.postMessage({
            type: "rank", show: 1, level: 0, info: wxCore.uo.mWeUser, dir: "none"
        });
        var rankSprite = new Laya.Sprite();
        this.rankSprite.addChild(rankSprite);
        rankSprite.name = "rank";
        var rankTexture = new Laya.Texture(Laya.Browser.window.sharedCanvas);
        rankTexture.bitmap.alwaysChange = true; //小游戏使用，非常费，每帧刷新
        rankSprite.graphics.drawTexture(rankTexture, 0, 0, rankTexture.width, rankTexture.height);
    };
    // 世界排行
    SceneRank.prototype.onWRank = function () {
        this.isWorld = true;
        this.close();
        this.listBK.visible = true;
        // this.mSelf.visible = false;
        if (GameMain.app.mWX != null) {
            GameMain.app.mWX.showWorldRank(0);
        }
        this.cWRankPage = 1;
    };
    SceneRank.prototype.showWorldRank = function (mData) {
        this.show();
        this.wRankData = mData;
        this.mType = 4;
        // this.rankbk.visible = false;
        // if (GameMain.app.mWX.mMyRank > 0) {
        //     this.rankbk.visible = true;
        //     if (GameMain.app.mWX.mMyRank < 999999)
        //         this.mRank.text = GameMain.app.mWX.mMyRank.toString();
        //     else
        //         this.mRank.text = "未上榜";
        // }
        // if (GameMain.app.mWX.mMarks[0] == 0)
        //     this.mMark.changeText("暂无成绩");
        // else
        //     this.mMark.changeText(Math.floor(GameMain.app.mWX.mMarks[0]).toString() + GameMain.app.unit); /*更改 ---------- 需要根据自己的游戏更改单位 ---------- */
        this.parseRankData();
    };
    SceneRank.prototype.hideADBanner = function () {
        // GameMain.app.mWX.hideADBanner();
    };
    SceneRank.prototype.showADBanner = function () {
        // if (GameMain.app.mWX != null && GameMain.app.mSDKVersion >= "2.0.4") {
        //     GameMain.app.mWX.initBannerAD();
        // }
    };
    return SceneRank;
}(ui.RankingViewUI));
//# sourceMappingURL=SceneRank.js.map