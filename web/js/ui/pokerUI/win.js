/**
* name
*/
var pokerUI;
(function (pokerUI) {
    var win = /** @class */ (function () {
        function win() {
            var a = 'a';
            if (a == 'a')
                a = 'a';
            Laya.loader.load([{ url: "res/atlas/UI.atlas", type: Laya.Loader.ATLAS }], Laya.Handler.create(this, this.onUILoad));
        }
        win.prototype.onUILoad = function () {
            this.winUI = new ui.poker.WinUI();
            Laya.stage.addChild(this.winUI);
            this.winUI.visible = false;
            this.winUI.startNewgame.on(Laya.Event.CLICK, this, this.onClickStartNewGame);
            this.winUI.shareBtn.clickHandler = new Laya.Handler(this, this.onClickShare);
            this.winUI.toHome.on(Laya.Event.CLICK, this, this.ToHome);
        };
        win.prototype.ToHome = function () {
            this.hideADBanner();
            this.winUI.visible = false;
            GameGlobal.Dispatcher.GetInstance().brodcastEvent(GameGlobal.EVENT.onClickEndGame);
            pokerGame.SoundPlayer.PlaySound(1);
        };
        win.prototype.onClickShare = function () {
            GameMain.app.mShares++;
            GameMain.app.mShareCurrentTime = GameMain.app.getCurrTime();
            var shareTitle = "这局太难了，听说只有1%完成了。";
            var shareImg = "login/share.jpg";
            var surl = "3";
            // if (GameMain.app.mWX.shareUrl.length > 2) {
            // 	shareTitle = GameMain.app.mWX.shareUrl[2]["title"];
            // 	shareImg = GameMain.app.mWX.shareUrl[2]["url"];
            // 	surl = GameMain.app.mWX.shareUrl[2]["id"];
            // }
            wx.shareAppMessage({
                title: shareTitle,
                imageUrl: shareImg,
            });
        };
        win.prototype.ShowWin = function (UsedTimeStr) {
            this.showADBanner();
            pokerGame.SoundPlayer.PlaySound(17);
            this.winUI.visible = true;
            this.winUI.timeCount.text = UsedTimeStr;
            if (!GameMain.app.isTestModel) {
                if (GameMain.app.isLevelGame != 0) {
                    GameMain.app.cutlevel = GameMain.app.cutlevel + 1;
                    GameMain.app.mWX.setUserValue('current_game_level', GameMain.app.cutlevel + '');
                }
                if (!GameMain.app.isOpenFreeModel) {
                    GameMain.app.fakerlevelnum = GameMain.app.fakerlevelnum + 1;
                    GameMain.app.mWX.setUserValue('faker_game_level', GameMain.app.fakerlevelnum + '');
                    GameMain.app.isLevelGame = 0;
                    GameMain.app.mingpainum = 1;
                }
            }
            this.winUI.showUpLevel.visible = false;
            if (GameMain.app.cutlevel == 1) {
                this.winUI.showUpLevel.visible = true;
                this.winUI.showUpLevel2.visible = false;
                this.winUI.showUpLevel.skin = 'local/newBg/result_返回首页查看新角色.png';
                this.winUI.showAvatar.skin = 'local/newBg/avatar_1.png';
            }
            else {
                for (var idnex = 19; idnex >= 0; idnex--) {
                    if (GameMain.app.cutlevel == ShopSetting.LevelSK[idnex]['LIMIT']) {
                        this.winUI.showUpLevel.visible = true;
                        this.winUI.showUpLevel2.visible = false;
                        this.winUI.showAvatar.skin = 'local/newBg/avatar_' + Number(idnex + 1) + '.png';
                        this.winUI.showUpLevel.skin = 'local/newBg/avatar_kuang.png';
                        GameMain.app.isShouYeUp = true;
                    }
                    else if (GameMain.app.cutlevel + 1 == ShopSetting.LevelSK[idnex]['LIMIT']) {
                        this.winUI.showUpLevel.visible = false;
                        this.winUI.showUpLevel2.visible = true;
                        this.winUI.showAvatar2.skin = 'local/newBg/avatar_' + Number(idnex + 1) + '.png';
                    }
                }
            }
            // GameMain.app.ismingpai = false;
            var nowTime = Math.floor(((new Date()).getTime()) / 1000);
            var continuonstime = nowTime - GameMain.app.gameStartTime;
            wxCore.uo.commitTotle("win_game", { "create_time": "", "session_id": "", "is_new": "", "true_current_level": GameMain.app.cutlevel, "end_game_time": nowTime, "duration_time": continuonstime });
            //体力
            if (ShopSetting.powerStyle == 1) {
                if (ShopSetting.nowPpower > 0) {
                    ShopSetting.nowPpower -= 1;
                    GameMain.app.mWX.startCutDown(true);
                    ShopSetting.powerConsumeTime = Math.floor(new Date().getTime() / 1000);
                    GameMain.app.mWX.setUserValue('resume_physical_power_time', ShopSetting.powerConsumeTime + '');
                    GameMain.app.mWX.setUserValue('now_physical_power', ShopSetting.nowPpower + '');
                }
            }
            //胜利获得金币
            GameMain.app.mWX.recordingCoins(Number(30 + GameMain.app.cutlevel * 4 + Number(ShopSetting.nowcoin)));
            this.winUI.coinCount.text = Number(30 + GameMain.app.cutlevel * 4) + '';
            GameMain.app.mWX.reportMark(GameMain.app.cutlevel);
        };
        win.prototype.onClickStartNewGame = function () {
            this.hideADBanner();
            this.winUI.visible = false;
            GameGlobal.Dispatcher.GetInstance().brodcastEvent(GameGlobal.EVENT.onClickNewGame);
            pokerGame.SoundPlayer.PlaySound(1);
        };
        win.prototype.hideADBanner = function () {
            GameMain.app.mWX.hideADBanner();
        };
        win.prototype.showADBanner = function () {
            if (GameMain.app.mWX != null) {
                GameMain.app.mWX.initBannerAD();
            }
        };
        return win;
    }());
    pokerUI.win = win;
})(pokerUI || (pokerUI = {}));
//# sourceMappingURL=win.js.map