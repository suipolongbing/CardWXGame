/* 接口类 */
var HttpRequest = Laya.HttpRequest;
var Events = Laya.Event;
var wxMinPro = /** @class */ (function () {
    /* 构造函数 */
    function wxMinPro() {
        // 服务接口配置
        this.mCmd = {
            "Launch": "1.0.1/jl/Lauch?",
            "querycards": "1.0.1/jl/querycards?",
            "rank": "1.0.1/jl/rank?",
            "mymark": "1.0.1/jl/mymark?",
            "AddMyCard": "1.0.1/jl/AddMyCard?",
            "AddCard": "1.0.1/jl/addcard?",
            "report": "1.0.1/jl/report?",
            "ADHit": "1.0.1/jl/data?",
            "BtnTotle": "1.0.1/jl/BtnTotle?",
            "challenge": "1.0.1/jl/challenge?",
            "ad": "1.0.1/jl/ad?",
            "SetUserValue": "1.0.1/jl/SetUserValue?",
            "GetStages": "1.0.1/jl/getstage?",
            "BuyItem": "1.0.1/jl/BuyItem?",
            "UseItem": "1.0.1/jl/UseItem?",
            "ChangeTCt": "1.0.1/jl/ChangeTCt?",
            "Coins": "1.0.1/jl/Coins?",
        };
        this.statUrl = ''; //统计url
        this.isFirstLogin = true; // 是否是第一次登录服务器 wx.onshow时也会登录服务器，只是更新下数据。
        this.mUID = 0; // 玩家的id
        this.mOpenid = "";
        this.mVersion = 1020; // 每次审核之前这个值+1
        this.mCards = 0; // 复活卡数量
        this.mMyRank = 0;
        this.fhOnoff = 0; // 复活开关 0-关 1-开
        this.mHttpCall = null;
        this.mrelayID = 0; // 当前接力的id
        this.mShareID = 0; // 当前分享的id
        this.mChallenge = null; // 保存好友接力的数据
        this.mMarks = [0, 0, 0, 0]; // mMarks[0]最佳记录
        this.videoAd = null; // 视频广告
        this.adBanner = null; // banner广告
        this.gameClub = null; // 微信游戏圈按钮
        this.shareUrl = []; // 分享点位信息
        this.wxADUrl = []; // 保存广告信息
        this.OnOff = []; // 各种开关信息数组
        this.games_box = [];
        this.gameObj = null; // 首页、结果页展示的更多小游戏
        // 外部流量导入 增加参数
        this.mReturnAppid = "";
        this.mReturnUrl = "";
        // 默认广告相关
        this.mCustomBannerAdList = [];
        this.mIsInvokeRemoveCustomBannerAd = false; // 是否调用隐藏banner
        this.mCustomBanner = null; // 默认banner
        // 暂时无用的变量
        this.mADKeep = 0;
        this.mUser = {};
        this.mQR = 0;
        this.mQRs = {};
        this.passTheLevelNum = 10;
        this.isPassTheLevelType = 1;
        this.isAbTest = 0;
        this.first_entry_time = null;
        this.last_entry_time = null;
        this.mWxMenuButtonRect = null;
        //体力恢复
        this.xs = 0;
        this.a = 0;
        this.b = 0;
        this.hour = '00'; //时  
        this.minus = '00'; //分  
        this.seconds = '00'; //秒
        var a = 'a';
        if (a == 'a')
            a = 'a';
    }
    /* 获取adid */
    wxMinPro.prototype.getADID = function () {
        var adid = 0;
        if (typeof (wxCore.uo.launch["query"]) != "undefined" && typeof (wxCore.uo.launch["query"]["adid"]) != "undefined") {
            adid = Number(wxCore.uo.launch["query"]["adid"]);
        }
        if (typeof (wxCore.uo.launch["query"]) != "undefined" && typeof (wxCore.uo.launch["query"]["channel"]) != "undefined") {
            adid = Number(wxCore.uo.launch["query"]["channel"]);
        }
        return adid;
    };
    /**
     * GetStages 获取关卡信息
     * passNum-关卡数
     */
    wxMinPro.prototype.GetStages = function (passNum, cb) {
        if (passNum === void 0) { passNum = 0; }
        if (cb === void 0) { cb = null; }
        var _this = this;
        function onResult(e) {
            var ret = null;
            if (typeof (e) == "string")
                ret = util.getJSON(e);
            else
                ret = e;
            if (ret['code'] == 0) {
                if (!!ret["stages"].length) {
                    GameMain.app.levelnum = ret["stages"].length;
                    GameMain.app.alllevelconf = {};
                    for (var index = 0; index < GameMain.app.levelnum; index++) {
                        GameMain.app.levelconf = [];
                        GameMain.app.alllevelconf[index] = { id: index, level: [] };
                        var screen = ret["stages"][index]["screen"];
                        var snList;
                        if (screen.indexOf('col') > 0 && screen.indexOf('row') > 0) {
                            snList = screen.replace(/\n/g, '').replace(/\r/g, '').replace(/\s/g, '').split('{');
                            for (var _i = 0, snList_1 = snList; _i < snList_1.length; _i++) {
                                var level = snList_1[_i];
                                if (level.length > 5) {
                                    var xxx = '{' + level.replace(/\//g, ',').replace('},', '}');
                                    if (xxx[xxx.length - 1] === ']') {
                                        xxx = xxx.slice(0, xxx.length - 1);
                                    }
                                    GameMain.app.levelconf.push(JSON.parse(xxx));
                                }
                            }
                        }
                        else {
                            snList = screen.split('{');
                            for (var _a = 0, snList_2 = snList; _a < snList_2.length; _a++) {
                                var level = snList_2[_a];
                                if (level.length > 5) {
                                    GameMain.app.levelconf.push(JSON.parse('{' + level.replace(/\//g, ',').replace('},', '}').replace(']', '')));
                                }
                            }
                        }
                        GameMain.app.alllevelconf[index].level = GameMain.app.levelconf;
                    }
                    // ////console.log('leveldetail:', GameMain.app.alllevelconf);
                }
                else {
                    GameMain.app.levelnum = 0;
                }
            }
        }
        ////console.log("uo/GetStages");
        var params = [];
        // params['page'] = Math.ceil(passNum / 10);
        params['uid'] = this.mUID;
        this.server(params, "GetStages", new Laya.Handler(this, onResult));
    };
    /* 登录服务器 */
    wxMinPro.prototype.onLaunch = function (agentid, secen) {
        if (agentid === void 0) { agentid = 0; }
        if (secen === void 0) { secen = 0; }
        ////console.log("登录服务器...");
        if (this.isFirstLogin) {
            // this.showLoading();
        }
        var params = [];
        params["uid"] = wxCore.uo.getUserID();
        params["ver"] = this.mVersion;
        params["agentid"] = agentid;
        params["secen"] = secen;
        params["platform"] = Laya.Browser.onIOS ? 2 : 1;
        params["adid"] = this.getADID();
        // surl-记录分享链接的点击量
        if (typeof (wxCore.uo.mLaunch["query"]["surl"]) != "undefined") {
            params["surl"] = Number(wxCore.uo.mLaunch["query"]["surl"]);
        }
        if (typeof (wxCore.uo.mLaunch['query']['uid']) != "undefined") {
            params['seuid'] = wxCore.uo.mLaunch['query']['uid'];
        }
        this.server(params, "Launch", new Laya.Handler(this, this.onLaunchSuccess));
        //console.log('myUid:', wxCore.uo.getUserID());
    };
    /* 统计首页下方和侧边栏游戏的点击量 */
    wxMinPro.prototype.reportGameHit = function (pos, gameid) {
        var params = [];
        params["uid"] = GameMain.app.mWX.mUID;
        params["pos"] = pos;
        params["gameid"] = gameid;
        GameMain.app.mWX.server(params, "BtnTotle", null);
    };
    wxMinPro.prototype.setUserValue = function (key, value) {
        var _this = this;
        function onResult(ret) {
            if (ret['code'] == 0) {
                ////console.log("道具设置成功");
            }
        }
        var params = [];
        params['uid'] = this.mUID;
        params['dt_key'] = key;
        params['dt_value'] = value;
        GameMain.app.mWX.server(params, "SetUserValue", new Laya.Handler(this, onResult));
    };
    wxMinPro.prototype.PassLevelProp = function (list) {
        if (this.fhOnoff != 0) {
            for (var i = 0; i < list.length; i++) {
                if (list[i]["id"] == 3001) {
                    this.passTheLevelNum = Number(JSON.parse(list[i]["other"])['num']);
                    this.isPassTheLevelType = Number(JSON.parse(list[i]["gamebox"]));
                }
            }
        }
    };
    wxMinPro.prototype.GetShopArray = function (list) {
        for (var i = 0; i < list.length; i++) {
            if (Number(list[i]["id"]) >= 4001 && Number(list[i]["id"]) < 6000) {
                ShopSetting.shopListArray.push(list[i]);
            }
        }
    };
    wxMinPro.prototype.GetPower = function (list) {
        for (var i = 0; i < list.length; i++) {
            if (list[i]["key"] == 'of_physical') {
                ShopSetting.nowPowerMax = JSON.parse(list[i]["param"])['max'];
                ShopSetting.nowPowerConsume = JSON.parse(list[i]["param"])['use'];
                ShopSetting.powerStyle = JSON.parse(list[i]["param"])['way'];
                ShopSetting.powerRecoverTime = Number(JSON.parse(list[i]["param"])['revocer']);
            }
        }
    };
    wxMinPro.prototype.IsABTest = function (list) {
        for (var i = 0; i < list.length; i++) {
            if (list[i]["key"] == 'of_ab_test') {
                this.isAbTest = list[i]["value"];
                ////console.log('isABtEST', this.isAbTest);
            }
        }
    };
    /* 登录服务器成功 */
    wxMinPro.prototype.onLaunchSuccess = function (ret) {
        var _this_1 = this;
        ////console.log("登录服务器成功：", ret);
        // 组装数据
        if (Number(ret["code"]) == 0) {
            Laya.Browser.window.sharedCanvas.width = Laya.stage.width;
            Laya.Browser.window.sharedCanvas.height = Laya.stage.height;
            this.fhOnoff = Number(ret["fh_onoff"]); // 复活开关
            // 1
            //  
            GameMain.app.mWX.OnOff = ret["on_off"]; // 各种开关信息
            if (ret['nowday'] == ret['regday']) {
                GameMain.app.mWX.PointFirst = '新用户';
            }
            else {
                GameMain.app.mWX.PointFirst = '老用户';
            }
            // GameMain.app.mWX.moveTime = Number(JSON.parse(GameMain.app.mWX.getParam('of_move_time'))["time"])
            // GameMain.app.mWX.changeIconTime = JSON.parse(GameMain.app.mWX.getParam('of_icon_time'))["time"]      //猜你喜欢数量
            // GameMain.app.mWX.gameListNum = JSON.parse(GameMain.app.mWX.getParam('of_guess_like'))["number"]      //猜你喜欢数量
            // GameMain.app.mWX.showBigBanner = JSON.parse(GameMain.app.mWX.getParam('of_banner_show'))["is_big"]      //猜你喜欢数量            
            // GameMain.app.mWX.ofStartList = GameMain.app.mWX.getValue('of_guess_like1')             //首页猜你喜欢开关
            // // GameMain.app.mWX.ofRewardList = GameMain.app.mWX.getValue('of_guess_like2')             //宝箱猜你喜欢开关
            // GameMain.app.mWX.ofScoreList = GameMain.app.mWX.getValue('of_guess_like2')               //分数猜你喜欢开关
            // GameMain.app.mWX.ofResultList = GameMain.app.mWX.getValue('of_guess_like3')             //结算页猜你喜欢开关   
            // GameMain.app.mWX.iconBtn = GameMain.app.mWX.getValue('of_icon_open')             //首页导流开关    
            // GameMain.app.mWX.jumpBtn = GameMain.app.mWX.getValue('of_jump_btn')             //首页平台按钮开关    
            // GameMain.app.mWX.statUrl = ret["dt_values"][0]['param'];
            // GameMain.app.mWX.games_box = ret["games_box"];
            this.shareUrl = ret["shareurl"]; // 分享点位
            this.wxADUrl = ret["wxadurl"]; // 广告信息
            GameMain.app.mWX.checkShareTime();
            // 成绩数组
            this.mMarks[0] = Number(ret['marks']['mark']);
            this.mMarks[1] = Number(ret['marks']['mark1']);
            this.mMarks[2] = Number(ret['marks']['mark2']);
            this.mMarks[3] = Number(ret['marks']['mark3']);
            // 保存默认广告
            this.mCustomBannerAdList = ret["games_ad"];
            wxCore.uo.mSessionLogin = new Date().getTime();
            if (ret['nowday'] == ret['regday']) {
                wxCore.uo.newbie = 1;
            }
            else {
                wxCore.uo.newbie = 0;
            }
            wxCore.uo.maidian_log_url = util.getArrayValueParam(ret['dt_values'], "dt_log_url");
            this.mGamesBox = ret['games_box'];
            // this.dealData(ret['user_data']);
            ////console.log('xczczxczxc', GameMain.app.cutlevel, GameMain.app.fakerlevelnum);
            // 是否是第一次登录服务器
            if (this.isFirstLogin) {
                ////console.log("第一次登录服务器");
                this.isFirstLogin = false;
                this.GetShopArray(ret['item_list']);
                this.GetStages();
                this.PassLevelProp(ret['item_list']);
                this.IsABTest(ret['on_off']);
                //test
                // GameMain.app.mWX.recordingCoins(1000);
                //获取金币和体力
                this.GetPower(ret['on_off']);
                ShopSetting.nowcoin = ret['coins'];
                ret['user_data'].forEach(function (item) {
                    // ////console.log('ussss', ret['user_data'][0]);
                    if (item.key == 'current_game_level') {
                        GameMain.app.cutlevel = Number(item.values);
                    }
                    if (item.key == 'faker_game_level') {
                        GameMain.app.fakerlevelnum = Number(item.values);
                    }
                    if (item.key == 'now_use_bg') {
                        ShopSetting.nowUseBg = Number(item.values);
                        Laya.loader.load([{ url: util.getCDN() + "res1/background/bg" + ("" + ShopSetting.nowUseBg) + ".png", type: Laya.Loader.IMAGE }], new Laya.Handler(_this_1, function () {
                            GameMain.app.isServer4 = true;
                            //console.log('GameMain.app.isServer4---ok');
                        }));
                    }
                    if (item.key == 'now_use_card_back') {
                        ShopSetting.nowCardBack = Number(item.values);
                    }
                    if (item.key == 'now_physical_power') {
                        ////console.log('okCount-2', Number(item.values));
                        ShopSetting.nowPpower = Number(item.values);
                    }
                    if (item.key == 'resume_physical_power_time') {
                        ShopSetting.powerConsumeTime = Number(item.values);
                    }
                });
                if (!GameMain.app.cutlevel) {
                    GameMain.app.cutlevel = 0;
                    GameMain.app.mWX.setUserValue('current_game_level', GameMain.app.cutlevel + '');
                }
                if (!GameMain.app.fakerlevelnum) {
                    GameMain.app.fakerlevelnum = 0;
                    GameMain.app.mWX.setUserValue('faker_game_level', GameMain.app.fakerlevelnum + '');
                }
                if (!ShopSetting.nowUseBg) {
                    ShopSetting.nowUseBg = 1;
                    Laya.loader.load([{ url: util.getCDN() + "res1/background/bg" + ("" + ShopSetting.nowUseBg) + ".png", type: Laya.Loader.IMAGE }], new Laya.Handler(this, function () {
                        GameMain.app.isServer4 = true;
                        //console.log('GameMain.app.isServer4---ok');
                    }));
                    GameMain.app.mWX.setUserValue('now_use_bg', ShopSetting.nowUseBg + '');
                }
                if (!ShopSetting.nowCardBack) {
                    ShopSetting.nowCardBack = 5001;
                    GameMain.app.mWX.setUserValue('now_use_card_back', ShopSetting.nowCardBack + '');
                }
                if (ShopSetting.nowPpower == null && ShopSetting.nowPpower != 0) {
                    ////console.log('okCount-3', ShopSetting.nowPowerMax);
                    ShopSetting.nowPpower = ShopSetting.nowPowerMax;
                    GameMain.app.mWX.setUserValue('now_physical_power', ShopSetting.nowPpower + '');
                }
                if (ShopSetting.powerConsumeTime == null && ShopSetting.powerConsumeTime != 0) {
                    ShopSetting.powerConsumeTime = ret['nowday'];
                    GameMain.app.mWX.setUserValue('resume_physical_power_time', ShopSetting.powerConsumeTime + '');
                }
                var n_d = Math.floor(new Date().getTime() / 1000);
                ////console.log('nowday', n_d, ShopSetting.powerConsumeTime, ((n_d - ShopSetting.powerConsumeTime) / 60), ShopSetting.nowPowerMax, (ShopSetting.nowPowerMax - ShopSetting.nowPpower), (ShopSetting.nowPowerMax - ShopSetting.nowPpower) * ShopSetting.powerConsumeTime);
                if (((n_d - ShopSetting.powerConsumeTime) / 60) >= (ShopSetting.nowPowerMax - ShopSetting.nowPpower) * ShopSetting.powerRecoverTime) {
                    ////console.log('okCount-1', ShopSetting.nowPpower, ShopSetting.nowPowerMax);
                    ShopSetting.nowPpower = ShopSetting.nowPowerMax;
                    GameMain.app.mWX.setUserValue('now_physical_power', ShopSetting.nowPpower + '');
                }
                else {
                    var okCount = Math.floor(((n_d - ShopSetting.powerConsumeTime) / 60) / ShopSetting.powerRecoverTime);
                    ShopSetting.nowPpower += okCount;
                    if (ShopSetting.nowPpower >= ShopSetting.nowPowerMax) {
                        ShopSetting.nowPpower = ShopSetting.nowPowerMax;
                    }
                    GameMain.app.mWX.setUserValue('now_physical_power', ShopSetting.nowPpower + '');
                    var consumeTime = ((ShopSetting.nowPowerMax - ShopSetting.nowPpower) * ShopSetting.powerRecoverTime * 60) - (n_d - ShopSetting.powerConsumeTime);
                    ////console.log('okCount0', consumeTime)
                    if (consumeTime >= 3600) {
                        this.b = Math.floor(consumeTime / 3600);
                        this.a = Math.floor((consumeTime - this.b * 3600) / 60);
                        this.xs = consumeTime - this.b * 3600 - this.a * 60;
                        ////console.log('okCount1', consumeTime, okCount, this.b, this.a, this.xs);
                    }
                    else if (consumeTime < 3600 && consumeTime >= 60) {
                        this.b = 0;
                        this.a = Math.floor(consumeTime / 60);
                        this.xs = consumeTime - this.a * 60;
                        ////console.log('okCount2', consumeTime, okCount, this.b, this.a, this.xs);
                    }
                    else if (consumeTime < 60 && consumeTime >= 0) {
                        this.a = 0;
                        this.b = 0;
                        this.xs = consumeTime;
                        ////console.log('okCount3', consumeTime, okCount, this.b, this.a, this.xs);
                    }
                    this.startCutDown();
                }
                GameMain.app.mingpainum = 1;
                // GameMain.app.ismingpai = false;
                if (wxCore.uo.newbie == 1) {
                    this.first_entry_time = new Date().getTime();
                    GameMain.app.mWX.setUserValue('first_entry_time', this.first_entry_time + '');
                }
                else {
                    ret['user_data'].forEach(function (item) {
                        if (item.key == 'first_entry_time') {
                            _this_1.first_entry_time = item.values;
                        }
                        if (item.key == 'last_entry_time') {
                            _this_1.last_entry_time = item.values;
                        }
                    });
                    if (!this.first_entry_time) {
                        this.first_entry_time = new Date().getTime();
                        GameMain.app.mWX.setUserValue('first_entry_time', this.first_entry_time + '');
                    }
                }
                wxCore.uo.commitTotle("app_entry", { "create_time": "", "uid": "", "session_id": "", "is_new": "", "device_os_version": wxCore.uo.mPhone['system'], "device_type": wxCore.uo.mPhone['model'], "wechat_version": wxCore.uo.mPhone['version'], "first_entry_time": ret['regday'], "last_entry_time": this.last_entry_time });
                this.last_entry_time = Math.floor(new Date().getTime() / 1000);
                GameMain.app.mWX.setUserValue('last_entry_time', this.last_entry_time + '');
                GameMain.app.isServer3 = true;
                //console.log('GameMain.app.isServer3---ok');
                // 显示游戏首页
                GameMain.app.begin();
                // 显示首页的更多游戏
                // this.initMoreGame(GameMain.app.startView.moreGame, true);
                // 初始化视频广告
                // wxCore.uo.initVideoAD("adunit-70a9427baa48c548");
            }
            // 获取小程序返回的appid
            this.initReturn();
            // 检查是否是通过点击链接进入游戏的
            this.checkLink();
        }
        else {
            Laya.timer.once(1000, this, this.onLaunch);
        }
        // wx.hideLoading({});
    };
    wxMinPro.prototype.dealData = function (list) {
        for (var i = 0; i <= list.length - 1; i++) {
            if (list[i]['key'] == 'SaveStartCardList') {
                GameMain.app.getValues = list[i]['values'];
            }
            if (list[i]['key'] == 'PokerLineGroup') {
                GameMain.app.getLineValues = list[i]['values'];
            }
        }
    };
    /* 获取param */
    wxMinPro.prototype.getParam = function (key) {
        for (var i = 0; i < GameMain.app.mWX.OnOff.length; i++) {
            var obj = GameMain.app.mWX.OnOff[i];
            if (obj["key"] == key) {
                return obj["param"];
            }
        }
    };
    /* 获取value */
    wxMinPro.prototype.getValue = function (key) {
        for (var i = 0; i < GameMain.app.mWX.OnOff.length; i++) {
            var obj = GameMain.app.mWX.OnOff[i];
            if (obj["key"] == key) {
                return Number(obj["value"]);
            }
        }
    };
    /* 相应开关赋值 */
    wxMinPro.prototype.checkOnOff = function (key) {
        // 总开关如果是关着的，直接 return false
        if (GameMain.app.mWX.fhOnoff == 0) {
            return 0;
        }
        // 总开关打开的情况下再判断相应的开关
        var onoff = 0;
        for (var i = 0; i < GameMain.app.mWX.OnOff.length; i++) {
            var obj = GameMain.app.mWX.OnOff[i];
            if (key == obj["key"]) {
                onoff = Number(obj["value"]);
            }
        }
        return onoff;
    };
    /* 处理分享时间 */
    wxMinPro.prototype.checkShareTime = function () {
        ////console.log("===", GameMain.app.mWX.OnOff.length);
        for (var i = 0; i < GameMain.app.mWX.OnOff.length; i++) {
            var obj = GameMain.app.mWX.OnOff[i];
            if (obj["key"] == "of_share_time") {
                if (Number(obj["value"]) == 1) {
                    var param = String(obj["param"]);
                    ////console.log("*********** = ", param);
                    ////console.log("*********** = ", param.split(","));
                    GameMain.app.mShareTimeArray = param.split(",");
                    break;
                }
            }
        }
    };
    /* 检查是否是通过点击链接进入的游戏 */
    wxMinPro.prototype.checkLink = function () {
        // 点击道具礼包链接进入游戏 wxCore.uo.mLaunch["query"]["id"] > 0 :自己领卡 = 0:给别人加卡
        if (typeof (wxCore.uo.mLaunch["query"]["gift"]) != "undefined") {
            if (wxCore.uo.mLaunch["query"]["id"] > 0) {
                // this.addCardForMe(wxCore.uo.mLaunch["query"]["id"]);
            }
            else {
                GameMain.app.mWX.dealCards(wxCore.uo.mLaunch["shareTicket"]);
            }
        }
        // 点击群排名链接进入游戏
        if (wxCore.uo.mLaunch["query"]["id"] != null && Number(wxCore.uo.mLaunch["query"]["type"]) == 8) {
            // if (typeof (wxCore.uo.mLaunch["shareTicket"]) != "undefined" && wxCore.uo.mLaunch["shareTicket"] != "undefined" && wxCore.uo.mLaunch["shareTicket"] != "") {
            //     this.afterClickLink();
            //     GameMain.app.startView.queryGroupRank();
            // }
        }
        // // 点击接力链接进入游戏
        // if (wxCore.uo.mLaunch["query"]["id"] > 0 && Number(wxCore.uo.mLaunch["query"]["type"]) == 2) {
        //     this.afterClickLink();
        //     // 记录要接力那局游戏id
        //     this.mrelayID = wxCore.uo.mLaunch["query"]["id"];
        //     this.showRelay(false);
        // }
        // 判断进入游戏的场景（是否是从我的小程序进入的）
        if (wxCore.uo.mLaunch["scene"] == 1104) {
            // if (GameMain.app.getLocalInfo("isShowToMy") != "1") {
            //     GameMain.app.setLocalInfo("isShowToMy", "1");
            // }
        }
    };
    // /* 点击道具礼包，群排行，接力等链接进入游戏的操作 */
    // public afterClickLink(): void {
    //     GameMain.app.mPlayed = 0;
    //     GameMain.app.rebirth_video = 0;
    //     // 如果在游戏中，清除游戏。
    //     if (GameMain.app.gameView && GameMain.app.gameView.visible == true) {
    //         GameMain.app.gameClear();
    //     }
    //     // 隐藏接力界面
    //     if (GameMain.app.relayView && GameMain.app.relayView.visible == true) {
    //         GameMain.app.relayView.visible = false;
    //     }
    //     // 隐藏排行榜界面
    //     if (GameMain.app.rankView && GameMain.app.rankView.visible == true) {
    //         GameMain.app.rankView.visible = false;
    //         GameMain.app.rankView.removeOffScreen();
    //     }
    //     // 隐藏分数界面
    //     if (GameMain.app.scoreView && GameMain.app.scoreView.visible == true) {
    //         GameMain.app.scoreView.close("", false);
    //     }
    //     // 隐藏结果界面
    //     if (GameMain.app.resultView) {
    //         GameMain.app.resultView.visible = false;
    //         GameMain.app.resultView.removeOffScreen();
    //     }
    //     // 隐藏道具界面
    //     if (GameMain.app.propView && GameMain.app.propView.visible == true) {
    //         GameMain.app.propView.close();
    //     }
    //     // 隐藏互助礼界面
    //     if (GameMain.app.giftView && GameMain.app.giftView.visible == true) {
    //         GameMain.app.giftView.closeGift();
    //     }
    //     // 隐藏引导页
    //     if (GameMain.app.guideView && GameMain.app.guideView.visible == true) {
    //         GameMain.app.guideView.closeGuideView();
    //     }
    //     // 如果正在显示游戏盒子，要隐藏游戏盒子。
    //     MoreGame.CloseList();
    //     // 如果正在显示广告，隐藏广告。
    //     this.hideADBanner();
    // }
    /* 获取最新复活卡数量 */
    wxMinPro.prototype.getCardNumber = function (callback) {
        var params = [];
        params["uid"] = wxCore.uo.getUserID();
        this.server(params, "querycards", new Laya.Handler(this, onResult));
        // 请求成功的回调
        function onResult(ret) {
            ////console.log("获取复活卡数量成功：", ret);
            if (ret["code"] == 0) {
                GameMain.app.mWX.mCards = Number(ret["cards"]);
                if (callback)
                    callback.run();
            }
        }
    };
    /* 汇报成绩 continue = 1：表示使用复活卡 */
    wxMinPro.prototype.reportMark = function (mark) {
        var _this = this;
        function onResult(e) {
            wx.hideLoading({});
            var ret = null;
            if (typeof (e) == "string")
                ret = util.getJSON(e);
            else
                ret = e;
            if (ret['code'] == 0) {
            }
        }
        wx.postMessage({
            type: "send", mark9: mark, level: GameMain.app.mMapLevel, best: GameMain.app.mWX.mMarks[GameMain.app.mMapLevel], user: GameMain.app.mWX.mUser
        });
        //console.log(this.mCmd["report"]);
        var params = [];
        params['mark'] = mark;
        params['uid'] = this.mUID;
        params['id'] = this.mrelayID;
        //console.log(params);
        if (GameMain.app.mUseCards == true)
            params['continue'] = 1;
        else
            params['continue'] = 0;
        //闯关地图
        params['level'] = GameMain.app.mMapLevel;
        //分享次数
        params['shares'] = GameMain.app.mShares;
        GameMain.app.mWX.server(params, "report", new Laya.Handler(this, onResult));
    };
    /* 获取我的最佳成绩 */
    wxMinPro.prototype.getMyMark = function () {
        var params = [];
        params["uid"] = wxCore.uo.getUserID();
        this.server(params, "mymark", new Laya.Handler(this, onResult));
        // 获取我的成绩的回调
        function onResult(ret) {
            ////console.log("获取我的最好成绩：", ret);
            if (ret["code"] == 0) {
                GameMain.app.mWX.mMarks[0] = Number(ret["mark"]["mark"]);
                wx.postMessage({
                    type: "send", mark9: GameMain.app.mWX.mMarks[0], level: GameMain.app.mMapLevel, best: GameMain.app.mWX.mMarks[GameMain.app.mMapLevel], user: wxCore.uo.mWeUser
                });
            }
        }
    };
    /* 获取世界排行榜数据 */
    wxMinPro.prototype.showWorldRank = function (page) {
        if (page === void 0) { page = 0; }
        var params = [];
        params["uid"] = wxCore.uo.getUserID();
        params["page"] = page;
        this.server(params, "rank", new Laya.Handler(this, onResult));
        this.showLoading();
        // 获取世界排行榜数据成功的回调
        var _this = this;
        function onResult(ret) {
            ////console.log("获取世界排行榜数据成功：", ret);
            if (ret["code"] == 0) {
                var mrank = Number(ret["rank"]);
                if (mrank > 0 && _this.mMarks[0] > 0) {
                    _this.mMyRank = mrank;
                }
                var mData = GameMain.app.wRankData;
                var rData = ret["data"];
                for (var i = 0; i < rData.length; i++) {
                    var obj = {};
                    obj["name"] = GameMain.app.subname(Base64.decode(rData[i]["name"]), 12);
                    var face = Base64.decode(rData[i]["avatar"]);
                    if (face.charAt(face.length - 1) == "0" && face.charAt(face.length - 2) == "/") {
                        face = face.substr(0, face.length - 2);
                        face = face + "/132";
                    }
                    obj["avatar"] = face;
                    obj["mark"] = Math.floor(rData[i]["hismark"]);
                    obj["city"] = rData[i]["city"];
                    obj["uid"] = rData[i]["uid"];
                    obj["map1"] = Math.floor(rData[i]["mark1"]);
                    obj["map2"] = Math.floor(rData[i]["mark2"]);
                    obj["map3"] = Math.floor(rData[i]["mark3"]);
                    var mLevel = GameMain.app.mLevel;
                    var mLevelName = GameMain.app.mLevelName;
                    var level = mLevel.length;
                    for (var m = 0; m < mLevel.length; m++) {
                        if (obj["mark"] < mLevel[m]) {
                            level = m + 1;
                            break;
                        }
                    }
                    obj["level"] = mLevelName[level - 1];
                    mData.push(obj);
                }
                for (var i = 0; i < mData.length; i++) {
                    mData[i]["rank"] = i + 1;
                    // 保存我的排行
                    if (wxCore.uo.getUserID() == Number(mData[i]["uid"])) {
                        _this.mMyRank = i + 1;
                    }
                }
                if (_this.mMyRank == 0) {
                    var mRank = Number(ret["rank"]);
                    if (mRank > 0 && _this.mMarks[0] > 0) {
                        _this.mMyRank = mRank;
                    }
                }
                if (rData.length > 0) {
                    GameMain.app.rankView.showWorldRank(mData);
                }
            }
            wx.hideLoading({});
        }
    };
    /* 获取好友接力列表信息 */
    wxMinPro.prototype.showRelay = function (show) {
        if (show)
            this.showLoading();
        var params = [];
        params["uid"] = wxCore.uo.getUserID();
        params["id"] = this.mrelayID;
        this.server(params, "challenge", new Laya.Handler(this, onResult));
        // 好友接力数据请求成功
        var _this = this;
        function onResult(ret) {
            ////console.log("好好友接力数据：", ret);
            if (show)
                wx.hideLoading({});
            if (ret["code"] == 0) {
                GameMain.app.mWX.mChallenge = ret;
                var master = {
                    name: GameMain.app.subname(Base64.decode(ret["master"]["name"]), 12),
                    friend_base: ret["master"]["friend_base"],
                    mark: ret["master"]["mark"],
                    uid: ret["master"]["uid"],
                    id: ret["master"]["id"],
                };
                var face1 = Base64.decode(ret["master"]["avatar"]);
                if (face1.charAt(face1.length - 1) == "0" && face1.charAt(face1.length - 2) == "/") {
                    face1 = face1.substr(0, face1.length - 2);
                    face1 = face1 + "/132";
                }
                master["avatar"] = face1;
                var mData = [];
                var rData = ret["data"];
                for (var i = 0; i < rData.length; i++) {
                    if (rData[i]["uid"] != ret["master"]["uid"]) {
                        var obj = {};
                        obj["uid"] = rData[i]["uid"];
                        obj["name"] = GameMain.app.subname(Base64.decode(rData[i]["name"]), 12);
                        var face = Base64.decode(rData[i]["avatar"]);
                        if (face.charAt(face.length - 1) == "0" && face.charAt(face.length - 2) == "/") {
                            face = face.substr(0, face.length - 2);
                            face = face + "/132";
                        }
                        obj["avatar"] = face;
                        obj["mark"] = rData[i]["mark"];
                        var mLevel = GameMain.app.mLevel;
                        var mLevelName = GameMain.app.mLevelName;
                        var level = mLevel.length;
                        for (var m = 0; m < mLevel.length; m++) {
                            if (obj["mark"] < mLevel[m]) {
                                level = m + 1;
                                break;
                            }
                        }
                        obj["level"] = mLevelName[level - 1];
                        mData.push(obj);
                    }
                }
                for (var i = 0; i < mData.length; i++) {
                    mData[i]["rank"] = i + 1;
                }
                GameMain.app.relayView.showrelayData(master, mData);
            }
        }
    };
    wxMinPro.prototype.initMoreGame = function (btn, isIndex) {
        if (isIndex === void 0) { isIndex = false; }
        var obj = MoreGame.GetIndexRandom(this.mGamesBox);
        if (obj != null) {
            btn.name = obj.gameid;
            if (isIndex) {
                if (this.fhOnoff != 1) {
                    btn.skin = "";
                    btn.visible = false;
                }
                else {
                    btn.skin = obj.url_btn;
                    btn.visible = true;
                }
            }
            else {
                btn.skin = obj.url_result;
            }
        }
        else {
            btn.visible = false;
            btn.skin = "";
        }
    };
    wxMinPro.prototype.getMoreUrl = function (id) {
        for (var i = 0; i < this.mGamesBox.length; i++) {
            if (Number(id) == Number(this.mGamesBox[i]['gameid'])) {
                return this.mGamesBox[i];
            }
        }
        return null;
    };
    /* 显示更多游戏 */
    wxMinPro.prototype.showMoreGamePage = function (btn) {
        if (Laya.Browser.onMiniGame == false)
            return;
        var obj = GameMain.app.mWX.getMoreUrl(btn.name);
        if (obj == null)
            return;
        gameBox.showBoxPage(obj.appid, GameMain.app.mWX.mGamesBox, "全民接龙高手");
        GameMain.app.mWX.reportADHit(btn.name);
        wxCore.uo.commitTotle("recom_icon_click", { "create_time": "", "session_id": "", "is_new": "", "click": 1, "id": obj.id, "name": obj.name });
    };
    /* 统计更多游戏的点击量 */
    wxMinPro.prototype.reportADHit = function (id) {
        var params = [];
        params["uid"] = wxCore.uo.getUserID();
        params["id"] = id;
        this.server(params, "ADHit", null);
    };
    /* 给自己加复活卡 */
    wxMinPro.prototype.addCardForMe = function (shareId) {
        var params = [];
        params["uid"] = wxCore.uo.getUserID();
        params["id"] = shareId;
        this.server(params, "AddMyCard", new Laya.Handler(this, onResult));
        // 调用接口成功
        function onResult(ret) {
            if (ret["code"] == 0) {
                GameMain.app.mWX.mCards = GameMain.app.mWX.mCards >= 2 ? 2 : (GameMain.app.mWX.mCards + 1);
                GameMain.app.showMessage("获得复活卡1张", "success");
                // 如果存在结果页，更新结果页复活卡的数量。
                if (GameMain.app.resultView) {
                    GameMain.app.resultView.upDataCars();
                }
            }
        }
    };
    /* 给好友添加复活卡 */
    wxMinPro.prototype.dealCards = function (shareTicket) {
        if (wxCore.uo.mLaunch["query"]["gift"] == 0) {
            return;
        }
        var params = [];
        params["uid"] = wxCore.uo.getUserID();
        if (wxCore.uo.mLaunch["query"]["gift"] != null && typeof (wxCore.uo.mLaunch["query"]["gift"]) != "undefined") {
            params["gift"] = Number(wxCore.uo.mLaunch["query"]["gift"]);
        }
        else {
            params["gift"] = 0;
        }
        if (shareTicket != null && typeof (wxCore.uo.mLaunch["shareTicket"]) != "undefined") {
            params["ticket"] = shareTicket;
        }
        wxCore.uo.mLaunch["query"]["gift"] = 0;
        this.server(params, "AddCard", null);
    };
    /* 获取返回小程序appid */
    wxMinPro.prototype.initReturn = function () {
        var pid = wxCore.uo.mLaunch["query"]["pid"];
        if (pid == null || typeof (pid) == "undefined" || pid == "") {
            pid = GameMain.app.getLocalInfo("pid");
        }
        if (pid == null || typeof (pid) == "undefined" || pid == "") {
            this.mReturnAppid = "";
            this.mReturnUrl = "";
        }
        else {
            if (Number(pid) == 8) {
                this.mReturnAppid = "";
                this.mReturnUrl = "";
            }
            else {
                this.mReturnAppid = pid;
                this.mReturnUrl = "pages/index/index?";
            }
            GameMain.app.setLocalInfo("pid", this.mReturnAppid);
        }
    };
    /* 初始化微信游戏圈按钮 */
    wxMinPro.prototype.initGameClub = function () {
        if (wxCore.uo.mSDKVersion > "2.0.3") {
            var _top = 160 * GameMain.app.mScreenHeight / 667;
            if (GameMain.app.mScreenHeight == 812) {
                _top = 190 * GameMain.app.mScreenHeight / 667;
            }
            GameMain.app.mWX.gameClub = wx.createGameClubButton({
                icon: "dark",
                style: {
                    left: 330 * GameMain.app.mScreenWidth / 375,
                    top: _top,
                    width: 30 * GameMain.app.mScreenWidth / 375,
                    height: 30 * GameMain.app.mScreenWidth / 375
                }
            });
        }
    };
    /**
     * 初始化banner广告
     */
    wxMinPro.prototype.initBannerAD = function (adUnitId, type) {
        if (adUnitId === void 0) { adUnitId = 'adunit-852b1b0367aa01e8'; }
        if (type === void 0) { type = 1; }
        if (wxCore.uo.mSDKVersion >= "2.0.4") {
            if (GameMain.app.mWX.adBanner == null) {
                GameMain.app.mWX.adBanner = wx.createBannerAd({
                    adUnitId: adUnitId,
                    style: {
                        left: 0,
                        top: GameMain.app.mScreenHeight - 107,
                        width: GameMain.app.mScreenWidth * type
                    }
                });
                var top_1 = GameMain.app.mScreenHeight == 812 ? 20 : 0;
                GameMain.app.mWX.adBanner.onResize(function (res) {
                    GameMain.app.mWX.adBanner.style.top = GameMain.app.mScreenHeight - GameMain.app.mWX.adBanner.style.realHeight - top_1;
                    GameMain.app.mWX.adBanner.style.left = (GameMain.app.mScreenWidth - GameMain.app.mWX.adBanner.style.realWidth) / 2;
                });
                GameMain.app.mWX.adBanner.onLoad(function () {
                    //console.log('adBanner 广告加载成功');
                });
                GameMain.app.mWX.adBanner.onError(function () {
                    //console.log('wxBanner广告加载失败');
                    // this.addCustomBannerAd();
                });
                GameMain.app.mWX.adBanner.show();
                GameMain.app.mWX.reportData(0);
            }
            else {
                GameMain.app.mWX.adBanner.show();
            }
        }
    };
    /* 关闭banner广告 */
    wxMinPro.prototype.hideADBanner = function () {
        // 移除微信的广告
        if (GameMain.app.mWX.adBanner != null) {
            GameMain.app.mWX.adBanner.hide();
        }
    };
    // 返回微信右上角菜单，top和height，转换过的
    wxMinPro.prototype.getMenuButtonTop_CenterPoint = function () {
        var rnt = new Laya.Point(0, 0);
        if (Laya.Browser.onMiniGame) {
            if (wxCore.uo.wxVersion() >= "2.1.0") {
                if (this.mWxMenuButtonRect == null) {
                    var rect = wx.getMenuButtonBoundingClientRect();
                    if (rect != null) {
                        if (rect.height != NaN && rect.height != undefined && rect.height != null) {
                            this.mWxMenuButtonRect = rect;
                            ////console.log("Get getMenuButtonBoundingClientRect : ", this.mWxMenuButtonRect);
                        }
                    }
                }
            }
            if (this.mWxMenuButtonRect != null) {
                var h = this.mWxMenuButtonRect.height;
                var t = this.dealTopValue(this.mWxMenuButtonRect.top);
                rnt.x = t * Laya.stage.height / wxCore.uo.mPhone['screenHeight'];
                rnt.y = h * Laya.stage.height / wxCore.uo.mPhone['screenHeight'];
                return rnt;
            }
        }
        return rnt;
    };
    wxMinPro.prototype.dealTopValue = function (value) {
        if (value > 0) {
            return value;
        }
        else {
            ////console.log("getTopValue() -> screenHeight = ", wxCore.uo.phone()['screenHeight'], ", stage height = ", Laya.stage.height);
            if (Number(wxCore.uo.phone()['screenHeight']) > 800) {
                return 40;
            }
            else {
                return 10;
            }
        }
    };
    /* 当微信banner广告为空时，显示自己的广告 */
    wxMinPro.prototype.addCustomBannerAd = function () {
        if (this.mCustomBannerAdList.length == 0)
            return;
        var __this = this;
        this.mIsInvokeRemoveCustomBannerAd = false;
        var index = Math.floor(Math.random() * this.mCustomBannerAdList.length);
        var url = this.mCustomBannerAdList[index]["url"];
        var appid = this.mCustomBannerAdList[index]["appid"];
        var path = this.mCustomBannerAdList[index]["path"];
        // 1->跳转小程序 0->不可跳转
        var third = Number(this.mCustomBannerAdList[index]["third"]);
        var id = this.mCustomBannerAdList[index]["id"];
        if (__this.mCustomBanner == null) {
            __this.mCustomBanner = new Laya.Image();
            __this.mCustomBanner.zOrder = 1000;
        }
        __this.mCustomBanner.loadImage(url, 0, 0, 0, 0, Laya.Handler.create(this, function () {
            // 如果此时调用过隐藏banner函数，则不将banner添加到stage
            if (__this.mIsInvokeRemoveCustomBannerAd)
                return;
            __this.mCustomBanner.anchorX = 0.5;
            __this.mCustomBanner.x = Laya.stage.width / 2;
            __this.mCustomBanner.bottom = GameMain.app.mScreenHeight > 800 ? 34 : 0;
            Laya.stage.addChild(__this.mCustomBanner);
            __this.mCustomBanner.on(Events.CLICK, __this, __this.onCustomBannerClick, [third, id, appid, path]);
        }));
    };
    wxMinPro.prototype.onCustomBannerClick = function (third, id, appid, path, e) {
        e.stopPropagation();
        if (third == 0)
            return;
        if (wxCore.uo.mSDKVersion >= "2.2.0") {
            GameMain.app.mWX.reportADHit(id);
            wx.navigateToMiniProgram({
                appId: appid,
                path: path,
                envVersion: "trial",
                success: function (res) {
                    ////console.log("tiaozhuan-success");
                }
            });
        }
    };
    /* 广告曝光(type:1 视频广告; type:0 Banner广告) */
    wxMinPro.prototype.reportData = function (type) {
        if (type === void 0) { type = 0; }
        var params = [];
        params["uid"] = this.mUID;
        params["type"] = type;
        this.server(params, "ad", null);
    };
    /* 网络请求 */
    wxMinPro.prototype.server = function (params, url, callback, ver) {
        if (ver === void 0) { ver = "1.0.1"; }
        GameMain.app.mWX.mHttpCall = new Laya.HttpRequest();
        GameMain.app.mWX.mHttpCall.once(Laya.Event.COMPLETE, GameMain.app.mWX, onResult);
        GameMain.app.mWX.mHttpCall.once(Laya.Event.ERROR, GameMain.app.mWX, GameMain.app.mWX.onHttpRequestError);
        var str = util.getServer() + GameMain.app.mWX.mCmd[url] + util.getUrlParams(params, ver);
        GameMain.app.mWX.mHttpCall.send(str, null, "get", "text");
        ////console.log("网络请求地址：", str);
        // 请求结果
        function onResult(e) {
            var ret = null;
            if (typeof (e) == "string") {
                ret = util.getJSON(e);
            }
            else {
                ret = util.getJSON(GameMain.app.mWX.mHttpCall.data);
            }
            if (callback != null) {
                callback.runWith(ret);
            }
            GameMain.app.mWX.mHttpCall = null;
        }
    };
    /* 请求错误的回调 */
    wxMinPro.prototype.onHttpRequestError = function (e) {
        wx.hideLoading({});
        this.mHttpCall = null;
        ////console.log("onHttpRequestError:" + e);
    };
    /* ShowRequestLoading */
    wxMinPro.prototype.showLoading = function (title, mask) {
        if (title === void 0) { title = ""; }
        if (mask === void 0) { mask = true; }
        wx.showLoading({
            title: title,
            mask: mask
        });
    };
    wxMinPro.prototype.recordingCoins = function (coins, reason, otherCoins, upBtn) {
        var _this = this;
        function onResult(e) {
            var ret = null;
            if (typeof (e) == "string")
                ret = util.getJSON(e);
            else
                ret = e;
            if (ret['code'] == 0) {
                ShopSetting.nowcoin = Number(ret['coins']);
            }
        }
        var params = [];
        params['uid'] = _this.mUID;
        params['count'] = coins;
        params['reason'] = reason;
        ////console.log('?????????????????????????????????????????????????????????????');
        GameMain.app.mWX.server(params, "Coins", new Laya.Handler(this, onResult));
    };
    wxMinPro.prototype.buyItem = function (itemid, callback) {
        var _this = this;
        function onResult(e) {
            var ret = null;
            if (typeof (e) == "string")
                ret = util.getJSON(e);
            else
                ret = e;
            if (ret['code'] == 0) {
                ShopSetting.nowcoin = Number(ret['coins']);
                if (itemid <= 5000) {
                    GameGlobal.Dispatcher.sendEvent(GameGlobal.EVENT.BuyBgSkin);
                    ShopSetting.nowUseBg = Number(itemid - 4000);
                    GameMain.app.mWX.setUserValue('now_use_bg', ShopSetting.nowUseBg + '');
                    for (var _i = 0, _a = ShopSetting.shopListArray; _i < _a.length; _i++) {
                        var im = _a[_i];
                        if (im["id"] == itemid) {
                            im['count'] = 1;
                        }
                    }
                }
                else {
                    GameGlobal.Dispatcher.sendEvent(GameGlobal.EVENT.BuyCardBackSkin);
                    ShopSetting.nowCardBack = Number(itemid);
                    GameMain.app.mWX.setUserValue('now_use_card_back', ShopSetting.nowCardBack + '');
                    for (var _b = 0, _c = ShopSetting.shopListArray; _b < _c.length; _b++) {
                        var im = _c[_b];
                        if (im["id"] == itemid) {
                            im['count'] = 1;
                        }
                    }
                }
                wx.showToast({
                    title: '购买成功',
                    icon: "none",
                    image: "",
                    duration: 2000
                });
                if (callback) {
                    callback();
                }
            }
            else {
                wx.showToast({
                    title: "当前金币不足",
                    icon: "none",
                    image: "",
                    duration: 1500
                });
            }
        }
        var params = [];
        params['uid'] = this.mUID;
        params['itemid'] = itemid;
        GameMain.app.mWX.server(params, "BuyItem", new Laya.Handler(this, onResult));
    };
    wxMinPro.prototype.useItem = function (itemid, type, btn, index) {
        var _this = this;
        function onResult(e) {
            var ret = null;
            if (typeof (e) == "string")
                ret = util.getJSON(e);
            else
                ret = e;
            if (ret['code'] == 0) {
                ////console.log("皮肤设置成功");
                if (type == 0) { //皮肤
                    // _this.setSkin(itemid);
                    // GameMain.app.ShopView.onCharacter();
                }
            }
        }
        var params = [];
        params['uid'] = this.mUID;
        params['itemid'] = itemid;
        GameMain.app.mWX.server(params, "UseItem", new Laya.Handler(this, onResult));
    };
    wxMinPro.prototype.changeTCt = function (itemid, count, reason) {
        var _this = this;
        function onResult(e) {
            var ret = null;
            if (typeof (e) == "string")
                ret = util.getJSON(e);
            else
                ret = e;
            if (ret['code'] == 0) {
                if (itemid == 5001) {
                    Items.propS[0] = ret['new'];
                    Items.beginUpScore = true;
                }
                else if (itemid == 5002) {
                    Items.propS[1] = ret['new'];
                    Items.beginUpGold = true;
                }
                else if (itemid == 5003) {
                    Items.propS[2] = ret['new'];
                }
                else if (itemid == 1002) {
                    GameMain.app.mWX.mDiamonds = ret['new'];
                    if (DataCenter.getInstance().gameView != null && DataCenter.getInstance().gameView.selectDialog != null) {
                        EventConfig.getInstance().event(EventConfig.goldEvent);
                    }
                }
            }
        }
        var params = [];
        params['uid'] = this.mUID;
        params['tid'] = itemid;
        params['count'] = count;
        params['reason'] = reason;
        GameMain.app.mWX.server(params, "ChangeTCt", new Laya.Handler(this, onResult));
    };
    wxMinPro.prototype.refreshCutDown = function () {
        var consumeTime = ((ShopSetting.nowPowerMax - ShopSetting.nowPpower) * ShopSetting.powerRecoverTime * 60);
        if (consumeTime >= 3600) {
            this.b = Math.floor(consumeTime / 3600);
            this.a = Math.floor((consumeTime - this.b * 3600) / 60);
            this.xs = consumeTime - this.b * 3600 - this.a * 60;
            ////console.log('refreshTime1', this.a, this.b,this.xs, consumeTime, ShopSetting.nowPowerMax, ShopSetting.nowPpower);
        }
        else if (consumeTime < 3600 && consumeTime >= 60) {
            this.b = 0;
            this.a = Math.floor(consumeTime / 60);
            this.xs = consumeTime - this.a * 60;
            ////console.log('refreshTime2', this.a, this.b,this.xs, consumeTime, ShopSetting.nowPowerMax, ShopSetting.nowPpower);
        }
        else if (consumeTime < 60 && consumeTime >= 0) {
            this.a = 0;
            this.b = 0;
            this.xs = consumeTime;
            ////console.log('refreshTime3', this.a, this.b,this.xs, consumeTime, ShopSetting.nowPowerMax, ShopSetting.nowPpower);
        }
        this.hour = '00';
        this.minus = '00';
        this.seconds = '00';
        if (this.a == 0 && this.b == 0 && this.xs == 0) {
            return;
        }
        Laya.timer.clear(this, this.cutDownTime);
        Laya.timer.loop(1000, this, this.cutDownTime);
    };
    wxMinPro.prototype.startCutDown = function (isAdd) {
        if (isAdd === void 0) { isAdd = false; }
        // this.xs = 0;
        // this.a = 0;
        // this.b = 0;
        Laya.timer.clear(this, this.cutDownTime);
        if (this.xs == 0 && this.a == 0 && this.b == 0) {
            if (ShopSetting.powerRecoverTime < 60) {
                this.a = ShopSetting.powerRecoverTime;
            }
            // else if (ShopSetting.powerRecoverTime >= 60 && ShopSetting.powerRecoverTime < 1440) {
            //     this.b = ShopSetting.powerRecoverTime % 60
            //     this.a = (ShopSetting.powerRecoverTime - ShopSetting.powerRecoverTime * (ShopSetting.powerRecoverTime % 60));
            //     this.xs = 0;
            // }
        }
        else {
            ////console.log('powerRecoverTime1', this.b, this.a, this.xs);
            if (ShopSetting.powerRecoverTime < 60 && isAdd) {
                this.a += ShopSetting.powerRecoverTime;
                if (this.a >= 60) {
                    this.b += 1;
                    this.a = this.a - 60;
                }
            }
            // else if (ShopSetting.powerRecoverTime >= 60 && ShopSetting.powerRecoverTime < 1440) {
            //     var nowMin = this.a + this.b * 60;
            //     nowMin = nowMin + ShopSetting.powerRecoverTime;
            //     this.b = nowMin % 60
            //     this.a = (nowMin - nowMin * (nowMin % 60));
            //     this.xs = this.xs;
            // }
        }
        ////console.log('powerRecoverTime2', this.b, this.a, this.xs);
        Laya.timer.loop(1000, this, this.cutDownTime);
    };
    wxMinPro.prototype.cutDownTime = function () {
        if (this.xs == 0 && this.a == 0 && this.b == 0) {
            ShopSetting.powerLabel = "00:00:00";
            if (ShopSetting.nowPpower < ShopSetting.nowPowerMax) {
                ShopSetting.nowPpower += 1;
                GameMain.app.mWX.setUserValue('now_physical_power', ShopSetting.nowPpower + '');
            }
            return;
        }
        if (this.xs > 0) {
            this.xs--;
            if (this.xs < 10 && this.xs >= 0) {
                this.seconds = '0' + this.xs;
            }
            else if (this.xs >= 10 && this.xs <= 60) {
                this.seconds = this.xs + '';
            }
        }
        else {
            this.seconds = '59';
            this.xs = 59;
            this.a--;
        }
        if (this.a > 0) {
            if (this.a < 10 && this.a > 0) {
                this.minus = '0' + this.a;
            }
            else if (this.a >= 10 && this.a < 60) {
                this.minus = this.a + '';
            }
        }
        else {
            if (this.b > 0) {
                this.minus = '59';
                this.a = 59;
                this.b--;
            }
            else {
                this.minus = '00';
            }
        }
        if (this.b >= 10) {
            this.hour = this.b + '';
        }
        else if (this.b < 10) {
            this.hour = '0' + this.b;
        }
        if ((this.a + this.b * 60) >= ShopSetting.powerRecoverTime && (this.a + this.b * 60) % ShopSetting.powerRecoverTime == 0 && this.xs == 0) {
            if (ShopSetting.nowPpower < ShopSetting.nowPowerMax) {
                ShopSetting.nowPpower += 1;
                GameMain.app.mWX.setUserValue('now_physical_power', ShopSetting.nowPpower + '');
            }
            ////console.log('oneoneone');
        }
        ShopSetting.powerLabel = this.hour + ":" + this.minus + ":" + this.seconds;
        // ////console.log('powerLabel', ShopSetting.powerLabel);
    };
    return wxMinPro;
}());
//# sourceMappingURL=wxMinPro.js.map