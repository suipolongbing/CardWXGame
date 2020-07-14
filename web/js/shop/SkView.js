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
var SkView = /** @class */ (function (_super) {
    __extends(SkView, _super);
    function SkView() {
        var _this = _super.call(this) || this;
        _this.maxLength_1 = 19;
        _this.hideArray = new Array();
        _this.data = [];
        _this.init();
        return _this;
    }
    SkView.prototype.init = function () {
        this.btnClose.on(Laya.Event.CLICK, this, this.closeT, [true]);
        this.skList.renderHandler = new Laya.Handler(this, this.updatelist);
        this.skList.vScrollBarSkin = '';
        this.skList.scrollBar.hide = true;
        this.skList.scrollBar.elasticBackTime = 500;
        this.skList.scrollBar.elasticDistance = 20;
        for (var idnex = this.maxLength_1; idnex >= 0; idnex--) {
            this.data.push(ShopSetting.LevelSK[idnex]);
        }
        this.refresh();
        this.loopMove();
    };
    SkView.prototype.loopMove = function () {
        Laya.timer.loop(10, this, this.moveToDestItem);
    };
    SkView.prototype.nowLevel = function () {
        for (var idnex = this.maxLength_1; idnex >= 0; idnex--) {
            if (GameMain.app.cutlevel < ShopSetting.LevelSK[idnex]['LIMIT']) {
                ShopSetting.LevelNow = idnex;
            }
        }
        // ShopSetting.LevelNow = 7;
        ////console.log('ShopSetting.LevelNow', ShopSetting.LevelNow);
    };
    SkView.prototype.refresh = function () {
        this.nowLevel();
        this.skList.array = this.data;
    };
    SkView.prototype.closeT = function (bool) {
        this.moveToDestItem(false);
        this.hideArray.forEach(function (element) {
            element['sign'] = 0;
        });
        this.hideArray = [];
        if (bool) {
            if (GameMain.app.mWX.gameClub != null)
                GameMain.app.mWX.gameClub.show();
            this.close();
        }
    };
    SkView.prototype.updatelist = function (cell, index) {
        var bg1 = cell.getChildByName('bg1');
        var bg2 = cell.getChildByName('bg2');
        var topHeng = cell.getChildByName('topheng');
        var leftTxt = cell.getChildByName('bg1').getChildByName('leftTxt');
        var rightTxt = cell.getChildByName('bg1').getChildByName('rightTxt');
        if (bg1['sign'] != 1) {
            bg1['sign'] = 0;
        }
        if (ShopSetting.LevelNow > 3 && ShopSetting.LevelNow < this.maxLength_1 - 4) {
            if (bg1['sign'] == 0 && index > this.maxLength_1 - ShopSetting.LevelNow - 4 && this.maxLength_1 - ShopSetting.LevelNow + 4 > index) {
                bg1.alpha = 0;
                bg1.scale(0.8, 0.8);
                Laya.Tween.to(bg1, {
                    alpha: 1,
                    scaleX: 1,
                    scaleY: 1
                }, 100, Laya.Ease.sineOut, new Laya.Handler(this, function () {
                    bg1['sign'] = 1;
                    this.hideArray.push(bg1);
                }), (index - (this.maxLength_1 - ShopSetting.LevelNow - 4)) * 75, false);
            }
        }
        else if (ShopSetting.LevelNow <= 3) {
            if (bg1['sign'] == 0 && this.maxLength_1 - 7 < index) {
                bg1.alpha = 0;
                bg1.scale(0.8, 0.8);
                Laya.Tween.to(bg1, {
                    alpha: 1,
                    scaleX: 1,
                    scaleY: 1
                }, 100, Laya.Ease.sineOut, new Laya.Handler(this, function () {
                    bg1['sign'] = 1;
                    this.hideArray.push(bg1);
                }), (index - (this.maxLength_1 - 7)) * 75, false);
            }
        }
        else if (ShopSetting.LevelNow >= this.maxLength_1 - 4) {
            if (bg1['sign'] == 0 && index < 7) {
                bg1.alpha = 0;
                bg1.scale(0.8, 0.8);
                Laya.Tween.to(bg1, {
                    alpha: 1,
                    scaleX: 1,
                    scaleY: 1
                }, 100, Laya.Ease.sineOut, new Laya.Handler(this, function () {
                    bg1['sign'] = 1;
                    this.hideArray.push(bg1);
                }), index * 75, false);
            }
        }
        var ne = cell.dataSource['NAME'];
        var lt = cell.dataSource['LIMIT'];
        leftTxt.text = '' + ne;
        rightTxt.text = '完成第' + lt + '关';
        if (this.maxLength_1 - index < ShopSetting.LevelNow) {
            bg1.skin = 'local/交互/flip_bg_列表已解锁.png';
            bg2.skin = 'local/交互/pop_image_解锁圆圈.png';
            topHeng.skin = 'local/交互/pop_image_解锁升级.png';
            leftTxt.color = '#0E4466';
            rightTxt.color = '#0E4466';
        }
        else {
            if (this.maxLength_1 - index == ShopSetting.LevelNow) {
                bg1.skin = 'local/交互/pop_bg_列表当前.png';
                bg2.skin = 'local/交互/pop_image_当前等级方块.png';
                topHeng.skin = 'local/交互/pop_image_未解锁升级.png';
                leftTxt.color = '#643C18';
                rightTxt.color = '#643C18';
            }
            else {
                bg1.skin = 'local/交互/flip_bg_列表未解锁.png';
                bg2.skin = 'local/交互/pop_image_未解锁圆圈.png';
                topHeng.skin = 'local/交互/pop_image_未解锁升级.png';
                leftTxt.color = '#0E4466';
                rightTxt.color = '#0E4466';
            }
        }
    };
    SkView.prototype.moveToDestItem = function (bool) {
        // var deltaMove: number = 50;
        // var ex: number = this.skList.scrollBar.value + Laya.stage.height / 2;
        // var bx: number = this.selectedItem.x + this.selectedItem.width / 2 - ex;
        // var direct: number = bx < 0 ? -1 : 1;
        if (bool === void 0) { bool = true; }
        if (ShopSetting.LevelNow > 3 && ShopSetting.LevelNow < this.maxLength_1 - 4) {
            this.skList.scrollBar.setScroll(0, 14 * 120 + 30, (this.maxLength_1 - ShopSetting.LevelNow - 3) * 120 + (this.maxLength_1 - ShopSetting.LevelNow - 3) * 10);
        }
        else if (ShopSetting.LevelNow <= 3) {
            this.skList.scrollBar.setScroll(0, 14 * 120 + 30, 14 * 120 + 30);
        }
        else if (ShopSetting.LevelNow >= this.maxLength_1 - 4) {
            this.skList.scrollBar.setScroll(0, 14 * 120 + 30, 0);
        }
        Laya.timer.clear(this, this.moveToDestItem);
        ////console.log('ShopSetting.LevelNow222222', ShopSetting.LevelNow);
        if (bool)
            GameGlobal.Dispatcher.sendEvent(GameGlobal.EVENT.onRefreshStartSK);
    };
    return SkView;
}(ui.SKViewUI));
//# sourceMappingURL=SkView.js.map