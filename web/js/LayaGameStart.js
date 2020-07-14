var GameMain = /** @class */ (function () {
    function GameMain() {
        this.mShares = 0; // 分享次数
        this.mShareTimeArray = []; // 分享成功判定的时间数组
        this.mShareCurrentTime = 0; // 分享那一刻的时间戳
        // public otherGameId: string = '';                // 分享次数
        this.wClick = ''; // 分享次数
        this.mSDKVersion = ""; // 微信客户端基础库版本
        this.mAdOn = true; // 是否接通广告 true=>接通, false=>未接广告
        //  wxMinPro = null;               // 微信及后台接口类
        this.mPlayed = 0; //记录单局游戏复活次数
        this.pointPlayed = 0; //埋点复活次数
        this.rebirth_video = 0; // 单局游戏视频复活计数
        this.mUseCards = false; // 记录是否使用复活卡
        this.mMapLevel = 0; // 记录关卡(现在版本还没有关卡的概念,所以默认值都是0,以后可能会用到)
        this.wRankData = []; // 世界排名当前已请求的数据
        this.myLevel = 0; // 记录我的等级
        this.mWXVersion = "";
        this.isServer1 = false;
        this.isServer2 = false;
        this.upVoiceCount = 0;
        this.upVoiceBool = false;
        this.getValues = null;
        this.getLineValues = null;
        this.nextStepArray = new Array();
        this.isBackToFront = false;
        this.isNotDraging = false;
        this.levelnum = 0;
        this.fakerlevelnum = null; //虚假关卡
        this.cutlevel = null; //实际关卡
        this.levelconf = new Array();
        this.alllevelconf = {};
        this.isLevelGame = 0; //0-不是，1-重新开始，2-新开局
        this.mingpainum = 1;
        this.isOpenFreeModel = false; //自由模式
        // public ismingpai = false;
        this.isSpecialModel = false; //自己配关卡模式
        this.SpecialRows = new Array();
        this.SpecialDecks = new Array();
        this.isTestModel = false; //是否是测试模式
        this.testLevel = 0;
        this.isServer3 = false;
        this.isServer4 = false;
        this.isXinShow = false;
        this.gameStartTime = 0;
        this.loginView = null;
        this.isShouYeUp = false;
        this.startImg = null;
        //初始化微信小游戏
        Laya.MiniAdpter.init();
        //程序入口
        Laya.init(750, 1334, Laya.WebGL);
        //适配模式 宽度100%
        Laya.stage.scaleMode = Laya.Stage.SCALE_FIXED_WIDTH;
        Laya.stage.alignH = Laya.Stage.ALIGN_CENTER;
        Laya.stage.alignV = Laya.Stage.ALIGN_MIDDLE;
        GameMain.app = this;
        Laya.MouseManager.multiTouchEnabled = false;
        var a = 'a';
        if (a == 'a')
            a = 'a';
        // this.startImg = new Laya.Image();
        // this.startImg.size(0, -83);
        // this.startImg.skin = 'login/bg.png';
        // Laya.stage.addChild(this.startImg);
        // if (this.loginView == null) {
        // 	this.loginView = new ui.wx.loginUI();
        // 	// this.loginView.height = Laya.stage.height;
        // 	// this.loginView.bk.y = (Laya.stage.height - 1624)/2;
        // 	// this.loginView.bk.height = Laya.stage.height;
        // 	this.loginView.name = "loginCore";
        // 	this.loginView.zOrder = 20;
        // 	// this.loginView.pos(0, 0);
        // 	Laya.stage.addChild(this.loginView);
        // }
        // this.initMusic();
        // this.onLoaded();
        // GameMain.app.mWX.fhOnoff = 1
        // this.begin()
        if (Laya.Browser.onMiniGame) {
            wx.showShareMenu({ withShareTicket: true });
            wx.onShareAppMessage(function () {
                return {
                    title: "",
                    imageUrl: "",
                    query: "",
                    success: function (res) {
                    },
                };
            });
        }
        Laya.timer.callLater(this, function () {
            BaseViewManager.Inst.onSceneIndex();
        });
    }
    GameMain.prototype.initMusic = function () {
        this.soundres = [
            { url: "res/sound/cardMove.wav", type: Laya.Loader.SOUND },
            { url: "res/sound/button_click_settings.wav", type: Laya.Loader.SOUND },
            { url: "res/sound/deal.wav", type: Laya.Loader.SOUND },
            { url: "res/sound/drop_card.wav", type: Laya.Loader.SOUND },
            { url: "res/sound/four_card.wav", type: Laya.Loader.SOUND },
            //mp3格式
            { url: "res/sound/click1.mp3", type: Laya.Loader.SOUND },
            { url: "res/sound/click2.mp3", type: Laya.Loader.SOUND },
            { url: "res/sound/up1.mp3", type: Laya.Loader.SOUND },
            { url: "res/sound/up2.mp3", type: Laya.Loader.SOUND },
            { url: "res/sound/up3.mp3", type: Laya.Loader.SOUND },
            { url: "res/sound/up4.mp3", type: Laya.Loader.SOUND },
            { url: "res/sound/up5.mp3", type: Laya.Loader.SOUND },
            { url: "res/sound/up6.mp3", type: Laya.Loader.SOUND },
            { url: "res/sound/up7.mp3", type: Laya.Loader.SOUND },
            { url: "res/sound/up8.mp3", type: Laya.Loader.SOUND },
            { url: "res/sound/up9.mp3", type: Laya.Loader.SOUND },
            { url: "res/sound/up10.mp3", type: Laya.Loader.SOUND },
            { url: "res/sound/success.mp3", type: Laya.Loader.SOUND },
            { url: "res/sound/BGM.mp3", type: Laya.Loader.SOUND },
            { url: "res/sound/boom.mp3", type: Laya.Loader.SOUND },
            { url: "res/atlas/poker5.atlas", type: Laya.Loader.ATLAS },
            { url: "res/atlas/poker5.png", type: Laya.Loader.IMAGE },
            { url: "res/atlas/poker6.atlas", type: Laya.Loader.ATLAS },
            { url: "res/atlas/poker6.png", type: Laya.Loader.IMAGE },
            { url: "res/atlas/new18.atlas", type: Laya.Loader.ATLAS },
            { url: "res/atlas/new18.png", type: Laya.Loader.IMAGE },
            { url: "res/atlas/new19.atlas", type: Laya.Loader.ATLAS },
            { url: "res/atlas/new19.png", type: Laya.Loader.IMAGE },
            { url: "res/atlas/new30.atlas", type: Laya.Loader.ATLAS },
            { url: "res/atlas/new30.png", type: Laya.Loader.IMAGE },
        ];
        Laya.loader.load(this.soundres, Laya.Handler.create(this, this.onLoadComplite, null, false));
    };
    GameMain.prototype.onLoadComplite = function () {
        ////console.log('音乐加载完毕');
        // ////console.log('111');
    };
    GameMain.prototype.onLoaded = function () {
        var that = this;
        if (Laya.Browser.onMiniGame) {
            var loadTask = wx.loadSubpackage({
                name: 'stage1',
                success: function (res) {
                    // 分包加载成功后通过 success 回调
                    // new GameManager().initGame();
                    ////console.log('分包加载成功');
                    Laya.loader.load([
                        { url: "res/atlas/poker.atlas", type: Laya.Loader.ATLAS },
                        { url: "res/atlas/poker.png", type: Laya.Loader.IMAGE },
                        { url: "local/商店.png", type: Laya.Loader.IMAGE },
                        { url: "local/商店.atlas", type: Laya.Loader.ATLAS },
                        { url: "local/交互.atlas", type: Laya.Loader.ATLAS },
                        { url: "local/交互.png", type: Laya.Loader.IMAGE },
                        { url: "local/卡背.atlas", type: Laya.Loader.ATLAS },
                        { url: "local/卡背.png", type: Laya.Loader.IMAGE },
                        { url: "local/GSolibs/GSolibs.atlas", type: Laya.Loader.ATLAS },
                        { url: "local/GSolibs/GSolibs.png", type: Laya.Loader.IMAGE },
                        { url: "local/GSolibs/GSolibs1.png", type: Laya.Loader.IMAGE },
                        { url: "local/GSolibs/GSolibs2.png", type: Laya.Loader.IMAGE },
                    ], Laya.Handler.create(this, function () {
                        //console.log('local资源加载成功');
                        that.initWXCore();
                    }));
                },
                fail: function (res) {
                    ////console.log('分包加载失败');
                    // 分包加载失败通过 fail 回调
                }
            });
        }
        else {
            // new GameManager().initGame();
        }
    };
    GameMain.prototype.begin = function () {
        //加载版本信息文件
        // Laya.loader.load([{ url: "res/atlas/UI.atlas", type: Laya.Loader.ATLAS }], Laya.Handler.create(this, this.onUILoad));
        this.onUILoad();
    };
    GameMain.prototype.onUILoad = function () {
        //设置适配模式
        //Laya.stage.alignH="center";
        //Laya.stage.alignV="middle";
        //var modes:string = "fixedauto";
        //Laya.stage.scaleMode = this.modes;
        var chaingame = new pokerGame.GameManager();
        //Laya.date
        //		//Laya.LocalStorage.getItem();
        //Date
    };
    /* 初始化微信core */
    GameMain.prototype.initWXCore = function () {
        if (wxCore.uo == null) {
            new wxCore();
        }
        wxCore.uo.initWX(2);
    };
    /* 获取当前时间戳 */
    GameMain.prototype.getCurrTime = function () {
        var date = new Date();
        return date.getTime();
    };
    /* 本地保存值 */
    GameMain.prototype.setLocalInfo = function (key, value) {
        wx.setStorageSync(key, value);
    };
    /* 本地取出值 */
    GameMain.prototype.getLocalInfo = function (key) {
        return wx.getStorageSync(key);
    };
    /* 提示信息 */
    GameMain.prototype.showMessage = function (msg, icon, image) {
        if (icon === void 0) { icon = ""; }
        if (image === void 0) { image = ""; }
        wx.showToast({
            title: msg,
            icon: icon,
            image: image,
            duration: 2000
        });
    };
    GameMain.prototype.getRandom = function (min, max) {
        return Math.floor(Math.random() * (max - min + 1) + min);
    };
    GameMain.app = null;
    GameMain.isGaming = false;
    GameMain.Soundable = true; // 记录是否静音
    GameMain.shareIndex = 0; // 分享标记
    GameMain.isEnterIn = false; // 记录是否是从排行榜或者接力链接进入游戏的
    return GameMain;
}());
new GameMain();
//# sourceMappingURL=LayaGameStart.js.map