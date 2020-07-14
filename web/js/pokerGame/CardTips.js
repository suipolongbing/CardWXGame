/**
* 提示事件处理
*/
var pokerGame;
(function (pokerGame) {
    var CardTips = /** @class */ (function () {
        function CardTips() {
            this.rule = new pokerGame.ChainGameRule();
            this.tipsDataList = new Array(); //显示的提示数据
            this.tipsRender = new poker.pokerGroupRender(poker.PokerGroupRenderMode.line);
            this.lightBack = null;
            this.tutorialortip = 1;
            var a = 'a';
            if (a == 'a')
                a = 'a';
        }
        CardTips.prototype.onClickTips = function () {
            this.ClearData(); //清理数据
            this.CheckAllCard(); //找到所有Tips数据
            this.ShowFristTip(); //显示所有TIps数据,生成动画
            GameGlobal.Dispatcher.GetInstance().brodcastEvent(GameGlobal.EVENT.TipMaskVis, [true]);
        };
        CardTips.prototype.ClearData = function () {
            Laya.timer.clear(this, this.ShowFristTip);
            if (this.deckData.table != null) {
                Laya.Tween.clearAll(this.deckData.table.LineTips);
            }
            for (var i = 0; i < this.tipsDataList.length; i++) {
                this.tipsDataList[i].tipsGroup.Dispose();
            }
            this.tipsDataList.splice(0);
            this.tipsRender.removeChildren(0);
        };
        CardTips.prototype.ClearTutorialTips = function () {
            Laya.timer.clear(this, this.CheckTutorialTips);
        };
        CardTips.prototype.CheckTutorialTipsWithLoop = function (deckType, deckNum, index) {
            this.ClearTutorialTips();
            Laya.timer.loop(1900, this, this.CheckTutorialTips, [deckType, deckNum, index]);
        };
        CardTips.prototype.CheckTutorialTips = function (deckType, deckNum, index) {
            if (this.deckData.table == null) {
                return;
            }
            this.ClearData(); //清理数据
            var deck = this.deckData.GetDeck(deckType, deckNum);
            if (!deck.data.pokerList[index].data.IsCardBack) {
                var slicePoker = deck.data.SlicePokerGroup(index);
                if (this.CheckCanConnectGroup(slicePoker, deckType, deckNum, index)) {
                }
            }
            this.ShowFristTip(0);
        };
        CardTips.prototype.CheckAllCard = function () {
            //与7条线做检测
            for (var i = 0; i < this.deckData.pokerLineList.length; i++) {
                var checkGroup = this.deckData.pokerLineList[i];
                for (var j = 0; j < checkGroup.data.pokerList.length; j++) {
                    if (!checkGroup.data.pokerList[j].data.IsCardBack) {
                        var slicePoker = checkGroup.data.SlicePokerGroup(j);
                        if (this.CheckCanConnectGroup(slicePoker, pokerGame.pokerDeckType.Line, i + 1, j)) {
                        }
                        break; //第一个不是卡背的才有移动的价值
                    }
                }
            }
            if (this.deckData.ThreeCard.data.pokerList.length > 0) {
                var lastIndex = this.deckData.ThreeCard.data.pokerList.length - 1;
                var slicePoker = this.deckData.ThreeCard.data.SlicePokerGroup(lastIndex);
                if (this.CheckCanConnectGroup(slicePoker, pokerGame.pokerDeckType.threeCardDeck, 0, lastIndex)) {
                }
            }
            for (var i = 0; i < this.deckData.pokerDeckList.length; i++) {
                var checkGroup = this.deckData.pokerDeckList[i];
                if (checkGroup.data.pokerList.length <= 0) {
                    continue;
                }
                var lastIndex = checkGroup.data.pokerList.length - 1;
                var slicePoker = checkGroup.data.SlicePokerGroup(lastIndex);
                if (this.CheckCanConnectGroup(slicePoker, pokerGame.pokerDeckType.Deck, i + 1, lastIndex)) {
                    continue;
                }
            }
        };
        //检测4张A的卡堆中的卡，有没有移动的价值
        CardTips.prototype.CheckDeckCardIsNeedMove = function (deckGroupNeedMove, needAddLineNum) {
            var needConnectCard = deckGroupNeedMove.GetLastCard();
            //与7条线做检测
            for (var i = 0; i < this.deckData.pokerLineList.length; i++) {
                var checkGroup = this.deckData.pokerLineList[i];
                for (var j = 0; j < checkGroup.data.pokerList.length; j++) {
                    if (!checkGroup.data.pokerList[j].data.IsCardBack) {
                        var card = checkGroup.data.pokerList[j];
                        if (this.rule.IsCanConnect(needConnectCard, card)) {
                            return true;
                        }
                        break; //第一个不是卡背的才有移动的价值
                    }
                }
            }
            if (this.deckData.ThreeCard.data.pokerList.length > 0) {
                var lastIndex = this.deckData.ThreeCard.data.pokerList.length - 1;
                var card = this.deckData.ThreeCard.data.pokerList[lastIndex];
                if (this.rule.IsCanConnect(needConnectCard, card)) {
                    return true;
                }
            }
            return false;
        };
        CardTips.prototype.CheckCanConnectGroup = function (checkGroupData, typefrom, numfrom, indexFrom) {
            //与4个堆线做检测
            if (typefrom != pokerGame.pokerDeckType.Deck) {
                for (var i = 0; i < this.deckData.pokerDeckList.length; i++) {
                    var checkGroup = this.deckData.pokerDeckList[i];
                    if (checkGroupData.pokerList.length != 1) //每次只能返回一张到deck中
                     {
                        break;
                    }
                    if (this.rule.IsCanTackBack(checkGroup.data.GetLastCard(), checkGroupData.GetFirstCard())) //用规则检测能否返回
                     {
                        var movingData = new pokerGame.pokerTipsData();
                        movingData.tipsGroup = checkGroupData.ClonePokerGroup(0);
                        movingData.startPos = this.GetStartPos(typefrom, numfrom, indexFrom);
                        movingData.endPos = this.GetEndPos(pokerGame.pokerDeckType.Deck, i + 1);
                        this.tipsDataList.push(movingData);
                        return true;
                    }
                }
            }
            //与7条线做检测
            for (var i = 0; i < this.deckData.pokerLineList.length; i++) {
                var checkGroup = this.deckData.pokerLineList[i];
                if (typefrom == pokerGame.pokerDeckType.Line) {
                    if ((numfrom - 1) == i) {
                        continue;
                    }
                }
                if (this.rule.IsCanConnect(checkGroup.data.GetLastCard(), checkGroupData.GetFirstCard())) {
                    if (typefrom == pokerGame.pokerDeckType.Deck) { //需要检测移动之后有没有能移动进来的
                        if (!this.CheckDeckCardIsNeedMove(checkGroupData, i + 1)) //检测是否有移动的价值
                         {
                            continue;
                        }
                    }
                    var movingData = new pokerGame.pokerTipsData();
                    movingData.tipsGroup = checkGroupData.ClonePokerGroup(0);
                    movingData.startPos = this.GetStartPos(typefrom, numfrom, indexFrom);
                    movingData.endPos = this.GetEndPos(pokerGame.pokerDeckType.Line, i + 1);
                    this.tipsDataList.push(movingData);
                    return true;
                }
            }
            //tipsData
            return false;
        };
        CardTips.prototype.GetStartPos = function (typefrom, numfrom, indexFrom) {
            var root = this.deckData.GetDeckSpriteRoot(typefrom, numfrom);
            var deck = this.deckData.GetDeck(typefrom, numfrom);
            var posCard = deck.data.pokerList[indexFrom];
            var cardPos = new Laya.Point(0, 0);
            if (posCard != null) {
                cardPos = new Laya.Point(posCard.render.img.x, posCard.render.img.y);
            }
            var tRetPos = new Laya.Point(root.x + cardPos.x * root.scaleX, root.y + cardPos.y * root.scaleY);
            return tRetPos;
        };
        CardTips.prototype.GetEndPos = function (typeTo, numTo) {
            var root = this.deckData.GetDeckSpriteRoot(typeTo, numTo);
            var deck = this.deckData.GetDeck(typeTo, numTo);
            var posCard = deck.data.GetLastCard();
            var cardPos = new Laya.Point(0, 0);
            if (posCard != null) {
                cardPos = new Laya.Point(posCard.render.img.x, posCard.render.img.y);
            }
            var tRetPos = new Laya.Point(root.x + cardPos.x * root.scaleX, root.y + cardPos.y * root.scaleY);
            if (typeTo == pokerGame.pokerDeckType.Line) {
                if (deck.data.pokerList.length != 0) {
                    tRetPos.y += poker.pokerGroupRender.lineHeightSpacing;
                }
            }
            return tRetPos;
        };
        CardTips.prototype.ShowFristTip = function (type) {
            if (type === void 0) { type = 1; }
            if (GameMain.app.isXinShow) {
                return;
            }
            if (this.tipsDataList.length <= 0) {
                // ////console.log('!!!!!!!!!!!');
                if (this.deckData.StartCard.data.pokerList.length == 0) {
                    GameGlobal.Dispatcher.sendEvent(GameGlobal.EVENT.ShowMessage, [10013]); //请使用明牌道具
                    // ////console.log('无路可走');
                    Laya.timer.once(500, this, function () {
                        GameGlobal.Dispatcher.GetInstance().brodcastEvent(GameGlobal.EVENT.TipMaskVis, [false]);
                    });
                    return;
                }
                var child = this.deckData.StartCard.data.pokerList[this.deckData.StartCard.data.pokerList.length - 1].render.img.skin;
                // this.deckData.table.StartCardTip.addChild(child);
                var stck = new Laya.Image();
                stck.skin = child;
                this.deckData.table.StartCardTip.addChild(stck);
                this.addLight(this.deckData.table.StartCardTip);
                // if (this.deckData.table.LineTips != null) {
                var oldX = this.deckData.table.StartCardTip.x;
                //Laya.Tween.clearAll(this.deckData.table.LineTips);
                var maxI = 4;
                for (var i = 0; i < maxI; i++) {
                    var pluse = i % 2 == 0 ? 1 : -1;
                    var num = pluse * 10;
                    var time = 1000;
                    Laya.Tween.to(this.deckData.table.StartCardTip, { x: oldX + num }, time, null, null, i * time);
                }
                Laya.Tween.to(this.deckData.table.StartCardTip, { x: oldX }, time, null, new Laya.Handler(this, function () {
                    GameGlobal.Dispatcher.GetInstance().brodcastEvent(GameGlobal.EVENT.TipMaskVis, [false]);
                    if (this.lightBack) {
                        stck.removeSelf();
                        stck.destroy();
                        this.lightBack.removeSelf();
                        this.lightBack.destroy();
                    }
                }), maxI * time);
                // }
                return;
            }
            var firstTip = this.tipsDataList[0]; //显示第一个
            this.tipsDataList.splice(0, 1);
            this.ShowTip(firstTip, type);
        };
        CardTips.prototype.ShowNextTip = function () {
            if (this.lightBack) {
                this.lightBack.removeSelf();
                this.lightBack.destroy();
            }
            if (this.tipsDataList.length <= 0) {
                this.ClearData();
                this.tutorialortip == 1 ? GameGlobal.Dispatcher.GetInstance().brodcastEvent(GameGlobal.EVENT.TipMaskVis, [false]) : null;
                return;
            }
            var firstTip = this.tipsDataList[0]; //显示第一个
            this.tipsDataList.splice(0, 1);
            this.ShowTip(firstTip);
        };
        CardTips.prototype.ShowTip = function (tip, type) {
            if (type === void 0) { type = 1; }
            this.tutorialortip = type;
            //var tip=this.tipsDataList[i];
            var data = tip.tipsGroup;
            this.tipsRender.FlushPokerList(data);
            if (this.tipsRender.parent == null) {
                this.deckData.table.LineTips.addChild(this.tipsRender);
            }
            // console.debug("tip.startPos.x,tip.startPos.y="+tip.startPos.x.toString()+","+tip.startPos.y.toString());
            this.deckData.table.LineTips.pos(tip.startPos.x, tip.startPos.y);
            Laya.Tween.clearAll(this.deckData.table.LineTips);
            type == 0 ? null : this.addLight(this.deckData.table.LineTips);
            Laya.Tween.to(this.deckData.table.LineTips, { x: tip.endPos.x, y: tip.endPos.y }, 1200, Laya.Ease.sineOut, Laya.Handler.create(this, this.ShowNextTip), 0);
        };
        CardTips.prototype.addLight = function (target) {
            this.lightBack = new Laya.Image();
            Laya.loader.load([{ url: "res/atlas/UI.atlas", type: Laya.Loader.ATLAS }], Laya.Handler.create(this, function () {
                this.lightBack.skin = 'UI/game_image_bottomLight.png';
            }));
            this.lightBack.size(134, 184);
            this.lightBack.pos(-16, -16);
            target.addChild(this.lightBack);
            this.lightBack.zOrder = 99;
        };
        CardTips.prototype.recoverAllCards = function (type, idx, drag) {
            if (pokerRender.rsty == 0) {
                return;
            }
            if (type == 0) {
                // for (var i = 0; i < this.deckData.pokerLineList.length; i++) {
                // ////console.log('checkGroup', this.deckData.pokerLineList, idx, this.deckData.pokerLineList[idx - 1].data.pokerList.length);
                var checkGroup = this.deckData.pokerLineList[idx - 1];
                for (var j = 0; j < checkGroup.data.pokerList.length; j++) {
                    if (j == checkGroup.data.pokerList.length - 1) {
                        pokerRender.ReadSkin(1, false);
                        checkGroup.data.pokerList[checkGroup.data.pokerList.length - 1].render.ChangeRenderByData(checkGroup.data.pokerList[checkGroup.data.pokerList.length - 1].data);
                    }
                    else {
                        pokerRender.ReadSkin(1, true);
                        checkGroup.data.pokerList[j].render.ChangeRenderByData(checkGroup.data.pokerList[j].data);
                    }
                }
                // }
            }
            else {
                // ////console.log('checkGroup', this.deckData.pokerLineList, idx, this.deckData.pokerLineList[idx - 1].data.pokerList.length);
                var checkGroup = this.deckData.pokerLineList[idx - 1];
                for (var j = 0; j < checkGroup.data.pokerList.length; j++) {
                    pokerRender.ReadSkin(1, true);
                    checkGroup.data.pokerList[j].render.ChangeRenderByData(checkGroup.data.pokerList[j].data);
                }
                pokerRender.ReadSkin(1, false);
                drag.DragingGroup.data.pokerList[0].render.ChangeRenderByData(drag.DragingGroup.data.pokerList[0].data);
            }
        };
        return CardTips;
    }());
    pokerGame.CardTips = CardTips;
})(pokerGame || (pokerGame = {}));
//# sourceMappingURL=CardTips.js.map