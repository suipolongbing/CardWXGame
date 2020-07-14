/**
* name
*/
var pokerUI;
(function (pokerUI) {
    var gamePopup = /** @class */ (function () {
        function gamePopup() {
            //	Laya.loader.load("res/atlas/UI.atlas",Laya.Handler.create(this,this.onUILoad));
            //Laya.loader.load([{url: "res/atlas/UI.atlas", type: Laya.Loader.ATLAS}], Laya.Handler.create(this, this.onUILoad));
            //加载版本信息文件
            Laya.loader.load([{ url: "res/atlas/UI.atlas", type: Laya.Loader.ATLAS }], Laya.Handler.create(this, this.onUILoad));
            var a = 'a';
            if (a == 'a')
                a = 'a';
        }
        gamePopup.prototype.onUILoad = function () {
            this.gamePopup = new ui.poker.gamePopupUI();
            Laya.stage.addChild(this.gamePopup);
            this.gamePopup.visible = false;
            this.gamePopup.endGame.visible = false;
            this.gamePopup.CloseBTN.on(Laya.Event.CLICK, this, this.ClickClosePopup);
            this.gamePopup.NEWGame.on(Laya.Event.CLICK, this, this.onClickNewGame);
            this.gamePopup.EndGame.on(Laya.Event.CLICK, this, this.onClickEndGame);
            this.gamePopup.RETRY.on(Laya.Event.CLICK, this, this.onClickRetry);
            this.gamePopup.bigK.on(Laya.Event.CLICK, this, this.onClickCardSize, [1]);
            this.gamePopup.smallK.on(Laya.Event.CLICK, this, this.onClickCardSize, [0]);
            this.gamePopup.jump.on(Laya.Event.CLICK, this, this.onClickTipJumpLevel);
            this.gamePopup.back.on(Laya.Event.CLICK, this, this.onClickBack);
        };
        gamePopup.prototype.ClickClosePopup = function () {
            this.gamePopup.visible = false;
            pokerGame.SoundPlayer.PlaySound(1);
        };
        gamePopup.prototype.onClickBack = function () {
            GameGlobal.Dispatcher.GetInstance().brodcastEvent(GameGlobal.EVENT.onClickBackToMain);
            GameGlobal.Dispatcher.GetInstance().brodcastEvent(GameGlobal.EVENT.onClearHistory);
            GameGlobal.Dispatcher.GetInstance().brodcastEvent(GameGlobal.EVENT.TipMaskVis, [false]);
            wxCore.uo.commitTotle("icon_page", { "create_time": "", "session_id": "", "is_new": "", "icon_type": 'To_Home' });
            pokerGame.SoundPlayer.PlaySound(1);
            this.gamePopup.visible = false;
        };
        gamePopup.prototype.onClickNewGame = function () {
            if (GameMain.app.isOpenFreeModel) {
                GameGlobal.Dispatcher.GetInstance().brodcastEvent(GameGlobal.EVENT.onClickNewGame);
                GameGlobal.Dispatcher.GetInstance().brodcastEvent(GameGlobal.EVENT.onClearHistory);
                GameGlobal.Dispatcher.GetInstance().brodcastEvent(GameGlobal.EVENT.TipMaskVis, [false]);
                wxCore.uo.commitTotle("icon_page", { "create_time": "", "session_id": "", "is_new": "", "icon_type": 'New_Game' });
            }
            else {
                GameGlobal.Dispatcher.GetInstance().brodcastEvent(GameGlobal.EVENT.onClickBackToMain);
                GameGlobal.Dispatcher.GetInstance().brodcastEvent(GameGlobal.EVENT.onClearHistory);
                GameGlobal.Dispatcher.GetInstance().brodcastEvent(GameGlobal.EVENT.TipMaskVis, [false]);
                wxCore.uo.commitTotle("icon_page", { "create_time": "", "session_id": "", "is_new": "", "icon_type": 'To_Home' });
            }
            pokerGame.SoundPlayer.PlaySound(1);
            this.gamePopup.visible = false;
        };
        gamePopup.prototype.onClickRetry = function () {
            GameGlobal.Dispatcher.GetInstance().brodcastEvent(GameGlobal.EVENT.onClickRetry);
            GameGlobal.Dispatcher.GetInstance().brodcastEvent(GameGlobal.EVENT.onClearHistory);
            GameGlobal.Dispatcher.GetInstance().brodcastEvent(GameGlobal.EVENT.TipMaskVis, [false]);
            pokerGame.SoundPlayer.PlaySound(1);
            // Laya.SoundManager.stopMusic();
            this.gamePopup.visible = false;
            wxCore.uo.commitTotle("icon_page", { "create_time": "", "session_id": "", "is_new": "", "icon_type": 'Retry_Game', 'level_retry': GameMain.app.cutlevel + 1 });
        };
        gamePopup.prototype.onClickEndGame = function () {
            GameGlobal.Dispatcher.GetInstance().brodcastEvent(GameGlobal.EVENT.onClickEndGame);
            pokerGame.SoundPlayer.PlaySound(1);
        };
        gamePopup.prototype.onClickCardSize = function (type) {
            Laya.LocalStorage.setItem("isChangeSize", type == 1 ? "1" : "0");
            GameGlobal.Dispatcher.GetInstance().brodcastEvent(GameGlobal.EVENT.onClickChangeCardSize, type);
            this.gamePopup.visible = false;
            pokerGame.SoundPlayer.PlaySound(1);
            wxCore.uo.commitTotle("icon_page", { "create_time": "", "session_id": "", "is_new": "", "icon_type": 'Retry_Game', 'is_big_size': type });
        };
        gamePopup.prototype.onClickTipJumpLevel = function () {
            this.gamePopup.visible = false;
        };
        return gamePopup;
    }());
    pokerUI.gamePopup = gamePopup;
})(pokerUI || (pokerUI = {}));
//# sourceMappingURL=gamePopup.js.map