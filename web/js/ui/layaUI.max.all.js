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
var View = laya.ui.View;
var Dialog = laya.ui.Dialog;
var ui;
(function (ui) {
    var BigStoreViewUI = /** @class */ (function (_super) {
        __extends(BigStoreViewUI, _super);
        function BigStoreViewUI() {
            return _super.call(this) || this;
        }
        BigStoreViewUI.prototype.createChildren = function () {
            _super.prototype.createChildren.call(this);
            this.createView(ui.BigStoreViewUI.uiView);
        };
        BigStoreViewUI.uiView = { "type": "Dialog", "props": { "x": 0, "width": 750, "height": 1334 }, "child": [{ "type": "Image", "props": { "y": 48, "x": 228, "var": "powerBox", "skin": "local/首页/index_image_体力.png", "anchorY": 0.5 }, "child": [{ "type": "Label", "props": { "y": 14, "x": 82, "var": "powerLabel", "text": 99, "strokeColor": "#000000", "stroke": 4, "fontSize": 30, "font": "Helvetica", "color": "#ffffff", "anchorX": 0.5 } }] }, { "type": "Image", "props": { "y": 48, "x": 19, "var": "goldBox", "skin": "local/首页/index_image_金币.png", "anchorY": 0.5 }, "child": [{ "type": "Label", "props": { "y": 14, "x": 113, "var": "goldLabel", "text": 99999, "strokeColor": "#000000", "stroke": 4, "fontSize": 30, "font": "Helvetica", "color": "#ffffff", "anchorX": 0.5 } }] }, { "type": "Image", "props": { "y": 144, "var": "shopBg", "skin": "local/商店/shop_image_商店底.png" }, "child": [{ "type": "Image", "props": { "y": 997, "x": 47, "var": "btn1Bg", "skin": "local/商店/index_btn_游戏牌背选中.png" } }, { "type": "Image", "props": { "y": 997, "x": 402, "var": "btn2Bg", "skin": "local/商店/index_btn_游戏背景未选中.png" } }, { "type": "Image", "props": { "y": -23, "x": 648, "var": "btnClose", "skin": "local/商店/flip_btn_返回.png" } }, { "type": "Image", "props": { "y": 383, "x": 35, "skin": "local/商店/shop_image_手指.png" } }, { "type": "Image", "props": { "y": 178, "x": 88, "width": 590, "height": 710 }, "child": [{ "type": "List", "props": { "y": 26, "x": 25, "width": 540, "var": "shopList", "spaceY": 12, "spaceX": 12, "repeatY": 3, "repeatX": 3, "height": 683 }, "child": [{ "type": "Box", "props": { "renderType": "render" }, "child": [{ "type": "Image", "props": { "width": 172, "name": "itemBg", "height": 248 }, "child": [{ "type": "Image", "props": { "y": 5, "x": 117, "skin": "local/商店/shop_image_锁.png", "name": "itemClose" } }, { "type": "Image", "props": { "y": 202, "x": 6, "skin": "local/商店/shop_image_商品经济底.png", "name": "bottomLabel" }, "child": [{ "type": "Image", "props": { "y": 4, "x": 18, "skin": "local/商店/shop_image_商店金币.png", "name": "itemCoin" } }, { "type": "Label", "props": { "y": 5, "x": 95, "text": 99999, "strokeColor": "#000000", "stroke": 4, "name": "itemGold", "fontSize": 30, "font": "Helvetica", "color": "#ffffff", "anchorX": 0.5 } }, { "type": "Image", "props": { "y": 5, "x": 79, "skin": "local/商店/shop_btn_正在使用.png", "name": "itemUsing", "anchorX": 0.5 } }] }] }] }] }] }] }] };
        return BigStoreViewUI;
    }(Dialog));
    ui.BigStoreViewUI = BigStoreViewUI;
})(ui || (ui = {}));
(function (ui) {
    var game;
    (function (game) {
        var gameIndexUI = /** @class */ (function (_super) {
            __extends(gameIndexUI, _super);
            function gameIndexUI() {
                return _super.call(this) || this;
            }
            gameIndexUI.prototype.createChildren = function () {
                _super.prototype.createChildren.call(this);
                this.createView(ui.game.gameIndexUI.uiView);
            };
            gameIndexUI.uiView = { "type": "View", "props": { "width": 750, "height": 1334 }, "child": [{ "type": "Label", "props": { "y": 10, "x": 10, "top": 0, "right": 0, "left": 0, "bottom": 0, "bgColor": "#717190" } }, { "type": "Label", "props": { "var": "starttBtn", "text": "开始游戏", "fontSize": 100, "font": "SimSun", "color": "#ffffff", "centerY": 0, "centerX": 0, "bold": true, "anchorX": 0.5 } }] };
            return gameIndexUI;
        }(View));
        game.gameIndexUI = gameIndexUI;
    })(game = ui.game || (ui.game = {}));
})(ui || (ui = {}));
(function (ui) {
    var game;
    (function (game) {
        var gameStoreUI = /** @class */ (function (_super) {
            __extends(gameStoreUI, _super);
            function gameStoreUI() {
                return _super.call(this) || this;
            }
            gameStoreUI.prototype.createChildren = function () {
                _super.prototype.createChildren.call(this);
                this.createView(ui.game.gameStoreUI.uiView);
            };
            gameStoreUI.uiView = { "type": "View", "props": { "width": 750, "height": 1334 }, "child": [{ "type": "Label", "props": { "top": 0, "right": 0, "left": 0, "bottom": 0, "bgColor": "#000000", "alpha": 0.5 } }, { "type": "Box", "props": { "width": 650, "height": 1004, "centerY": 0, "centerX": 0 }, "child": [{ "type": "Label", "props": { "width": 650, "top": 0, "right": 0, "left": 0, "height": 847, "bottom": 0, "bgColor": "#717190" } }, { "type": "Label", "props": { "top": 20, "text": "免费获得一个", "fontSize": 40, "font": "Arial", "color": "#ffffff", "centerX": 0, "bold": false, "anchorX": 0.5 } }, { "type": "Label", "props": { "y": 310, "x": 325, "top": 310, "text": "以下请根据需要购买", "fontSize": 40, "font": "Arial", "color": "#ffffff", "centerX": 0, "bold": false, "anchorX": 0.5 } }, { "type": "Label", "props": { "var": "coinLabel", "top": 840, "text": "碎银:", "fontSize": 30, "font": "Arial", "color": "#ffffff", "centerX": -243, "bold": false, "anchorX": 0.5 } }, { "type": "Label", "props": { "wordWrap": true, "width": 384, "var": "cardDesc", "top": 367, "text": "描述:", "height": 78, "fontSize": 30, "font": "Arial", "color": "#ffffff", "centerX": 15, "bold": false } }, { "type": "Image", "props": { "y": 463, "x": 125, "width": 102, "var": "card1", "height": 152 }, "child": [{ "type": "Image", "props": { "y": 0, "x": 0, "width": 102, "var": "img1", "skin": "Game/card_front_bg.png", "height": 152 } }] }, { "type": "Image", "props": { "y": 464, "x": 274, "width": 102, "var": "card2", "height": 152 }, "child": [{ "type": "Image", "props": { "width": 102, "var": "img2", "skin": "Game/card_front_bg.png", "height": 152 } }] }, { "type": "Image", "props": { "y": 464, "x": 423, "width": 102, "var": "card3", "height": 152 }, "child": [{ "type": "Image", "props": { "y": 0, "x": 0, "width": 102, "var": "img3", "skin": "Game/card_front_bg.png", "height": 152 } }] }, { "type": "Image", "props": { "y": 649, "x": 423, "width": 102, "var": "card6", "height": 152 }, "child": [{ "type": "Image", "props": { "y": 0, "x": 0, "width": 102, "var": "img6", "skin": "Game/card_front_bg.png", "height": 152 } }] }, { "type": "Image", "props": { "y": 647, "x": 274, "width": 102, "var": "card5", "height": 152 }, "child": [{ "type": "Image", "props": { "width": 102, "var": "img5", "skin": "Game/card_front_bg.png", "height": 152 } }] }, { "type": "Image", "props": { "y": 647, "x": 125, "width": 102, "var": "card4", "height": 152 }, "child": [{ "type": "Image", "props": { "y": 0, "x": 0, "width": 102, "var": "img4", "skin": "Game/card_front_bg.png", "height": 152 } }] }, { "type": "Label", "props": { "y": 285, "right": 0, "left": 0, "height": 3, "fontSize": 40, "font": "Arial", "color": "#ffffff", "bold": false, "bgColor": "#ffffff", "anchorX": 0.5 } }, { "type": "Image", "props": { "y": 92, "x": 70, "width": 102, "var": "card0", "height": 152 }, "child": [{ "type": "Image", "props": { "y": 0, "x": 0, "width": 102, "var": "img0", "skin": "Game/card_front_bg.png", "height": 152 } }, { "type": "Label", "props": { "y": 0, "x": 140, "wordWrap": true, "width": 389, "var": "desc0", "italic": true, "height": 152, "fontSize": 35, "font": "SimSun", "color": "#ffffff" } }] }, { "type": "Label", "props": { "var": "buyBtn", "text": "购买", "fontSize": 60, "font": "Arial", "color": "#ffffff", "centerX": 0, "bottom": 120, "bold": false, "anchorX": 0.5 } }, { "type": "Label", "props": { "var": "backBtn", "text": "退出", "fontSize": 40, "font": "Arial", "color": "#ffffff", "centerX": 0, "bottom": 50, "bold": false, "anchorX": 0.5 } }, { "type": "Image", "props": { "x": 125, "width": 400, "visible": false, "var": "finishSelectFrame", "height": 260, "centerY": 0, "centerX": 0 }, "child": [{ "type": "Label", "props": { "y": -75, "x": -52, "top": 0, "right": 0, "left": 0, "bottom": 0, "bgColor": "#717190" } }, { "type": "Label", "props": { "x": 200, "var": "title", "top": 20, "text": "是否花费购买", "fontSize": 40, "font": "Arial", "color": "#ffffff", "bold": false, "anchorX": 0.5 } }, { "type": "Label", "props": { "x": 200, "var": "prop", "top": 80, "text": "XXXX", "fontSize": 40, "font": "Arial", "color": "#ffffff", "bold": true, "anchorX": 0.5 } }, { "type": "Label", "props": { "var": "detBtn", "text": "确定", "left": 60, "fontSize": 40, "font": "Arial", "color": "#ffffff", "bottom": 60, "bold": false, "anchorX": 0.5 } }, { "type": "Label", "props": { "var": "celBtn", "text": "取消", "right": 60, "fontSize": 40, "font": "Arial", "color": "#ffffff", "bottom": 60, "bold": false, "anchorX": 0.5 } }] }] }] };
            return gameStoreUI;
        }(View));
        game.gameStoreUI = gameStoreUI;
    })(game = ui.game || (ui.game = {}));
})(ui || (ui = {}));
(function (ui) {
    var game;
    (function (game) {
        var gameTableUI = /** @class */ (function (_super) {
            __extends(gameTableUI, _super);
            function gameTableUI() {
                return _super.call(this) || this;
            }
            gameTableUI.prototype.createChildren = function () {
                _super.prototype.createChildren.call(this);
                this.createView(ui.game.gameTableUI.uiView);
            };
            gameTableUI.uiView = { "type": "View", "props": { "width": 750, "height": 1334 }, "child": [{ "type": "Label", "props": { "var": "bg1", "top": 0, "right": 0, "left": 0, "bottom": 0, "bgColor": "#717190" } }, { "type": "Box", "props": { "var": "pokerList", "centerY": -1942, "centerX": 0 }, "child": [{ "type": "Image", "props": { "x": 300, "width": 102, "var": "Line3", "name": "Line3", "height": 152 } }, { "type": "Image", "props": { "x": 150, "width": 102, "var": "Line2", "name": "Line2", "height": 152 } }, { "type": "Image", "props": { "width": 102, "var": "Line1", "name": "Line1", "height": 152 } }] }, { "type": "Label", "props": { "x": 638.828125, "var": "btn_start", "text": "重开", "italic": true, "fontSize": 30, "font": "SimHei", "color": "#ffffff", "bottom": 100, "bold": true, "anchorX": 0.5 } }, { "type": "Label", "props": { "var": "bg2", "top": 0, "right": 0, "left": 0, "height": 150, "bgColor": "#717190" } }, { "type": "Label", "props": { "y": 50, "x": 25, "wordWrap": true, "width": 700, "var": "desc", "fontSize": 36, "font": "SimSun", "color": "#ffffff", "bold": false } }, { "type": "Box", "props": { "var": "TargetList", "centerY": -2145, "centerX": 0 }, "child": [{ "type": "Image", "props": { "width": 102, "var": "Target1", "height": 152 }, "child": [{ "type": "Image", "props": { "top": 0, "skin": "Game/card_front_bg.png", "right": 0, "left": 0, "bottom": 0 } }, { "type": "Label", "props": { "y": 64, "x": 14, "text": "下一关", "fontSize": 24, "font": "SimHei", "color": "#000000", "bold": true } }, { "type": "Image", "props": { "centerY": 0, "centerX": 0 } }] }, { "type": "Image", "props": { "x": 150, "width": 102, "var": "Target2", "height": 152 }, "child": [{ "type": "Image", "props": { "top": 0, "skin": "Game/card_front_bg.png", "right": 0, "left": 0, "bottom": 0 } }, { "type": "Label", "props": { "y": 64, "x": 14, "text": "下一关", "fontSize": 24, "font": "SimHei", "color": "#000000", "bold": true } }, { "type": "Image", "props": { "centerY": 0, "centerX": 0 } }] }, { "type": "Image", "props": { "x": 301, "width": 102, "var": "Target3", "height": 152 }, "child": [{ "type": "Image", "props": { "top": 0, "skin": "Game/card_front_bg.png", "right": 0, "left": 0, "bottom": 0 } }, { "type": "Label", "props": { "y": 64, "x": 14, "text": "下一关", "fontSize": 24, "font": "SimHei", "color": "#000000", "bold": true } }, { "type": "Image", "props": { "centerY": 0, "centerX": 0 } }] }] }, { "type": "Image", "props": { "y": 925, "width": 102, "var": "Hero", "name": "Hero", "height": 152, "centerY": 334, "centerX": 0 }, "child": [{ "type": "Image", "props": { "var": "HeroBg", "top": 0, "skin": "Game/card_front_bg.png", "right": 0, "left": 0, "bottom": 0 } }, { "type": "Label", "props": { "y": 5, "x": 5, "var": "HeroHp", "text": "血量:10/10", "fontSize": 16, "font": "SimHei", "color": "#000000", "bold": true } }, { "type": "Label", "props": { "y": 76, "x": 30, "var": "HerpName", "text": "主角", "fontSize": 20, "font": "SimHei", "color": "#000000", "bold": true } }, { "type": "Image", "props": { "var": "HeroIcon", "centerY": 0, "centerX": 0 } }, { "type": "Label", "props": { "y": 101, "x": 40, "var": "HeroCoin", "text": "0$", "fontSize": 20, "font": "SimHei", "color": "#000000", "centerX": -1, "bold": true } }, { "type": "Label", "props": { "y": 22.5, "x": 5, "var": "HeroAtk", "text": "空手:0", "fontSize": 14, "font": "SimHei", "color": "#000000", "bold": true } }, { "type": "Label", "props": { "y": 39, "x": 5, "var": "HeroAtk2", "text": "副手:0", "fontSize": 14, "font": "SimHei", "color": "#000000", "bold": true } }, { "type": "Label", "props": { "y": 55, "x": 5, "var": "HeroShield", "text": "护盾:0", "fontSize": 14, "font": "SimHei", "color": "#000000", "bold": true } }, { "type": "Box", "props": { "y": -4, "x": -115, "visible": false, "var": "HeroEffectBox" }, "child": [{ "type": "Label", "props": { "y": 20, "x": 237, "visible": false, "var": "HeroEffect1", "text": "功法1", "strokeColor": "#ffffff", "stroke": 4, "rotation": -15, "name": "HeroEffect1", "italic": true, "fontSize": 30, "color": "#e0ff00" } }, { "type": "Label", "props": { "y": 60, "x": 248, "visible": false, "var": "HeroEffect2", "text": "功法1", "strokeColor": "#ffffff", "stroke": 4, "rotation": -5, "name": "HeroEffect2", "italic": true, "fontSize": 30, "color": "#ff0400" } }, { "type": "Label", "props": { "y": 100, "x": 248, "visible": false, "var": "HeroEffect5", "text": "功法1", "strokeColor": "#ffffff", "stroke": 4, "rotation": 10, "name": "HeroEffect5", "italic": true, "fontSize": 30, "color": "#000000" } }, { "type": "Label", "props": { "y": 17, "x": 82, "visible": false, "var": "HeroEffect3", "text": "功法1", "strokeColor": "#ffffff", "stroke": 4, "rotation": 10, "name": "HeroEffect3", "italic": true, "fontSize": 30, "color": "#4700ff", "anchorX": 1 } }, { "type": "Label", "props": { "y": 58, "x": 74, "visible": false, "var": "HeroEffect4", "text": "功法1", "strokeColor": "#ffffff", "stroke": 4, "rotation": 0, "name": "HeroEffect4", "italic": true, "fontSize": 30, "color": "#471b47", "anchorX": 1 } }, { "type": "Label", "props": { "y": 97, "x": 74, "visible": false, "var": "HeroEffect6", "text": "功法1", "strokeColor": "#ffffff", "stroke": 4, "rotation": -15, "name": "HeroEffect6", "italic": true, "fontSize": 30, "color": "#bbbb78", "anchorX": 1 } }, { "type": "Label", "props": { "y": 39, "x": 182, "width": 41.5625, "visible": false, "var": "HeroSEffect6", "text": "+2", "strokeColor": "#ffffff", "stroke": 4, "rotation": -15, "name": "HeroSEffect6", "italic": false, "height": 40, "fontSize": 40, "font": "SimHei", "color": "#565ac3", "bold": true } }, { "type": "Label", "props": { "y": 14, "x": 146, "visible": false, "var": "HeroSEffect3", "text": "+2", "strokeColor": "#ffffff", "stroke": 4, "rotation": -15, "name": "HeroSEffect3", "italic": false, "fontSize": 40, "font": "SimHei", "color": "#dba453", "bold": true } }, { "type": "Label", "props": { "y": -30, "x": 162, "visible": false, "var": "HeroSEffect2", "text": "+2", "strokeColor": "#ffffff", "stroke": 4, "rotation": -15, "name": "HeroSEffect2", "italic": false, "fontSize": 40, "font": "SimHei", "color": "#ff3200", "bold": true } }, { "type": "Label", "props": { "y": -13, "x": 119, "visible": false, "var": "HeroSEffect1", "text": "+2", "strokeColor": "#ffffff", "stroke": 4, "rotation": -15, "name": "HeroSEffect1", "italic": false, "fontSize": 40, "font": "SimHei", "color": "#c1ff00", "bold": true } }, { "type": "Label", "props": { "y": 0, "x": 187, "visible": false, "var": "HeroSEffect5", "text": "+2", "strokeColor": "#ffffff", "stroke": 4, "rotation": -15, "name": "HeroSEffect5", "italic": false, "fontSize": 40, "font": "SimHei", "color": "#000000", "bold": true } }, { "type": "Label", "props": { "y": -34, "x": 208, "visible": false, "var": "HeroSEffect4", "text": "+2", "strokeColor": "#ffffff", "stroke": 4, "rotation": -15, "name": "HeroSEffect4", "italic": false, "fontSize": 40, "font": "SimHei", "color": "#773130", "bold": true } }] }] }, { "type": "Image", "props": { "y": 150, "x": 0, "width": 100, "var": "InitiativeList", "height": 100 }, "child": [{ "type": "Label", "props": { "wordWrap": true, "width": 50, "text": "主动", "height": 70, "fontSize": 30, "font": "SimHei", "color": "#ffffff", "centerY": 0, "centerX": 0, "bold": true, "align": "center" } }] }, { "type": "Image", "props": { "y": 160, "x": 650, "width": 100, "var": "PassiveList", "height": 100 }, "child": [{ "type": "Label", "props": { "wordWrap": true, "width": 50, "text": "被动", "height": 70, "fontSize": 30, "font": "SimHei", "color": "#ffffff", "centerY": 0, "centerX": 0, "bold": true, "align": "center" } }] }, { "type": "Box", "props": { "width": 750, "visible": false, "var": "propMoveBox", "height": 1334 }, "child": [{ "type": "Label", "props": { "width": 750, "var": "propMoveBg", "top": 0, "right": 0, "left": 0, "bottom": 0, "bgColor": "#000000", "alpha": 0.5 } }, { "type": "Label", "props": { "y": 2, "x": 150, "width": 3, "var": "propMoveLine", "top": 2, "bottom": 0, "bgColor": "#ffffff" } }, { "type": "Label", "props": { "y": 130, "x": 225, "wordWrap": true, "width": 466, "visible": false, "var": "propMoveTips", "text": "请选择下面一张发光的卡牌发动效果", "rotation": -5, "italic": true, "height": 180, "fontSize": 50, "color": "#ffffff" } }, { "type": "Label", "props": { "y": 334, "x": 251, "wordWrap": true, "width": 460, "visible": true, "var": "propMoveDesc", "rotation": -5, "italic": true, "height": 200, "fontSize": 40, "font": "SimHei", "color": "#ffffff" } }] }, { "type": "Label", "props": { "y": 1098, "x": 721, "width": 0, "visible": false, "var": "propMoveCancel", "text": "取消选择", "rotation": -5, "italic": true, "fontSize": 40, "font": "Helvetica", "color": "#ffffff", "anchorX": 1 } }] };
            return gameTableUI;
        }(View));
        game.gameTableUI = gameTableUI;
    })(game = ui.game || (ui.game = {}));
})(ui || (ui = {}));
(function (ui) {
    var PhysicalPowerViewUI = /** @class */ (function (_super) {
        __extends(PhysicalPowerViewUI, _super);
        function PhysicalPowerViewUI() {
            return _super.call(this) || this;
        }
        PhysicalPowerViewUI.prototype.createChildren = function () {
            _super.prototype.createChildren.call(this);
            this.createView(ui.PhysicalPowerViewUI.uiView);
        };
        PhysicalPowerViewUI.uiView = { "type": "Dialog", "props": { "width": 750, "height": 1334 }, "child": [{ "type": "Image", "props": { "x": 0, "skin": "local/交互/pop_image_体力商店底.png", "centerY": 0 }, "child": [{ "type": "Image", "props": { "y": 332, "x": 275, "skin": "local/交互/pop_image_1点体力.png" } }, { "type": "Image", "props": { "y": 654, "x": 143, "var": "shareBtn", "skin": "local/交互/pop_btn_分享.png" } }, { "type": "Image", "props": { "y": 654, "x": 287, "var": "watchTvBtn", "skin": "local/交互/pop_btn_看视频.png" } }, { "type": "Image", "props": { "y": 202, "x": 130, "skin": "local/交互/pop_image_体力小.png" }, "child": [{ "type": "Label", "props": { "y": 6, "x": 63, "var": "powerLabel", "strokeColor": "#000000", "stroke": 5, "fontSize": 36, "font": "Helvetica", "color": "#ffffff" } }] }, { "type": "Image", "props": { "y": 587, "x": 244, "skin": "local/交互/pop_txt_立即获得1点体力.png" } }, { "type": "Image", "props": { "y": 211, "x": 333, "skin": "local/交互/pop_txt_补满体力所需时间.png" } }, { "type": "Image", "props": { "y": 611, "x": 548, "skin": "local/交互/pop_image_3倍.png" } }, { "type": "Image", "props": { "y": -27, "x": 648, "var": "btnClose", "skin": "local/交互/pop_btn_返回.png" } }, { "type": "Image", "props": { "y": 271, "x": 453, "var": "recoverImg", "skin": "local/交互/pop_image_时间倒计时底.png" }, "child": [{ "type": "Label", "props": { "y": 4, "x": 83, "var": "recoverTime", "strokeColor": "#283042", "stroke": 4, "fontSize": 36, "color": "#ffffff", "anchorX": 0.5 } }] }] }] };
        return PhysicalPowerViewUI;
    }(Dialog));
    ui.PhysicalPowerViewUI = PhysicalPowerViewUI;
})(ui || (ui = {}));
(function (ui) {
    var poker;
    (function (poker) {
        var challengeUI = /** @class */ (function (_super) {
            __extends(challengeUI, _super);
            function challengeUI() {
                return _super.call(this) || this;
            }
            challengeUI.prototype.createChildren = function () {
                View.regComponent("Text", laya.display.Text);
                _super.prototype.createChildren.call(this);
                this.createView(ui.poker.challengeUI.uiView);
            };
            challengeUI.uiView = { "type": "Dialog", "props": { "width": 750, "height": 1334 }, "child": [{ "type": "Button", "props": { "y": -50, "x": 5, "width": 765, "skin": "UI/button.png", "height": 1402, "alpha": 0 } }, { "type": "Sprite", "props": { "y": 366, "x": 33, "width": 708, "height": 514 }, "child": [{ "type": "Image", "props": { "y": -216, "x": -8, "width": 716, "skin": "UI/introduction_play_ruban.png", "height": 916, "sizeGrid": "50,100,50,100" } }, { "type": "Image", "props": { "y": -191, "x": 29, "width": 638, "skin": "UI/bg.png", "height": 884, "sizeGrid": "32,9,6,12" }, "child": [{ "type": "Rect", "props": { "y": 340, "x": 0, "width": 638, "lineWidth": 1, "height": 546, "fillColor": "#2677a4" } }, { "type": "Image", "props": { "y": -1, "x": 566, "var": "CloseButton", "skin": "UI/anniu_guanbi.png" } }] }] }, { "type": "List", "props": { "y": 524, "x": 98, "width": 602, "var": "weekName", "spaceY": 10, "spaceX": 35, "repeatY": 1, "repeatX": 7, "height": 370 }, "child": [{ "type": "Box", "props": { "name": "render" }, "child": [{ "type": "Label", "props": { "width": 50, "text": "1", "strokeColor": "#346ebb", "stroke": 2, "name": "text", "height": 50, "fontSize": 30, "color": "#346ebb", "centerY": 0, "centerX": 0 } }] }] }, { "type": "List", "props": { "y": 591, "x": 106, "width": 602, "var": "days", "spaceY": 10, "spaceX": 35, "repeatY": 6, "repeatX": 7, "height": 360 }, "child": [{ "type": "Box", "props": { "name": "render" }, "child": [{ "type": "Label", "props": { "y": 0, "x": 0, "width": 50, "text": "1", "strokeColor": "#346ebb", "stroke": 2, "name": "text", "height": 50, "fontSize": 35, "color": "#675f0e", "anchorY": 0.5, "anchorX": 0.5, "align": "center" } }, { "type": "Image", "props": { "y": -6, "x": 2, "width": 50, "skin": "UI/Checkmark.png", "scaleY": 0.8, "scaleX": 0.8, "name": "doneImg", "height": 50, "anchorY": 0.5, "anchorX": 0.5 } }, { "type": "Image", "props": { "y": -5, "x": 2, "width": 50, "skin": "UI/select.png", "name": "selectIMG", "height": 50, "anchorY": 0.5, "anchorX": 0.5 } }, { "type": "Image", "props": { "y": -5, "x": 2, "width": 50, "skin": "UI/select.png", "name": "ClickIMG", "height": 50, "anchorY": 0.5, "anchorX": 0.5, "alpha": 0 } }] }] }, { "type": "Button", "props": { "y": 952, "x": 258, "width": 232, "var": "startChallenge", "skin": "UI/button.png", "name": "startChallenge", "labelStrokeColor": "#346ebb", "labelStroke": 2, "labelSize": 30, "labelFont": "SimHei", "label": "开始游戏", "height": 71 } }, { "type": "Text", "props": { "y": 422, "x": 297, "width": 168, "var": "monthText", "text": "十一月", "height": 70, "fontSize": 50, "font": "Microsoft YaHei", "color": "#346ebb", "bold": true, "align": "center" } }, { "type": "Button", "props": { "y": 438, "x": 82, "width": 68, "var": "preMonth", "strokeColors": "#346ebb", "skin": "UI/button.png", "labelStrokeColor": "#346ebb", "labelStroke": 2, "labelSize": 30, "label": "<", "height": 46 } }, { "type": "Button", "props": { "y": 436, "x": 611, "width": 68, "var": "nextMonth", "skin": "UI/button.png", "labelStrokeColor": "#346ebb", "labelStroke": 2, "labelSize": 30, "label": ">", "height": 46 } }, { "type": "Text", "props": { "y": 294, "x": 109, "width": 345, "var": "today", "text": "2018年11月8日", "height": 38, "fontSize": 55, "font": "Microsoft YaHei", "color": "#346ebb", "align": "center" } }, { "type": "Image", "props": { "y": -1, "x": -5, "width": 713, "var": "CloseButton2", "skin": "UI/anniu_guanbi.png", "height": 176, "alpha": 0 } }] };
            return challengeUI;
        }(Dialog));
        poker.challengeUI = challengeUI;
    })(poker = ui.poker || (ui.poker = {}));
})(ui || (ui = {}));
(function (ui) {
    var poker;
    (function (poker) {
        var ConfirmAutoPlayUI = /** @class */ (function (_super) {
            __extends(ConfirmAutoPlayUI, _super);
            function ConfirmAutoPlayUI() {
                return _super.call(this) || this;
            }
            ConfirmAutoPlayUI.prototype.createChildren = function () {
                _super.prototype.createChildren.call(this);
                this.createView(ui.poker.ConfirmAutoPlayUI.uiView);
            };
            ConfirmAutoPlayUI.uiView = { "type": "Dialog", "props": { "width": 750, "height": 1334 }, "child": [{ "type": "Label", "props": { "y": -180, "x": -25, "width": 800, "text": "label", "height": 1800, "bgColor": "#000000", "alpha": 0.7 } }, { "type": "Sprite", "props": { "y": 103, "x": 0, "width": 750 }, "child": [{ "type": "Image", "props": { "y": 79, "x": 10, "skin": "local/结果页/result_title_恭喜.png" } }, { "type": "Image", "props": { "y": 554, "x": 167, "skin": "local/结果页/result_txt_您已解开所有卡牌.png" } }, { "type": "Image", "props": { "y": 262, "x": 632, "var": "CloseBTN", "skin": "local/结果页/pop_btn_返回.png" } }, { "type": "Image", "props": { "y": 722, "x": 161, "var": "shareWechat", "skin": "local/结果页/result_btn_自动收牌.png", "name": "shareWechat" } }] }] };
            return ConfirmAutoPlayUI;
        }(Dialog));
        poker.ConfirmAutoPlayUI = ConfirmAutoPlayUI;
    })(poker = ui.poker || (ui.poker = {}));
})(ui || (ui = {}));
(function (ui) {
    var poker;
    (function (poker) {
        var ConfirmShowCardUI = /** @class */ (function (_super) {
            __extends(ConfirmShowCardUI, _super);
            function ConfirmShowCardUI() {
                return _super.call(this) || this;
            }
            ConfirmShowCardUI.prototype.createChildren = function () {
                View.regComponent("Text", laya.display.Text);
                _super.prototype.createChildren.call(this);
                this.createView(ui.poker.ConfirmShowCardUI.uiView);
            };
            ConfirmShowCardUI.uiView = { "type": "Dialog", "props": { "width": 750, "height": 1334 }, "child": [{ "type": "Sprite", "props": { "y": 79, "x": 212 }, "child": [{ "type": "Image", "props": { "y": 275, "x": -160, "width": 647, "skin": "UI/chunbai_diban.png", "height": 472, "sizeGrid": "36,152,37,142" } }, { "type": "Text", "props": { "y": 432, "x": -72, "width": 411, "text": "使用道具,将所有暗牌解锁？", "height": 114, "fontSize": 40, "font": "SimHei", "color": "#d28908", "bold": true } }, { "type": "Button", "props": { "y": 582, "x": -13, "width": 169, "var": "GoldUse", "skin": "UI/button.png", "name": "GoldUse", "labelSize": 30, "labelFont": "SimHei", "labelColors": "#346ebb", "labelBold": true, "label": "10金币使用", "height": 59 } }, { "type": "Image", "props": { "y": 299, "x": 364, "var": "CloseBTN", "skin": "UI/anniu_guanbi.png" } }, { "type": "Button", "props": { "y": 582, "x": 180, "width": 169, "var": "videoUse", "skin": "UI/button.png", "name": "videoUse", "labelSize": 30, "labelFont": "SimHei", "labelColors": "#346ebb", "labelBold": true, "label": "看视频使用", "height": 59 } }] }] };
            return ConfirmShowCardUI;
        }(Dialog));
        poker.ConfirmShowCardUI = ConfirmShowCardUI;
    })(poker = ui.poker || (ui.poker = {}));
})(ui || (ui = {}));
(function (ui) {
    var poker;
    (function (poker) {
        var gameBottomUI = /** @class */ (function (_super) {
            __extends(gameBottomUI, _super);
            function gameBottomUI() {
                return _super.call(this) || this;
            }
            gameBottomUI.prototype.createChildren = function () {
                _super.prototype.createChildren.call(this);
                this.createView(ui.poker.gameBottomUI.uiView);
            };
            gameBottomUI.uiView = { "type": "Dialog", "props": { "width": 750, "height": 148, "centerX": 0, "bottom": 0 }, "child": [{ "type": "Image", "props": { "skin": "local/游戏页/home_bth_bg.png" } }, { "type": "Sprite", "props": { "y": -85, "x": 51, "name": "newgame" }, "child": [{ "type": "Image", "props": { "y": 100, "x": 0, "var": "showPopup", "skin": "local/游戏页/game_btn_新游戏1.png", "name": "showPopup" } }] }, { "type": "Sprite", "props": { "y": -59, "x": -224, "width": 100, "visible": false, "name": "auto" }, "child": [{ "type": "Image", "props": { "y": 86, "var": "autoPlay", "skin": "UI/auto.png", "name": "autoPlay" } }, { "type": "Label", "props": { "y": 191, "var": "autoPlayText", "text": "自动", "fontSize": 25, "font": "SimHei", "color": "#348ff8", "centerX": 0, "bold": true, "anchorY": 0.5, "anchorX": 0.5 } }] }, { "type": "Sprite", "props": { "y": -85, "x": 601, "name": "back" }, "child": [{ "type": "Image", "props": { "y": 100, "x": 0, "var": "back", "skin": "local/游戏页/game_btn_回退.png", "name": "back" } }] }, { "type": "Sprite", "props": { "y": -85, "x": 326, "name": "tips" }, "child": [{ "type": "Image", "props": { "y": 100, "x": 0, "var": "showTips", "skin": "local/游戏页/game_btn_提示.png" } }] }, { "type": "Sprite", "props": { "y": -71.5, "x": 883, "name": "showHiddenCard" }, "child": [{ "type": "Image", "props": { "y": 100, "x": 0, "var": "showHiddenCard", "skin": "UI/mingpai.png", "name": "showHiddenCard" } }] }, { "type": "Sprite", "props": { "y": -71.5, "x": 1049, "name": "rules" }, "child": [{ "type": "Image", "props": { "y": 100, "x": 0, "var": "rules", "skin": "UI/rule.png", "name": "rules" } }] }, { "type": "Sprite", "props": { "y": -85, "x": 189, "name": "set" }, "child": [{ "type": "Image", "props": { "y": 100, "x": 0, "var": "set", "skin": "local/游戏页/game_btn_声音关.png", "name": "set" } }] }, { "type": "Sprite", "props": { "y": -85, "x": 455, "name": "size" }, "child": [{ "type": "Image", "props": { "y": 100, "x": 0, "var": "size", "skin": "local/游戏页/game_btn_纸牌大小.png", "name": "size" } }] }] };
            return gameBottomUI;
        }(Dialog));
        poker.gameBottomUI = gameBottomUI;
    })(poker = ui.poker || (ui.poker = {}));
})(ui || (ui = {}));
(function (ui) {
    var poker;
    (function (poker) {
        var gamePopupUI = /** @class */ (function (_super) {
            __extends(gamePopupUI, _super);
            function gamePopupUI() {
                return _super.call(this) || this;
            }
            gamePopupUI.prototype.createChildren = function () {
                _super.prototype.createChildren.call(this);
                this.createView(ui.poker.gamePopupUI.uiView);
            };
            gamePopupUI.uiView = { "type": "Dialog", "props": { "width": 750, "height": 1334, "centerX": 0, "bottom": 100 }, "child": [{ "type": "Image", "props": { "y": 0, "x": 0, "width": 750, "var": "CloseBTN", "skin": "UI/bg_tab.png", "name": "CloseBTN", "height": 1334, "alpha": 0, "sizeGrid": "25,27,20,26" } }, { "type": "Sprite", "props": { "y": 15, "x": -3, "var": "endGame" }, "child": [{ "type": "Image", "props": { "y": -8, "x": 0, "width": 204, "var": "EndGame", "skin": "UI/Popsbtn.png", "height": 79 } }, { "type": "Label", "props": { "y": 9, "x": 52, "text": "结束游戏", "fontSize": 25, "font": "Microsoft YaHei", "color": "#346ebb", "bold": true } }] }, { "type": "Sprite", "props": { "y": 1205, "x": 20, "var": "reTry", "name": "reTry" }, "child": [{ "type": "Image", "props": { "y": -8, "x": 0, "var": "RETRY", "skin": "local/游戏页/game_btn_重试.png" } }] }, { "type": "Sprite", "props": { "y": 1099, "x": 20, "var": "newGame", "name": "newGame" }, "child": [{ "type": "Image", "props": { "y": -8, "x": 0, "var": "NEWGame", "skin": "local/游戏页/game_btn_返回首页.png" } }] }, { "type": "Sprite", "props": { "y": 997, "x": 411, "width": 325, "var": "cardSize", "name": "cardSize", "height": 277 }, "child": [{ "type": "Image", "props": { "y": 0, "x": 0, "var": "CARDSIZE", "skin": "local/游戏页/pop_btn_选择纸牌大小.png" }, "child": [{ "type": "Image", "props": { "y": 74, "x": 179, "var": "bigK", "skin": "UI/game_image_bigK.png" } }, { "type": "Image", "props": { "y": 58, "x": 163, "width": 134, "var": "bigKMask", "skin": "UI/game_image_bottomLight.png", "height": 184 } }, { "type": "Image", "props": { "y": 74, "x": 41, "var": "smallK", "skin": "UI/game_image_smallK.png" } }, { "type": "Image", "props": { "y": 58, "x": 25, "width": 134, "var": "smallKMask", "skin": "UI/game_image_bottomLight.png", "height": 184 } }] }] }, { "type": "Image", "props": { "y": 1109, "x": 15, "var": "jump", "skin": "local/游戏页/game_txt_重试三次可以跳关.png" } }, { "type": "Image", "props": { "y": 985, "x": 20, "var": "back", "skin": "local/游戏页/game_btn_返回首页.png" } }] };
            return gamePopupUI;
        }(Dialog));
        poker.gamePopupUI = gamePopupUI;
    })(poker = ui.poker || (ui.poker = {}));
})(ui || (ui = {}));
(function (ui) {
    var poker;
    (function (poker) {
        var gameTopUI = /** @class */ (function (_super) {
            __extends(gameTopUI, _super);
            function gameTopUI() {
                return _super.call(this) || this;
            }
            gameTopUI.prototype.createChildren = function () {
                View.regComponent("Text", laya.display.Text);
                _super.prototype.createChildren.call(this);
                this.createView(ui.poker.gameTopUI.uiView);
            };
            gameTopUI.uiView = { "type": "Dialog", "props": { "y": 0, "width": 750, "top": 0, "height": 40, "centerX": 0 }, "child": [{ "type": "Image", "props": { "y": -9, "x": 282, "skin": "local/结果页/result_image_时间.png" } }, { "type": "Text", "props": { "y": 1, "x": 347, "var": "TimeCount", "text": "01:11", "strokeColor": "#252E42", "stroke": 5, "name": "TimeCount", "fontSize": 36, "font": "Helvetica", "color": "#ffffff" } }, { "type": "Sprite", "props": { "y": -633, "x": 415, "visible": false, "scaleY": 0.7, "scaleX": 0.7, "name": "challenge" }, "child": [{ "type": "Image", "props": { "width": 268, "var": "challenge", "skin": "UI/Popsbtn.png", "height": 143 }, "child": [{ "type": "Label", "props": { "width": 180, "text": "每日挑战", "height": 84, "fontSize": 45, "font": "Microsoft YaHei", "color": "#346ebb", "centerY": 0, "centerX": 0, "bold": true, "anchorY": 0.5, "anchorX": 0.5 } }] }] }, { "type": "Sprite", "props": { "y": -633, "x": 572, "visible": false, "scaleY": 0.7, "scaleX": 0.7, "name": "setting" }, "child": [{ "type": "Image", "props": { "width": 268, "var": "setting", "skin": "UI/Popsbtn.png", "height": 143 }, "child": [{ "type": "Label", "props": { "width": 100, "text": "设置", "height": 84, "fontSize": 50, "font": "Microsoft YaHei", "color": "#346ebb", "centerY": 0, "centerX": 0, "bold": true, "anchorY": 0.5, "anchorX": 0.5 } }] }] }, { "type": "Sprite", "props": { "y": -633, "x": 730, "visible": false, "scaleY": 0.7, "scaleX": 0.7, "name": "shop" }, "child": [{ "type": "Image", "props": { "width": 268, "var": "shop", "skin": "UI/Popsbtn.png", "height": 143 }, "child": [{ "type": "Label", "props": { "width": 100, "text": "商城", "height": 84, "fontSize": 50, "font": "Microsoft YaHei", "color": "#346ebb", "centerY": 0, "centerX": 0, "bold": true, "anchorY": 0.5, "anchorX": 0.5 } }] }] }, { "type": "Box", "props": { "y": -639, "x": 905, "visible": false, "var": "money" }, "child": [{ "type": "Text", "props": { "y": 39, "x": 134, "width": 116, "var": "GoldText", "text": "999999", "name": "GoldText", "height": 42, "fontSize": 33, "font": "Microsoft YaHei", "color": "#ffffff" } }, { "type": "Text", "props": { "y": 47, "x": 109, "text": "X", "name": "x", "fontSize": 23, "font": "Microsoft YaHei", "color": "#ffffff", "bold": true } }, { "type": "Image", "props": { "skin": "UI/gold.png" } }] }] };
            return gameTopUI;
        }(Dialog));
        poker.gameTopUI = gameTopUI;
    })(poker = ui.poker || (ui.poker = {}));
})(ui || (ui = {}));
(function (ui) {
    var poker;
    (function (poker) {
        var pokerTableUI = /** @class */ (function (_super) {
            __extends(pokerTableUI, _super);
            function pokerTableUI() {
                return _super.call(this) || this;
            }
            pokerTableUI.prototype.createChildren = function () {
                _super.prototype.createChildren.call(this);
                this.createView(ui.poker.pokerTableUI.uiView);
            };
            pokerTableUI.uiView = { "type": "View", "props": { "x": 0, "width": 750, "top": 0, "height": 1334 }, "child": [{ "type": "Box", "props": { "y": 1334, "x": 375, "width": 750, "var": "BackGround", "name": "BackGround", "height": 1700, "anchorY": 1, "anchorX": 0.5 }, "child": [{ "type": "Image", "props": { "y": 0, "x": 0, "width": 750, "var": "BGImg", "height": 1700 } }, { "type": "Image", "props": { "y": 1000, "x": 375, "var": "model", "skin": "new18/game_image_cutlevel.png", "anchorY": 0.5, "anchorX": 0.5 }, "child": [{ "type": "FontClip", "props": { "y": 5, "x": 142, "var": "num", "value": "1", "skin": "new18/num1.png", "sheet": "0123456789", "anchorX": 0.5 } }, { "type": "Image", "props": { "y": -5, "x": -5, "var": "lightmodel", "skin": "new18/game_image_cutlevel_light.png", "alpha": 1 } }, { "type": "FontClip", "props": { "y": 5, "x": 142, "var": "lightnum", "value": "1", "skin": "new18/num2.png", "sheet": "0123456789", "anchorX": 0.5 } }, { "type": "Image", "props": { "y": 200, "x": 61, "width": 162, "var": "mingpai", "height": 162 }, "child": [{ "type": "Image", "props": { "y": 81, "x": 81, "var": "taiji", "skin": "local/游戏页/pop_image_大风车.png", "anchorY": 0.5, "anchorX": 0.5 } }, { "type": "Image", "props": { "y": 11, "x": 11, "skin": "local/游戏页/pop_pro_跳过.png" } }, { "type": "Image", "props": { "y": 213, "x": -62, "skin": "new19/pop_txt_1.png" } }] }] }] }, { "type": "Sprite", "props": { "y": 334, "x": 63, "width": 656, "name": "PokerTable", "height": 627 }, "child": [{ "type": "Sprite", "props": { "y": 32, "x": -48, "var": "Line1", "scaleY": 1, "scaleX": 1, "name": "Line1" }, "child": [{ "type": "Image", "props": { "y": 0, "x": 0, "width": 98, "skin": "UI/img_card_c01.png", "height": 160 } }] }, { "type": "Sprite", "props": { "y": 32, "x": 56, "var": "Line2", "scaleY": 1, "scaleX": 1, "name": "Line2" }, "child": [{ "type": "Image", "props": { "y": 0, "x": 0, "width": 98, "skin": "UI/img_card_c01.png", "height": 160 } }] }, { "type": "Sprite", "props": { "y": 32, "x": 160, "var": "Line3", "scaleY": 1, "scaleX": 1, "name": "Line3" }, "child": [{ "type": "Image", "props": { "y": 0, "x": 0, "width": 98, "skin": "UI/img_card_c01.png", "height": 160 } }] }, { "type": "Sprite", "props": { "y": 32, "x": 264, "var": "Line4", "scaleY": 1, "scaleX": 1, "name": "Line4" }, "child": [{ "type": "Image", "props": { "y": 0, "x": 0, "width": 98, "skin": "UI/img_card_c01.png", "height": 160 } }] }, { "type": "Sprite", "props": { "y": 32, "x": 367, "var": "Line5", "scaleY": 1, "scaleX": 1, "name": "Line5" }, "child": [{ "type": "Image", "props": { "y": 0, "x": 0, "width": 98, "skin": "UI/img_card_c01.png", "height": 160 } }] }, { "type": "Sprite", "props": { "y": 32, "x": 471, "var": "Line6", "scaleY": 1, "scaleX": 1, "name": "Line6" }, "child": [{ "type": "Image", "props": { "y": 0, "x": 0, "width": 98, "skin": "UI/img_card_c01.png", "height": 160 } }] }, { "type": "Sprite", "props": { "y": 32, "x": 575, "var": "Line7", "scaleY": 1, "scaleX": 1, "name": "Line7" }, "child": [{ "type": "Image", "props": { "y": 0, "x": 0, "width": 98, "skin": "UI/img_card_c01.png", "height": 160 } }] }, { "type": "Sprite", "props": { "y": -141, "x": 388, "var": "ThreeCard", "scaleY": 1, "scaleX": 1, "name": "ThreeCard" }, "child": [{ "type": "Image", "props": { "y": 0, "x": 0, "width": 98, "skin": "UI/img_card_c01.png", "height": 160 } }] }, { "type": "Sprite", "props": { "y": -141, "x": 575, "var": "StartCard", "scaleY": 1, "scaleX": 1, "name": "StartCard" }, "child": [{ "type": "Image", "props": { "y": 0, "x": 0, "width": 98, "skin": "UI/img_card_c01.png", "height": 160 } }] }, { "type": "Sprite", "props": { "y": -141, "x": -48, "var": "Deck1", "scaleY": 1, "scaleX": 1, "name": "Deck1" }, "child": [{ "type": "Image", "props": { "y": 0, "x": 0, "width": 98, "skin": "UI/img_card_c01.png", "height": 160 } }] }, { "type": "Sprite", "props": { "y": -141, "x": 56, "var": "Deck2", "scaleY": 1, "scaleX": 1, "name": "Deck2" }, "child": [{ "type": "Image", "props": { "y": 0, "x": 0, "width": 98, "skin": "UI/img_card_c01.png", "height": 160 } }] }, { "type": "Sprite", "props": { "y": -141, "x": 160, "var": "Deck3", "scaleY": 1, "scaleX": 1, "name": "Deck3" }, "child": [{ "type": "Image", "props": { "y": 0, "x": 0, "width": 98, "skin": "UI/img_card_c01.png", "height": 160 } }] }, { "type": "Sprite", "props": { "y": -141, "x": 264, "var": "Deck4", "scaleY": 1, "scaleX": 1, "name": "Deck4" }, "child": [{ "type": "Image", "props": { "y": 0, "x": 0, "width": 98, "skin": "UI/img_card_c01.png", "height": 160 } }] }, { "type": "Sprite", "props": { "y": -699, "x": -436, "var": "tutorialMask", "name": "tutorialMask", "mouseThrough": true, "mouseEnabled": true, "hitTestPrior": true, "alpha": 0.5 }, "child": [{ "type": "Rect", "props": { "y": 0, "x": 0, "width": 1380, "lineWidth": 0, "lineColor": "#000000", "height": 2153, "fillColor": "#000000" } }] }, { "type": "Sprite", "props": { "y": 0, "x": 0, "scaleY": 1, "scaleX": 1, "name": "tutorialCardSpr" }, "child": [{ "type": "Sprite", "props": { "var": "tutorialCardSpr1", "name": "tutorialCardSpr1" } }] }, { "type": "Sprite", "props": { "y": 10, "x": 10, "scaleY": 1, "scaleX": 1, "name": "tutorialCardSpr" }, "child": [{ "type": "Sprite", "props": { "var": "tutorialCardSpr2", "name": "tutorialCardSpr2" } }] }, { "type": "Sprite", "props": { "y": -126, "x": 3, "var": "LineMove", "scaleY": 1, "scaleX": 1, "name": "LineMove", "mouseThrough": false, "mouseEnabled": false, "hitTestPrior": false } }, { "type": "Sprite", "props": { "y": 0, "x": 0, "var": "LineTips", "scaleY": 1, "scaleX": 1, "name": "LineTips", "mouseThrough": false, "mouseEnabled": false, "hitTestPrior": false, "alpha": 0.8 } }, { "type": "Sprite", "props": { "y": -141, "x": 575, "var": "StartCardTip", "scaleY": 1, "scaleX": 1, "name": "StartCardTip", "mouseThrough": false, "mouseEnabled": false, "hitTestPrior": false, "alpha": 0.8 } }] }, { "type": "Sprite", "props": { "y": 1069, "x": 0, "width": 750, "name": "message", "mouseThrough": false, "mouseEnabled": false, "hitTestPrior": false, "height": 50 }, "child": [{ "type": "Image", "props": { "y": -93, "x": 374, "width": 125, "var": "messageBg", "skin": "new18/bg.png", "height": 66, "anchorX": 0.5, "alpha": 0, "sizeGrid": "10,10,10,10" } }, { "type": "Label", "props": { "y": -80, "x": 375, "var": "message", "text": "这是一条提示信息", "name": "message", "fontSize": 40, "font": "SimHei", "color": "#ffffff", "anchorX": 0.5, "alpha": 0 } }] }, { "type": "Image", "props": { "y": 1056, "x": 161, "var": "shoupai", "skin": "local/newBg/shou.png", "bottom": 150 } }] };
            return pokerTableUI;
        }(View));
        poker.pokerTableUI = pokerTableUI;
    })(poker = ui.poker || (ui.poker = {}));
})(ui || (ui = {}));
(function (ui) {
    var poker;
    (function (poker) {
        var settingPopupUI = /** @class */ (function (_super) {
            __extends(settingPopupUI, _super);
            function settingPopupUI() {
                return _super.call(this) || this;
            }
            settingPopupUI.prototype.createChildren = function () {
                View.regComponent("Text", laya.display.Text);
                _super.prototype.createChildren.call(this);
                this.createView(ui.poker.settingPopupUI.uiView);
            };
            settingPopupUI.uiView = { "type": "View", "props": { "width": 750, "height": 1334 }, "child": [{ "type": "Sprite", "props": { "y": 256, "x": 87 }, "child": [{ "type": "Image", "props": { "y": 418, "x": 288, "skin": "UI/pop_image_1.png", "anchorY": 0.5, "anchorX": 0.5 } }, { "type": "Image", "props": { "y": 394, "x": 406, "width": 141, "var": "timerBTN", "skin": "UI/Popsbtn.png", "height": 61, "alpha": 0 } }, { "type": "Image", "props": { "y": 264, "x": 406, "width": 141, "var": "lefthandBTN", "skin": "UI/Popsbtn.png", "height": 61, "alpha": 0 } }, { "type": "Image", "props": { "y": 136, "x": 406, "width": 141, "var": "soundBTNImg", "skin": "UI/Popsbtn.png", "height": 61, "alpha": 0 } }, { "type": "Image", "props": { "y": 522, "x": 406, "width": 141, "var": "ThreeCardBTN", "skin": "UI/Popsbtn.png", "height": 61, "alpha": 0 } }, { "type": "Image", "props": { "y": 653, "x": 406, "width": 141, "var": "VigasBTN", "skin": "UI/Popsbtn.png", "height": 61, "alpha": 0 } }, { "type": "Image", "props": { "y": 21, "x": 537, "var": "CloseBTN", "skin": "UI/btn_0.png" } }, { "type": "Image", "props": { "y": -379, "x": -78, "width": 524, "var": "CloseBTN2", "skin": "UI/anniu_guanbi.png", "scaleY": 0.5, "scaleX": 0.5, "height": 74, "alpha": 0 } }, { "type": "Image", "props": { "y": 535, "x": 286, "var": "wen1", "skin": "UI/pop_image_wen.png" } }, { "type": "Image", "props": { "y": 665, "x": 286, "var": "wen2", "skin": "UI/pop_image_wen.png" } }, { "type": "Sprite", "props": { "y": 394, "x": 406, "var": "timerSwitch", "name": "switch" }, "child": [{ "type": "Image", "props": { "skin": "UI/1.png", "name": "state1" } }, { "type": "Image", "props": { "skin": "UI/2.png", "name": "state2" } }, { "type": "Image", "props": { "skin": "UI/3.png", "name": "state3" } }] }, { "type": "Sprite", "props": { "y": 264, "x": 406, "var": "lefthandSwitch", "name": "switch" }, "child": [{ "type": "Image", "props": { "skin": "UI/1.png", "name": "state1" } }, { "type": "Image", "props": { "skin": "UI/2.png", "name": "state2" } }, { "type": "Image", "props": { "skin": "UI/3.png", "name": "state3" } }] }, { "type": "Sprite", "props": { "y": 522, "x": 406, "var": "threecardSwitch", "name": "switch" }, "child": [{ "type": "Image", "props": { "skin": "UI/1.png", "name": "state1" } }, { "type": "Image", "props": { "skin": "UI/2.png", "name": "state2" } }, { "type": "Image", "props": { "skin": "UI/3.png", "name": "state3" } }] }, { "type": "Sprite", "props": { "y": 653, "x": 406, "var": "vigasSwitch", "name": "switch" }, "child": [{ "type": "Image", "props": { "skin": "UI/1.png", "name": "state1" } }, { "type": "Image", "props": { "skin": "UI/2.png", "name": "state2" } }, { "type": "Image", "props": { "skin": "UI/3.png", "name": "state3" } }] }, { "type": "Sprite", "props": { "y": 136, "x": 406, "var": "soundSwitch", "name": "switch" }, "child": [{ "type": "Image", "props": { "skin": "UI/1.png", "name": "state1" } }, { "type": "Image", "props": { "skin": "UI/2.png", "name": "state2" } }, { "type": "Image", "props": { "skin": "UI/3.png", "name": "state3" } }] }, { "type": "Image", "props": { "y": 808, "x": -12, "var": "wen22", "skin": "UI/pop_image_detail1.png" } }, { "type": "Image", "props": { "y": 808, "x": -12, "var": "wen11", "skin": "UI/pop_image_detail2.png" } }] }, { "type": "Text", "props": { "y": 542, "x": 890, "var": "lefthandText", "text": "左手习惯", "fontSize": 30, "font": "SimHei", "color": "#5077aa" } }, { "type": "Text", "props": { "y": 577, "x": 890, "var": "timerText", "text": "计时器", "fontSize": 30, "font": "SimHei", "color": "#5077aa" } }, { "type": "Text", "props": { "y": 612, "x": 890, "var": "threecardOnce", "text": "一次发三张", "fontSize": 30, "font": "SimHei", "color": "#5077aa" } }, { "type": "Text", "props": { "y": 648, "x": 889, "var": "lasvigasMode", "text": "维加斯模式", "fontSize": 30, "font": "SimHei", "color": "#5077aa" } }, { "type": "Text", "props": { "y": 507, "x": 892, "var": "soundText", "text": "音效", "height": 30, "fontSize": 30, "font": "SimHei", "color": "#5077aa" } }] };
            return settingPopupUI;
        }(View));
        poker.settingPopupUI = settingPopupUI;
    })(poker = ui.poker || (ui.poker = {}));
})(ui || (ui = {}));
(function (ui) {
    var poker;
    (function (poker) {
        var ShopUI = /** @class */ (function (_super) {
            __extends(ShopUI, _super);
            function ShopUI() {
                return _super.call(this) || this;
            }
            ShopUI.prototype.createChildren = function () {
                View.regComponent("Text", laya.display.Text);
                _super.prototype.createChildren.call(this);
                this.createView(ui.poker.ShopUI.uiView);
            };
            ShopUI.uiView = { "type": "View", "props": { "width": 750, "height": 1334 }, "child": [{ "type": "Sprite", "props": { "y": 71, "x": 3 }, "child": [{ "type": "Image", "props": { "y": -155, "x": -133, "width": 1000, "skin": "UI/img_bg_bluefelt_thumb.png", "height": 2000 } }] }, { "type": "Sprite", "props": { "y": 241, "x": -25 }, "child": [{ "type": "Image", "props": { "y": -16, "x": 69, "width": 670, "skin": "UI/chunbai_diban.png", "height": 1089, "sizeGrid": "36,152,37,142" } }, { "type": "Tab", "props": { "y": 14, "x": 136, "var": "tab", "skin": "UI/tab.png", "selectedIndex": 0, "scaleY": 0.85, "scaleX": 0.85, "name": "tab", "labels": "背景,牌面,牌背", "labelSize": 36, "labelPadding": "0", "labelFont": "SimHei", "labelColors": "#ffffff,#ffffff,#ffffff" } }, { "type": "Label", "props": { "y": -53, "x": 54, "var": "BackBTN", "text": "< 返回", "name": "BackBTN", "fontSize": 40, "font": "Microsoft YaHei", "color": "#a8dff9" } }, { "type": "Label", "props": { "y": -53, "x": 54, "var": "CloseBTN", "text": "< 返回", "name": "CloseBTN", "fontSize": 40, "font": "Microsoft YaHei", "color": "#a8dff9" } }] }, { "type": "Text", "props": { "y": 175, "x": 316, "text": "商城", "strokeColor": "#7d97ea", "stroke": 1, "fontSize": 50, "font": "SimHei", "color": "#ffffff" } }, { "type": "ViewStack", "props": { "y": 335, "x": 67, "width": 690, "var": "viewstack", "selectedIndex": 0, "name": "viewstack", "height": 981 }, "child": [{ "type": "List", "props": { "y": -10, "x": 39, "width": 617, "var": "listBG", "vScrollBarSkin": "UI/vscroll.png", "spaceX": 3, "name": "item0", "height": 933 }, "child": [{ "type": "Box", "props": { "y": 0, "x": 0, "width": 274, "renderType": "render", "name": "render", "height": 318 }, "child": [{ "type": "Rect", "props": { "y": 259, "x": -2, "width": 273, "lineWidth": 1, "height": 51, "fillColor": "#273755" } }, { "type": "Image", "props": { "y": 0, "x": -2, "width": 909, "skin": "UI/Bg_6.png", "scaleY": 0.3, "scaleX": 0.3, "name": "icon1", "height": 881 } }, { "type": "Image", "props": { "y": 56, "x": 58, "skin": "UI/cardskin1.png", "scaleY": 0.6, "scaleX": 0.6, "name": "cardShow" } }, { "type": "Button", "props": { "y": 209, "x": 3, "width": 125, "skin": "UI/btn_3.png", "name": "buy", "labelSize": 25, "labelFont": "SimHei", "labelColors": "#ffffff", "label": "1元", "height": 43 } }, { "type": "Button", "props": { "y": 209, "x": 133, "width": 131, "skin": "UI/btn_3.png", "name": "try", "labelSize": 25, "labelFont": "SimHei", "labelColors": "#ffffff", "label": "体验", "height": 43 } }, { "type": "Label", "props": { "y": 264, "text": "国王背景", "name": "name", "fontSize": 25, "font": "Microsoft YaHei", "color": "#fdfdfd", "centerX": 0, "align": "center" } }, { "type": "Button", "props": { "y": 207, "x": 35, "width": 181, "skin": "UI/btn_3.png", "name": "use", "labelSize": 25, "labelFont": "SimHei", "labelColors": "#ffffff", "label": "使用", "height": 46 } }, { "type": "Text", "props": { "y": 213, "x": 72, "text": "正在使用", "name": "using", "fontSize": 30, "font": "Microsoft YaHei", "color": "#ffffff", "bold": true } }, { "type": "Rect", "props": { "y": -1, "x": -2, "width": 273, "lineWidth": 1, "height": 263, "fillColor": "#346ebb" } }] }] }, { "type": "List", "props": { "y": -9, "x": 36, "width": 617, "var": "listCard", "vScrollBarSkin": "UI/vscroll.png", "spaceX": 5, "name": "item1", "height": 933 }, "child": [{ "type": "Box", "props": { "y": 0, "x": 0, "width": 269, "renderType": "render", "name": "render", "height": 318 }, "child": [{ "type": "Image", "props": { "y": 262, "x": -2, "width": 270, "skin": "UI/background.png", "scaleY": -1, "height": 265 } }, { "type": "Rect", "props": { "y": 261, "x": 1, "width": 265, "lineWidth": 1, "height": 43, "fillColor": "#273755" } }, { "type": "Image", "props": { "y": 181, "x": 168, "skin": "UI/img_card_c01.png", "rotation": -20, "name": "icon1", "anchorY": 1, "anchorX": 1 } }, { "type": "Image", "props": { "y": 36, "x": 88, "skin": "UI/img_card_c01.png", "name": "icon2" } }, { "type": "Image", "props": { "y": 224, "x": 223, "skin": "UI/img_card_c01.png", "rotation": 10, "name": "icon3", "anchorY": 1, "anchorX": 1 } }, { "type": "Button", "props": { "y": 209, "x": -3, "width": 131, "skin": "UI/btn_3.png", "name": "buy", "labelSize": 25, "labelFont": "SimHei", "labelColors": "#ffffff", "label": "1元", "height": 43 } }, { "type": "Button", "props": { "y": 209, "x": 133, "width": 131, "skin": "UI/btn_3.png", "name": "try", "labelSize": 25, "labelFont": "SimHei", "labelColors": "#ffffff", "label": "体验", "height": 43 } }, { "type": "Label", "props": { "y": 266, "text": "国王背景", "name": "name", "fontSize": 25, "font": "Microsoft YaHei", "color": "#fdfdfd", "centerX": 0, "align": "center" } }, { "type": "Button", "props": { "y": 207, "x": 35, "width": 181, "skin": "UI/btn_3.png", "name": "use", "labelSize": 25, "labelFont": "SimHei", "labelColors": "#ffffff", "label": "使用", "height": 46 } }, { "type": "Text", "props": { "y": 208, "x": 78, "text": "正在使用", "name": "using", "fontSize": 30, "font": "Microsoft YaHei", "color": "#ffffff", "bold": true } }] }] }, { "type": "List", "props": { "y": -10, "x": 41, "width": 617, "var": "listCardBack", "vScrollBarSkin": "UI/vscroll.png", "spaceX": 1, "name": "item2", "height": 933 }, "child": [{ "type": "Box", "props": { "y": 0, "x": 0, "width": 270, "renderType": "render", "name": "render", "height": 305 }, "child": [{ "type": "Image", "props": { "y": 262, "x": 0, "width": 268, "skin": "UI/background.png", "scaleY": -1, "height": 265 } }, { "type": "Rect", "props": { "y": 259, "x": -1, "width": 270, "lineWidth": 1, "height": 43, "fillColor": "#273755" } }, { "type": "Image", "props": { "y": 187, "x": 170, "skin": "UI/img_card_c01.png", "rotation": -20, "name": "icon1", "anchorY": 1, "anchorX": 1 } }, { "type": "Image", "props": { "y": 42, "x": 90, "skin": "UI/img_card_c01.png", "name": "icon2" } }, { "type": "Image", "props": { "y": 230, "x": 225, "skin": "UI/img_card_c01.png", "rotation": 10, "name": "icon3", "anchorY": 1, "anchorX": 1 } }, { "type": "Button", "props": { "y": 209, "x": -3, "width": 131, "skin": "UI/btn_3.png", "name": "buy", "labelSize": 25, "labelFont": "SimHei", "labelColors": "#ffffff", "label": "1元", "height": 43 } }, { "type": "Button", "props": { "y": 209, "x": 133, "width": 131, "skin": "UI/btn_3.png", "name": "try", "labelSize": 25, "labelFont": "SimHei", "labelColors": "#ffffff", "label": "体验", "height": 43 } }, { "type": "Label", "props": { "y": 264, "text": "国王背景", "name": "name", "fontSize": 25, "font": "Microsoft YaHei", "color": "#fdfdfd", "centerX": -20, "align": "center" } }, { "type": "Button", "props": { "y": 207, "x": 35, "width": 181, "skin": "UI/btn_3.png", "name": "use", "labelSize": 25, "labelFont": "SimHei", "labelColors": "#ffffff", "label": "使用", "height": 46 } }, { "type": "Text", "props": { "y": 210, "x": 74, "text": "正在使用", "name": "using", "fontSize": 30, "font": "Microsoft YaHei", "color": "#f7f8f4", "bold": true } }] }] }] }, { "type": "Text", "props": { "y": 195, "x": 632, "width": 116, "var": "GoldText", "text": "999999", "name": "GoldText", "height": 42, "fontSize": 33, "font": "Microsoft YaHei", "color": "#ffffff" } }, { "type": "Text", "props": { "y": 203, "x": 607, "text": "X", "name": "x", "fontSize": 23, "font": "Microsoft YaHei", "color": "#ffffff", "bold": true } }, { "type": "Image", "props": { "y": 156, "x": 498, "skin": "UI/gold.png" } }, { "type": "Sprite", "props": { "y": 626, "x": 242, "width": 50, "name": "message", "mouseThrough": false, "mouseEnabled": false, "hitTestPrior": false, "height": 50 }, "child": [{ "type": "Text", "props": { "y": -6, "x": -7, "var": "message", "text": "这是一条提示信息", "name": "message", "mouseThrough": false, "mouseEnabled": false, "hitTestPrior": false, "fontSize": 30, "font": "SimHei", "color": "#ffffff", "alpha": 0, "align": "left" } }] }] };
            return ShopUI;
        }(View));
        poker.ShopUI = ShopUI;
    })(poker = ui.poker || (ui.poker = {}));
})(ui || (ui = {}));
(function (ui) {
    var poker;
    (function (poker) {
        var StartGameUI = /** @class */ (function (_super) {
            __extends(StartGameUI, _super);
            function StartGameUI() {
                return _super.call(this) || this;
            }
            StartGameUI.prototype.createChildren = function () {
                View.regComponent("Text", laya.display.Text);
                _super.prototype.createChildren.call(this);
                this.createView(ui.poker.StartGameUI.uiView);
            };
            StartGameUI.uiView = { "type": "View", "props": { "width": 750, "height": 1334 }, "child": [{ "type": "Image", "props": { "skin": "local/newBg/image_天空底.png", "height": 1700, "bottom": 0 }, "child": [{ "type": "Image", "props": { "y": 264, "x": 0, "var": "clound6", "top": 264, "skin": "local/newBg/image_6.png" } }, { "type": "Image", "props": { "x": 391, "var": "clound7", "top": 378, "skin": "local/newBg/image_7.png" } }, { "type": "Image", "props": { "y": 360, "x": 365, "var": "clound5", "top": 360, "skin": "local/newBg/image_5.png" } }, { "type": "Image", "props": { "y": 651, "x": 186, "var": "clound4", "top": 651, "skin": "local/newBg/image_4.png" } }, { "type": "Image", "props": { "y": 668, "x": -40, "var": "clound3", "top": 668, "skin": "local/newBg/image_3.png" } }, { "type": "Image", "props": { "y": 719, "x": 471, "var": "clound2", "top": 719, "skin": "local/newBg/image_2.png" } }, { "type": "Image", "props": { "x": 327, "var": "clound1", "top": 914, "skin": "local/newBg/image_1.png" } }, { "type": "Image", "props": { "skin": "local/newBg/image_建筑.png", "bottom": 0 } }] }, { "type": "Button", "props": { "y": 930, "x": 258, "width": 242, "var": "shop", "strokeColors": "#346ebb", "skin": "UI/button.png", "name": "shop", "labelStrokeColor": "#346ebb", "labelStroke": 2, "labelSize": 40, "labelFont": "SimHei", "label": "商城", "height": 118 } }, { "type": "Image", "props": { "y": 1155, "x": 375, "var": "startGame", "skin": "local/newBg/index_btn_开始游戏.png", "bottom": 71, "anchorX": 0.5 }, "child": [{ "type": "Image", "props": { "y": -115, "x": 6, "var": "upupupbtn", "skin": "local/newBg/result_点击按钮升级人物.png" } }] }, { "type": "Image", "props": { "x": 133, "top": 180, "skin": "login/bg_2.png" } }, { "type": "Image", "props": { "x": 375, "var": "model", "skin": "new18/index_image_cut.png", "scaleY": 1, "scaleX": 1, "bottom": 211, "anchorY": 0.5, "anchorX": 0.5 }, "child": [{ "type": "Label", "props": { "y": -1, "x": 98, "var": "num", "text": "1", "fontSize": 50, "font": "SimHei", "color": "#ffffff", "bold": true, "anchorX": 0.5 } }] }, { "type": "Image", "props": { "y": 1145, "x": 375, "var": "startFreeGame", "skin": "local/newBg/index_btn_开始游戏.png", "bottom": 71, "anchorX": 0.5 } }, { "type": "Text", "props": { "y": 638, "x": 4, "width": 742, "valign": "middle", "height": 220, "fontSize": 100, "font": "SimHei", "color": "#000000", "bold": true, "align": "center" } }, { "type": "Image", "props": { "var": "bigStore", "skin": "local/首页/index_btn_商店.png", "left": 38, "bottom": 48 } }, { "type": "Image", "props": { "var": "rankList", "skin": "local/首页/index_btn_排行榜.png", "left": 38, "bottom": 207 } }, { "type": "Image", "props": { "y": 1216, "x": 663, "width": 98, "var": "luntan", "right": 38, "height": 140, "bottom": 48, "anchorY": 0.5, "anchorX": 0.5 } }, { "type": "Box", "props": { "y": 650, "x": 6 }, "child": [{ "type": "TextInput", "props": { "width": 749, "var": "writeLevelTxt", "valign": "middle", "promptColor": "#c5afae", "prompt": "输入关卡", "height": 172, "fontSize": 100, "font": "SimSun", "color": "#ffffff", "bold": true, "align": "center" } }, { "type": "Image", "props": { "y": 187, "x": 295, "var": "textLabel", "skin": "UI/Popsbtn.png" } }] }, { "type": "Box", "props": { "x": 375, "width": 300, "var": "skBox", "pivotY": 520, "pivotX": 150, "height": 540, "bottom": 312 }, "child": [{ "type": "Image", "props": { "y": 300, "x": 280, "skin": "local/首页/index_image_人物名字底.png" }, "child": [{ "type": "Label", "props": { "y": 75, "x": 39, "width": 58, "var": "skName", "valign": "middle", "text": "xxx", "strokeColor": "#643C0D", "stroke": 4, "leading": 1, "height": 146, "fontSize": 30, "font": "SimHei", "color": "#FFFFFF", "bold": true, "anchorY": 0.5, "anchorX": 0.5, "align": "center" } }] }, { "type": "Image", "props": { "y": 482, "x": 63, "skin": "local/首页/index_image_人物影子.png" } }] }, { "type": "Image", "props": { "y": 45, "x": 228, "var": "powerBox", "skin": "local/首页/index_image_体力.png", "anchorY": 0.5 }, "child": [{ "type": "Label", "props": { "y": 14, "x": 82, "var": "powerLabel", "text": 99, "strokeColor": "#000000", "stroke": 4, "fontSize": 30, "font": "Helvetica", "color": "#ffffff", "anchorX": 0.5 } }] }, { "type": "Image", "props": { "y": 46, "x": 23, "var": "goldBox", "skin": "local/首页/index_image_金币.png", "anchorY": 0.5 }, "child": [{ "type": "Label", "props": { "y": 14, "x": 113, "var": "goldLabel", "text": 99999, "strokeColor": "#000000", "stroke": 4, "fontSize": 30, "font": "Helvetica", "color": "#ffffff", "anchorX": 0.5 } }] }, { "type": "Image", "props": { "x": 663, "width": 142, "var": "moregame", "height": 168, "bottom": 207, "anchorY": 0.5, "anchorX": 0.5 } }, { "type": "Image", "props": { "y": 831, "var": "showmore", "skin": "local/首页/show.png" }, "child": [{ "type": "Image", "props": { "y": 0, "x": 70, "skin": "local/首页/point_red.png" } }] }] };
            return StartGameUI;
        }(View));
        poker.StartGameUI = StartGameUI;
    })(poker = ui.poker || (ui.poker = {}));
})(ui || (ui = {}));
(function (ui) {
    var poker;
    (function (poker) {
        var tutorialUI = /** @class */ (function (_super) {
            __extends(tutorialUI, _super);
            function tutorialUI() {
                return _super.call(this) || this;
            }
            tutorialUI.prototype.createChildren = function () {
                _super.prototype.createChildren.call(this);
                this.createView(ui.poker.tutorialUI.uiView);
            };
            tutorialUI.uiView = { "type": "Dialog", "props": { "width": 750, "height": 550, "centerX": 0, "bottom": 0 }, "child": [{ "type": "Image", "props": { "y": 408, "x": 60, "width": 663, "skin": "UI/introduction_play_ruban.png", "scaleY": -1, "height": 262, "sizeGrid": "50,100,50,100" } }, { "type": "Label", "props": { "y": 175, "x": 75, "width": 439, "var": "tutorialDesc", "text": "新手指引文本", "strokeColor": "#668ab0", "stroke": 1, "name": "tutorialDesc", "height": 198, "fontSize": 35, "font": "SimHei", "color": "#ffffff", "bold": false } }, { "type": "Sprite", "props": { "y": 329, "x": 516, "width": 185, "height": 61 }, "child": [{ "type": "Image", "props": { "var": "QuitTutorial", "skin": "UI/btn_1.png" } }] }] };
            return tutorialUI;
        }(Dialog));
        poker.tutorialUI = tutorialUI;
    })(poker = ui.poker || (ui.poker = {}));
})(ui || (ui = {}));
(function (ui) {
    var poker;
    (function (poker) {
        var WinUI = /** @class */ (function (_super) {
            __extends(WinUI, _super);
            function WinUI() {
                return _super.call(this) || this;
            }
            WinUI.prototype.createChildren = function () {
                View.regComponent("Text", laya.display.Text);
                _super.prototype.createChildren.call(this);
                this.createView(ui.poker.WinUI.uiView);
            };
            WinUI.uiView = { "type": "Dialog", "props": { "width": 750, "height": 1334 }, "child": [{ "type": "Label", "props": { "y": -180, "x": -25, "width": 800, "text": "label", "height": 1800, "bgColor": "#000000", "alpha": 0.7 } }, { "type": "Button", "props": { "y": 0, "x": 0, "width": 741, "skin": "UI/button.png", "label": "label", "height": 1316, "alpha": 0 } }, { "type": "Sprite", "props": { "y": 273, "x": 92 }, "child": [{ "type": "Image", "props": { "y": -100, "x": 283, "skin": "local/结果页/result_title_完全胜利.png", "anchorX": 0.5 } }, { "type": "Button", "props": { "y": 693, "x": 123, "visible": false, "var": "shareBtn", "stateNum": 1, "skin": "UI/share.png", "labelSize": 30, "labelFont": "Microsoft YaHei", "labelColors": "#d28908", "labelBold": true } }, { "type": "Image", "props": { "y": 433, "x": 299, "skin": "local/结果页/result_image_时间.png", "anchorY": 0.5 } }, { "type": "Text", "props": { "y": 408, "x": 363, "var": "timeCount", "text": "00:25", "strokeColor": "#252E42", "stroke": 5, "name": "timeCount", "fontSize": 50, "color": "#ffffff", "bold": false } }, { "type": "Image", "props": { "y": 573, "x": 28, "var": "toHome", "skin": "local/结果页/result_btn_首页.png" }, "child": [{ "type": "Image", "props": { "y": 130, "x": -82, "var": "showUpLevel", "skin": "local/newBg/avatar_kuang.png" }, "child": [{ "type": "Image", "props": { "y": 98, "x": 70, "var": "showAvatar", "skin": "local/newBg/avatar_1.png", "anchorY": 0.5, "anchorX": 0.5 } }] }, { "type": "Image", "props": { "y": 130, "x": 246, "var": "showUpLevel2", "skin": "local/newBg/result_再过一关获得新角色.png" }, "child": [{ "type": "Image", "props": { "y": 98, "x": 70, "var": "showAvatar2", "skin": "local/newBg/avatar_1.png", "anchorY": 0.5, "anchorX": 0.5 } }] }] }, { "type": "Image", "props": { "y": 433, "x": 69, "skin": "local/结果页/result_image_金币.png", "anchorY": 0.5 } }, { "type": "Text", "props": { "y": 408, "x": 133, "var": "coinCount", "text": "00:25", "strokeColor": "#252E42", "stroke": 5, "name": "coinCount", "fontSize": 50, "color": "#ffffff", "bold": false } }, { "type": "Image", "props": { "y": 573, "x": 188, "var": "startNewgame", "skin": "local/结果页/result_btn_下一关.png", "name": "startNewgame" } }] }] };
            return WinUI;
        }(Dialog));
        poker.WinUI = WinUI;
    })(poker = ui.poker || (ui.poker = {}));
})(ui || (ui = {}));
(function (ui) {
    var RankingViewUI = /** @class */ (function (_super) {
        __extends(RankingViewUI, _super);
        function RankingViewUI() {
            return _super.call(this) || this;
        }
        RankingViewUI.prototype.createChildren = function () {
            _super.prototype.createChildren.call(this);
            this.createView(ui.RankingViewUI.uiView);
        };
        RankingViewUI.uiView = { "type": "View", "props": { "width": 750, "height": 1334 }, "child": [{ "type": "Label", "props": { "y": -183, "x": 0, "width": 750, "text": "label", "height": 1800, "bgColor": "#000000", "alpha": 0.7 } }, { "type": "Box", "props": { "x": 0, "width": 750, "var": "all", "height": 1334 }, "child": [{ "type": "Image", "props": { "y": 144, "width": 750, "height": 941 }, "child": [{ "type": "Image", "props": { "x": 0, "skin": "local/排行榜/flip_image_排行榜底.png" } }, { "type": "Image", "props": { "y": -25, "x": 652, "var": "btnBack", "skin": "local/排行榜/flip_btn_返回.png" } }, { "type": "Image", "props": { "y": 1050, "x": 201, "var": "mLastPage", "skin": "local/排行榜/index_btn_上一页.png", "anchorY": 0.5, "anchorX": 0.5 } }, { "type": "Image", "props": { "y": 1050, "x": 548, "var": "mNextPage", "skin": "local/排行榜/index_btn_下一页.png", "anchorY": 0.5, "anchorX": 0.5 } }, { "type": "Image", "props": { "y": 122, "x": 67, "width": 632, "var": "listBK", "height": 818 }, "child": [{ "type": "Box", "props": { "y": 666, "x": 26, "width": 580, "var": "mSelf", "height": 110 }, "child": [{ "type": "Image", "props": { "width": 580, "skin": "local/交互/flip_bg_列表已解锁.png", "height": 110 } }] }] }, { "type": "Image", "props": { "y": 122, "x": 67, "width": 632, "var": "rankSprite", "height": 818 } }] }, { "type": "Image", "props": { "y": 502, "x": 37, "skin": "local/排行榜/flip_image_排行榜手指.png" } }] }] };
        return RankingViewUI;
    }(View));
    ui.RankingViewUI = RankingViewUI;
})(ui || (ui = {}));
(function (ui) {
    var ShowBgViewUI = /** @class */ (function (_super) {
        __extends(ShowBgViewUI, _super);
        function ShowBgViewUI() {
            return _super.call(this) || this;
        }
        ShowBgViewUI.prototype.createChildren = function () {
            _super.prototype.createChildren.call(this);
            this.createView(ui.ShowBgViewUI.uiView);
        };
        ShowBgViewUI.uiView = { "type": "Dialog", "props": { "width": 750, "height": 1334 }, "child": [{ "type": "Image", "props": { "y": 103, "x": 94, "width": 562, "height": 1000 }, "child": [{ "type": "Image", "props": { "y": 1000, "x": 281, "var": "bg", "scaleY": 0.75, "scaleX": 0.75, "anchorY": 1, "anchorX": 0.5 } }, { "type": "Label", "props": { "width": 562, "text": "label", "renderType": "mask", "height": 1000, "bgColor": "#000000" } }] }, { "type": "Image", "props": { "y": 1141, "x": 47, "var": "cancel", "skin": "local/商店/shop_btn_取消.png" } }, { "type": "Image", "props": { "y": 1141, "x": 402, "var": "buy", "skin": "local/商店/index_btn_金币购买.png" }, "child": [{ "type": "Label", "props": { "y": 22, "x": 181, "var": "goldLabel", "text": 99999, "fontSize": 54, "font": "Helvetica", "color": "#643C18", "bold": false, "anchorX": 0.5 } }] }, { "type": "Image", "props": { "y": 1141, "x": 402, "var": "change", "skin": "local/商店/pop_btn_更换.png" } }, { "type": "Box", "props": { "y": 512, "x": 146 }, "child": [{ "type": "Image", "props": { "width": 76, "var": "showCard1", "skin": "local/商店/Skin_5001.png", "height": 114 } }, { "type": "Image", "props": { "x": 84, "width": 76, "var": "showCard2", "skin": "UI/game_image_smallK.png", "height": 114 } }, { "type": "Image", "props": { "x": 168, "width": 76, "var": "showCard3", "skin": "UI/game_image_smallK.png", "height": 114 } }, { "type": "Image", "props": { "x": 252, "width": 76, "var": "showCard4", "skin": "UI/game_image_smallK.png", "height": 114 } }, { "type": "Image", "props": { "x": 381, "width": 76, "var": "showCard5", "skin": "UI/game_image_smallK.png", "height": 114 } }] }] };
        return ShowBgViewUI;
    }(Dialog));
    ui.ShowBgViewUI = ShowBgViewUI;
})(ui || (ui = {}));
(function (ui) {
    var SKViewUI = /** @class */ (function (_super) {
        __extends(SKViewUI, _super);
        function SKViewUI() {
            return _super.call(this) || this;
        }
        SKViewUI.prototype.createChildren = function () {
            _super.prototype.createChildren.call(this);
            this.createView(ui.SKViewUI.uiView);
        };
        SKViewUI.uiView = { "type": "Dialog", "props": { "width": 750, "height": 1334 }, "child": [{ "type": "Image", "props": { "y": 154, "skin": "local/交互/pop_image_时来运转底.png" }, "child": [{ "type": "Image", "props": { "y": -23, "x": 648, "var": "btnClose", "skin": "local/交互/pop_btn_返回.png" } }, { "type": "List", "props": { "y": 135, "x": 74, "width": 620, "var": "skList", "spaceY": 10, "repeatY": 7, "repeatX": 1, "height": 886 }, "child": [{ "type": "Box", "props": { "y": 0, "x": 74, "width": 604, "renderType": "render", "height": 120 }, "child": [{ "type": "Image", "props": { "y": 59, "x": 269, "skin": "local/交互/pop_bg_列表当前.png", "name": "bg1", "anchorY": 0.5, "anchorX": 0.5 }, "child": [{ "type": "Label", "props": { "y": 59, "x": 87, "valign": "middle", "text": "金盆洗手", "name": "leftTxt", "fontSize": 40, "font": "SimHei", "color": "#0e4466", "bold": true, "anchorY": 0.5, "align": "center" } }, { "type": "Label", "props": { "y": 59, "x": 493, "valign": "middle", "text": "完成第999关", "name": "rightTxt", "fontSize": 30, "font": "SimHei", "color": "#643C18", "bold": true, "anchorY": 0.5, "anchorX": 1, "align": "center" } }] }, { "type": "Image", "props": { "y": 58, "x": -37, "skin": "local/交互/pop_image_当前等级方块.png", "name": "bg2", "anchorY": 0.5, "anchorX": 0.5 } }, { "type": "Image", "props": { "y": -7, "x": -38, "skin": "local/交互/pop_image_解锁升级.png", "name": "topheng", "anchorY": 0.5, "anchorX": 0.5 } }] }] }, { "type": "Image", "props": { "y": 358, "x": 42, "skin": "local/交互/pop_image_时来运转手指.png" } }] }] };
        return SKViewUI;
    }(Dialog));
    ui.SKViewUI = SKViewUI;
})(ui || (ui = {}));
(function (ui) {
    var wx;
    (function (wx) {
        var loginUI = /** @class */ (function (_super) {
            __extends(loginUI, _super);
            function loginUI() {
                return _super.call(this) || this;
            }
            loginUI.prototype.createChildren = function () {
                _super.prototype.createChildren.call(this);
                this.createView(ui.wx.loginUI.uiView);
            };
            loginUI.uiView = { "type": "View", "props": { "y": 0, "x": 0, "width": 750, "height": 1334 }, "child": [{ "type": "Image", "props": { "y": -83, "x": 0, "var": "bk", "skin": "login/bg.png", "height": 1700 } }, { "type": "Image", "props": { "y": 460, "x": 375, "visible": false, "var": "logo", "skin": "login/logo.png", "anchorY": 0.5, "anchorX": 0.5 } }, { "type": "Image", "props": { "y": 800, "x": 375, "visible": false, "var": "btnStar", "skin": "login/star.png", "anchorY": 0.5, "anchorX": 0.5 } }, { "type": "Image", "props": { "y": 600, "x": 375, "visible": false, "var": "login", "skin": "login/bk2.png", "anchorY": 0.5, "anchorX": 0.5 }, "child": [{ "type": "Image", "props": { "y": 288, "x": 225, "var": "btnStar2", "skin": "login/login.png", "anchorY": 0, "anchorX": 0.5 } }] }, { "type": "Image", "props": { "x": 133, "top": 180, "skin": "login/bg_2.png" } }, { "type": "Image", "props": { "y": 991, "x": 134, "var": "prg", "skin": "login/prg1.png", "centerX": 0, "bottom": 300 }, "child": [{ "type": "Image", "props": { "y": 4, "x": 3, "width": 20, "var": "prg2", "skin": "login/prg2.png", "sizeGrid": "0,30,0,30" } }] }] };
            return loginUI;
        }(View));
        wx.loginUI = loginUI;
    })(wx = ui.wx || (ui.wx = {}));
})(ui || (ui = {}));
//# sourceMappingURL=layaUI.max.all.js.map