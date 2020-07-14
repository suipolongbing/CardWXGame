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
var pokerChain = poker.pokerChain;
var gameTableView = /** @class */ (function (_super) {
    __extends(gameTableView, _super);
    function gameTableView() {
        var _this = _super.call(this) || this;
        _this.startCard = new poker.pokerChainGroup(poker.PokerGroupRenderMode.lastOneCard); //开始的牌堆
        _this.pokerLineList = new Array(); //牌线 1-3
        _this.discardPileList = new poker.pokerChainGroup(poker.PokerGroupRenderMode.lastOneCard); //废弃牌堆，消失的牌会进入这里
        _this.pokerFloorNumArray = new Array(); //每层卡牌的数量
        _this.dragMovingStartPos = new laya.maths.Point();
        _this.isStartDraging = false; //开始拖拽
        _this.isStartDragMoved = false; //是否开始拖动了(点击判断使用)
        _this.mouseStartPos = new laya.maths.Point();
        _this.clickImg = null;
        _this.dragPokerGroup = new Array();
        _this.dragPokerGroupIndex = 0;
        _this.shadowImg1 = null;
        _this.shadowImg2 = null;
        _this.mask1 = null;
        _this.mask2 = null;
        _this.shinning = null;
        _this.dragInListOne = 0;
        _this.shadow1OtherList = new Array();
        _this.shadow2OtherList = new Array();
        _this.mask1OtherList = new Array();
        _this.mask2OtherList = new Array();
        _this.shinningOtherList = new Array();
        _this.isDownTween = false;
        _this.dtime = 50;
        _this.longClickTime = 0;
        _this.nowTimeDown = 0;
        _this.selectShinning = null;
        _this.selectIndex = -1;
        _this.propSelectShinning = new Array();
        _this.propSelectIndex = -1;
        _this.passiveListSelectIndex = -1;
        _this.passivePropCompleteIdx = -1;
        /**开始时英雄的centerY位置，每次卡牌降落英雄都会回到这个位置 */
        _this.fixedY = 0;
        /**开始时英雄位于中间位置，位置选择：0，1，2 */
        _this.heroIndex = 1;
        _this.heroPosList = [];
        _this.canMouseDown = false;
        _this.offsetBox = 0;
        _this.maxFloor = 12;
        _this.nextNum = 0;
        _this.firstGetProp = false;
        _this.firstGetKongFu = false;
        _this.CollisionArrList = new Array();
        _this.initGame();
        return _this;
    }
    gameTableView.prototype.onShow = function (bool) {
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
    gameTableView.prototype.addEvent = function () {
        this.btn_start.on(Laya.Event.CLICK, this, this.startGame, [false]);
        this.Hero.on(Laya.Event.MOUSE_DOWN, this, this.onHeroMounseDown);
        this.Hero.on(Laya.Event.MOUSE_MOVE, this, this.onHeroMounseMove);
        this.Hero.on(Laya.Event.MOUSE_UP, this, this.onHeroMounseUp);
        this.propMoveCancel.on(Laya.Event.CLICK, this, this.cancelMoveBg);
    };
    gameTableView.prototype.removeEvent = function () {
    };
    gameTableView.prototype.initGame = function () {
        this.height = Laya.stage.height;
        this.offsetBox = 0;
        this.propMoveBox.height = Laya.stage.height;
        // console.log("offset:", 1334 / Laya.stage.height)
        this.bg1.height = Laya.stage.height;
        this.pokerList.centerY += this.offsetBox;
        this.btn_start.centerY += this.offsetBox;
        this.bg2.height = (Laya.stage.height - 1334) / 2 + 150;
        this.TargetList.centerY += this.offsetBox;
        this.Hero.centerY += this.offsetBox;
        // this.desc.y = 50;
        this.fixedY = this.Hero.centerY;
        this.Hero.zOrder = objectZorder.Hero;
        this.pokerList.zOrder = objectZorder.Poker;
        this.btn_start.zOrder = objectZorder.UI;
        this.TargetList.zOrder = objectZorder.Target;
        this.bg1.zOrder = objectZorder.Bg1;
        this.bg2.zOrder = objectZorder.Bg2;
        this.InitiativeList.zOrder = objectZorder.MoveBg;
        this.PassiveList.zOrder = objectZorder.MoveBg;
        this.propMoveBox.zOrder = objectZorder.MoveBg;
        this.desc.zOrder = objectZorder.Bg2;
        var shinning1 = new Laya.Image();
        shinning1.skin = 'new/game_image_shinning2.png';
        shinning1.size(141, 190);
        this.Target1.addChild(shinning1);
        shinning1.pos(-19, -19);
        var shinning2 = new Laya.Image();
        shinning2.skin = 'new/game_image_shinning2.png';
        shinning2.size(141, 190);
        this.Target2.addChild(shinning2);
        shinning2.pos(-19, -19);
        var shinning3 = new Laya.Image();
        shinning3.skin = 'new/game_image_shinning2.png';
        shinning3.size(141, 190);
        this.Target3.addChild(shinning3);
        shinning3.pos(-19, -19);
        this.RookieGuide(1);
    };
    gameTableView.prototype.initRepeat = function () {
        this.startCard.render.zeroCardName = "";
        this.startCard.data.CreateFull();
        this.startCard.FlushRender();
        //console.log("this.startCard:", this.startCard.data.pokerList.length);
        for (var i = 0; i < 3; i++) {
            var line = new poker.pokerChainGroup(poker.PokerGroupRenderMode.line);
            line.render.zeroCardName = "";
            this.pokerLineList.push(line);
        }
    };
    gameTableView.prototype.startGame = function (isNext) {
        if (isNext) {
            this.nextNum++;
        }
        this.passiveListSelectIndex = -1;
        this.canMouseDown = true;
        this.heroIndex = 1;
        this.selectIndex = -1;
        this.pokerList.centerY = -1942 + this.offsetBox;
        this.pokerList.centerX = 0;
        this.TargetList.centerY = -2145 + this.offsetBox;
        this.TargetList.centerX = 0;
        this.Hero.centerY = 334 + this.offsetBox;
        this.Hero.centerX = 0;
        this.desc.text = '';
        this.heroStg = heroStorage.Inst;
        this.heroStg.initHeroStorage(isNext);
        this.pokerFloorNumArray = [];
        this.LaunchCheatWithUI(false);
        this.effectUis = [this.HeroEffect1, this.HeroEffect2, this.HeroEffect3, this.HeroEffect4, this.HeroEffect5, this.HeroEffect6];
        this.effectUi2s = [this.HeroSEffect1, this.HeroSEffect2, this.HeroSEffect3, this.HeroSEffect4, this.HeroSEffect5, this.HeroSEffect6];
        this.refreshHeroUI();
        this.dearCard();
    };
    gameTableView.prototype.endGame = function () {
        var _this = this;
        var label = new Laya.Label();
        label.fontSize = 100;
        label.centerX = 0;
        label.centerY = 0;
        label.text = "Your Fail";
        label.color = "#ffffff";
        this.addChild(label);
        label.alpha = 0;
        label.zOrder = 200;
        Laya.Tween.to(label, { alpha: 1 }, 1000, Laya.Ease.linearIn, new Laya.Handler(this, function () {
            Laya.timer.once(1000, _this, function () {
                label.removeSelf();
                label.destroy();
                BaseViewManager.Inst.onSceneIndex();
            });
        }));
    };
    gameTableView.prototype.dearCard = function () {
        var _this = this;
        var cardList;
        this.allCardBackToStart();
        this.startCard.data.ShuffleWithTime(3);
        cardList = this.dearStartDeck();
        for (var i = 0; i < cardList.length; i++) {
            // var render = new poker.pokerGroupRender(poker.PokerGroupRenderMode.line);
            // cardList[i].SetAllCardToFront();
            // render.FlushPokerList(cardList[i], false);
            if (i >= 0 && i < cardList.length / 3) {
                var spr = new Laya.Sprite();
                spr.addChild(this.pokerLineList[i].render);
                spr.pos(0, 0);
                spr.visible = true;
                this.Line1.addChild(spr);
            }
            else if (i >= cardList.length / 3 && i < cardList.length * 2 / 3) {
                var spr = new Laya.Sprite();
                spr.addChild(this.pokerLineList[i].render);
                spr.pos(0, 0);
                spr.visible = true;
                this.Line2.addChild(spr);
            }
            else {
                var spr = new Laya.Sprite();
                spr.addChild(this.pokerLineList[i].render);
                spr.pos(0, 0);
                spr.visible = true;
                this.Line3.addChild(spr);
            }
            this.connectDearCardArrayToRender(i, null);
        }
        //最上方是Boss,Boss两侧无卡牌
        var card = this.pokerLineList[0].data.GetFirstCard();
        // card.data.mType = PokerType.coin;
        // card.data.mNum = 1;
        card.data.SetCardBack(true);
        card.FlushRender();
        this.pokerLineList[0].render.FlushPokerList(this.pokerLineList[0].data, false);
        var card = this.pokerLineList[1].data.GetFirstCard();
        card.data.mType = PokerType.enemy;
        var num = 4 + Math.floor(this.nextNum / 2);
        if (num > 6) {
            num = 6;
        }
        card.data.mNum = num;
        card.data.SetAtk(MathUtils.getRandom(CardConstant.CardCK[card.data.mNum]["num"][0], CardConstant.CardCK[card.data.mNum]["num"][1]).toString());
        card.FlushRender();
        this.pokerLineList[1].render.FlushPokerList(this.pokerLineList[1].data, false);
        var card = this.pokerLineList[2].data.GetFirstCard();
        // card.data.mType = PokerType.coin;
        // card.data.mNum = 1;
        card.data.SetCardBack(true);
        card.FlushRender();
        this.pokerLineList[2].render.FlushPokerList(this.pokerLineList[2].data, false);
        this.pokerFloorNumArray[0] = [0, 1, 0];
        //增加某些层级的空位，让游戏更难
        this.vacancyFloor();
        //设置卡牌,50%怪物,15%血量,15%武器,20%金币
        for (var index = 0; index < 3; index++) {
            this.pokerLineList[index].data.pokerList.forEach(function (card, index) {
                if (index != 0 && !card.data.IsCardBack) {
                    var rand = MathUtils.getRandom(1, 30);
                    if (rand <= 15) {
                        card.data.mType = PokerType.enemy;
                        var num = MathUtils.getRandom(1, 3 + Math.floor(_this.nextNum / 2));
                        if (num > 5) {
                            num = 5;
                        }
                        card.data.mNum = num;
                        card.data.SetAtk(MathUtils.getRandom(CardConstant.CardCK[card.data.mNum]["num"][0], CardConstant.CardCK[card.data.mNum]["num"][1]).toString());
                        card.FlushRender();
                    }
                    else if (rand > 15 && rand <= 20) {
                        card.data.mType = PokerType.blood;
                        var num = MathUtils.getRandom(1, 9 + Math.floor(_this.nextNum / 2));
                        if (num > 15) {
                            num = 15;
                        }
                        card.data.mNum = num;
                        card.FlushRender();
                    }
                    else if (rand > 20 && rand <= 25) {
                        card.data.mType = PokerType.atk;
                        var num = MathUtils.getRandom(1, 5);
                        card.data.mNum = num;
                        var maxHurt = CardConstant.CardWeapon[card.data.mNum]["num"][1] + Math.floor(_this.nextNum / 2);
                        if (maxHurt > 15) {
                            maxHurt = 15;
                        }
                        card.CreateHurt(MathUtils.getRandom(CardConstant.CardWeapon[card.data.mNum]["num"][0], maxHurt).toString());
                        card.FlushRender();
                    }
                    else {
                        card.data.mType = PokerType.coin;
                        var num = MathUtils.getRandom(3, 8 + Math.floor(_this.nextNum / 2));
                        if (num > 15) {
                            num = 15;
                        }
                        card.data.mNum = num;
                        card.FlushRender();
                    }
                }
            });
            this.pokerLineList[index].render.FlushPokerList(this.pokerLineList[index].data, false);
        }
        //从第6 - this.maxFloor-3行中任意选择一行的其中一个变成功法卡牌
        var row;
        var col;
        var isSpec = false;
        for (var i_1 = 0; i_1 < this.pokerFloorNumArray.length; i_1++) {
            if (i_1 >= 6 && this.pokerFloorNumArray[i_1][0] == 0 && this.pokerFloorNumArray[i_1][1] == 0 &&
                this.pokerFloorNumArray[i_1][2] == 0 && this.pokerLineList[1].data.GetIndexCard(i_1).data.mType == PokerType.coin &&
                !this.pokerLineList[1].data.GetIndexCard(i_1).data.IsCardBack) {
                row = i_1;
                col = 1;
                isSpec = true;
                return;
            }
        }
        if (!isSpec) {
            col = MathUtils.getRandom(0, 2);
            row = MathUtils.getRandom(6, this.maxFloor - 3);
            var card = this.pokerLineList[col].data.GetIndexCard(row);
            while (card.data.IsCardBack) {
                col = MathUtils.getRandom(0, 2);
                row = MathUtils.getRandom(6, this.maxFloor - 3);
                card = this.pokerLineList[col].data.GetIndexCard(row);
            }
        }
        var kongfuCard = card;
        kongfuCard.data.mType = PokerType.treasure;
        var treasureArray = [];
        if (heroStorage.Inst.KongFuArray.length > 0) {
            for (var z = 1; z < CardConstant.CardTreasure.length; z++) {
                var bool = false;
                for (var y = 0; y < heroStorage.Inst.KongFuArray.length; y++) {
                    if (heroStorage.Inst.KongFuArray[y].id == CardConstant.CardTreasure[z].id) {
                        bool = true;
                        break;
                    }
                }
                if (!bool) {
                    treasureArray.push(CardConstant.CardTreasure[z].id);
                }
            }
            var rd = MathUtils.getRandom(0, treasureArray.length - 1);
            kongfuCard.data.mNum = treasureArray[rd];
            console.log("功法1：", treasureArray, rd, treasureArray[rd]);
        }
        else {
            var rd = MathUtils.getRandom(1, CardConstant.CardTreasure.length - 1);
            kongfuCard.data.mNum = rd;
            console.log("功法2：", rd);
        }
        kongfuCard.FlushRender();
        this.pokerLineList[col].render.FlushPokerList(this.pokerLineList[col].data, false);
        //从任意和上面不相干的一行中任意选择一行的其中一个变成商店
        var row2List = [];
        for (var si = 1; si < this.maxFloor - 2; si++) {
            if (si != row) {
                row2List.push(si);
            }
        }
        var row2 = row2List[MathUtils.getRandom(0, row2List.length - 1)];
        var col2 = MathUtils.getRandom(0, 2);
        var card = this.pokerLineList[col2].data.GetIndexCard(row2);
        while (card.data.IsCardBack) {
            col2 = MathUtils.getRandom(0, 2);
            row2 = row2List[MathUtils.getRandom(0, row2List.length - 1)];
            card = this.pokerLineList[col2].data.GetIndexCard(row2);
        }
        //console.log("只有一个商店：", row2List, row2, col2);
        var store1Card = card;
        store1Card.data.mType = PokerType.store;
        store1Card.data.mNum = 0;
        store1Card.FlushRender();
        this.pokerLineList[col2].render.FlushPokerList(this.pokerLineList[col2].data, false);
        this.heroPosList = [this.Line1.x + this.pokerList.x, this.Line2.x + this.pokerList.x, this.Line3.x + this.pokerList.x];
        /**赋予卡牌点击事件 */
        for (var index = 0; index < 3; index++) {
            this.FlushCardClick(index);
        }
        //console.log("pokerFloorNumArray:", this.pokerFloorNumArray, this.pokerLineList[0].data.pokerList.length)
    };
    gameTableView.prototype.vacancyFloor = function () {
        var one = 1;
        var two = 1;
        for (var r = 0; r < 2; r++) {
            var rand = MathUtils.getRandom(1, 10);
            if (rand >= 6) {
                one += 1;
            }
            else {
                two += 1;
            }
        }
        //console.log("onetwo1:", one, two)
        var oneNumArray = [];
        var twoNumArray = [];
        var oneNumCanArray = [];
        var twoNumCanArray = [];
        for (var z = 2; z < this.maxFloor - 1; z++) {
            oneNumCanArray.push(z);
        }
        for (var i = 0; i < one; i++) {
            var index = MathUtils.getRandom(0, oneNumCanArray.length - 1);
            var rm = oneNumCanArray[index];
            //console.log("rmrmrm:", rm, this.pokerFloorNumArray)
            var card = this.pokerLineList[0].data.GetIndexCard(rm);
            // card.data.mType = PokerType.coin;
            // card.data.mNum = 1;
            card.data.SetCardBack(true);
            card.FlushRender();
            this.pokerLineList[0].render.FlushPokerList(this.pokerLineList[0].data, false);
            var card = this.pokerLineList[2].data.GetIndexCard(rm);
            // card.data.mType = PokerType.coin;
            // card.data.mNum = 1;
            card.data.SetCardBack(true);
            card.FlushRender();
            this.pokerLineList[2].render.FlushPokerList(this.pokerLineList[2].data, false);
            oneNumArray.push(rm);
            var frontLimit = index - 1;
            var behindLimit = index + 1;
            var det = [0, 1, 0];
            if (rm - 1 == oneNumCanArray[frontLimit]) {
                det[0] = 1;
            }
            if (rm + 1 == oneNumCanArray[behindLimit]) {
                det[2] = 1;
            }
            //console.log("onetwormrmrm:", det, rm, oneNumCanArray[frontLimit], oneNumCanArray[behindLimit])
            if (det[0] == 1 && det[2] == 1) {
                oneNumCanArray.splice(frontLimit, 3);
            }
            else if (det[0] == 1 && det[2] == 0) {
                oneNumCanArray.splice(frontLimit, 2);
            }
            else if (det[0] == 0 && det[2] == 1) {
                oneNumCanArray.splice(index, 2);
            }
            else if (det[0] == 0 && det[2] == 0) {
                oneNumCanArray.splice(index, 1);
            }
            this.pokerFloorNumArray[rm] = [0, 1, 0];
            //console.log("onetwo2:", oneNumArray, oneNumCanArray)
        }
        for (var j = 2; j < this.maxFloor - 1; j++) {
            var bool = false;
            for (var k = 0; k < oneNumArray.length; k++) {
                if (oneNumArray[k] == j) {
                    bool = true;
                }
            }
            if (!bool) {
                twoNumCanArray.push(j);
            }
        }
        //console.log("onetwo3:", twoNumCanArray)
        for (var l = 0; l < two; l++) {
            var index = MathUtils.getRandom(0, twoNumCanArray.length - 1);
            var rm2 = twoNumCanArray[index];
            //console.log("onetwo4:", rm2)
            var l1 = MathUtils.getRandom(0, 2);
            if (l1 == 0 || l1 == 2) {
                var card = this.pokerLineList[l1].data.GetIndexCard(rm2);
                card.data.mType = PokerType.coin;
                card.data.mNum = 1;
                card.data.SetCardBack(true);
                card.FlushRender();
                this.pokerLineList[l1].render.FlushPokerList(this.pokerLineList[l1].data, false);
                if (l1 == 0) {
                    this.pokerFloorNumArray[rm2] = [0, 1, 1];
                }
                else {
                    this.pokerFloorNumArray[rm2] = [1, 1, 0];
                }
            }
            else {
                var card = this.pokerLineList[l1].data.GetIndexCard(rm2);
                card.data.mType = PokerType.coin;
                card.data.mNum = 1;
                card.data.SetCardBack(true);
                card.FlushRender();
                this.pokerLineList[l1].render.FlushPokerList(this.pokerLineList[l1].data, false);
                this.pokerFloorNumArray[rm2] = [1, 0, 1];
            }
            twoNumArray.push(rm2);
            var frontLimit = index - 1;
            var behindLimit = index + 1;
            var det = [0, 1, 0];
            if (rm2 - 1 == twoNumCanArray[frontLimit]) {
                det[0] = 1;
            }
            if (rm2 + 1 == twoNumCanArray[behindLimit]) {
                det[2] = 1;
            }
            //console.log("onetwormrmrm2:", det, rm2, twoNumCanArray[frontLimit], twoNumCanArray[behindLimit])
            if (det[0] == 1 && det[2] == 1) {
                twoNumCanArray.splice(frontLimit, 3);
            }
            else if (det[0] == 1 && det[2] == 0) {
                twoNumCanArray.splice(frontLimit, 2);
            }
            else if (det[0] == 0 && det[2] == 1) {
                twoNumCanArray.splice(index, 2);
            }
            else if (det[0] == 0 && det[2] == 0) {
                twoNumCanArray.splice(index, 1);
            }
            //console.log("onetwo5:", twoNumArray, twoNumCanArray)
        }
    };
    gameTableView.prototype.allCardBackToStart = function () {
        for (var i = 0; i < 3; i++) {
            this.backToStart(this.pokerLineList[i]);
        }
        this.backToStart(this.discardPileList);
        //console.log("this.startCard.data.pokerList.length:", this.startCard.data.pokerList.length)
        for (var i = 0; i < this.startCard.data.pokerList.length; i++) {
            var poker = this.startCard.data.pokerList[i];
            poker.render.img.removeSelf();
            poker.data.RestartInit();
        }
        this.startCard.FlushRender();
    };
    gameTableView.prototype.dearStartDeck = function () {
        this.dearCardArray = new Array();
        var pGroup;
        for (var i = 0; i < 3; i++) {
            pGroup = this.startCard.data.SplitePokerGroupByNum(this.maxFloor);
            //console.log("pGroup:", pGroup);
            //pGroup.pokerList.reverse();
            this.dearCardArray.push(pGroup);
        }
        for (var num = 0; num < this.maxFloor; num++) {
            this.pokerFloorNumArray[num] = [1, 1, 1];
        }
        this.setAllStartCardToFront();
        this.startCard.FlushRender();
        return this.dearCardArray;
    };
    gameTableView.prototype.backToStart = function (pokerGroup) {
        var pokerData = pokerGroup.data;
        this.startCard.data.Concat(pokerData);
        pokerGroup.FlushRender();
    };
    gameTableView.prototype.setAllStartCardToFront = function () {
        this.startCard.data.SetAllCardToFront();
        this.startCard.data.FlushAllCardRender();
    };
    gameTableView.prototype.connectDearCardArrayToRender = function (index, sortEndHandle) {
        var i = index;
        this.pokerLineList[i].data.Concat(this.dearCardArray[i]);
        this.pokerLineList[i].data.SetAllCardToFront();
        this.pokerLineList[i].render.FlushPokerList(this.pokerLineList[i].data, false);
        this.pokerLineList[i].render.SortAndMoveToPos(sortEndHandle);
    };
    gameTableView.prototype.onHeroMounseDown = function () {
        var _this = this;
        if (!this.canMouseDown) {
            return;
        }
        // if (this.passiveListSelectIndex != -1) {
        //     return;
        // }
        if (this.propSelectShinning.length > 0) {
            return;
        }
        this.clickImg = this.Hero;
        this.isStartDraging = true;
        this.isStartDragMoved = false;
        this.nowTimeDown = new Date().getTime();
        Laya.timer.once(this.longClickTime, this, function () {
            if (new Date().getTime() - _this.nowTimeDown >= _this.longClickTime && _this.nowTimeDown != 0) {
                if (!_this.shadowImg1) {
                    _this.shadowImg1 = new Laya.Image();
                }
                if (!_this.shadowImg2) {
                    _this.shadowImg2 = new Laya.Image();
                }
                _this.shadowImg1.skin = 'new/game_image_sd.png';
                _this.shadowImg2.skin = 'new/game_image_sd.png';
                _this.shadowImg1.size(102, 152);
                _this.clickImg.addChild(_this.shadowImg1);
                _this.shadowImg2.size(102, 152);
                _this.clickImg.addChild(_this.shadowImg2);
                _this.mask1 = new Laya.Image();
                _this.mask1.skin = 'new/game_image_shodow.png';
                _this.mask1.size(102, 152);
                _this.mask2 = new Laya.Image();
                _this.mask2.skin = 'new/game_image_shodow.png';
                _this.shadowImg1.mask = _this.mask1;
                _this.mask2.size(102, 152);
                _this.shadowImg2.mask = _this.mask2;
                _this.shinning = new Laya.Image();
                _this.shinning.skin = 'new/game_image_shinning1.png';
                _this.shinning.size(141, 190);
                _this.clickImg.addChild(_this.shinning);
                _this.shinning.pos(-19, -19);
                for (var _i = 0, _a = _this.dragPokerGroup; _i < _a.length; _i++) {
                    var img = _a[_i];
                    var shadowImg1 = new Laya.Image();
                    var shadowImg2 = new Laya.Image();
                    var mask1 = new Laya.Image();
                    var mask2 = new Laya.Image();
                    var shinning = new Laya.Image();
                    _this.shadow1OtherList.push(shadowImg1);
                    _this.shadow2OtherList.push(shadowImg2);
                    _this.mask1OtherList.push(mask1);
                    _this.mask2OtherList.push(mask2);
                    _this.shinningOtherList.push(shinning);
                    shadowImg1.skin = 'new/game_image_sd.png';
                    shadowImg2.skin = 'new/game_image_sd.png';
                    shadowImg1.size(102, 152);
                    img.addChild(shadowImg1);
                    shadowImg2.size(102, 152);
                    img.addChild(shadowImg2);
                    mask1.skin = 'new/game_image_shodow.png';
                    mask1.size(102, 152);
                    mask2.skin = 'new/game_image_shodow.png';
                    shadowImg1.mask = mask1;
                    mask2.size(102, 152);
                    shadowImg2.mask = mask2;
                    shinning.skin = 'new/game_image_shinning1.png';
                    shinning.size(141, 190);
                    img.addChild(shinning);
                    shinning.pos(-19, -19);
                }
                var x = _this.clickImg.x;
                var y = _this.clickImg.y;
                _this.isDownTween = true;
                Laya.Tween.to(_this.clickImg, {
                    x: x - 8,
                    y: y - 8
                }, _this.dtime, Laya.Ease.sineOut, new Laya.Handler(_this, function () {
                    this.isDownTween = false;
                }));
                for (var _b = 0, _c = _this.dragPokerGroup; _b < _c.length; _b++) {
                    var img = _c[_b];
                    var xx = img.x;
                    var yy = img.y;
                    Laya.Tween.to(img, {
                        x: xx - 8,
                        y: yy - 8
                    }, _this.dtime, Laya.Ease.sineOut, new Laya.Handler(_this, function () {
                        this.isDownTween = false;
                    }));
                }
                _this.shinning.alpha = 0;
                Laya.Tween.to(_this.shinning, {
                    alpha: 1
                }, _this.dtime, Laya.Ease.sineOut);
                _this.shadowImg1.pos(5, 5);
                _this.shadowImg2.pos(5, 5);
                _this.mask1.pos(0, 145);
                _this.mask2.pos(97, -5);
                Laya.Tween.to(_this.shadowImg1, {
                    x: 20,
                    y: 20
                }, _this.dtime, Laya.Ease.sineOut);
                Laya.Tween.to(_this.shadowImg2, {
                    x: 20,
                    y: 20
                }, _this.dtime, Laya.Ease.sineOut);
                Laya.Tween.to(_this.mask1, {
                    x: 0,
                    y: 132
                }, _this.dtime, Laya.Ease.sineOut);
                Laya.Tween.to(_this.mask2, {
                    x: 82,
                    y: -20
                }, _this.dtime, Laya.Ease.sineOut);
                for (var i = 0; i < _this.shinningOtherList.length; i++) {
                    _this.shinningOtherList[i].alpha = 0;
                    Laya.Tween.to(_this.shinningOtherList[i], {
                        alpha: 1
                    }, _this.dtime, Laya.Ease.sineOut);
                    _this.shadow1OtherList[i].pos(5, 5);
                    _this.shadow2OtherList[i].pos(5, 5);
                    _this.mask1OtherList[i].pos(0, 145);
                    _this.mask2OtherList[i].pos(97, -5);
                    Laya.Tween.to(_this.shadow1OtherList[i], {
                        x: 20,
                        y: 20
                    }, _this.dtime, Laya.Ease.sineOut);
                    Laya.Tween.to(_this.shadow2OtherList[i], {
                        x: 20,
                        y: 20
                    }, _this.dtime, Laya.Ease.sineOut);
                    Laya.Tween.to(_this.mask1OtherList[i], {
                        x: 0,
                        y: 132
                    }, _this.dtime, Laya.Ease.sineOut);
                    Laya.Tween.to(_this.mask2OtherList[i], {
                        x: 82,
                        y: -20
                    }, _this.dtime, Laya.Ease.sineOut);
                }
                Laya.Tween.to(_this.Hero, {
                    scaleX: 1.1,
                    scaleY: 1.1
                }, _this.dtime, Laya.Ease.sineOut);
            }
        });
        this.Hero.x = Laya.stage.mouseX - this.Hero.width / 2 - 20;
        this.Hero.y = Laya.stage.mouseY - this.Hero.height / 2 - 20;
        this.dragMovingStartPos.x = this.Hero.x;
        this.dragMovingStartPos.y = this.Hero.y;
        this.mouseStartPos.x = Laya.stage.mouseX;
        this.mouseStartPos.y = Laya.stage.mouseY;
    };
    gameTableView.prototype.onHeroMounseMove = function () {
        if (!this.isStartDraging) {
            return;
        }
        // if (this.passiveListSelectIndex != -1) {
        //     return;
        // }
        if (this.propSelectShinning.length > 0) {
            return;
        }
        var offsetX = Laya.stage.mouseX - this.mouseStartPos.x;
        var offsetY = Laya.stage.mouseY - this.mouseStartPos.y;
        this.Hero.x = this.dragMovingStartPos.x + offsetX;
        this.Hero.y = this.dragMovingStartPos.y + offsetY;
        if (!this.isStartDragMoved) {
            var pt = new Laya.Point(offsetX, offsetY);
            if (pt.distance(0, 0) > 5) //拖动距离小于5的话就算是点击 不然就是移动
             {
                this.isStartDragMoved = true;
            }
        }
        else {
            var isSelected = [0, 0, 0];
            if (this.pokerLineList[1].data.pokerList.length <= 0) {
                if (new Laya.Rectangle(this.Hero.x, this.Hero.y, this.Hero.width, this.Hero.height).intersects(new Laya.Rectangle(this.Target1.x + this.TargetList.x, this.Target1.y + this.TargetList.y, this.Target1.width, this.Target1.height))) {
                    this.selectIndex = -2;
                }
                else if (new Laya.Rectangle(this.Hero.x, this.Hero.y, this.Hero.width, this.Hero.height).intersects(new Laya.Rectangle(this.Target2.x + this.TargetList.x, this.Target2.y + this.TargetList.y, this.Target2.width, this.Target2.height))) {
                    this.selectIndex = -3;
                }
                else if (new Laya.Rectangle(this.Hero.x, this.Hero.y, this.Hero.width, this.Hero.height).intersects(new Laya.Rectangle(this.Target3.x + this.TargetList.x, this.Target3.y + this.TargetList.y, this.Target3.width, this.Target3.height))) {
                    this.selectIndex = -4;
                }
                return;
            }
            for (var i = 0; i < this.pokerLineList.length; i++) {
                var checkGroup = this.pokerLineList[i];
                if (checkGroup.data.pokerList.length <= 0) {
                    continue;
                }
                var isCollision = this.CheckCollision(this.Hero, checkGroup);
                if (isCollision) {
                    isSelected[i] = 1;
                }
                else {
                    isSelected[i] = 0;
                }
            }
            if (isSelected[0] == 1 || isSelected[1] == 1 || isSelected[2] == 1) {
                if (!this.selectShinning) {
                    this.selectShinning = new Laya.Image();
                }
                this.selectShinning.skin = 'new/game_image_shinning2.png';
                this.selectShinning.size(141, 190);
                if (isSelected[0] == 1) {
                    this.selectIndex = 0;
                }
                else if (isSelected[1] == 1) {
                    this.selectIndex = 1;
                }
                else if (isSelected[2] == 1) {
                    this.selectIndex = 2;
                }
                // //console.log("isCollision：", this.pokerLineList[this.selectIndex].render.collisionImage)
                this.pokerLineList[this.selectIndex].render.collisionImage.addChild(this.selectShinning);
                this.selectShinning.pos(-19, -19);
            }
            else {
                if (this.selectShinning) {
                    this.selectShinning.removeSelf();
                    this.selectShinning = null;
                    this.selectIndex = -1;
                }
            }
        }
    };
    gameTableView.prototype.onHeroMounseUp = function () {
        this.nowTimeDown = 0;
        if (!this.isStartDraging) {
            return;
        }
        // if (this.passiveListSelectIndex != -1) {
        //     return;
        // }
        if (this.propSelectShinning.length > 0) {
            return;
        }
        if (this.isDownTween) {
            for (var _i = 0, _a = this.dragPokerGroup; _i < _a.length; _i++) {
                var img = _a[_i];
                Laya.Tween.clearAll(img);
            }
            Laya.Tween.clearAll(this.clickImg);
            Laya.Tween.clearAll(this.mask1);
            Laya.Tween.clearAll(this.mask2);
            Laya.Tween.clearAll(this.shadowImg1);
            Laya.Tween.clearAll(this.shadowImg2);
            Laya.Tween.clearAll(this.shinning);
        }
        if (this.shadowImg1) {
            this.shadowImg1.removeSelf();
            this.shadowImg1 = null;
            this.mask1.removeSelf();
            this.mask1 = null;
        }
        if (this.shadowImg2) {
            this.shadowImg2.removeSelf();
            this.shadowImg2 = null;
            this.shadowImg2 = null;
            this.mask2 = null;
        }
        if (this.shinning) {
            this.shinning.removeSelf();
            this.shinning = null;
        }
        if (this.selectShinning) {
            this.selectShinning.removeSelf();
            this.selectShinning = null;
        }
        for (var _b = 0, _c = this.shadow1OtherList; _b < _c.length; _b++) {
            var s1 = _c[_b];
            s1.removeSelf();
            s1 = null;
        }
        for (var _d = 0, _e = this.shadow2OtherList; _d < _e.length; _d++) {
            var s2 = _e[_d];
            s2.removeSelf();
            s2 = null;
        }
        for (var _f = 0, _g = this.mask1OtherList; _f < _g.length; _f++) {
            var s3 = _g[_f];
            s3.removeSelf();
            s3 = null;
        }
        for (var _h = 0, _j = this.mask2OtherList; _h < _j.length; _h++) {
            var s4 = _j[_h];
            s4.removeSelf();
            s4 = null;
        }
        for (var _k = 0, _l = this.shinningOtherList; _k < _l.length; _k++) {
            var s5 = _l[_k];
            s5.removeSelf();
            s5 = null;
        }
        this.shadow1OtherList = [];
        this.shadow2OtherList = [];
        this.mask1OtherList = [];
        this.mask2OtherList = [];
        this.shinningOtherList = [];
        this.Hero.scale(1, 1);
        if (this.isStartDragMoved) {
            //拖动
        }
        else {
            //点击
        }
        this.isStartDraging = false;
        if (this.selectIndex == -2) {
            this.startGame(true);
            return;
        }
        else if (this.selectIndex == -3) {
            this.startGame(true);
            return;
        }
        else if (this.selectIndex == -4) {
            this.startGame(true);
            return;
        }
        this.RookieGuide(0);
        this.CheckEvents(this.selectIndex);
        if (this.selectIndex != -1) {
            this.heroIndex = this.selectIndex;
        }
        this.selectIndex = -1;
    };
    gameTableView.prototype.GetCardBound = function (cardImg) {
        var img1 = cardImg;
        var rect1 = img1.getBounds();
        rect1.x *= img1.globalScaleX;
        rect1.y *= img1.globalScaleX;
        rect1.width *= img1.globalScaleX;
        rect1.height *= img1.globalScaleY;
        //var rect2= img1.getSelfBounds();
        var img1Parent = img1.parent;
        rect1.x += img1Parent.x * img1.globalScaleX;
        rect1.y += img1Parent.y * img1.globalScaleX;
        var imgParent2 = img1.parent.parent;
        rect1.x += imgParent2.x;
        rect1.y += imgParent2.y;
        var imgParent3 = img1.parent.parent.parent;
        rect1.x += imgParent3.x;
        rect1.y += imgParent3.y;
        rect1.x += this.pokerList.x;
        rect1.y += this.pokerList.y;
        return rect1;
    };
    gameTableView.prototype.CheckCollision = function (group1, group2) {
        if (group1 == null || group2.render.collisionImage == null) {
            return false;
        }
        if (group2.data.GetLastCard().data.IsCardBack) {
            return false;
        }
        var img1 = group1;
        var img2 = group2.render.collisionImage;
        // //console.log("img2: ", img2, img2.parent)
        var rect1 = new Laya.Rectangle(group1.x, group1.y, group1.width, group1.height);
        var rect2 = this.GetCardBound(img2);
        var tRet = false;
        if (rect1.intersects(rect2) && (rect1.x + rect1.width / 2) >= rect2.x && (rect1.x + rect1.width / 2) <= (rect2.x + rect2.width) &&
            (rect1.y + rect1.height / 2) >= rect2.y && (rect1.y + rect1.height / 2) <= (rect2.y + rect2.height) &&
            Math.abs(this.heroPosList[this.heroIndex] - rect2.x) <= rect2.width * 2) {
            tRet = true;
        }
        return tRet;
    };
    //处理事件 
    gameTableView.prototype.CheckEvents = function (index) {
        var _this = this;
        if (index != -1) {
            var rect = this.GetCardBound(this.pokerLineList[index].render.collisionImage);
            // //console.log("rect:", rect)
            this.Hero.centerX = rect.x - Laya.stage.width / 2 + this.Hero.width / 2;
            this.Hero.centerY = rect.y - Laya.stage.height / 2 + this.Hero.height / 2;
            var currentType = this.pokerLineList[index].data.GetLastCard().data.mType;
            this.DisCardPile(index, true);
            this.heroStg.SetAction(false);
            var hasMonster;
            // //console.log("hasMonster:", this.pokerLineList[index].data.GetLastCard().data)
            if (this.pokerLineList[index].data.GetLastCardIndex() == -1 || this.pokerLineList[1].data.GetLastCardIndex() == 0 || currentType == PokerType.store || this.heroStg.IsDisregard) {
                hasMonster = false;
            }
            else {
                hasMonster = this.CheckTopMonster(index);
            }
            if (hasMonster) {
                var card = this.pokerLineList[index].data.GetLastCard();
                var warn = new Laya.Image();
                var originalZorder = 0;
                warn.skin = "Game/warning.png";
                card.render.img.addChild(warn);
                warn.anchorX = 0.5;
                warn.anchorY = 0.5;
                warn.pos(card.render.img.width / 2, 0);
                warn.alpha = 0;
                this.canMouseDown = false;
                Laya.Tween.to(warn, { alpha: 1 }, 500, Laya.Ease.linearIn, new Laya.Handler(this, function () {
                    Laya.Tween.to(warn, { alpha: 0 }, 500, Laya.Ease.linearIn, new Laya.Handler(_this, function () {
                        warn.removeSelf();
                        warn.destroy();
                        var cardY = card.render.img.y;
                        var cardX = card.render.img.x;
                        var cardFloor = card.data.mFloor;
                        _this.pokerList.zOrder = objectZorder.Top;
                        card.render.img.anchorX = 0.5;
                        card.render.img.anchorY = 0.5;
                        card.render.img.x = cardX + card.render.img.width / 2;
                        card.render.img.y = cardY + card.render.img.height / 2;
                        Laya.Tween.to(card.render.img, { y: cardY + 200, scaleX: 1.3, scaleY: 1.3 }, 800, Laya.Ease.sineOut, new Laya.Handler(_this, function () {
                            Laya.Tween.to(card.render.img, { alpha: 0 }, 100, Laya.Ease.linearIn, new Laya.Handler(_this, function () {
                                card.render.img.anchorX = 0;
                                card.render.img.anchorY = 0;
                                card.render.img.x = cardX;
                                card.render.img.y = cardY;
                                _this.pokerList.zOrder = objectZorder.Poker;
                                //console.log("originalZorder:", originalZorder)
                                _this.DisCardPile(index, true, true);
                                _this.refreshHeroUI();
                                //创建一个非怪物的牌,数值根据关卡来定
                                var rm = [PokerType.blood, PokerType.coin, PokerType.atk];
                                var type = rm[MathUtils.getRandom(0, rm.length - 1)];
                                var num;
                                var poker;
                                if (type == PokerType.atk) {
                                    num = MathUtils.getRandom(1, 5);
                                    poker = new pokerChain(type, num);
                                    poker.CreateHurt(MathUtils.getRandom(CardConstant.CardWeapon[num]["num"][0], CardConstant.CardWeapon[num]["num"][1]).toString());
                                }
                                else {
                                    num = MathUtils.getRandom(1, 9);
                                    poker = new pokerChain(type, num);
                                }
                                poker.CreateRender();
                                _this.pokerLineList[index].data.pokerList.push(poker);
                                _this.pokerLineList[index].render.FlushPokerList(_this.pokerLineList[index].data, false);
                                _this.FlushCardClick(index);
                                poker.data.SetFloor(cardFloor);
                                poker.render.img.anchorX = 0.5;
                                poker.render.img.anchorY = 0.5;
                                poker.render.img.x = cardX + card.render.img.width / 2;
                                poker.render.img.y = cardY + card.render.img.height / 2;
                                poker.render.img.scale(0, 0);
                                Laya.Tween.to(poker.render.img, { scaleX: 1, scaleY: 1 }, 500, Laya.Ease.sineIn, new Laya.Handler(_this, function () {
                                    poker.render.img.anchorX = 0;
                                    poker.render.img.anchorY = 0;
                                    poker.render.img.x = cardX;
                                    poker.render.img.y = cardY;
                                    _this.CardMoveDown(index);
                                    _this.canMouseDown = true;
                                }));
                            }));
                        }));
                    }));
                }));
            }
            else {
                if (this.pokerLineList[1].data.GetLastCardIndex() != -1)
                    this.CardMoveDown(index);
            }
            // //console.log("GetLastCard:", this.discardPileList.data, this.startCard.data.pokerList)
        }
    };
    gameTableView.prototype.CardMoveDown = function (index) {
        var _this = this;
        var index1;
        var index2;
        if (index == 0) {
            index1 = 1;
            index2 = 2;
        }
        else if (index == 1) {
            index1 = 0;
            index2 = 2;
        }
        else {
            index1 = 0;
            index2 = 1;
        }
        this.DisCardPile(index1);
        this.DisCardPile(index2);
        var offsetY = Math.abs(this.Hero.centerY - this.fixedY);
        this.canMouseDown = false;
        Laya.Tween.to(this.Hero, { centerY: this.fixedY }, 400, Laya.Ease.sineOut, new Laya.Handler(this, function () {
            _this.heroStg.SetLuckyBuffTime(true);
            _this.heroStg.SetFloor();
            // this.heroStg.StateEffect(null);
            _this.canMouseDown = true;
            _this.heroStg.SetBattleValue(0);
            _this.heroStg.SetBattleEnemyHp(0);
            //console.log("heroStgFloor:", this.heroStg.Floor)
        }), 400);
        var originalY = this.pokerList.centerY;
        Laya.Tween.to(this.pokerList, { centerY: originalY + offsetY }, 400, Laya.Ease.sineOut, new Laya.Handler(this, function () {
        }), 400);
        var targetY = this.TargetList.centerY;
        Laya.Tween.to(this.TargetList, { centerY: targetY + offsetY }, 400, Laya.Ease.sineOut, new Laya.Handler(this, function () {
        }), 400);
    };
    gameTableView.prototype.DisCardPile = function (index, isDeal, isTopMonster) {
        var _this = this;
        if (isDeal === void 0) { isDeal = false; }
        if (isTopMonster === void 0) { isTopMonster = false; }
        var cardIndex = this.pokerLineList[index].data.GetLastCardIndex();
        var card = this.pokerLineList[index].data.GetLastCard();
        var cardList = this.pokerLineList[index].data.SplitePokerGroup2(cardIndex);
        if (isDeal) {
            switch (card.data.mType) {
                case PokerType.blood:
                    this.heroStg.SetHp(Number(card.render.TxtFileNum));
                    break;
                case PokerType.coin:
                    this.heroStg.SetCoin(Number(card.render.TxtFileNum));
                    break;
                case PokerType.enemy:
                    var deductedHp = this.Battle(card);
                    if (this.heroStg.IsHandsHold) {
                        this.heroStg.SetMain(!this.heroStg.IsMain);
                        var temp = this.HeroAtk.y;
                        this.HeroAtk.y = this.HeroAtk2.y;
                        this.HeroAtk2.y = temp;
                    }
                    this.heroStg.SetBattleEnemyHp(Number(card.render.TxtFileNum));
                    if (deductedHp > 0) {
                        this.heroStg.SetBattleValue(deductedHp);
                    }
                    break;
                case PokerType.atk:
                    this.heroStg.SetExtraAtk(0, false);
                    if (this.heroStg.IsHandsHold) {
                        var w1 = this.heroStg.Atk;
                        var w2 = this.heroStg.OtherAtk;
                        if (w1 >= w2) {
                            this.heroStg.SetOtherAtk(Number(card.render.TxtFileNum), false);
                            this.heroStg.SetOffHandWeapon(card.render.TxtFileName);
                        }
                        else {
                            this.heroStg.SetAtk(Number(card.render.TxtFileNum), false);
                            this.heroStg.SetWeapon(card.render.TxtFileName);
                        }
                    }
                    else {
                        this.heroStg.SetAtk(Number(card.render.TxtFileNum), false);
                        this.heroStg.SetWeapon(card.render.TxtFileName);
                        // console.log("handseven", Number(card.render.TxtFileNum), card.render.TxtFileName, this.heroStg.Atk)
                    }
                    break;
                case PokerType.store:
                    BaseViewManager.Inst.onSceneStore();
                    if (!this.firstGetProp) {
                        this.firstGetProp = true;
                        this.RookieGuide(3);
                    }
                    break;
                case PokerType.treasure:
                    this.heroStg.SetKongFuArray(card.render.TxtFileName);
                    if (!this.firstGetKongFu) {
                        this.firstGetKongFu = true;
                        this.RookieGuide(2);
                    }
                    break;
            }
            if (!isTopMonster) {
                this.heroStg.StateEffect(card.data.mType);
                this.heroStg.SetAction(true);
            }
            this.refreshHeroUI();
            this.discardPileList.data.Concat(cardList);
            this.discardPileList.render.FlushPokerList(this.discardPileList.data, false);
            this.pokerLineList[index].render.FlushPokerList(this.pokerLineList[index].data, false);
        }
        else {
            Laya.Tween.to(card.render.img, { alpha: 0 }, 200, Laya.Ease.sineOut, new Laya.Handler(this, function () {
                card.render.img.alpha = 1;
                _this.discardPileList.data.Concat(cardList);
                _this.discardPileList.render.FlushPokerList(_this.discardPileList.data, false);
                _this.pokerLineList[index].render.FlushPokerList(_this.pokerLineList[index].data, false);
            }), 100);
        }
    };
    gameTableView.prototype.refreshHeroUI = function () {
        if (this.heroStg.Atk <= 0) {
            this.heroStg.SetWeapon('空手');
        }
        if (this.heroStg.OtherAtk <= 0) {
            this.heroStg.SetOffHandWeapon('副手');
        }
        this.HeroHp.text = '血量:' + this.heroStg.Hp + '/' + this.heroStg.CompleteHp;
        this.HeroCoin.text = this.heroStg.Coin + '$';
        this.HeroAtk.text = this.heroStg.Weapon + ':' + this.heroStg.Atk;
        this.HeroAtk2.text = this.heroStg.OffHandWeapon + ':' + this.heroStg.OtherAtk;
        this.HeroShield.text = '护盾' + ':' + this.heroStg.Shiled;
        while (this.PassiveList.numChildren > 1) {
            var passive = this.PassiveList.getChildAt(this.PassiveList.numChildren - 1);
            passive.removeSelf();
            passive.destroy();
        }
        while (this.InitiativeList.numChildren > 1) {
            var initiative = this.InitiativeList.getChildAt(this.InitiativeList.numChildren - 1);
            initiative.removeSelf();
            initiative.destroy();
        }
        for (var j = 0; j < this.heroStg.KongFuArray.length; j++) {
            var kf = new Laya.Label();
            kf.tag = "kongfu" + this.heroStg.KongFuArray[j].id.toString();
            kf.name = 'KongFuArray' + j.toString();
            kf.bold = true;
            kf.font = "SimHei";
            kf.fontSize = 30;
            kf.wordWrap = true;
            kf.width = 50;
            kf.align = 'center';
            kf.text = this.heroStg.KongFuArray[j].name + "";
            kf.centerX = 0;
            var lastNode;
            if (this.heroStg.KongFuArray[j].isItv) {
                kf.color = "#65ff00";
                this.InitiativeList.addChild(kf);
                lastNode = this.InitiativeList.getChildAt(this.InitiativeList.numChildren - 2);
            }
            else {
                kf.color = "#ffffff";
                this.PassiveList.addChild(kf);
                lastNode = this.PassiveList.getChildAt(this.PassiveList.numChildren - 2);
            }
            kf.centerX = 0;
            kf.centerY = lastNode.centerY + lastNode.height + 20;
        }
        for (var j = 0; j < this.heroStg.PropsArray.length; j++) {
            var pp = new Laya.Label();
            pp.tag = "prop" + this.heroStg.PropsArray[j].id.toString();
            pp.name = 'PropsArray' + j.toString();
            pp.bold = true;
            pp.font = "SimHei";
            pp.fontSize = 30;
            pp.wordWrap = true;
            pp.width = 50;
            pp.align = 'center';
            pp.text = this.heroStg.PropsArray[j].name + "";
            pp.centerX = 0;
            var lastNode;
            if (this.heroStg.PropsArray[j].isItv) {
                pp.color = "#65ff00";
                this.InitiativeList.addChild(pp);
                lastNode = this.InitiativeList.getChildAt(this.InitiativeList.numChildren - 2);
            }
            else {
                pp.color = "#ffffff";
                this.PassiveList.addChild(pp);
                lastNode = this.PassiveList.getChildAt(this.PassiveList.numChildren - 2);
            }
            pp.centerX = 0;
            pp.centerY = lastNode.centerY + lastNode.height + 20;
        }
        this.onPassiveListClick();
        this.onInitiativeListClick();
    };
    gameTableView.prototype.CheckTopMonster = function (index) {
        var card = this.pokerLineList[index].data.GetLastCard();
        if (card.data.mType == PokerType.enemy) {
            return true;
        }
        else {
            return false;
        }
    };
    gameTableView.prototype.Battle = function (card) {
        var deductedHp = 0;
        var remainHurt = 0;
        var hurt = Number(card.render.TxtFileNum);
        if (this.heroStg.ReduceValue > 0) {
            hurt -= this.heroStg.ReduceValue;
        }
        if (this.heroStg.Shiled > 0) {
            remainHurt = hurt - this.heroStg.Shiled;
            this.heroStg.SetShiled(-hurt, true);
            if (remainHurt > 0) {
                hurt = remainHurt;
            }
            else {
                hurt = 0;
            }
        }
        if (this.heroStg.Atk > 0 || this.heroStg.OtherAtk > 0) {
            if (this.heroStg.IsHandsHold) {
                if (this.heroStg.Atk > 0 && this.heroStg.OtherAtk == 0) {
                    remainHurt = hurt - this.heroStg.Atk;
                    this.heroStg.SetAtk(-hurt, true);
                }
                else if (this.heroStg.Atk == 0 && this.heroStg.OtherAtk > 0) {
                    remainHurt = hurt - this.heroStg.OtherAtk;
                    this.heroStg.SetOtherAtk(-hurt, true);
                }
                else if (this.heroStg.Atk > 0 && this.heroStg.OtherAtk > 0) {
                    if (this.heroStg.IsMain) {
                        remainHurt = hurt - this.heroStg.Atk;
                        this.heroStg.SetAtk(-hurt, true);
                    }
                    else {
                        remainHurt = hurt - this.heroStg.OtherAtk;
                        this.heroStg.SetOtherAtk(-hurt, true);
                    }
                }
            }
            else {
                remainHurt = hurt - this.heroStg.Atk;
                this.heroStg.SetAtk(-hurt, true);
            }
            if (remainHurt > 0) {
                this.heroStg.SetHp(-remainHurt);
                deductedHp = remainHurt;
                if (this.heroStg.Hp <= 0) {
                    this.endGame();
                    return;
                }
            }
        }
        else {
            this.heroStg.SetHp(-hurt);
            deductedHp = hurt;
            if (this.heroStg.Hp <= 0) {
                this.endGame();
                return;
            }
        }
        return deductedHp;
    };
    /**
     * 对怪物造成伤害
     */
    gameTableView.prototype.Damage = function (index, hurt) {
        var card = this.pokerLineList[index].data.GetLastCard();
        var hp = Number(card.render.TxtFileNum);
        if (hurt >= hp) {
            this.ChangeCard(index);
        }
        else {
            card.data.mNum = hp - hurt;
            card.FlushRender();
        }
    };
    gameTableView.prototype.ChangeCard = function (index) {
        var _this = this;
        var card = this.pokerLineList[index].data.GetLastCard();
        var cardFloor = card.data.mFloor;
        var cardY = card.render.img.y;
        var cardX = card.render.img.x;
        var cardType = card.data.mType;
        this.canMouseDown = false;
        this.DisCardPile(index);
        //创建一个非怪物的牌,数值根据关卡来定
        var rm;
        if (cardType == PokerType.enemy) {
            rm = [PokerType.blood, PokerType.coin, PokerType.atk];
        }
        else {
            rm = [PokerType.blood, PokerType.coin, PokerType.atk, PokerType.enemy];
        }
        var type = rm[MathUtils.getRandom(0, rm.length - 1)];
        var num;
        var poker;
        if (type == PokerType.atk) {
            num = MathUtils.getRandom(1, 5);
            poker = new pokerChain(type, num);
            poker.CreateHurt(MathUtils.getRandom(CardConstant.CardWeapon[num]["num"][0], CardConstant.CardWeapon[num]["num"][1]).toString());
        }
        else if (type == PokerType.enemy) {
            card.data.mType = PokerType.enemy;
            num = MathUtils.getRandom(1, 3);
            poker = new pokerChain(type, num);
            card.data.SetAtk(MathUtils.getRandom(CardConstant.CardCK[num]["num"][0], CardConstant.CardCK[num]["num"][1]).toString());
        }
        else {
            num = MathUtils.getRandom(1, 9);
            poker = new pokerChain(type, num);
        }
        poker.CreateRender();
        this.pokerLineList[index].data.pokerList.push(poker);
        this.pokerLineList[index].render.FlushPokerList(this.pokerLineList[index].data, false);
        this.FlushCardClick(index);
        poker.data.SetFloor(cardFloor);
        poker.render.img.anchorX = 0.5;
        poker.render.img.anchorY = 0.5;
        poker.render.img.x = cardX + card.render.img.width / 2;
        poker.render.img.y = cardY + card.render.img.height / 2;
        poker.render.img.scale(0, 0);
        Laya.Tween.to(poker.render.img, { scaleX: 1, scaleY: 1 }, 500, Laya.Ease.sineIn, new Laya.Handler(this, function () {
            poker.render.img.anchorX = 0;
            poker.render.img.anchorY = 0;
            poker.render.img.x = cardX;
            poker.render.img.y = cardY;
            _this.canMouseDown = true;
        }));
    };
    gameTableView.prototype.OtherStep = function (index) {
        this.Hero.centerX = this.heroPosList[index] - Laya.stage.width / 2 + this.Hero.width / 2;
    };
    gameTableView.prototype.SetObjectDesc = function (isCard, array, id, desc) {
        if (isCard) {
            this.desc.text = "描述:" + desc;
        }
        else {
            for (var i = 0; i < array.length; i++) {
                var di = array[i].id;
                if (di == id) {
                    this.desc.text = "描述:" + array[i].desc;
                }
            }
        }
    };
    gameTableView.prototype.FlushCardClick = function (index) {
        if (index < 0) {
            return;
        }
        var lineGroup = this.pokerLineList[index];
        for (var i = 0; i < lineGroup.data.pokerList.length; i++) {
            var poker = lineGroup.data.pokerList[i];
            poker.render.img.offAll();
            if (poker.data.IsCardBack) {
                continue;
            }
            poker.render.img.on(Laya.Event.CLICK, this, this.onCardClick, [poker]);
        }
    };
    gameTableView.prototype.onCardClick = function (poker) {
        var data = poker.data;
        var desc = '';
        switch (data.mType) {
            case PokerType.blood:
                desc = CardConstant.CardBlood[0]["desc"];
                break;
            case PokerType.coin:
                desc = CardConstant.CardCoin[0]["desc"];
                break;
            case PokerType.enemy:
                desc = CardConstant.CardCK[data.mNum]["desc"];
                break;
            case PokerType.atk:
                desc = CardConstant.CardWeapon[data.mNum]["desc"];
                break;
            case PokerType.store:
                desc = CardConstant.CardStore[0]["desc"];
                break;
            case PokerType.treasure:
                desc = CardConstant.CardTreasure[data.mNum]["desc"];
                break;
        }
        this.SetObjectDesc(true, null, null, desc);
        if (this.propSelectShinning.length > 0) {
            if ((!!poker.render.img.getChildByName("destroyshinning0") || !!poker.render.img.getChildByName("destroyshinning1") || !!poker.render.img.getChildByName("destroyshinning2")) && poker.data.mType == PokerType.enemy) {
                var index = 0;
                if (!!poker.render.img.getChildByName("destroyshinning0")) {
                    index = 0;
                }
                else if (!!poker.render.img.getChildByName("destroyshinning1")) {
                    index = 1;
                }
                else if (!!poker.render.img.getChildByName("destroyshinning2")) {
                    index = 2;
                }
                for (var idx = 0; idx < this.propSelectShinning.length; idx++) {
                    var element = this.propSelectShinning[idx];
                    element.removeSelf();
                    element.destroy();
                }
                this.Damage(index, 8);
                this.cancelMoveBg();
                this.heroStg.PropsArray.splice(this.passivePropCompleteIdx, 1);
                this.passivePropCompleteIdx = -1;
                this.refreshHeroUI();
            }
            if ((!!poker.render.img.getChildByName("changeshinning0") || !!poker.render.img.getChildByName("changeshinning1") || !!poker.render.img.getChildByName("changeshinning2")) && poker.data.mFloor != 0) {
                var index = 0;
                if (!!poker.render.img.getChildByName("changeshinning0")) {
                    index = 0;
                }
                else if (!!poker.render.img.getChildByName("changeshinning1")) {
                    index = 1;
                }
                else if (!!poker.render.img.getChildByName("changeshinning2")) {
                    index = 2;
                }
                for (var idx = 0; idx < this.propSelectShinning.length; idx++) {
                    var element = this.propSelectShinning[idx];
                    element.removeSelf();
                    element.destroy();
                }
                this.ChangeCard(index);
                this.cancelMoveBg();
                this.heroStg.PropsArray.splice(this.passivePropCompleteIdx, 1);
                this.passivePropCompleteIdx = -1;
                this.refreshHeroUI();
            }
        }
    };
    gameTableView.prototype.onPassiveListClick = function () {
        var _this = this;
        for (var i = 1; i < this.PassiveList.numChildren; i++) {
            var passive = this.PassiveList.getChildAt(i);
            passive.offAll();
            passive.on(Laya.Event.CLICK, this, function (e) {
                var tr = e.target;
                if (tr.tag.indexOf("prop") != -1) {
                    _this.SetObjectDesc(false, _this.heroStg.PropsArray, Number(tr.tag.substring(4, tr.tag.length)));
                }
                else if (tr.tag.indexOf("kongfu") != -1) {
                    _this.SetObjectDesc(false, _this.heroStg.KongFuArray, Number(tr.tag.substring(6, tr.tag.length)));
                }
            });
        }
    };
    gameTableView.prototype.onInitiativeListClick = function () {
        for (var i = 1; i < this.InitiativeList.numChildren; i++) {
            var initiative = this.InitiativeList.getChildAt(i);
            initiative.offAll();
            var centerXY = new Laya.Point(initiative.centerX, initiative.centerY);
            initiative.on(Laya.Event.MOUSE_DOWN, this, this.onInitiativeMounseDown, [initiative, i, centerXY]);
            initiative.on(Laya.Event.MOUSE_MOVE, this, this.onInitiativeMounseMove, [initiative, i, centerXY]);
            initiative.on(Laya.Event.MOUSE_UP, this, this.onInitiativeMounseUp, [initiative, i, centerXY]);
            // console.log("diandian:", i, this.InitiativeList.getChildAt(i).name)
        }
    };
    /**
     * 处理道具效果
     */
    gameTableView.prototype.DealPropGruop = function (targetName, targetId) {
        var _this = this;
        //是否可以主动开启
        var prop = null;
        for (var i_2 = 0; i_2 < this.heroStg.PropsArray.length; i_2++) {
            if (this.heroStg.PropsArray[i_2].id == targetId) {
                prop = this.heroStg.PropsArray[i_2];
                break;
            }
        }
        if (!prop) {
            return;
        }
        this.passivePropCompleteIdx = Number(targetName.substring(10, targetName.length));
        // console.log("DealPropGruop-idx2:" + this.passivePropCompleteIdx, targetName);
        if (!prop.isItv) {
        }
        else {
            switch (prop.id) {
                case 1:
                    this.heroStg.SetHp(5);
                    this.heroStg.PropsArray.splice(this.passivePropCompleteIdx, 1);
                    this.passivePropCompleteIdx = -1;
                    break;
                case 2:
                    this.heroStg.SetCompleteHp(5);
                    this.heroStg.PropsArray.splice(this.passivePropCompleteIdx, 1);
                    this.passivePropCompleteIdx = -1;
                    break;
                case 3:
                    for (var i_3 = 0; i_3 < 3; i_3++) {
                        var bool = this.CheckTopMonster(i_3);
                        if (bool) {
                            var card = this.pokerLineList[i_3].data.GetLastCard();
                            if (card.data.IsCardBack) {
                                continue;
                            }
                            var sn = new Laya.Image();
                            sn.skin = 'new/game_image_shinning1.png';
                            sn.size(141, 190);
                            card.render.img.addChild(sn);
                            sn.name = "destroyshinning" + i_3.toString();
                            sn.pos(-19, -19);
                            this.propSelectShinning.push(sn);
                        }
                    }
                    break;
                case 4:
                    for (var i_4 = 0; i_4 < 3; i_4++) {
                        var card = this.pokerLineList[i_4].data.GetLastCard();
                        if (card.data.IsCardBack) {
                            continue;
                        }
                        var sn = new Laya.Image();
                        sn.skin = 'new/game_image_shinning1.png';
                        sn.size(141, 190);
                        card.render.img.addChild(sn);
                        sn.name = "changeshinning" + i_4.toString();
                        sn.pos(-19, -19);
                        this.propSelectShinning.push(sn);
                    }
                    break;
                case 5:
                    for (var i = 0; i < 3; i++) {
                        if (this.heroIndex != i) {
                            var sn = new Laya.Image();
                            sn.skin = 'new/game_image_shinning1.png';
                            sn.size(141, 190);
                            this.addChild(sn);
                            sn.name = "roadshinning" + i;
                            sn.pos(-19 + this.heroPosList[i], -19 + this.Hero.y);
                            this.propSelectShinning.push(sn);
                            sn.on(Laya.Event.CLICK, this, function (e) {
                                //console.log("x---y:", e.target.name.substring(e.target.name.length - 1))
                                _this.OtherStep(e.target.name.substring(e.target.name.length - 1));
                                for (var idx = 0; idx < _this.propSelectShinning.length; idx++) {
                                    var element = _this.propSelectShinning[idx];
                                    element.removeSelf();
                                    element.destroy();
                                }
                                _this.heroStg.PropsArray.splice(_this.passivePropCompleteIdx, 1);
                                _this.passivePropCompleteIdx = -1;
                                _this.cancelMoveBg();
                            });
                        }
                    }
                    break;
                case 6:
                    this.heroStg.SetLuckyBuffTime(false, 3);
                    this.heroStg.PropsArray.splice(this.passivePropCompleteIdx, 1);
                    this.passivePropCompleteIdx = -1;
                    break;
                case 7:
                    this.ShuffleAllCard();
                    this.heroStg.PropsArray.splice(this.passivePropCompleteIdx, 1);
                    this.passivePropCompleteIdx = -1;
                    break;
                case 8:
                    this.heroStg.SetShiled(5, false);
                    this.heroStg.PropsArray.splice(this.passivePropCompleteIdx, 1);
                    this.passivePropCompleteIdx = -1;
                    break;
            }
        }
        this.refreshHeroUI();
    };
    gameTableView.prototype.ShuffleAllCard = function () {
        //设置卡牌,50%怪物,15%血量,15%武器,20%金币
        for (var index = 0; index < 3; index++) {
            this.pokerLineList[index].data.pokerList.forEach(function (card, index) {
                if (index != 0 && !card.data.IsCardBack) {
                    var rand = MathUtils.getRandom(1, 30);
                    if (rand <= 15) {
                        card.data.mType = PokerType.enemy;
                        var num = MathUtils.getRandom(1, 3);
                        card.data.mNum = num;
                        card.data.SetAtk(MathUtils.getRandom(CardConstant.CardCK[card.data.mNum]["num"][0], CardConstant.CardCK[card.data.mNum]["num"][1]).toString());
                        card.FlushRender();
                    }
                    else if (rand > 15 && rand <= 20) {
                        card.data.mType = PokerType.blood;
                        var num = MathUtils.getRandom(1, 9);
                        card.data.mNum = num;
                        card.FlushRender();
                    }
                    else if (rand > 20 && rand <= 25) {
                        card.data.mType = PokerType.atk;
                        var num = MathUtils.getRandom(1, 5);
                        card.data.mNum = num;
                        card.CreateHurt(MathUtils.getRandom(CardConstant.CardWeapon[card.data.mNum]["num"][0], CardConstant.CardWeapon[card.data.mNum]["num"][1]).toString());
                        card.FlushRender();
                    }
                    else {
                        card.data.mType = PokerType.coin;
                        var num = MathUtils.getRandom(3, 8);
                        card.data.mNum = num;
                        card.FlushRender();
                    }
                }
            });
            this.pokerLineList[index].render.FlushPokerList(this.pokerLineList[index].data, false);
        }
    };
    //发动效果时的UI变化
    gameTableView.prototype.LaunchCheatWithUI = function (bool, data, callback) {
        var _this = this;
        if (bool) {
            this.HeroEffectBox.visible = true;
            if (!!data) {
                if (this.effectUis.length <= 0 || this.effectUi2s.length <= 0) {
                    return;
                }
                var ne = data.name;
                var rm = 0;
                var ui = this.effectUis.splice(rm, 1)[0];
                ui.text = ne + '';
                ui.visible = true;
                ui.alpha = 0;
                Laya.Tween.to(ui, { alpha: 1 }, 800, Laya.Ease.circOut, new Laya.Handler(this, function () {
                    if (!!callback) {
                        callback();
                        _this.refreshHeroUI();
                    }
                    Laya.Tween.to(ui, { alpha: 0 }, 400, Laya.Ease.circIn, new Laya.Handler(_this, function () {
                        ui.visible = false;
                        _this.effectUis.push(ui);
                        var v3 = MathUtils.quickSort3(_this.effectUis, 'name', 0, _this.effectUis.length - 1);
                        //console.log("v3:", v3);
                    }));
                }), data.index * 200 + 200);
                var num = data.num;
                var rm2 = 0;
                var ui2 = this.effectUi2s.splice(rm2, 1)[0];
                ui2.text = num >= 0 ? '+' + num : num;
                ui2.visible = true;
                ui2.alpha = 0;
                Laya.Tween.to(ui2, { alpha: 1 }, 650, Laya.Ease.circOut, new Laya.Handler(this, function () {
                    Laya.Tween.to(ui2, { alpha: 0 }, 400, Laya.Ease.circIn, new Laya.Handler(_this, function () {
                        ui2.visible = false;
                        _this.effectUi2s.push(ui2);
                        var v4 = MathUtils.quickSort3(_this.effectUi2s, 'name', 0, _this.effectUi2s.length - 1);
                        //console.log("v4:", v4);
                    }));
                }), data.index * 350 + 350);
            }
        }
        else {
            this.HeroEffectBox.visible = false;
        }
    };
    gameTableView.prototype.onInitiativeMounseDown = function (target, idx, centerPos) {
        if (!this.canMouseDown && this.passiveListSelectIndex != -1) {
            return;
        }
        this.InitiativeList.zOrder = objectZorder.MovePropList;
        target.zOrder = objectZorder.MoveProp;
        for (var i = 1; i < this.InitiativeList.numChildren; i++) {
            if (i != idx) {
                var initiative = this.InitiativeList.getChildAt(i);
                initiative.offAll();
            }
        }
        this.passiveListSelectIndex = idx;
        this.isStartDraging = true;
        this.isStartDragMoved = false;
        target.x = Laya.stage.mouseX - target.width / 2 - this.InitiativeList.x;
        target.y = Laya.stage.mouseY - target.height / 2 - this.InitiativeList.y;
        this.dragMovingStartPos.x = target.x;
        this.dragMovingStartPos.y = target.y;
        this.mouseStartPos.x = Laya.stage.mouseX;
        this.mouseStartPos.y = Laya.stage.mouseY;
    };
    gameTableView.prototype.onInitiativeMounseMove = function (target, idx, centerPos) {
        if (!this.isStartDraging && this.passiveListSelectIndex != idx) {
            return;
        }
        var offsetX = Laya.stage.mouseX - this.mouseStartPos.x;
        var offsetY = Laya.stage.mouseY - this.mouseStartPos.y;
        target.x = this.dragMovingStartPos.x + offsetX;
        target.y = this.dragMovingStartPos.y + offsetY;
        if (!this.isStartDragMoved) {
            var pt = new Laya.Point(offsetX, offsetY);
            if (pt.distance(0, 0) > 5) //拖动距离小于5的话就算是点击 不然就是移动
             {
                this.isStartDragMoved = true;
                this.showPropMoveBox(true);
                if (target.tag.indexOf("prop") != -1) {
                    for (var i = 0; i < this.heroStg.PropsArray.length; i++) {
                        var di = this.heroStg.PropsArray[i].id;
                        if (di == Number(target.tag.substring(4, target.tag.length))) {
                            this.propMoveDesc.text = "描述:" + this.heroStg.PropsArray[i].desc;
                        }
                        if (Number(target.tag.substring(4, target.tag.length)) == 3 || Number(target.tag.substring(4, target.tag.length)) == 4 || Number(target.tag.substring(4, target.tag.length)) == 5) {
                            this.propMoveTips.text = "松开手后请选择一张发光的卡牌发动效果";
                            this.propMoveCancel.visible = true;
                        }
                        else {
                            this.propMoveTips.text = "松开手即可发动效果";
                            this.propMoveCancel.visible = false;
                        }
                    }
                }
                else if (target.tag.indexOf("kongfu") != -1) {
                    for (var i = 0; i < this.heroStg.KongFuArray.length; i++) {
                        var di = this.heroStg.KongFuArray[i].id;
                        if (di == Number(target.tag.substring(6, target.tag.length))) {
                            this.propMoveDesc.text = "描述:" + this.heroStg.KongFuArray[i].desc;
                        }
                    }
                }
            }
        }
        if (target.x >= this.propMoveLine.x) {
            this.propMoveTips.visible = true;
        }
        else {
            this.propMoveTips.visible = false;
        }
    };
    gameTableView.prototype.onInitiativeMounseUp = function (target, idx, centerPos) {
        if (!this.isStartDraging && this.passiveListSelectIndex != idx) {
            return;
        }
        this.InitiativeList.zOrder = objectZorder.MoveBg;
        target.zOrder = objectZorder.UI;
        target.centerX = centerPos.x;
        target.centerY = centerPos.y;
        this.passiveListSelectIndex = -1;
        var targetId = 0;
        if (target.tag.indexOf("prop") != -1) {
            targetId = Number(target.tag.substring(4, target.tag.length));
        }
        else if (target.tag.indexOf("kongfu") != -1) {
            targetId = Number(target.tag.substring(6, target.tag.length));
        }
        if (this.isStartDragMoved) {
            //拖动
            if (this.propMoveTips.visible) {
                if (target.tag.indexOf("prop") != -1) {
                    this.DealPropGruop(target.name, targetId);
                }
                else if (target.tag.indexOf("kongfu") != -1) {
                    this.SetObjectDesc(false, this.heroStg.KongFuArray, targetId);
                }
            }
        }
        else {
            //点击
            if (target.tag.indexOf("prop") != -1) {
                this.SetObjectDesc(false, this.heroStg.PropsArray, targetId);
            }
            else if (target.tag.indexOf("kongfu") != -1) {
                this.SetObjectDesc(false, this.heroStg.KongFuArray, targetId);
            }
        }
        this.onInitiativeListClick();
        this.isStartDraging = false;
        if (this.propMoveTips.text == "松开手后请选择一张发光的卡牌发动效果") {
            this.propMoveDesc.text = '';
            this.propMoveTips.text = '';
            this.showPropMoveBox(false);
        }
        else {
            this.propMoveCancel.visible = false;
            this.propMoveDesc.text = '';
            this.propMoveTips.text = '';
            this.showPropMoveBox(false);
        }
    };
    gameTableView.prototype.cancelMoveBg = function () {
        for (var i = 0; i < this.propSelectShinning.length; i++) {
            this.propSelectShinning[i].removeSelf();
            this.propSelectShinning[i].destroy();
        }
        this.propSelectShinning = [];
        this.propMoveCancel.visible = false;
        this.propMoveDesc.text = '';
        this.propMoveTips.text = '';
        this.showPropMoveBox(false);
    };
    gameTableView.prototype.showPropMoveBox = function (bool) {
        if (bool) {
            this.propMoveBox.visible = true;
        }
        else {
            this.propMoveBox.visible = false;
        }
    };
    gameTableView.prototype.RookieGuide = function (step) {
        if (!this.guideLabel) {
            this.guideLabel = new Laya.Label();
            this.guideLabel.fontSize = 30;
            this.guideLabel.color = '#ffffff';
            this.guideLabel.wordWrap = true;
            this.guideLabel.width = 500;
            this.guideLabel.text = '';
            this.addChild(this.guideLabel);
            this.guideLabel.pos(50, this.Hero.y + 250);
        }
        this.guideLabel.visible = true;
        switch (step) {
            case 0:
                this.guideLabel.text = '请选择合适的路线走到终点吧';
                break;
            case 1:
                this.guideLabel.text = '拖拽主角牌，移动到上层任意一张卡牌上，即为一次行动';
                break;
            case 2:
                this.guideLabel.text = '获取新的功法牌后，可以点击右侧被动物品栏查看';
                break;
            case 3:
                this.guideLabel.text = '获取新的道具牌后，可以点击左侧主动物品栏查看，道具需要拖拽使用';
                break;
        }
    };
    return gameTableView;
}(ui.game.gameTableUI));
var objectZorder = {
    Bg1: 0,
    Poker: 1,
    Target: 2,
    Hero: 3,
    UI: 4,
    MoveBg: 101,
    MovePropList: 102,
    MoveProp: 103,
    MovePropSelectCard: 104,
    Top: 99,
    Bg2: 100
};
//# sourceMappingURL=gameTableView.js.map