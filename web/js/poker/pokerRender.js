/**
* 扑克图片渲染体
*/
var poker;
(function (poker) {
    var cardRenderType;
    (function (cardRenderType) {
        cardRenderType[cardRenderType["cardIMG"] = 0] = "cardIMG";
        cardRenderType[cardRenderType["cardBack"] = 1] = "cardBack";
        cardRenderType[cardRenderType["systemIMG"] = 2] = "systemIMG"; //系统图案
    })(cardRenderType = poker.cardRenderType || (poker.cardRenderType = {}));
    var pokerRender = /** @class */ (function () {
        function pokerRender() {
            this.shadowImg1 = null;
            this.mask1 = null;
            this.mask2 = null;
            /**卡牌正面背景地址 */
            this.ImageFileName = "";
            /**卡牌图案地址 */
            this.IconFileName = "";
            /**卡牌具体数值 */
            this.TxtFileNum = "";
            /**卡牌具体名字 */
            this.TxtFileName = "";
            /**卡牌标识地址 */
            this.SignFileName = "";
            /**卡牌具体描述 */
            this.TxtFileDesc = "";
            this.cardType = cardRenderType.cardIMG; //卡片图类型
            var a = 'a';
            if (a == 'a')
                a = 'a';
            this.img = new Laya.Image();
            this.img.size(102, 152);
            this.iconImg = new Laya.Image();
            this.img.addChild(this.iconImg);
            this.iconImg.anchorX = 0.5;
            this.iconImg.anchorY = 0.5;
            this.iconImg.pos(this.img.width / 2, this.img.height / 2);
            this.signImg = new Laya.Image();
            this.img.addChild(this.signImg);
            this.signImg.scale(0.2, 0.2);
            this.signImg.pos(5, 25);
            this.numTxt = new Laya.Label();
            this.img.addChild(this.numTxt);
            this.numTxt.color = "#000000";
            this.numTxt.font = "SimHei";
            this.numTxt.fontSize = 20;
            this.numTxt.pos(5, 5);
            this.nameTxt = new Laya.Label();
            this.img.addChild(this.nameTxt);
            this.nameTxt.color = "#000000";
            this.nameTxt.font = "SimHei";
            this.nameTxt.fontSize = 18;
            this.nameTxt.anchorX = 0.5;
            this.nameTxt.anchorY = 0.5;
            this.nameTxt.bold = true;
            this.nameTxt.pos(this.img.width / 2, 110);
            this.descTxt = new Laya.Label();
            this.img.addChild(this.descTxt);
            this.descTxt.color = "#000000";
            this.descTxt.font = "SimHei";
            this.descTxt.fontSize = 10;
            this.descTxt.anchorX = 0.5;
            this.descTxt.pos(this.img.width / 2, 123);
            this.img.rotation = MathUtils.getRandom(-1, 1, false);
        }
        pokerRender.prototype.initSD = function () {
            if (!this.shadowImg1) {
                this.shadowImg1 = new Laya.Image();
                this.shadowImg1.skin = 'UI/game_image_sd5.png';
                this.shadowImg1.size(102, 152);
                this.shadowImg1.pos(5, 5);
                this.img.addChild(this.shadowImg1);
            }
        };
        pokerRender.ReadSkin = function (type, bool) {
            // this.rsty = type;
            // ////console.log('l3', pokerUI, pokerUI.shop, pokerUI.shop.ItemSelectedInPage3);
            // pokerRender.backSkinName = pokerUI.shop.ItemSelectedInPage3.ItemIcon;
            // pokerRender.backSkinName = `local/卡背/CardBack_${ShopSetting.nowCardBack}.png`;
            // // ////console.log('l4');
            // if (GameMain.app.mWX.fhOnoff == 0) {
            // 	// ////console.log('l5');
            // 	pokerRender.cardSkinName = "poker4/"
            // } else {
            // 	// ////console.log('l6');
            // 	if (type == 0) {
            // 		pokerRender.cardSkinName = pokerUI.shop.ItemSelectedInPage2.ItemIcon;
            // 	} else {
            // 		if (bool) {
            // 			pokerRender.cardSkinName = "poker5/"
            // 		} else {
            // 			pokerRender.cardSkinName = "poker6/"
            // 		}
            // 	}
            if (type === void 0) { type = 0; }
            if (bool === void 0) { bool = false; }
            // }
            // ////console.log('l7');
        };
        pokerRender.prototype.Dispose = function () {
            if (this.img) {
                this.img.removeSelf();
                this.img.dispose();
                this.img = null;
            }
        };
        pokerRender.prototype.ChangeRenderToSystemCard = function (systemImgName) {
            this.cardType = cardRenderType.systemIMG;
            this.ImageFileName = "system/" + systemImgName;
            //Laya.loader.load("res/atlas/system.atlas",Laya.Handler.create(this,this.onLoadedSystemIMG));	
            Laya.loader.load([{ url: "res/atlas/system.atlas", type: Laya.Loader.ATLAS }], Laya.Handler.create(this, this.onLoadedSystemIMG));
        };
        pokerRender.prototype.ChangeRenderByData = function (data) {
            if (!this.shadowImg1) {
                this.initSD();
            }
            if (data.IsCardBack) {
                this.cardType = cardRenderType.cardBack;
                //this.ImageFileName=this.GetImgFileName(data);
                // if (pokerUI.shop.ItemSelectedInPage3 != null) {
                this.onCardBackIMGLoaded();
                // }
            }
            else {
                this.cardType = cardRenderType.cardIMG;
                this.ImageFileName = pokerRender.cardSkinName + pokerRender.GetImgFileName(data);
                this.IconFileName = pokerRender.cardSkinName + pokerRender.GetIconFileName(data);
                this.SignFileName = pokerRender.cardSkinName + pokerRender.GetSignFileName(data);
                this.TxtFileName = pokerRender.GetTxtFileName(data);
                this.TxtFileDesc = pokerRender.GetTxtFileDesc(data);
                this.TxtFileNum = pokerRender.GetTxtFileNum(data);
                //console.log("ChangeRenderByData:", this.SignFileName, this.TxtFileName, this.TxtFileDesc, this.TxtFileNum)
                this.onLoadedCardIMG();
                // if (pokerUI.shop.ItemSelectedInPage2 != null) {
                // 	this.ImageFileName = pokerRender.cardSkinName + pokerRender.GetImgFileName(data);
                // 	pokerUI.shop.ItemSelectedInPage2.ItemIcon + pokerRender.GetImgFileName(data);
                // 	// //console.log('pokerUI.shop.ItemSelectedInPage2.ItemAtlas', pokerUI.shop.ItemSelectedInPage2.ItemAtlas);
                // 	Laya.loader.load(pokerUI.shop.ItemSelectedInPage2.ItemAtlas, Laya.Handler.create(this, this.onLoadedCardIMG, [0]));
                // 	if (GameMain.app.mWX.fhOnoff == 0) {
                // 		if (GameMain.app.isBackToFront) {
                // 			GameMain.app.isBackToFront = false;
                // 			// ////console.log('diudududududud1', data);
                // 			Laya.loader.load([{ url: "res/atlas/poker4.atlas", type: Laya.Loader.ATLAS }], Laya.Handler.create(this, this.onLoadedCardIMG, [1]));
                // 		} else {
                // 			Laya.loader.load([{ url: "res/atlas/poker4.atlas", type: Laya.Loader.ATLAS }], Laya.Handler.create(this, this.onLoadedCardIMG, [0]));
                // 		}
                // 	} else {
                // 		if (pokerRender.rsty == 0) {
                // 			if (GameMain.app.isBackToFront) {
                // 				GameMain.app.isBackToFront = false;
                // 				// ////console.log('diudududududud1', data);
                // 				Laya.loader.load([{ url: "res/atlas/poker5.atlas", type: Laya.Loader.ATLAS }], Laya.Handler.create(this, this.onLoadedCardIMG, [1]));
                // 			} else {
                // 				Laya.loader.load([{ url: "res/atlas/poker5.atlas", type: Laya.Loader.ATLAS }], Laya.Handler.create(this, this.onLoadedCardIMG, [0]));
                // 			}
                // 		} else {
                // 			if (GameMain.app.isBackToFront) {
                // 				GameMain.app.isBackToFront = false;
                // 				// ////console.log('diudududududud1', data);
                // 				Laya.loader.load([{ url: "res/atlas/poker6.atlas", type: Laya.Loader.ATLAS }], Laya.Handler.create(this, this.onLoadedCardIMG, [1]));
                // 			} else {
                // 				Laya.loader.load([{ url: "res/atlas/poker6.atlas", type: Laya.Loader.ATLAS }], Laya.Handler.create(this, this.onLoadedCardIMG, [0]));
                // 			}
                // 		}
                // 	}
                // }
            }
        };
        pokerRender.prototype.onCardBackIMGLoaded = function () {
            if (this.cardType != cardRenderType.cardBack) {
                return;
            }
            this.img.graphics.clear();
            this.img.skin = '';
            this.iconImg.skin = '';
            this.signImg.skin = '';
            this.descTxt.text = '';
            this.nameTxt.text = '';
            this.numTxt.text = '';
            this.shadowImg1.visible = false;
        };
        pokerRender.prototype.onLoadedCardIMG = function (bools) {
            if (bools === void 0) { bools = 0; }
            if (this.cardType != cardRenderType.cardIMG) {
                return;
            }
            if (bools == 1) {
                this.img.skin = '';
                this.img.size(102, 152);
                this.shadowImg1.visible = false;
                var x1;
                var x2;
                if (!x1) {
                    x1 = new Laya.Image();
                }
                if (!x2) {
                    x2 = new Laya.Image();
                }
                x1.size(this.img.width, this.img.height);
                x2.size(this.img.width, this.img.height);
                x1.skin = pokerRender.backSkinName;
                x2.skin = this.ImageFileName;
                this.img.addChild(x1);
                this.img.addChild(x2);
                x1.scaleX = 1;
                x2.scaleX = 0;
                x1.anchorX = 0.5;
                x2.anchorX = 0.5;
                x1.pos(x1.width / 2, 0);
                x2.pos(x2.width / 2, 0);
                Laya.Tween.to(x1, { scaleX: 0 }, CardSpeedSetting.speed9, Laya.Ease.linearIn, new Laya.Handler(this, function () {
                    Laya.Tween.to(x2, { scaleX: 1 }, CardSpeedSetting.speed9, Laya.Ease.linearOut, new Laya.Handler(this, function () {
                        x1.removeSelf();
                        x2.removeSelf();
                        x1 = null;
                        x2 = null;
                        var newSkinName = this.ImageFileName;
                        if (this.img.skin != newSkinName) {
                            this.img.graphics.clear();
                            this.img.skin = this.ImageFileName;
                        }
                        this.shadowImg1.visible = true;
                    }));
                }));
            }
            else {
                if (GameMain.app.isNotDraging) {
                    return;
                }
                // var newSkinName = this.ImageFileName;
                // if (this.img.skin != newSkinName) {
                // 	this.img.graphics.clear();
                this.img.skin = '';
                this.iconImg.skin = '';
                this.signImg.skin = '';
                this.descTxt.text = '';
                this.nameTxt.text = '';
                this.numTxt.text = '';
                this.img.skin = this.ImageFileName;
                this.iconImg.skin = this.IconFileName;
                this.signImg.skin = this.SignFileName;
                this.descTxt.text = this.TxtFileDesc;
                this.nameTxt.text = this.TxtFileName;
                this.numTxt.text = this.TxtFileNum;
                // }
            }
        };
        pokerRender.prototype.onLoadedSystemIMG = function () {
            if (this.cardType != cardRenderType.systemIMG) {
                return;
            }
            var newSkinName = this.ImageFileName;
            if (this.img.skin != newSkinName) {
                this.img.graphics.clear();
                this.img.skin = this.ImageFileName;
                // console.debug("this.img.skin="+this.img.skin);
            }
        };
        pokerRender.GetImgFileNameWithTypeNum = function (type, pokerNum) {
            var data = new poker.pokerdata(type, pokerNum);
            return pokerRender.GetImgFileName(data);
        };
        pokerRender.GetImgFileName = function (data) {
            var typeStr = "";
            switch (data.mType) {
                case PokerType.blood:
                    typeStr = "";
                    break;
                case PokerType.coin:
                    typeStr = "";
                    break;
                case PokerType.enemy:
                    typeStr = "";
                    break;
                case PokerType.atk:
                    typeStr = "";
                    break;
                case PokerType.store:
                    typeStr = "";
                    break;
                case PokerType.treasure:
                    typeStr = "";
                    break;
            }
            var tRet = typeStr + "card_front_bg.png";
            return tRet;
        };
        pokerRender.GetIconFileName = function (data) {
            var typeStr = "";
            switch (data.mType) {
                case PokerType.blood:
                    typeStr = "";
                    break;
                case PokerType.coin:
                    typeStr = "";
                    break;
                case PokerType.enemy:
                    typeStr = "";
                    break;
                case PokerType.atk:
                    typeStr = "";
                    break;
                case PokerType.store:
                    typeStr = "";
                    break;
                case PokerType.treasure:
                    typeStr = "";
                    break;
            }
            var numStr = data.mNum.toString();
            if (data.mNum < 10) {
                numStr = "0" + numStr;
            }
            var tRet = "img_card_" + typeStr + numStr + ".png";
            return tRet;
        };
        pokerRender.GetSignFileName = function (data) {
            var typeStr = "";
            switch (data.mType) {
                case PokerType.blood:
                    typeStr = "blood";
                    break;
                case PokerType.coin:
                    typeStr = "coin";
                    break;
                case PokerType.enemy:
                    typeStr = "enemy";
                    break;
                case PokerType.atk:
                    typeStr = "shiled";
                    break;
                case PokerType.store:
                    typeStr = "store";
                    break;
                case PokerType.treasure:
                    typeStr = "treasure";
                    break;
            }
            var tRet = "CardEffects/" + typeStr + ".png";
            return tRet;
        };
        pokerRender.GetTxtFileName = function (data) {
            var typeStr = "";
            switch (data.mType) {
                case PokerType.blood:
                    typeStr = CardConstant.CardBlood[0]["name"];
                    break;
                case PokerType.coin:
                    typeStr = CardConstant.CardCoin[0]["name"];
                    break;
                case PokerType.enemy:
                    typeStr = CardConstant.CardCK[data.mNum]["name"];
                    break;
                case PokerType.atk:
                    typeStr = CardConstant.CardWeapon[data.mNum]["name"];
                    break;
                case PokerType.store:
                    typeStr = CardConstant.CardStore[0]["name"];
                    break;
                case PokerType.treasure:
                    typeStr = CardConstant.CardTreasure[data.mNum]["name"];
                    break;
            }
            var tRet = typeStr;
            return tRet;
        };
        pokerRender.GetTxtFileDesc = function (data) {
            var typeStr = "";
            // switch (data.mType) {
            // 	case PokerType.blood:
            // 		typeStr = CardConstant.CardBlood[0]["desc"];
            // 		break;
            // 	case PokerType.coin:
            // 		typeStr = CardConstant.CardCoin[0]["desc"];
            // 		break;
            // 	case PokerType.enemy:
            // 		typeStr = CardConstant.CardCK[data.mNum]["desc"];
            // 		break;
            // 	case PokerType.shiled:
            // 		typeStr = CardConstant.CardWeapon[data.mNum]["desc"];
            // 		break;
            // 	case PokerType.store:
            // 		typeStr = CardConstant.CardStore[0]["desc"];
            // 		break;
            // 	case PokerType.treasure:
            // 		typeStr = CardConstant.CardTreasure[data.mNum]["desc"];
            // 		break;
            // }
            var tRet = typeStr;
            return tRet;
        };
        pokerRender.GetTxtFileNum = function (data) {
            var typeStr = "";
            switch (data.mType) {
                case PokerType.blood:
                    typeStr = data.mNum.toString();
                    break;
                case PokerType.coin:
                    typeStr = data.mNum.toString();
                    break;
                case PokerType.enemy:
                    typeStr = data.mAtk.toString();
                    break;
                case PokerType.atk:
                    typeStr = data.mHurt.toString();
                    break;
                case PokerType.store:
                    typeStr = "";
                    break;
                case PokerType.treasure:
                    typeStr = "";
                    break;
            }
            var tRet = typeStr;
            return tRet;
        };
        pokerRender.backSkinName = "img_card_back7";
        pokerRender.cardSkinName = "Game/";
        pokerRender.rsty = 0;
        return pokerRender;
    }());
    poker.pokerRender = pokerRender;
})(poker || (poker = {}));
//# sourceMappingURL=pokerRender.js.map