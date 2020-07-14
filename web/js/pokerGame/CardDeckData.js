/**
* 牌桌逻辑
*/
var pokerGame;
(function (pokerGame) {
    var CardDeckData = /** @class */ (function () {
        function CardDeckData() {
            /**
            设置相关
    
            */
            this.isThreeCardOnce = true; //是否只翻一张
            this.IsLasvigasMode = true; //是否是拉斯维加斯模式
            this.LasvigasModeCount = 0;
            this.cardListKeep = new Array(); //发牌之后保存的卡牌数据,用来重来一次
            this.ThreeCard = new poker.pokerChainGroup(poker.PokerGroupRenderMode.lastThreeCard); //三张牌的显示
            this.StartCard = new poker.pokerChainGroup(poker.PokerGroupRenderMode.lastOneCard); //开始的牌堆
            this.pokerLineList = new Array(); //牌线 1-7
            this.pokerDeckList = new Array(); //四个堆
            this.connectStepList = new Array(); //连接的历史记录,用来做回退
            this.xxzxc = 0;
            // ////console.log('pokerGroupData1', this.StartCard);
            // ////console.log('pokerGroupData11', this.ThreeCard);
            GameGlobal.Dispatcher.GetInstance().addEventHandle(GameGlobal.EVENT.onClearHistory, this, this.onClearHistory);
            this.StartCard.render.zeroCardName = "img_trans.png";
            this.StartCard.data.CreateFull();
            this.StartCard.data.SetLastCardBackIfNot();
            this.StartCard.FlushRender();
            var a = 'a';
            if (a == 'a')
                a = 'a';
            //四个堆数据
            for (var i = 0; i < 4; i++) {
                var deck = new poker.pokerChainGroup(poker.PokerGroupRenderMode.lastOneCard);
                deck.render.zeroCardName = "img_A.png";
                this.pokerDeckList.push(deck);
            }
            //七行数据
            for (var i = 0; i < 7; i++) {
                var line = new poker.pokerChainGroup(poker.PokerGroupRenderMode.line);
                line.render.zeroCardName = "img_zero.png";
                this.pokerLineList.push(line);
                // ////console.log('sp2 ', this.pokerLineList);
            }
        }
        CardDeckData.prototype.IsCanTabBackToStart = function () {
            if (this.IsLasvigasMode) {
                GameGlobal.Dispatcher.GetInstance().brodcastEvent(GameGlobal.EVENT.isVJIASI, [this.IsLasvigasMode, this.LasvigasModeCount - 1]);
                // ////console.log('isVigasMode', this.LasvigasModeCount);
                return this.LasvigasModeCount > 0;
            }
            return true;
        };
        CardDeckData.prototype.TabBackToStartOnce = function () {
            if (this.IsLasvigasMode) {
                return this.LasvigasModeCount--;
            }
        };
        CardDeckData.prototype.SetGameModeByUserData = function (userData) {
            this.SetGameMode(userData.isThreeCardOnce, userData.isVigasMode);
        };
        CardDeckData.prototype.SetGameMode = function (isThreeCardOnce, IsLasvigasMode) {
            this.isThreeCardOnce = isThreeCardOnce;
            this.IsLasvigasMode = IsLasvigasMode;
            if (this, IsLasvigasMode) {
                this.LasvigasModeCount = 3;
            }
            GameGlobal.Dispatcher.GetInstance().brodcastEvent(GameGlobal.EVENT.isVJIASI, [this.IsLasvigasMode, this.LasvigasModeCount]);
        };
        CardDeckData.prototype.onClearHistory = function () {
            this.connectStepList = [];
        };
        CardDeckData.prototype.FlushAllPokerRender = function () {
            this.StartCard.FlushRender();
            this.ThreeCard.FlushRender();
            //四个堆数据
            for (var i = 0; i < 4; i++) {
                this.pokerDeckList[i].FlushRender();
            }
            //七行数据
            for (var i = 0; i < 7; i++) {
                this.pokerLineList[i].FlushRender();
            }
        };
        CardDeckData.prototype.FlushAllCardRender = function () {
            this.StartCard.data.FlushAllCardRender();
            this.ThreeCard.data.FlushAllCardRender();
            //四个堆数据
            for (var i = 0; i < 4; i++) {
                this.pokerDeckList[i].data.FlushAllCardRender();
            }
            //七行数据
            for (var i = 0; i < 7; i++) {
                this.pokerLineList[i].data.FlushAllCardRender();
            }
        };
        //新增一步历史记录
        CardDeckData.prototype.AddStep = function (toType, toNum, toLength, fromType, fromNum, fromBackToFront) {
            var step = new pokerGame.connectStep(toType, toNum, toLength, fromType, fromNum, fromBackToFront);
            this.connectStepList.push(step);
            // ////console.log('this.connectStepList+', step);
            GameMain.app.nextStepArray.push({ addToDeckType: toType, addToDeckNum: toNum, addToDeckIndex: toLength, fromDeckType: fromType, fromDeckNum: fromNum, isFromDeckChangeToFront: fromBackToFront });
            // ////console.log('GameMain.app.nextStepArray', GameMain.app.nextStepArray);
        };
        CardDeckData.prototype.ClearStep = function () {
            this.connectStepList.splice(0);
        };
        //获得最后一步回撤历史记录
        CardDeckData.prototype.GetLastBackStep = function () {
            if (this.connectStepList.length <= 0) {
                return null;
            }
            var lastIndex = this.connectStepList.length - 1;
            var lastStep = this.connectStepList[lastIndex];
            // ////console.log('this.connectStepList-', lastStep);
            return lastStep;
        };
        // public shadowImg1: Laya.Image;
        // public shadowImg2: Laya.Image;
        // public mask1: Laya.Image;
        // public mask2: Laya.Image;
        CardDeckData.prototype.bt2 = function (callback) {
            var lastIndex = this.connectStepList.length - 1;
            var lastStep = this.connectStepList[lastIndex];
            var fromGroup = this.GetDeck(lastStep.fromDeckType, lastStep.fromDeckNum);
            var lastcard = fromGroup.data.GetLastCard();
            if (!lastcard || !lastcard.render) {
                callback();
                return;
            }
            // ////console.log('lastcard', lastcard);
            lastcard.render.img.skin = '';
            lastcard.render.shadowImg1.visible = false;
            var x1;
            var x2;
            if (!x1) {
                x1 = new Laya.Image();
            }
            if (!x2) {
                x2 = new Laya.Image();
            }
            x1.size(lastcard.render.img.width, lastcard.render.img.height);
            x2.size(lastcard.render.img.width, lastcard.render.img.height);
            x1.skin = lastcard.render.ImageFileName;
            x2.skin = pokerRender.backSkinName;
            lastcard.render.img.addChild(x1);
            lastcard.render.img.addChild(x2);
            x1.scaleX = 1;
            x2.scaleX = 0;
            x1.anchorX = 0.5;
            x2.anchorX = 0.5;
            x1.pos(x1.width / 2, 0);
            x2.pos(x2.width / 2, 0);
            Laya.Tween.to(x1, { scaleX: 0 }, CardSpeedSetting.speed8, Laya.Ease.linearIn, new Laya.Handler(this, function () {
                Laya.Tween.to(x2, { scaleX: 1 }, CardSpeedSetting.speed8, Laya.Ease.linearOut, new Laya.Handler(this, function () {
                    callback();
                    lastcard.render.img.skin = pokerRender.backSkinName;
                    lastcard.render.shadowImg1.visible = true;
                    x1.removeSelf();
                    x2.removeSelf();
                    x1 = null;
                    x2 = null;
                }));
            }));
        };
        //数据回退一步历史记录
        CardDeckData.prototype.BackStep = function () {
            if (this.connectStepList.length <= 0) {
                return null;
            }
            var lastIndex = this.connectStepList.length - 1;
            var lastStep = this.connectStepList[lastIndex];
            var toGroup = this.GetDeck(lastStep.addToDeckType, lastStep.addToDeckNum);
            var fromGroup = this.GetDeck(lastStep.fromDeckType, lastStep.fromDeckNum);
            if (lastStep.isFromDeckChangeToFront) //是否需要变回卡背
             {
                var lastcard = fromGroup.data.GetLastCard();
                if (lastcard != null) {
                    lastcard.data.IsCardBack = true;
                }
            }
            var datatoConnect = toGroup.data.SplitePokerGroup(lastStep.addToDeckIndex);
            if (lastStep.fromDeckType == pokerGame.pokerDeckType.startDeck) {
                //this.StartCard.data.pokerList.reverse();
                datatoConnect.pokerList.reverse();
            }
            fromGroup.data.Concat(datatoConnect);
            if (lastStep.fromDeckType == pokerGame.pokerDeckType.startDeck) {
                fromGroup.data.SetAllCardToBack();
            }
            toGroup.FlushRender();
            fromGroup.FlushRender();
            this.connectStepList.splice(lastIndex);
            return lastStep;
        };
        CardDeckData.prototype.GetAceDeckSpriteRoot = function (deckNum) {
            switch (deckNum) {
                case 1:
                    return this.table.Deck1;
                case 2:
                    return this.table.Deck2;
                case 3:
                    return this.table.Deck3;
                case 4:
                    return this.table.Deck4;
            }
            return null;
        };
        CardDeckData.prototype.GetLineSpriteRoot = function (lineNum) {
            switch (lineNum) {
                case 1:
                    return this.table.Line1;
                case 2:
                    return this.table.Line2;
                case 3:
                    return this.table.Line3;
                case 4:
                    return this.table.Line4;
                case 5:
                    return this.table.Line5;
                case 6:
                    return this.table.Line6;
                case 7:
                    return this.table.Line7;
            }
            return null;
        };
        CardDeckData.prototype.GetDeckSpriteRoot = function (type, GroupNum) {
            var tRet = null;
            switch (type) {
                case pokerGame.pokerDeckType.startDeck:
                    return this.table.StartCard;
                case pokerGame.pokerDeckType.threeCardDeck:
                    return this.table.ThreeCard;
                case pokerGame.pokerDeckType.Line:
                    {
                        if (GroupNum > 0 && GroupNum <= 7) {
                            return this.GetLineSpriteRoot(GroupNum);
                        }
                    }
                    break;
                case pokerGame.pokerDeckType.Deck:
                    {
                        if (GroupNum > 0 && GroupNum <= 4) {
                            return this.GetAceDeckSpriteRoot(GroupNum);
                        }
                    }
                    break;
            }
            return null;
        };
        CardDeckData.prototype.GetDeck = function (type, GroupNum) {
            var tRet = null;
            switch (type) {
                case pokerGame.pokerDeckType.startDeck:
                    return this.StartCard;
                case pokerGame.pokerDeckType.threeCardDeck:
                    return this.ThreeCard;
                case pokerGame.pokerDeckType.Line:
                    {
                        if (GroupNum > 0 && GroupNum <= 7) {
                            return this.pokerLineList[GroupNum - 1];
                        }
                    }
                    break;
                case pokerGame.pokerDeckType.Deck:
                    {
                        if (GroupNum > 0 && GroupNum <= 4) {
                            return this.pokerDeckList[GroupNum - 1];
                        }
                    }
                    break;
            }
            return null;
        };
        //收回牌到牌堆里面
        CardDeckData.prototype.AllCardBackToStart = function () {
            for (var i = 0; i < 4; i++) {
                this.BackToStart(this.pokerDeckList[i]);
            }
            this.BackToStart(this.ThreeCard);
            for (var i = 0; i < 7; i++) {
                this.BackToStart(this.pokerLineList[i]);
            }
            this.StartCard.data.SetLastCardBackIfNot();
            for (var i = 0; i < this.StartCard.data.pokerList.length; i++) {
                var poker = this.StartCard.data.pokerList[i];
                poker.render.img.removeSelf();
            }
            this.StartCard.FlushRender();
        };
        CardDeckData.prototype.BackToStart = function (pokerGroup) {
            var pokerData = pokerGroup.data;
            this.StartCard.data.Concat(pokerData);
            pokerGroup.FlushRender();
        };
        CardDeckData.prototype.SaveStartCardData = function () {
            this.cardListKeep.splice(0);
            for (var i = 0; i < this.StartCard.data.pokerList.length; i++) {
                var pokerdata = this.StartCard.data.pokerList[i];
                this.cardListKeep.push(pokerdata.data.Clone());
            }
            // ////console.log('SaveStartCardList00000000000000', JSON.stringify(this.cardListKeep));
            // if (!GameMain.app.getValues) {
            // 	GameMain.app.mWX.setUserValue('SaveStartCardList', JSON.stringify(this.cardListKeep));
            // }
            GameMain.app.getValues = null;
            GameMain.app.getValues = JSON.stringify(this.cardListKeep);
            // wxCore.uo.commitTotle("start_button_click", { "create_time": "", "session_id": "", "is_new": "", "game_type": 1, "is_free_model": GameMain.app.isOpenFreeModel, "true_current_level": GameMain.app.cutlevel });
        };
        CardDeckData.prototype.LoadStartCardData = function () {
            for (var i = 0; i < this.StartCard.data.pokerList.length && i < this.cardListKeep.length; i++) {
                var pokerdata = this.StartCard.data.pokerList[i];
                var keepData = this.cardListKeep[i];
                // ////console.log('this.cardListKeep', keepData);
                pokerdata.data.SetData(keepData);
                pokerdata.FlushRender();
            }
            // wxCore.uo.commitTotle("start_button_click", { "create_time": "", "session_id": "", "is_new": "", "game_type": 2, "is_free_model": GameMain.app.isOpenFreeModel, "true_current_level": GameMain.app.cutlevel });
        };
        CardDeckData.prototype.setKeepCardList = function (cardListKeep) {
            this.cardListKeep = cardListKeep;
        };
        //重新开始发牌
        CardDeckData.prototype.RestartDearCard = function () {
            if (this.cardListKeep.length != 52) {
                return this.DearCard();
            }
            this.AllCardBackToStart();
            this.LoadStartCardData();
            return this.DearStartDeck();
        };
        //普通发牌
        CardDeckData.prototype.DearCard = function () {
            this.AllCardBackToStart();
            this.StartCard.data.ShuffleWithTime(3); //洗牌三次
            this.SaveStartCardData();
            return this.DearStartDeck();
        };
        //发新手指引牌
        CardDeckData.prototype.DearTutorialCard = function () {
            var tt;
            // tt = new TutorialCard();
            tt = new pokerGame.PersonalSetCard(1);
            tt.SetTutorialCard(this);
            if (this.cardListKeep.length == 0) {
                this.SaveStartCardData();
            }
            return this.DearStartDeck();
        };
        //发关卡牌
        CardDeckData.prototype.DearLevelCard = function () {
            var tt;
            if (GameMain.app.levelnum != 0) {
                tt = new pokerGame.PersonalSetCard();
            }
            tt.SetTutorialCard(this);
            // ////console.log('cardList2', tt);
            if (this.cardListKeep.length == 0) {
                this.SaveStartCardData();
            }
            return this.DearStartDeck();
        };
        CardDeckData.prototype.DearStartDeck = function () {
            this.DearCardArray = new Array();
            var pGroup;
            for (var i = 0; i < 7; i++) {
                if (GameMain.app.isSpecialModel) {
                    pGroup = this.StartCard.data.SplitePokerGroupByNum(GameMain.app.SpecialRows[i]);
                }
                else {
                    pGroup = this.StartCard.data.SplitePokerGroupByNum(i + 1);
                }
                //pGroup.pokerList.reverse();
                this.DearCardArray.push(pGroup);
            }
            this.SetAllStartCardToBack();
            this.StartCard.FlushRender();
            return this.DearCardArray;
        };
        CardDeckData.prototype.DearFourDeck = function () {
            this.DearFourArray = new Array();
            for (var i = 0; i < 4; i++) {
                var pGroup = this.StartCard.data.SplitePokerGroupByNum(GameMain.app.SpecialDecks[i]);
                //pGroup.pokerList.reverse();
                this.DearFourArray.push(pGroup);
                // ////console.log('pGroup', pGroup);
            }
            this.SetAllStartCardToBack();
            this.StartCard.FlushRender();
            return this.DearFourArray;
        };
        //动画播放完毕之后
        CardDeckData.prototype.connectDearCardArrayToRender = function (index, sortEndHandle) {
            var i = index;
            this.pokerLineList[i].data.Concat(this.DearCardArray[i]);
            this.pokerLineList[i].data.SetOnlyLastCardFront();
            this.pokerLineList[i].render.FlushPokerList(this.pokerLineList[i].data, false);
            this.pokerLineList[i].render.SortAndMoveToPos(sortEndHandle);
            // ////console.log(this.pokerLineList[0].data.pokerList[this.pokerLineList[0].data.pokerList.length - 1].render);
            // 			if(i == this.pokerLineList.length - 1){
            // Laya.timer.once(100, this, function () {
            // 				for (let it = 0; it < this.pokerLineList.length - 1; it++) {
            // 					var ix = this.pokerLineList[it].data;
            // 					var rd = ix.pokerList[ix.pokerList.length - 1].render;
            // 					var ifname = pokerRender.cardSkinName + pokerRender.GetImgFileName(ix.pokerList[ix.pokerList.length - 1].data);
            // 					rd.img.skin = '';
            // 					rd.img.size(102, 152);
            // 					rd.shadowImg1.visible = false;
            // 					var x1: Laya.Image;
            // 					var x2: Laya.Image;
            // 					if (!x1) {
            // 						x1 = new Laya.Image();
            // 					}
            // 					if (!x2) {
            // 						x2 = new Laya.Image();
            // 					}
            // 					x1.size(rd.img.width, rd.img.height);
            // 					x2.size(rd.img.width, rd.img.height);
            // 					x1.skin = pokerRender.backSkinName;
            // 					x2.skin = ifname;
            // 					rd.img.addChild(x1);
            // 					rd.img.addChild(x2);
            // 					x1.scaleX = 1;
            // 					x2.scaleX = 0;
            // 					x1.anchorX = 0.5;
            // 					x2.anchorX = 0.5;
            // 					x1.pos(x1.width / 2, 0);
            // 					x2.pos(x2.width / 2, 0);
            // 					Laya.Tween.to(x1, { scaleX: 0 }, 150, Laya.Ease.linearIn, new Laya.Handler(this, function () {
            // 						Laya.Tween.to(x2, { scaleX: 1 }, 150, Laya.Ease.linearOut, new Laya.Handler(this, function () {
            // 							x1.removeSelf();
            // 							x2.removeSelf();
            // 							x1 = null;
            // 							x2 = null;
            // 							var newSkinName = ifname;
            // 							if (rd.img.skin != newSkinName) {
            // 								rd.img.graphics.clear();
            // 								rd.img.skin = ifname;
            // 							}
            // 							rd.shadowImg1.visible = true;
            // 						}));
            // 					}));
            // 				}
            // 			})
            // 			}
        };
        CardDeckData.prototype.connectDearCardArrayToRender2 = function (index, sortEndHandle) {
            var i = index;
            this.pokerDeckList[i].data.Concat(this.DearFourArray[i]);
            this.pokerDeckList[i].data.SetAllCardToFront();
            this.pokerDeckList[i].render.FlushPokerList(this.pokerDeckList[i].data, false);
            // ////console.log('vGroupData.pokerList2 ', this.pokerDeckList[i].data);
        };
        //开始卡组里面的所有卡片变成背面
        CardDeckData.prototype.SetAllStartCardToBack = function () {
            this.StartCard.data.SetAllCardToBack();
            this.StartCard.data.FlushAllCardRender();
        };
        //清理桌面
        CardDeckData.prototype.ClearTable = function (table) {
            for (var i = 0; i < 4; i++) {
                var spr = this.GetAceDeckSpriteRoot(i + 1);
                spr.removeChildren(0);
            }
            for (var i = 0; i < 7; i++) {
                var spr = this.GetLineSpriteRoot(i + 1);
                spr.removeChildren(0);
            }
            table.ThreeCard.removeChildren(0);
            table.StartCard.removeChildren(0);
        };
        CardDeckData.prototype.RemoveFromTable = function () {
            this.ClearTable(this.table);
            this.table = null;
            this.StartCard.data.RemoveAllCardRender();
            this.ThreeCard.data.RemoveAllCardRender();
            //四个堆数据
            for (var i = 0; i < 4; i++) {
                this.pokerDeckList[i].data.RemoveAllCardRender();
            }
            //七行数据
            for (var i = 0; i < 7; i++) {
                this.pokerLineList[i].data.RemoveAllCardRender();
                // ////console.log('record3 ', this.pokerLineList);
            }
        };
        CardDeckData.prototype.AddToTable = function (table) {
            this.table = table;
            this.ClearTable(table);
            for (var i = 0; i < 4; i++) {
                var spr = this.GetAceDeckSpriteRoot(i + 1);
                spr.addChild(this.pokerDeckList[i].render);
            }
            table.ThreeCard.addChild(this.ThreeCard.render);
            table.StartCard.addChild(this.StartCard.render);
            for (var i = 0; i < 7; i++) {
                var spr = this.GetLineSpriteRoot(i + 1);
                spr.addChild(this.pokerLineList[i].render);
                // ////console.log('record2 ', this.pokerLineList);
            }
        };
        return CardDeckData;
    }());
    pokerGame.CardDeckData = CardDeckData;
})(pokerGame || (pokerGame = {}));
//# sourceMappingURL=CardDeckData.js.map