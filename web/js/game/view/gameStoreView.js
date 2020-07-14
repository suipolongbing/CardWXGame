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
var gameStoreView = /** @class */ (function (_super) {
    __extends(gameStoreView, _super);
    function gameStoreView() {
        var _this = _super.call(this) || this;
        _this.imgArray = [];
        _this.propIdArray = [];
        _this.dataArray = [];
        _this.shinning = null;
        _this.selectId = -1;
        _this.selectName = '';
        _this.selectPrice = 0;
        _this.initGame();
        return _this;
    }
    gameStoreView.prototype.onShow = function (bool) {
        if (bool) {
            this.visible = true;
            this.addEvent();
            this.initRepeat();
        }
        else {
            this.visible = false;
            this.removeEvent();
        }
    };
    gameStoreView.prototype.addEvent = function () {
        this.card1.on(Laya.Event.CLICK, this, this.select, [0]);
        this.card2.on(Laya.Event.CLICK, this, this.select, [1]);
        this.card3.on(Laya.Event.CLICK, this, this.select, [2]);
        this.card4.on(Laya.Event.CLICK, this, this.select, [3]);
        this.card5.on(Laya.Event.CLICK, this, this.select, [4]);
        this.card6.on(Laya.Event.CLICK, this, this.select, [5]);
        this.buyBtn.on(Laya.Event.CLICK, this, this.bugProps);
        this.detBtn.on(Laya.Event.CLICK, this, this.detBuy);
        this.celBtn.on(Laya.Event.CLICK, this, this.celBuy);
        this.backBtn.on(Laya.Event.CLICK, this, this.exitBtn);
    };
    gameStoreView.prototype.removeEvent = function () {
    };
    gameStoreView.prototype.initGame = function () {
        this.height = Laya.stage.height;
        this.imgArray = [this.img1, this.img2, this.img3, this.img4, this.img5, this.img6, this.img0];
        this.imgArray.forEach(function (img) {
            var iconImg = new Laya.Image();
            iconImg.name = "iconImg";
            img.addChild(iconImg);
            iconImg.anchorX = 0.5;
            iconImg.anchorY = 0.5;
            iconImg.pos(img.width / 2, img.height / 2);
            var signImg = new Laya.Image();
            signImg.name = "signImg";
            img.addChild(signImg);
            signImg.scale(0.2, 0.2);
            signImg.pos(5, 25);
            var numTxt = new Laya.Label();
            numTxt.name = "numTxt";
            img.addChild(numTxt);
            numTxt.color = "#000000";
            numTxt.font = "SimHei";
            numTxt.fontSize = 50;
            numTxt.pos(5, 5);
            var nameTxt = new Laya.Label();
            nameTxt.name = "nameTxt";
            img.addChild(nameTxt);
            nameTxt.color = "#000000";
            nameTxt.font = "SimHei";
            nameTxt.fontSize = 18;
            nameTxt.anchorX = 0.5;
            nameTxt.anchorY = 0.5;
            nameTxt.bold = true;
            nameTxt.pos(img.width / 2, 110);
            var descTxt = new Laya.Label();
            descTxt.name = "descTxt";
            img.addChild(descTxt);
            descTxt.color = "#000000";
            descTxt.font = "SimHei";
            descTxt.fontSize = 10;
            descTxt.anchorX = 0.5;
            descTxt.visible = false;
            descTxt.pos(img.width / 2, 123);
        });
    };
    gameStoreView.prototype.initRepeat = function () {
        var _this = this;
        if (!!this.shinning) {
            this.shinning.removeSelf();
            this.shinning.destroy();
            this.shinning = null;
        }
        this.dataArray = [];
        this.propIdArray = [];
        this.coinLabel.text = '碎银:' + heroStorage.Inst.Coin + '$';
        this.cardDesc.text = '描述:';
        this.card0.visible = true;
        this.card1.visible = true;
        this.card2.visible = true;
        this.card3.visible = true;
        this.card4.visible = true;
        this.card5.visible = true;
        this.card6.visible = true;
        // var treasureArray = [{}];
        // if (heroStorage.Inst.KongFuArray.length > 0) {
        //     for (let z = 1; z < CardConstant.CardTreasure.length; z++) {
        //         var bool = false;
        //         for (let y = 0; y < heroStorage.Inst.KongFuArray.length; y++) {
        //             if (heroStorage.Inst.KongFuArray[y].id == CardConstant.CardTreasure[z].id) {
        //                 bool = true;
        //                 break;
        //             }
        //         }
        //         if (!bool) {
        //             treasureArray.push(CardConstant.CardTreasure[z]);
        //         }
        //     }
        // }
        // else {
        //     for (let c = 1; c < CardConstant.CardTreasure.length; c++) {
        //         treasureArray.push(CardConstant.CardTreasure[c]);
        //     }
        // }
        this.imgArray.forEach(function (element, index) {
            // for (let i = 1; i < treasureArray.length; i++) {
            //     if (this.propIdArray.length > 0) {
            //         var bool = false;
            //         for (let j = 0; j < this.propIdArray.length; j++) {
            //             if (this.propIdArray[j] == treasureArray[i].id) {
            //                 bool = true;
            //             }
            //         }
            //         if (!bool) {
            //             array.push(treasureArray[i]);
            //         }
            //     } else {
            //         array.push(treasureArray[i]);
            //     }
            // }
            for (var i = 1; i < CardConstant.CardStore.length; i++) {
                if (_this.propIdArray.length > 0) {
                    var bool = false;
                    for (var j = 0; j < _this.propIdArray.length; j++) {
                        if (_this.propIdArray[j] == CardConstant.CardStore[i].id) {
                            bool = true;
                        }
                    }
                    if (!bool) {
                        _this.dataArray.push(CardConstant.CardStore[i]);
                    }
                }
                else {
                    _this.dataArray.push(CardConstant.CardStore[i]);
                }
            }
            var num = MathUtils.getRandom(0, _this.dataArray.length - 1);
            //console.log("array[num]:", this.dataArray[num])
            _this.propIdArray[index] = num + '';
            var price = Number(_this.dataArray[num]['price']) + Math.floor(BaseViewManager.Inst.sceneTable.nextNum);
            element.getChildByName("numTxt").text = price.toString() + '$';
            if (index == _this.imgArray.length - 1) {
                _this.desc0.text = '描述:' + _this.dataArray[num]['desc'];
                element.getChildByName("numTxt").text = '';
            }
            element.getChildByName("iconImg").skin = '';
            element.getChildByName("signImg").skin = '';
            element.getChildByName("nameTxt").text = _this.dataArray[num]['name'];
            element.getChildByName("descTxt").text = _this.dataArray[num]['desc'];
        });
        if (this.imgArray[this.imgArray.length - 1].getChildByName("nameTxt").text.indexOf('功法') != -1) {
            heroStorage.Inst.SetKongFuArray(this.imgArray[this.imgArray.length - 1].getChildByName("nameTxt").text);
            BaseViewManager.Inst.sceneTable.refreshHeroUI();
        }
        else {
            heroStorage.Inst.SetPropsArray(this.imgArray[this.imgArray.length - 1].getChildByName("nameTxt").text);
            BaseViewManager.Inst.sceneTable.refreshHeroUI();
        }
    };
    gameStoreView.prototype.bugProps = function () {
        if (this.selectId == -1) {
            return;
        }
        this.finishSelectFrame.visible = true;
        this.selectName = this.imgArray[this.selectId].getChildByName("nameTxt").text;
        if (this.imgArray[this.selectId].getChildByName("numTxt").text.indexOf('$') != -1) {
            this.selectPrice = Number(this.imgArray[this.selectId].getChildByName("numTxt").text.replace('$', ''));
        }
        else {
            this.selectPrice = 0;
        }
        this.prop.text = this.selectName;
        this.title.text = "是否花费" + this.selectPrice + "$购买";
    };
    gameStoreView.prototype.select = function (num) {
        if (!this.shinning) {
            this.shinning = new Laya.Image();
            this.shinning.skin = 'new/game_image_shinning2.png';
            this.shinning.size(141, 190);
        }
        this.selectId = num;
        this.cardDesc.text = '描述:' + this.imgArray[this.selectId].getChildByName("descTxt").text;
        this.imgArray[num].addChild(this.shinning);
        this.shinning.pos(-19, -19);
    };
    gameStoreView.prototype.detBuy = function () {
        if (heroStorage.Inst.Coin < this.selectPrice) {
            return;
        }
        heroStorage.Inst.SetCoin(-this.selectPrice);
        this.coinLabel.text = '碎银:' + heroStorage.Inst.Coin + '$';
        this.imgArray[this.selectId].parent.visible = false;
        this.selectId = -1;
        if (!!this.shinning) {
            this.shinning.removeSelf();
            this.shinning.destroy();
            this.shinning = null;
        }
        heroStorage.Inst.SetPropsArray(this.selectName);
        BaseViewManager.Inst.sceneTable.refreshHeroUI();
        this.clearFrame();
    };
    gameStoreView.prototype.celBuy = function () {
        this.clearFrame();
    };
    gameStoreView.prototype.clearFrame = function () {
        this.finishSelectFrame.visible = false;
        this.prop.text = '';
        this.selectName = '';
        this.selectPrice = 0;
    };
    gameStoreView.prototype.exitBtn = function () {
        this.onShow(false);
    };
    return gameStoreView;
}(ui.game.gameStoreUI));
//# sourceMappingURL=gameStoreView.js.map