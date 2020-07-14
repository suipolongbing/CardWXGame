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
var BigStoreView = /** @class */ (function (_super) {
    __extends(BigStoreView, _super);
    function BigStoreView() {
        var _this = _super.call(this) || this;
        _this.propPageIndex = 0;
        _this.allShopList = null;
        _this.skinList = new Array();
        _this.loadSkinIndex = 0;
        _this.isLoadSkin = false;
        _this.ttype = 1;
        _this.isStart = false;
        return _this;
    }
    BigStoreView.prototype.init = function () {
        this.btn1Bg.skin = 'local/商店/index_btn_游戏背景选中.png';
        this.btn2Bg.skin = 'local/商店/index_btn_游戏牌背未选中.png';
        this.getMsg(ShopSetting.shopListArray, 1);
        this.shopList.renderHandler = new Laya.Handler(this, this.updatelist);
        this.shopList.vScrollBarSkin = '';
        this.shopList.scrollBar.hide = true;
        this.shopList.scrollBar.elasticBackTime = 500;
        this.shopList.scrollBar.elasticDistance = 0;
        this.btnClose.on(Laya.Event.CLICK, this, this.CloseT);
        this.btn1Bg.on(Laya.Event.CLICK, this, this.onBtn1Bg);
        this.btn2Bg.on(Laya.Event.CLICK, this, this.onBtn2Bg);
        this.powerBox.on(Laya.Event.CLICK, this, this.getPower);
        var point = GameMain.app.mWX.getMenuButtonTop_CenterPoint();
        if (GameMain.app.mScreenHeight > 667) {
            this.powerBox.y = point.x + point.y / 2 - (GameMain.app.mScreenHeight - 667);
            this.goldBox.y = point.x + point.y / 2 - (GameMain.app.mScreenHeight - 667);
        }
        else {
            this.powerBox.y = point.x + point.y / 2;
            this.goldBox.y = point.x + point.y / 2;
        }
        Laya.timer.frameLoop(1, this, this.update);
    };
    BigStoreView.prototype.refreshCoinAndPower = function () {
        this.isStart = true;
    };
    BigStoreView.prototype.updatelist = function (cell, index) {
        // 默认渲染
        var bg = cell.getChildByName('itemBg');
        var lock = cell.getChildByName('itemBg').getChildByName('itemClose');
        var blabel = cell.getChildByName('itemBg').getChildByName('bottomLabel');
        var coinicon = cell.getChildByName('itemBg').getChildByName('bottomLabel').getChildByName('itemCoin');
        var price = cell.getChildByName('itemBg').getChildByName('bottomLabel').getChildByName('itemGold');
        var using = cell.getChildByName('itemBg').getChildByName('bottomLabel').getChildByName('itemUsing');
        var id = Number(cell.dataSource['id']);
        var coins = Number(cell.dataSource['coins']);
        var name = cell.dataSource['name'];
        var other = cell.dataSource['other'];
        var count = cell.dataSource['count'];
        // ////console.log('shoplist:', id, coins, other, count);
        bg.skin = 'local/商店/' + ("Skin_" + id + ".png");
        if (count == 0) {
            lock.visible = true;
            using.visible = false;
            coinicon.visible = true;
            price.text = '' + coins;
            price.visible = true;
        }
        else {
            lock.visible = false;
            using.visible = true;
            coinicon.visible = false;
            price.visible = false;
        }
        if (this.ttype == 1) {
            if (Number(ShopSetting.nowUseBg + 4000) == id) {
                using.skin = 'local/商店/shop_btn_正在使用.png';
                cell.off(Laya.Event.CLICK, this, this.openBgView);
            }
            else {
                using.skin = 'local/商店/shop_btn_已拥有.png';
                cell.on(Laya.Event.CLICK, this, this.openBgView, [1, index + 1, id, coins, count]);
            }
        }
        else if (this.ttype == 2) {
            if (Number(ShopSetting.nowCardBack) == id) {
                using.skin = 'local/商店/shop_btn_正在使用.png';
                cell.off(Laya.Event.CLICK, this, this.openBgView);
            }
            else {
                using.skin = 'local/商店/shop_btn_已拥有.png';
                cell.on(Laya.Event.CLICK, this, this.openBgView, [2, index + 1, id, coins, count]);
            }
        }
    };
    BigStoreView.prototype.getMsg = function (list, type) {
        // for (var i = 0; i <= list.length - 1; i++) {
        //     if (list[i]['open'] == 0) {
        //         list.splice(i, 1);
        //     }
        // }
        this.ttype = type;
        this.propPageIndex = 0;
        var newList = new Array();
        newList = [];
        if (type == 1) { //游戏背景
            for (var i = 0; i <= list.length - 1; i++) {
                if (Number(JSON.parse(list[i]['type'])) == 2) {
                    if (JSON.parse(list[i]['id']) == '4001') {
                        list[i]['count'] = 1;
                    }
                    newList.push(list[i]);
                }
            }
        }
        else if (type == 2) { //游戏牌背     
            for (var j = 0; j <= list.length - 1; j++) {
                if (Number(JSON.parse(list[j]['type'])) == 3) {
                    if (JSON.parse(list[j]['id']) == '5001') {
                        list[j]['count'] = 1;
                    }
                    newList.push(list[j]);
                }
            }
        }
        // else if (type == 3) { //道具
        //     for (var k = 0; k <= list.length - 1; k++) {
        //         if (list[k]['type'] == 3) {
        //             newList.push(list[k]);
        //         }
        //     }
        // }
        // for (var i = 0; i <= list.length - 1; i++) {
        // ////console.log('id:' + list[i]['id']);
        // ////console.log('open:' + Items.skinOpen[i]);
        // ////console.log('skpath:' + touch.AnimationDefine.SK_PATH_JELLYS[i]);
        // newList.push(list[i]);
        // this.listCellWidth++;
        // }
        this.shopList.array = newList;
        ////console.log('this.shopList.array', this.shopList.array);
    };
    BigStoreView.prototype.CloseT = function () {
        if (GameMain.app.mWX.gameClub != null)
            GameMain.app.mWX.gameClub.show();
        this.isStart = false;
        this.close();
    };
    BigStoreView.prototype.onBtn1Bg = function () {
        this.ttype = 1;
        this.btn1Bg.skin = 'local/商店/index_btn_游戏背景选中.png';
        this.btn2Bg.skin = 'local/商店/index_btn_游戏牌背未选中.png';
        this.goldLabel.text = ShopSetting.nowcoin + '';
        this.getMsg(ShopSetting.shopListArray, 1);
    };
    BigStoreView.prototype.onBtn2Bg = function () {
        this.ttype = 2;
        this.btn2Bg.skin = 'local/商店/index_btn_游戏牌背选中.png';
        this.btn1Bg.skin = 'local/商店/index_btn_游戏背景未选中.png';
        this.goldLabel.text = ShopSetting.nowcoin + '';
        this.getMsg(ShopSetting.shopListArray, 2);
    };
    BigStoreView.prototype.openBgView = function (type, index, id, coins, count) {
        if (!this.showBgView) {
            this.showBgView = new ShowBgView();
        }
        this.showBgView.init(this, type, index, id, coins, count);
        this.showBgView.popup();
    };
    BigStoreView.prototype.getPower = function () {
        if (!GameMain.app.physicalPowerView) {
            GameMain.app.physicalPowerView = new PhysicalPowerView();
        }
        GameMain.app.physicalPowerView.refreshCoinAndPower();
        GameMain.app.physicalPowerView.popup();
    };
    BigStoreView.prototype.update = function () {
        if (this.isStart) {
            this.goldLabel.text = ShopSetting.nowcoin + '';
            this.powerLabel.text = ShopSetting.nowPpower + '/' + ShopSetting.nowPowerMax;
        }
    };
    return BigStoreView;
}(ui.BigStoreViewUI));
//# sourceMappingURL=BigStoreView.js.map