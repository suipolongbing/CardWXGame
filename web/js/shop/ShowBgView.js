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
var ShowBgView = /** @class */ (function (_super) {
    __extends(ShowBgView, _super);
    function ShowBgView() {
        var _this = _super.call(this) || this;
        _this.itemIndex = 0;
        _this.ttype = 0;
        _this.cancel.on(Laya.Event.CLICK, _this, _this.onCancel);
        return _this;
    }
    ShowBgView.prototype.init = function (storeView, type, index, id, coins, count) {
        this.visible = false;
        this.bigStoreView = storeView;
        this.itemIndex = id;
        this.ttype = type;
        if (type == 1) {
            GameMain.app.mWX.showLoading();
            Laya.loader.load([{ url: util.getCDN() + "res1/background/bg" + ("" + index) + ".png", type: Laya.Loader.IMAGE }], Laya.Handler.create(this, this.onBgLoad, [util.getCDN() + "res1/background/bg" + ("" + index) + ".png"]));
            this.showCard1.skin = 'UI/game_image_smallK.png';
            this.showCard2.skin = 'UI/game_image_smallK.png';
            this.showCard3.skin = 'UI/game_image_smallK.png';
            this.showCard4.skin = 'UI/game_image_smallK.png';
            this.showCard5.skin = "local/\u5361\u80CC/CardBack_" + ShopSetting.nowCardBack + ".png";
        }
        else {
            this.onBgLoad(util.getCDN() + "res1/background/bg" + ("" + ShopSetting.nowUseBg) + ".png");
            this.showCard1.skin = "local/\u5361\u80CC/CardBack_" + id + ".png";
            this.showCard2.skin = "local/\u5361\u80CC/CardBack_" + id + ".png";
            this.showCard3.skin = "local/\u5361\u80CC/CardBack_" + id + ".png";
            this.showCard4.skin = "local/\u5361\u80CC/CardBack_" + id + ".png";
            this.showCard5.skin = 'UI/game_image_smallK.png';
        }
        ////console.log('count', count);
        if (count == 0) {
            this.buy.visible = true;
            this.change.visible = false;
            this.goldLabel.text = '' + coins;
            this.buy.on(Laya.Event.CLICK, this, this.buySkin);
            this.change.off(Laya.Event.CLICK, this, this.changeSkin);
        }
        else {
            this.buy.visible = false;
            this.change.visible = true;
            this.buy.off(Laya.Event.CLICK, this, this.buySkin);
            if (this.ttype == 1) {
                if (Number(ShopSetting.nowUseBg + 4000) == id) {
                    this.change.gray = true;
                    this.change.off(Laya.Event.CLICK, this, this.changeSkin);
                }
                else {
                    this.change.gray = false;
                    this.change.on(Laya.Event.CLICK, this, this.changeSkin);
                }
            }
            else {
                if (Number(ShopSetting.nowCardBack) == id) {
                    this.change.gray = true;
                    this.change.off(Laya.Event.CLICK, this, this.changeSkin);
                }
                else {
                    this.change.gray = false;
                    this.change.on(Laya.Event.CLICK, this, this.changeSkin);
                }
            }
        }
    };
    ShowBgView.prototype.onBgLoad = function (url) {
        wx.hideLoading({});
        this.visible = true;
        this.bg.skin = url;
    };
    ShowBgView.prototype.onCancel = function () {
        this.close();
    };
    ShowBgView.prototype.buySkin = function () {
        var that = this;
        GameMain.app.mWX.buyItem(this.itemIndex, function () {
            that.close();
            if (that.ttype == 1) {
                that.bigStoreView.onBtn1Bg();
            }
            else {
                that.bigStoreView.onBtn2Bg();
            }
        });
    };
    ShowBgView.prototype.changeSkin = function () {
        if (this.ttype == 1) {
            GameGlobal.Dispatcher.sendEvent(GameGlobal.EVENT.BuyBgSkin);
            ShopSetting.nowUseBg = Number(this.itemIndex - 4000);
            GameMain.app.mWX.setUserValue('now_use_bg', ShopSetting.nowUseBg + '');
            this.bigStoreView.onBtn1Bg();
        }
        else {
            GameGlobal.Dispatcher.sendEvent(GameGlobal.EVENT.BuyCardBackSkin);
            ShopSetting.nowCardBack = Number(this.itemIndex);
            GameMain.app.mWX.setUserValue('now_use_card_back', ShopSetting.nowCardBack + '');
            this.bigStoreView.onBtn2Bg();
        }
        wx.showToast({
            title: '更换成功',
            icon: "none",
            image: "",
            duration: 2000
        });
        this.close();
    };
    return ShowBgView;
}(ui.ShowBgViewUI));
//# sourceMappingURL=ShowBgView.js.map