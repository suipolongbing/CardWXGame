/**
* name
*/
var pokerUI;
(function (pokerUI) {
    var gameBottom = /** @class */ (function () {
        function gameBottom() {
            var a = 'a';
            if (a == 'a')
                a = 'a';
            Laya.loader.load([{ url: "res/atlas/UI.atlas", type: Laya.Loader.ATLAS }], Laya.Handler.create(this, this.onUILoad));
        }
        gameBottom.prototype.onUILoad = function () {
            this.gameBottom = new ui.poker.gameBottomUI();
            // if (GameMain.app.mWX.fhOnoff == 0) {
            this.gameBottom.getChildByName("rules")["visible"] = false;
            this.gameBottom.getChildByName("showHiddenCard")["visible"] = false;
            // }
            Laya.stage.addChild(this.gameBottom);
            this.gameBottom.visible = false;
            this.gameBottom.showPopup.on(Laya.Event.CLICK, this, this.onClickShowPopup, [0]); //.clickHandler = new Laya.Handler(this,this.onClickShowPopup);
            this.gameBottom.back.on(Laya.Event.CLICK, this, this.onClickBackStep);
            this.gameBottom.showTips.on(Laya.Event.CLICK, this, this.onClickTips);
            this.gameBottom.showHiddenCard.on(Laya.Event.CLICK, this, this.OnClickShowAllHiddenCard);
            this.gameBottom.autoPlay.on(Laya.Event.CLICK, this, this.OnClickAutoBackToAceCardDeck);
            this.gameBottom.set.on(Laya.Event.CLICK, this, this.onClickSetting);
            this.gameBottom.size.on(Laya.Event.CLICK, this, this.onClickShowPopup, [1]);
            if (GameMain.app.mWX.fhOnoff == 1) {
                this.gameBottom.size.visible = true;
            }
            else {
                this.gameBottom.size.visible = false;
            }
            this.gameBottom.rules.on(Laya.Event.CLICK, this, this.OnClickGameStartTutorial);
            this.SetAutoEnable(false);
            GameGlobal.Dispatcher.sendEvent(GameGlobal.EVENT.onTableUILoadedDone);
        };
        gameBottom.prototype.onClickSetting = function () {
            if (GameMain.app.isXinShow) {
                return;
            }
            GameGlobal.Dispatcher.GetInstance().brodcastEvent(GameGlobal.EVENT.onClickSetting);
            pokerGame.SoundPlayer.PlaySound(1);
        };
        gameBottom.prototype.IsAutoEnable = function () {
            return !this.gameBottom.autoPlay.disabled;
        };
        gameBottom.prototype.SetAutoEnable = function (isEnable) {
            this.gameBottom.autoPlay.disabled = !isEnable;
            this.gameBottom.autoPlayText.disabled = !isEnable;
        };
        gameBottom.prototype.onClickShowPopup = function (type) {
            if (type === void 0) { type = 0; }
            if (GameMain.app.isXinShow) {
                return;
            }
            GameGlobal.Dispatcher.GetInstance().brodcastEvent(GameGlobal.EVENT.onClickShowPopup, [type]);
            pokerGame.SoundPlayer.PlaySound(1);
        };
        gameBottom.prototype.onClickTips = function () {
            if (GameMain.app.isXinShow) {
                return;
            }
            this.shareToInvite2();
        };
        gameBottom.prototype.onClickBackToMain = function () {
            pokerGame.SoundPlayer.PlaySound(1);
            //GameGlobal.Dispatcher.GetInstance().brodcastEvent(GameGlobal.EVENT.onClickBackToMain);
        };
        gameBottom.prototype.onClickBackStep = function (type) {
            if (GameMain.app.isXinShow) {
                return;
            }
            GameGlobal.Dispatcher.GetInstance().brodcastEvent(GameGlobal.EVENT.onClickBackStep, [type]);
            pokerGame.SoundPlayer.PlaySound(1);
            // this.shareToInvite()
        };
        gameBottom.prototype.OnClickShowAllHiddenCard = function () {
            GameGlobal.Dispatcher.GetInstance().brodcastEvent(GameGlobal.EVENT.OnClickShowAllHiddenCard);
            pokerGame.SoundPlayer.PlaySound(1);
        };
        gameBottom.prototype.OnClickAutoBackToAceCardDeck = function () {
            GameGlobal.Dispatcher.GetInstance().brodcastEvent(GameGlobal.EVENT.OnClickAutoBackToAceCardDeck);
            pokerGame.SoundPlayer.PlaySound(1);
        };
        gameBottom.prototype.OnClickGameStartTutorial = function () {
            GameGlobal.Dispatcher.GetInstance().brodcastEvent(GameGlobal.EVENT.OnClickGameStartTutorial);
            pokerGame.SoundPlayer.PlaySound(1);
        };
        /* 分享到群 */
        gameBottom.prototype.shareToInvite = function () {
            GameMain.app.mShares++;
            GameMain.shareIndex = 1;
            GameMain.app.mShareCurrentTime = GameMain.app.getCurrTime();
            var shareTitle = "这局太难了，听说只有1%完成了。";
            var shareImg = "login/share.jpg";
            var surl = "2";
            if (GameMain.app.mWX.shareUrl.length > 0) {
                shareTitle = GameMain.app.mWX.shareUrl[0]["title"];
                shareImg = GameMain.app.mWX.shareUrl[0]["url"];
                // surl = GameMain.app.mWX.shareUrl[0]["id"];
            }
            wx.shareAppMessage({
                title: shareTitle,
                imageUrl: shareImg,
            });
            // var htmlC = this.gameBottom.drawToCanvas(76, 116, 0, 0);
            // var canvas = htmlC.getCanvas();
            // canvas.toTempFilePath({
            // 	x: 0,
            // 	y: 0,
            // 	width: 50,
            // 	height: 40,
            // 	destWidth: 50,
            // 	destHeight: 40,
            // 	success: function (res) {
            // 		wx.shareAppMessage({
            // 			imageUrl: res.tempFilePath,
            // 			title: "string"
            // 		})
            // 	}
            // });
        };
        /* 分享到群 */
        gameBottom.prototype.shareToInvite2 = function () {
            GameMain.app.mShares++;
            GameMain.shareIndex = 2;
            GameMain.app.mShareCurrentTime = GameMain.app.getCurrTime();
            var shareTitle = "这局太难了，听说只有1%完成了。";
            var shareImg = "login/share.jpg";
            var surl = "3";
            if (GameMain.app.mWX.shareUrl.length > 0) {
                shareTitle = GameMain.app.mWX.shareUrl[0]["title"];
                shareImg = GameMain.app.mWX.shareUrl[0]["url"];
                // surl = GameMain.app.mWX.shareUrl[2]["id"];
            }
            wx.shareAppMessage({
                title: shareTitle,
                imageUrl: shareImg,
            });
            // wxCore.uo.commitTotle("icon_page", { "create_time": "", "session_id": "", "is_new": "", "icon_type": 'Show_Tips' });
        };
        return gameBottom;
    }());
    pokerUI.gameBottom = gameBottom;
})(pokerUI || (pokerUI = {}));
//# sourceMappingURL=gameBottom.js.map