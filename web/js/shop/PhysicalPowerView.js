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
var PhysicalPowerView = /** @class */ (function (_super) {
    __extends(PhysicalPowerView, _super);
    function PhysicalPowerView() {
        var _this = _super.call(this) || this;
        _this.isStart = false;
        _this.isStartViewOpen = 0;
        _this.init();
        return _this;
    }
    PhysicalPowerView.prototype.init = function () {
        this.btnClose.on(Laya.Event.CLICK, this, this.closeT);
        this.shareBtn.on(Laya.Event.CLICK, this, this.share);
        this.watchTvBtn.on(Laya.Event.CLICK, this, this.watchTv);
        Laya.timer.frameLoop(1, this, this.update);
        if (GameMain.app.mWX.fhOnoff == 0) {
            this.shareBtn.visible = false;
            this.watchTvBtn.x = 196;
        }
        else {
            this.shareBtn.visible = true;
            this.watchTvBtn.x = 287;
        }
    };
    PhysicalPowerView.prototype.refreshCoinAndPower = function (type) {
        if (type === void 0) { type = 0; }
        this.isStart = true;
        this.isStartViewOpen = type;
    };
    PhysicalPowerView.prototype.closeT = function () {
        if (this.isStartViewOpen == 1) {
            if (GameMain.app.mWX.gameClub != null)
                GameMain.app.mWX.gameClub.show();
        }
        this.isStart = false;
        this.close();
    };
    PhysicalPowerView.prototype.share = function () {
        GameMain.app.mShares++;
        GameMain.shareIndex = 12;
        GameMain.app.mShareCurrentTime = GameMain.app.getCurrTime();
        var shareTitle = "这局太难了，听说只有1%完成了。";
        var shareImg = "login/share.jpg";
        var surl = "3";
        if (GameMain.app.mWX.shareUrl.length > 0) {
            shareTitle = GameMain.app.mWX.shareUrl[0]["title"];
            shareImg = GameMain.app.mWX.shareUrl[0]["url"];
        }
        wx.shareAppMessage({
            title: shareTitle,
            imageUrl: shareImg,
        });
    };
    PhysicalPowerView.prototype.watchTv = function () {
        var _this = this;
        VideoADUtil.playVideo(function () {
            GameGlobal.Dispatcher.sendEvent(GameGlobal.EVENT.AddPhysicalPower, [true]);
        }, function () {
            _this.share();
        }, function () {
        });
    };
    PhysicalPowerView.prototype.update = function () {
        if (this.isStart) {
            this.recoverTime.text = '' + ShopSetting.powerLabel;
            this.powerLabel.text = ShopSetting.nowPpower + '/' + ShopSetting.nowPowerMax;
            if (ShopSetting.nowPpower >= ShopSetting.nowPowerMax) {
                this.recoverImg.visible = false;
            }
            else {
                this.recoverImg.visible = true;
            }
        }
    };
    return PhysicalPowerView;
}(ui.PhysicalPowerViewUI));
//# sourceMappingURL=PhysicalPowerView.js.map