/**
* 点击，拖动事件的处理
*/
var pokerGame;
(function (pokerGame) {
    var CardControls = /** @class */ (function () {
        function CardControls() {
            this.rule = new pokerGame.ChainGameRule();
            /**
                拖动相关
            */
            //private DragMoveingGroup: poker.pokerChainGroup = new poker.pokerChainGroup(poker.PokerGroupRenderMode.line);//正在拖动的牌堆
            this.DragMovingStartPos = new laya.maths.Point();
            this.IsStartDraging = false; //开始拖拽
            this.IsStartDragMoved = false; //是否开始拖动了(点击判断使用)
            this.MouseStartPos = new laya.maths.Point();
            this.dragData = new pokerGame.pokerMovingData();
            this.IsAutoMoving = false; //正在自动移动
            this.IsGameEnd = false; //游戏结束
            this.IsAutoBacking = false; //自动快速移动,自动解决的时候使用
            this.IsTutorialStarted = false; //新手指引开始
            this.clickImg = null;
            this.dragPokerGroup = new Array();
            this.dragPokerGroupIndex = 0;
            this.shadowImg1 = null;
            this.shadowImg2 = null;
            this.mask1 = null;
            this.mask2 = null;
            this.shinning = null;
            this.dragInListOne = 0;
            this.shadow1OtherList = new Array();
            this.shadow2OtherList = new Array();
            this.mask1OtherList = new Array();
            this.mask2OtherList = new Array();
            this.shinningOtherList = new Array();
            this.isDownTween = false;
            this.dtime = 400;
            this.longClickTime = 100;
            this.nowTimeDown = 0;
            this.isEabToDown = false;
            this.CollisionArrList = new Array();
            this.dragData.DragingGroup = new poker.pokerChainGroup(poker.PokerGroupRenderMode.line); //正在拖动的牌堆
            this.dragData.DragingGroup.render.collisionMode = poker.PokerGroupCollisionMode.FirstCardCollision;
            var a = 'a';
            if (a == 'a')
                a = 'a';
        }
        //是否可以切换牌
        CardControls.prototype.IsCanChangeCard = function () {
            return this.IsCanStartCardClick();
        };
        //是否可以发牌
        CardControls.prototype.IsCanDearCard = function () {
            return this.IsCanStartCardClick();
        };
        //是否正在自动完成
        CardControls.prototype.GetIsAutoBacking = function () {
            return this.IsAutoBacking;
        };
        CardControls.prototype.ResetPlayData = function () {
            this.IsAutoMoving = false;
            this.IsGameEnd = false;
            this.IsAutoBacking = false;
            Laya.Tween.clearAll(this.deckData.table.LineMove);
            if (this.dragData.DragingGroup.data.pokerList.length > 0) {
                this.dragDataBack();
            }
        };
        CardControls.prototype.SetTableClick = function (table, tableTop, tableBottom) {
            table.offAll();
            table.on(Laya.Event.MOUSE_MOVE, this, this.onMounseMove);
            table.on(Laya.Event.MOUSE_UP, this, this.onMounseUp);
            tableTop.offAll();
            tableTop.on(Laya.Event.MOUSE_MOVE, this, this.onMounseUp);
            tableTop.on(Laya.Event.MOUSE_UP, this, this.onMounseUp);
            tableBottom.offAll();
            tableBottom.on(Laya.Event.MOUSE_MOVE, this, this.onMounseUp);
            tableBottom.on(Laya.Event.MOUSE_UP, this, this.onMounseUp);
        };
        CardControls.prototype.Flush = function (type, GroupNum) {
            this.FlushRender(type, GroupNum);
            // ////console.log('FlushClickEvent1');
            this.FlushClickEvent(type, GroupNum);
        };
        CardControls.prototype.FlushRender = function (type, GroupNum) {
            switch (type) {
                case pokerGame.pokerDeckType.startDeck:
                    this.FlushStartRender();
                    break;
                case pokerGame.pokerDeckType.Line:
                    this.FlushLineRender(GroupNum - 1);
                    break;
                case pokerGame.pokerDeckType.Deck:
                    this.FlushDeckRender(GroupNum - 1);
                    break;
                case pokerGame.pokerDeckType.threeCardDeck:
                    this.FlushThreeCardRender();
                    break;
            }
        };
        CardControls.prototype.FlushClickEvent = function (type, GroupNum) {
            switch (type) {
                case pokerGame.pokerDeckType.startDeck:
                    this.FlushStartClick();
                    break;
                case pokerGame.pokerDeckType.Line:
                    // ////console.log('FlushLineClick1');
                    this.FlushLineClick(GroupNum - 1);
                    break;
                case pokerGame.pokerDeckType.Deck:
                    this.FlushDeckClick(GroupNum - 1);
                    break;
                case pokerGame.pokerDeckType.threeCardDeck:
                    this.FlushThreeCardClick();
                    break;
            }
        };
        CardControls.prototype.AutoBack = function (type) {
            if (type === void 0) { type = 0; }
            if (type == 1) {
                if (this.deckData.StartCard.data.pokerList.length > 0) {
                    this.ShowStartCard(1);
                }
                else {
                    this.AutoBack(0);
                }
            }
            else if (type == 2) {
                this.IsAutoBacking = true;
                this.AutoBackToAceCardDeck(1);
                // ////console.log('xxyy2001');
            }
            else {
                this.IsAutoBacking = true;
                if (this.deckData.ThreeCard.data.pokerList.length > 0) {
                    this.AutoBackToAceCardDeck(1);
                    // ////console.log('xxyy20021');
                }
                else {
                    this.AutoBackToAceCardDeck();
                    // ////console.log('xxyy20022');
                }
            }
        };
        //三张或StartCard里面有卡
        CardControls.prototype.IsHaveCardInThreeDeckOrStartCard = function () {
            if (this.deckData.StartCard.data.pokerList.length > 0) {
                return true;
            }
            if (this.deckData.ThreeCard.data.pokerList.length > 0) {
                return true;
            }
        };
        //先自动把开始组的卡片都分发出去
        CardControls.prototype.AutoBackStartCardToLine = function () {
            if (this.CheckIsThreeCanAutoMove()) {
                //this.dragData.SetThreeCard(this.deckData);
                //this.PlayDragAutoMoveAni();
                return;
            }
            if (this.deckData.StartCard.data.pokerList.length > 0) {
                // ////console.log('xxyy22');
                this.dragData.SetThreeCard(this.deckData);
                this.dragData.moveType = pokerGame.MovingType.autoBackToDeck; //移动类型
                this.PlayDragAutoMoveAni();
            }
            else {
                this.ThreeCardBackToStart();
                this.AutoBack();
                // ////console.log('xxyy2003');
            }
        };
        //自动回4个A卡组
        CardControls.prototype.AutoBackToAceCardDeck = function (type) {
            if (type === void 0) { type = 0; }
            var lineNum = 0;
            var deckNum = 0;
            var index = 0;
            // ////console.log('xxyy201');
            for (var i = index; i < this.deckData.pokerLineList.length; i++) {
                // index = i;
                var lineDeck = this.deckData.pokerLineList[i];
                var deckIndex = this.GetCanBackToDeckIndex(lineDeck.data.GetLastCard()); //获得能返回的deckIndex 没有的话返回-1
                // ////console.log('lineNumdeckNum1', deckIndex, lineDeck);
                if (deckIndex >= 0) {
                    deckNum = deckIndex + 1;
                    lineNum = i + 1;
                    // ////console.log('lineNumdeckNum2', deckNum, lineNum, i);
                    break;
                }
            }
            if (lineNum > 0 && deckNum > 0) {
                this.dragData.SetAutoBackCard(this.deckData, lineNum, deckNum);
                this.PlayDragAutoMoveAni();
            }
            else {
                if (type == 1) {
                    this.setMoveBackFourDeck();
                }
            }
            // this.dragData.SetAutoMoveUPThreeCardLastCard(this.deckData);
            // this.PlayDragAutoMoveAni();
        };
        //检测三张卡能否可以自动移动
        CardControls.prototype.CheckIsThreeCanAutoMove = function () {
            var pokerCard = this.deckData.ThreeCard.data.GetLastCard();
            if (pokerCard == null) {
                return false;
            }
            //与4个堆线做检测
            for (var i = 0; i < this.deckData.pokerDeckList.length; i++) {
                var lastCard = this.deckData.pokerDeckList[i].data.GetLastCard();
                if (this.rule.IsCanTackBack(lastCard, pokerCard)) //用规则检测能否返回
                 {
                    this.dragData.SetAutoMoveUPThreeCardLastCard(this.deckData);
                    this.dragData.DragToGroupType = pokerGame.pokerDeckType.Deck;
                    this.dragData.DragToNum = i + 1;
                    this.dragData.IsNeedAddToStepRecord = false;
                    this.PlayDragAutoMoveAni();
                    return true;
                }
            }
            //与7个线做检测
            for (var i = 0; i < this.deckData.pokerLineList.length; i++) {
                var lastCard = this.deckData.pokerLineList[i].data.GetLastCard();
                if (this.rule.IsCanConnect(lastCard, pokerCard)) //用规则检测是否能连接上
                 {
                    this.dragData.SetAutoMoveUPThreeCardLastCard(this.deckData);
                    this.dragData.DragToGroupType = pokerGame.pokerDeckType.Line;
                    this.dragData.DragToNum = i + 1;
                    this.dragData.IsNeedAddToStepRecord = false;
                    this.PlayDragAutoMoveAni();
                    return true;
                }
            }
            return false;
        };
        CardControls.prototype.GetCanBackToDeckIndex = function (pokerCard) {
            if (pokerCard == null) {
                return -1;
            }
            //与4个堆线做检测
            for (var i = 0; i < this.deckData.pokerDeckList.length; i++) {
                var lastCard = this.deckData.pokerDeckList[i].data.GetLastCard();
                if (this.rule.IsCanTackBack(lastCard, pokerCard)) //用规则检测能否返回
                 {
                    return i;
                }
            }
            return -1;
        };
        CardControls.prototype.IsCanUseShowHiddenCardItem = function () {
            for (var i = 0; i < this.deckData.pokerLineList.length; i++) {
                var pokerList = this.deckData.pokerLineList[i].data.pokerList;
                for (var j = 0; j < pokerList.length; j++) {
                    if (pokerList[j].data.IsCardBack) {
                        return true;
                    }
                }
            }
            return false;
        };
        CardControls.prototype.IsHaveHiddenCard = function () {
            // if (this.deckData.StartCard.data.pokerList.length > 0) {
            // 	return true;
            // }
            // ////console.log('tantantnntantnantnantantnantantnantnatan');
            // if (this.deckData.ThreeCard.data.pokerList.length > 0) {
            // 	return true;
            // }
            for (var i = 0; i < this.deckData.pokerLineList.length; i++) {
                var pokerList = this.deckData.pokerLineList[i].data.pokerList;
                for (var j = 0; j < pokerList.length; j++) {
                    if (pokerList[j].data.IsCardBack) {
                        return true;
                    }
                }
            }
            return false;
        };
        //明牌
        CardControls.prototype.ShowAllHiddenCard = function () {
            if (!this.IsCanStartCardClick()) {
                return;
            }
            this.deckData.isThreeCardOnce = false; //一张一张翻开
            this.deckData.IsLasvigasMode = false; //明牌的时候拉斯维加斯模式关闭
            this.ShowOneLineHiddenCard();
            this.deckData.ClearStep();
        };
        CardControls.prototype.ShowOneLineHiddenCard = function () {
            for (var i = 0; i < this.deckData.pokerLineList.length; i++) {
                var LastBackIndex = -1;
                var pokerList = this.deckData.pokerLineList[i].data.pokerList;
                for (var j = 0; j < pokerList.length; j++) {
                    if (pokerList[j].data.IsCardBack) {
                        LastBackIndex = j;
                    }
                    else {
                        break;
                    }
                    // pokerList[j].data.IsCardBack = false;
                }
                if (LastBackIndex >= 0) {
                    this.dragData.SetHidenCard(i + 1, this.deckData, LastBackIndex);
                    this.PlayDragAutoMoveAni();
                    return;
                }
                // this.deckData.pokerLineList[i].FlushRender();
            }
            return;
        };
        //回撤
        CardControls.prototype.BackStep = function (type) {
            if (type === void 0) { type = 0; }
            if (!this.IsCanStartCardClick()) {
                return;
            }
            var lastStep = this.deckData.GetLastBackStep();
            if (lastStep == null) {
                return;
            }
            this.IsAutoMoving = true;
            // ////console.log('tytytytyty:', type);
            this.dragData.SetBackStep(lastStep, this.deckData, type);
            this.dragData.DragingGroup.render.renderMode = poker.PokerGroupRenderMode.lastThreeCard;
            this.dragData.DragingGroup.FlushRender(true);
            if (lastStep.fromDeckType == pokerGame.pokerDeckType.threeCardDeck) {
                this.dragData.DragingGroup.data.SetAllCardToFront();
            }
            var that = this;
            //后撤翻牌动画
            if (lastStep.fromDeckType == pokerGame.pokerDeckType.Line) {
                var backstep = this.deckData.bt2(function () {
                });
                that.PlayDragAutoMoveAni(0, 1);
            }
            else {
                that.PlayDragAutoMoveAni(0, 1);
            }
        };
        CardControls.prototype.setMoveBackFourDeck = function () {
            for (var z = 0; z < this.deckData.ThreeCard.data.pokerList.length; z++) {
                var pokerCard = this.deckData.ThreeCard.data.pokerList[z];
                // if (pokerCard == null) {
                // 	return false;
                // }
                for (var i = 0; i < this.deckData.pokerDeckList.length; i++) {
                    var lastCard = this.deckData.pokerDeckList[i].data.GetLastCard();
                    if (this.rule.IsCanTackBack(lastCard, pokerCard)) //用规则检测能否返回
                     {
                        // this.dragData.SetAutoMoveUPThreeCardLastCard(this.deckData);
                        this.dragData.SetAutoMoveUPThreeCardLastCard2(this.deckData, z);
                        this.dragData.DragToGroupType = pokerGame.pokerDeckType.Deck;
                        this.dragData.DragToNum = i + 1;
                        this.dragData.IsNeedAddToStepRecord = false;
                        // ////console.log('IsCanTackBack', this.dragData);
                        this.PlayDragAutoMoveAni();
                        return true;
                    }
                }
            }
        };
        CardControls.prototype.resetAllCards = function () {
            // var fromDeckType = GameMain.app.nextStepArray[0]['fromDeckType'];
            // var fromDeckNum = GameMain.app.nextStepArray[0]['fromDeckNum'];
            // var addToDeckType = GameMain.app.nextStepArray[0]['addToDeckType'];
            // var addToDeckNum = GameMain.app.nextStepArray[0]['addToDeckNum'];
            // var checkGroup = this.deckData.pokerLineList[addToDeckNum - 1];
            // var dragGroup = this.deckData.pokerLineList[fromDeckNum - 1];
            // this.dragData.DragingGroup.data = dragGroup.data;
            // ////console.log('GameMain.app.nextStepArray1', checkGroup.data.GetLastCard(), this.dragData.DragingGroup.data.GetLastCard());
            // if (this.rule.IsCanConnect(checkGroup.data.GetLastCard(), this.dragData.DragingGroup.data.GetLastCard())) {
            // 	////console.log('lailailai');
            // 	// this.dragData.DragToGroupType = pokerDeckType.Line;
            // 	// this.dragData.DragToNum = addToDeckNum;
            // 	// this.dragData.IsNeedAddToStepRecord = true;
            // 	//this.connectDragGroup();
            // 	this.PlayDragAutoMoveAni();
            // 	return;
            // }
        };
        //点击起始堆
        CardControls.prototype.ClickStartDeck = function () {
            if (this.IsAutoMoving) {
                return;
            }
            for (var i = 0; i < this.deckData.StartCard.render.numChildren; i++) {
                var poker = this.deckData.StartCard.render.getChildAt(i);
                poker.offAll();
            }
            this.ShowStartCard();
        };
        //翻牌
        CardControls.prototype.ShowStartCard = function (type) {
            if (type === void 0) { type = 0; }
            if (this.IsAutoMoving) {
                return;
            }
            if (this.deckData.StartCard.data.pokerList.length > 0) {
                if (type == 0) {
                    this.dragData.SetThreeCard(this.deckData);
                    this.PlayDragAutoMoveAni(2);
                }
                else {
                    this.dragData.AllCard2SetThreeCard(this.deckData);
                    this.PlayDragAutoMoveAni(3);
                }
            }
            else {
                if (!this.deckData.IsCanTabBackToStart()) {
                    GameGlobal.Dispatcher.sendEvent(GameGlobal.EVENT.ShowMessage, [10006]); //
                    //错误提示 拉斯维加斯模式下,总共只能翻牌三次
                    return;
                }
                this.deckData.TabBackToStartOnce(); //翻牌计数
                this.ThreeCardBackToStart();
            }
            // this.CheckAutoPlay();
        };
        //三张牌返回start
        CardControls.prototype.ThreeCardBackToStart = function () {
            var checkGroup = this.deckData.StartCard;
            this.deckData.AddStep(pokerGame.pokerDeckType.startDeck, 0, checkGroup.data.pokerList.length, pokerGame.pokerDeckType.threeCardDeck, 0, false);
            this.deckData.BackToStart(this.deckData.ThreeCard);
            this.deckData.StartCard.data.pokerList.reverse();
            this.deckData.StartCard.data.SetAllCardToBack();
            this.deckData.StartCard.data.FlushAllCardRender();
            this.deckData.StartCard.FlushRender();
            // ////console.log('Flush4');
            this.Flush(pokerGame.pokerDeckType.startDeck, 0);
            this.Flush(pokerGame.pokerDeckType.threeCardDeck, 0);
        };
        CardControls.prototype.IsCanStartCardClick = function () {
            if (this.IsAutoMoving) {
                return false;
            }
            if (this.dragData.DragingGroup.data.pokerList.length > 0) //有正在拖动的
             {
                return false;
            }
            return true;
        };
        //鼠标按下
        CardControls.prototype.onMounseDown = function (pokerGroup, type, typeNum, index) {
            if (this.IsAutoMoving) {
                return;
            }
            if (this.dragData.DragingGroup.data.pokerList.length > 0) //有正在拖动的
             {
                return;
            }
            // ////console.log('卡牌1', this.dragData.DragFromNum, pokerGroup, index);
            this.dragInListOne = index;
            // console.debug("卡牌移动开启：" + "LineIndex=" + type + "typeNum=" + typeNum + "index=" + index);
            this.IsStartDraging = true;
            this.IsStartDragMoved = false;
            var clickedIMG = null;
            clickedIMG = pokerGroup.data.pokerList[index].render.img;
            this.clickImg = clickedIMG;
            this.dragPokerGroup = [];
            for (var ij = index + 1; ij < pokerGroup.data.pokerList.length; ij++) {
                this.dragPokerGroup.push(pokerGroup.data.pokerList[ij].render.img);
                // ////console.log('this.dragData.DragingGroup.data.pokerList1', ij, pokerGroup.data.pokerList);
            }
            // ////console.log('this.dragData.DragingGroup.data.pokerList2', this.dragData);
            this.dragPokerGroupIndex = index;
            this.nowTimeDown = new Date().getTime();
            Laya.timer.once(this.longClickTime, this, function () {
                if (new Date().getTime() - this.nowTimeDown >= this.longClickTime && this.nowTimeDown != 0) {
                    if (!this.shadowImg1) {
                        this.shadowImg1 = new Laya.Image();
                    }
                    if (!this.shadowImg2) {
                        this.shadowImg2 = new Laya.Image();
                    }
                    this.shadowImg1.skin = 'new/game_image_sd.png';
                    this.shadowImg2.skin = 'new/game_image_sd.png';
                    this.shadowImg1.size(102, 152);
                    clickedIMG.addChild(this.shadowImg1);
                    this.shadowImg2.size(102, 152);
                    clickedIMG.addChild(this.shadowImg2);
                    this.mask1 = new Laya.Image();
                    this.mask1.skin = 'new/game_image_shodow.png';
                    this.mask1.size(102, 152);
                    this.mask2 = new Laya.Image();
                    this.mask2.skin = 'new/game_image_shodow.png';
                    this.shadowImg1.mask = this.mask1;
                    this.mask2.size(102, 152);
                    this.shadowImg2.mask = this.mask2;
                    this.shinning = new Laya.Image();
                    this.shinning.skin = 'new/game_image_shinning1.png';
                    this.shinning.size(141, 190);
                    clickedIMG.addChild(this.shinning);
                    this.shinning.pos(-19, -19);
                    for (var _i = 0, _a = this.dragPokerGroup; _i < _a.length; _i++) {
                        var img = _a[_i];
                        var shadowImg1 = new Laya.Image();
                        var shadowImg2 = new Laya.Image();
                        var mask1 = new Laya.Image();
                        var mask2 = new Laya.Image();
                        var shinning = new Laya.Image();
                        this.shadow1OtherList.push(shadowImg1);
                        this.shadow2OtherList.push(shadowImg2);
                        this.mask1OtherList.push(mask1);
                        this.mask2OtherList.push(mask2);
                        this.shinningOtherList.push(shinning);
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
                    var x = this.clickImg.x;
                    var y = this.clickImg.y;
                    this.isDownTween = true;
                    Laya.Tween.to(this.clickImg, {
                        x: x - 8,
                        y: y - 8
                    }, this.dtime, Laya.Ease.sineOut, new Laya.Handler(this, function () {
                        this.isDownTween = false;
                    }));
                    for (var _b = 0, _c = this.dragPokerGroup; _b < _c.length; _b++) {
                        var img = _c[_b];
                        var xx = img.x;
                        var yy = img.y;
                        Laya.Tween.to(img, {
                            x: xx - 8,
                            y: yy - 8
                        }, this.dtime, Laya.Ease.sineOut, new Laya.Handler(this, function () {
                            this.isDownTween = false;
                        }));
                    }
                    this.shinning.alpha = 0;
                    Laya.Tween.to(this.shinning, {
                        alpha: 1
                    }, this.dtime, Laya.Ease.sineOut);
                    this.shadowImg1.pos(5, 5);
                    this.shadowImg2.pos(5, 5);
                    this.mask1.pos(0, 145);
                    this.mask2.pos(97, -5);
                    Laya.Tween.to(this.shadowImg1, {
                        x: 20,
                        y: 20
                    }, this.dtime, Laya.Ease.sineOut);
                    Laya.Tween.to(this.shadowImg2, {
                        x: 20,
                        y: 20
                    }, this.dtime, Laya.Ease.sineOut);
                    Laya.Tween.to(this.mask1, {
                        x: 0,
                        y: 132
                    }, this.dtime, Laya.Ease.sineOut);
                    Laya.Tween.to(this.mask2, {
                        x: 82,
                        y: -20
                    }, this.dtime, Laya.Ease.sineOut);
                    for (var i_1 = 0; i_1 < this.shinningOtherList.length; i_1++) {
                        this.shinningOtherList[i_1].alpha = 0;
                        Laya.Tween.to(this.shinningOtherList[i_1], {
                            alpha: 1
                        }, this.dtime, Laya.Ease.sineOut);
                        this.shadow1OtherList[i_1].pos(5, 5);
                        this.shadow2OtherList[i_1].pos(5, 5);
                        this.mask1OtherList[i_1].pos(0, 145);
                        this.mask2OtherList[i_1].pos(97, -5);
                        Laya.Tween.to(this.shadow1OtherList[i_1], {
                            x: 20,
                            y: 20
                        }, this.dtime, Laya.Ease.sineOut);
                        Laya.Tween.to(this.shadow2OtherList[i_1], {
                            x: 20,
                            y: 20
                        }, this.dtime, Laya.Ease.sineOut);
                        Laya.Tween.to(this.mask1OtherList[i_1], {
                            x: 0,
                            y: 132
                        }, this.dtime, Laya.Ease.sineOut);
                        Laya.Tween.to(this.mask2OtherList[i_1], {
                            x: 82,
                            y: -20
                        }, this.dtime, Laya.Ease.sineOut);
                    }
                }
            });
            this.dragData.DragFromGroupType = type;
            this.dragData.DragFromNum = typeNum;
            this.dragData.DragFromDeckBackToFront = false;
            this.dragData.IsNeedAddToStepRecord = false;
            this.dragData.moveType = pokerGame.MovingType.clickMove; //移动类型
            // ////console.log('ccca', this.dragData);
            var imgRoot = clickedIMG.parent.parent;
            this.deckData.table.LineMove.x = imgRoot.x + clickedIMG.x * imgRoot.scaleX;
            this.deckData.table.LineMove.y = imgRoot.y + clickedIMG.y * imgRoot.scaleY;
            this.DragMovingStartPos.x = this.deckData.table.LineMove.x;
            this.DragMovingStartPos.y = this.deckData.table.LineMove.y;
            this.dragData.DragingGroup.data.Concat(pokerGroup.data.SplitePokerGroup(index));
            this.dragData.DragingGroup.render.renderMode = poker.PokerGroupRenderMode.line;
            if (type == pokerGame.pokerDeckType.Line) {
                var lastcard = pokerGroup.data.GetLastCard();
                if (lastcard != null) {
                    this.dragData.DragFromDeckBackToFront = lastcard.data.IsCardBack;
                }
                pokerGroup.FlushRender();
                if (pokerRender.rsty == 1) {
                    GameGlobal.Dispatcher.GetInstance().brodcastEvent(GameGlobal.EVENT.onChangeLastCard, [1, typeNum, this.dragData]);
                }
            }
            else if (type == pokerGame.pokerDeckType.Deck) {
                pokerGroup.FlushRender();
            }
            this.dragData.DragingGroup.FlushRender();
            this.MouseStartPos.x = Laya.stage.mouseX;
            this.MouseStartPos.y = Laya.stage.mouseY;
            // if(this.dragData.DragingGroup.render.parent==null)
            {
                this.dragData.DragingGroup.render.removeSelf();
                this.deckData.table.LineMove.addChild(this.dragData.DragingGroup.render);
            }
            for (var i = 0; i < this.dragData.DragingGroup.data.pokerList.length; i++) {
                this.dragData.DragingGroup.data.pokerList[i].render.img.offAll();
            }
            GameGlobal.Dispatcher.sendEvent(GameGlobal.EVENT.ClearTips);
            pokerGame.SoundPlayer.PlaySound(GameMain.app.getRandom(5, 6));
            // ////console.log('卡牌2', this.dragData);
        };
        //开始拖动线上的牌
        CardControls.prototype.onMounseMove = function () {
            // console.debug("卡牌开始拖动", this.dragData);
            if (this.IsAutoMoving) {
                return;
            }
            if (!this.IsStartDraging || this.dragData.DragingGroup == null || this.dragData.DragingGroup.data.pokerList.length <= 0) {
                return;
            }
            var offsetX = Laya.stage.mouseX - this.MouseStartPos.x;
            var offsetY = Laya.stage.mouseY - this.MouseStartPos.y;
            this.deckData.table.LineMove.x = this.DragMovingStartPos.x + offsetX;
            this.deckData.table.LineMove.y = this.DragMovingStartPos.y + offsetY;
            //this.dragData.DragingGroup.render.x = this.DragMovingStartPos.x + offsetX / 0.7;
            //this.dragData.DragingGroup.render.y = this.DragMovingStartPos.y + offsetY / 0.7;
            if (!this.IsStartDragMoved) {
                var pt = new Laya.Point(offsetX, offsetY);
                if (pt.distance(0, 0) > 10) //拖动距离小于5的话就算是点击 不然就是移动
                 {
                    this.IsStartDragMoved = true;
                }
            }
        };
        //鼠标抬起
        CardControls.prototype.onMounseUp = function () {
            this.nowTimeDown = 0;
            // console.debug("卡牌拖动结束", this.dragData);
            if (this.IsAutoMoving) //自动移动过程中点击无效
             {
                return;
            }
            if (!this.IsStartDraging || this.dragData.DragingGroup == null || this.dragData.DragingGroup.data.pokerList.length <= 0) {
                return;
            }
            if (this.dragData.DragingGroup == null) {
                return;
            }
            // ////console.log('this.isDownTween', this.isDownTween);
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
            var IsDragedIntoNewGroup = false;
            this.CollisionArrList.forEach(function (element) {
                element.removeSelf();
            });
            this.CollisionArrList.splice(0);
            var IsNeedCheck4Deck = this.IsStartDragMoved || this.dragData.DragFromGroupType != pokerGame.pokerDeckType.Deck;
            //与4个堆线做检测
            if (IsNeedCheck4Deck) {
                for (var i = 0; i < this.deckData.pokerDeckList.length; i++) {
                    var checkGroup = this.deckData.pokerDeckList[i];
                    if (this.dragData.DragingGroup.data.pokerList.length != 1) //每次只能返回一张到deck中
                     {
                        break;
                    }
                    if (this.dragData.DragFromGroupType == pokerGame.pokerDeckType.Deck && (this.dragData.DragFromNum - 1) == i) {
                        continue;
                    }
                    if (this.IsStartDragMoved) {
                        if (!this.CheckCollision(checkGroup, this.dragData.DragingGroup)) {
                            continue;
                        }
                    }
                    if (this.rule.IsCanTackBack(checkGroup.data.GetLastCard(), this.dragData.DragingGroup.data.GetFirstCard())) //用规则检测能否返回
                     {
                        this.dragData.DragToGroupType = pokerGame.pokerDeckType.Deck;
                        this.dragData.DragToNum = i + 1;
                        this.dragData.IsNeedAddToStepRecord = true;
                        // SoundPlayer.PlaySound(4);
                        if (GameMain.app.upVoiceBool) {
                            Laya.timer.clear(this, this.upupup);
                        }
                        else {
                            GameMain.app.upVoiceBool = true;
                        }
                        GameMain.app.upVoiceCount = GameMain.app.upVoiceCount + 1 > 10 ? 10 : GameMain.app.upVoiceCount + 1;
                        Laya.timer.once(5000, this, this.upupup);
                        pokerGame.SoundPlayer.PlaySound(GameMain.app.upVoiceCount + 6);
                        //前进2翻牌动画
                        if (!this.IsStartDragMoved && this.deckData.pokerLineList[this.dragData.DragFromNum - 1] != null &&
                            this.deckData.pokerLineList[this.dragData.DragFromNum - 1].data != null &&
                            this.deckData.pokerLineList[this.dragData.DragFromNum - 1].data.GetLastCard() != null &&
                            this.deckData.pokerLineList[this.dragData.DragFromNum - 1].data.GetLastCard().render != null &&
                            this.deckData.pokerLineList[this.dragData.DragFromNum - 1].data.GetLastCard().render.img != null &&
                            this.deckData.pokerLineList[this.dragData.DragFromNum - 1].data.GetLastCard().data.IsCardBack) {
                            GameMain.app.isNotDraging = true;
                            var rd = this.deckData.pokerLineList[this.dragData.DragFromNum - 1].data.GetLastCard().render;
                            var ifname = pokerRender.cardSkinName + pokerRender.GetImgFileName(this.deckData.pokerLineList[this.dragData.DragFromNum - 1].data.GetLastCard().data);
                            rd.img.skin = '';
                            rd.img.size(102, 152);
                            rd.shadowImg1.visible = false;
                            var x1;
                            var x2;
                            if (!x1) {
                                x1 = new Laya.Image();
                            }
                            if (!x2) {
                                x2 = new Laya.Image();
                            }
                            x1.size(rd.img.width, rd.img.height);
                            x2.size(rd.img.width, rd.img.height);
                            x1.skin = pokerRender.backSkinName;
                            x2.skin = ifname;
                            rd.img.addChild(x1);
                            rd.img.addChild(x2);
                            x1.scaleX = 1;
                            x2.scaleX = 0;
                            x1.anchorX = 0.5;
                            x2.anchorX = 0.5;
                            x1.pos(x1.width / 2, 0);
                            x2.pos(x2.width / 2, 0);
                            Laya.Tween.to(x1, { scaleX: 0 }, 150, Laya.Ease.linearIn, new Laya.Handler(this, function () {
                                Laya.Tween.to(x2, { scaleX: 1 }, 150, Laya.Ease.linearOut, new Laya.Handler(this, function () {
                                    x1.removeSelf();
                                    x2.removeSelf();
                                    x1 = null;
                                    x2 = null;
                                    var newSkinName = ifname;
                                    if (rd.img.skin != newSkinName) {
                                        rd.img.graphics.clear();
                                        rd.img.skin = ifname;
                                    }
                                    GameMain.app.isNotDraging = false;
                                    rd.shadowImg1.visible = true;
                                }));
                            }));
                        }
                        this.PlayDragAutoMoveAni();
                        return;
                    }
                    else if (this.IsStartDragMoved) {
                        var messageID = this.rule.GetTackBackErroMessage(checkGroup.data.GetLastCard(), this.dragData.DragingGroup.data.GetFirstCard());
                        GameGlobal.Dispatcher.GetInstance().brodcastEvent(GameGlobal.EVENT.ShowMessage, [messageID]);
                    }
                }
            }
            //与7条线做检测
            for (var i = 0; i < this.deckData.pokerLineList.length; i++) {
                var checkGroup = this.deckData.pokerLineList[i];
                if (this.dragData.DragFromGroupType == pokerGame.pokerDeckType.Line && (this.dragData.DragFromNum - 1) == i) {
                    continue;
                }
                if (this.IsStartDragMoved) {
                    if (!this.CheckCollision(checkGroup, this.dragData.DragingGroup)) {
                        //console.debug("CheckCollision pass i=" + i.toString());
                        continue;
                    }
                }
                // ////console.log('lastandfirst', checkGroup.data.GetLastCard(), this.dragData.DragingGroup.data.GetFirstCard());
                if (this.rule.IsCanConnect(checkGroup.data.GetLastCard(), this.dragData.DragingGroup.data.GetFirstCard())) {
                    this.dragData.DragToGroupType = pokerGame.pokerDeckType.Line;
                    this.dragData.DragToNum = i + 1;
                    this.dragData.IsNeedAddToStepRecord = true;
                    //this.connectDragGroup();
                    //前进翻牌动画
                    if (!this.IsStartDragMoved && this.deckData.pokerLineList[this.dragData.DragFromNum - 1] != null &&
                        this.deckData.pokerLineList[this.dragData.DragFromNum - 1].data != null &&
                        this.deckData.pokerLineList[this.dragData.DragFromNum - 1].data.GetLastCard() != null &&
                        this.deckData.pokerLineList[this.dragData.DragFromNum - 1].data.GetLastCard().render != null &&
                        this.deckData.pokerLineList[this.dragData.DragFromNum - 1].data.GetLastCard().render.img != null &&
                        this.deckData.pokerLineList[this.dragData.DragFromNum - 1].data.GetLastCard().data.IsCardBack &&
                        this.deckData.pokerLineList[this.dragData.DragFromNum - 1].data.GetLastCard().data != null) {
                        GameMain.app.isNotDraging = true;
                        var rd = this.deckData.pokerLineList[this.dragData.DragFromNum - 1].data.GetLastCard().render;
                        var ifname = pokerRender.cardSkinName + pokerRender.GetImgFileName(this.deckData.pokerLineList[this.dragData.DragFromNum - 1].data.GetLastCard().data);
                        rd.img.skin = '';
                        rd.img.size(102, 152);
                        rd.shadowImg1.visible = false;
                        var x1;
                        var x2;
                        if (!x1) {
                            x1 = new Laya.Image();
                        }
                        if (!x2) {
                            x2 = new Laya.Image();
                        }
                        x1.size(rd.img.width, rd.img.height);
                        x2.size(rd.img.width, rd.img.height);
                        x1.skin = pokerRender.backSkinName;
                        x2.skin = ifname;
                        rd.img.addChild(x1);
                        rd.img.addChild(x2);
                        x1.scaleX = 1;
                        x2.scaleX = 0;
                        x1.anchorX = 0.5;
                        x2.anchorX = 0.5;
                        x1.pos(x1.width / 2, 0);
                        x2.pos(x2.width / 2, 0);
                        Laya.Tween.to(x1, { scaleX: 0 }, 150, Laya.Ease.linearIn, new Laya.Handler(this, function () {
                            Laya.Tween.to(x2, { scaleX: 1 }, 150, Laya.Ease.linearOut, new Laya.Handler(this, function () {
                                x1.removeSelf();
                                x2.removeSelf();
                                x1 = null;
                                x2 = null;
                                var newSkinName = ifname;
                                if (rd.img.skin != newSkinName) {
                                    rd.img.graphics.clear();
                                    rd.img.skin = ifname;
                                }
                                GameMain.app.isNotDraging = false;
                                rd.shadowImg1.visible = true;
                            }));
                        }));
                    }
                    this.PlayDragAutoMoveAni();
                    return;
                }
                else if (this.IsStartDragMoved) //拖动的时候
                 {
                    var messageID = this.rule.GetConnectErroMessage(checkGroup.data.GetLastCard(), this.dragData.DragingGroup.data.GetFirstCard());
                    GameGlobal.Dispatcher.GetInstance().brodcastEvent(GameGlobal.EVENT.ShowMessage, [messageID]);
                }
            }
            //都没有碰撞成功，那么返回来源的那个 牌组线
            this.dragData.DragToGroupType = this.dragData.DragFromGroupType;
            this.dragData.DragToNum = this.dragData.DragFromNum;
            if (this.IsStartDragMoved) {
                this.PlayDragAutoMoveAni();
            }
            else {
                this.connectDragGroup();
                // ////console.log('Flush5');
                this.Flush(this.dragData.DragToGroupType, this.dragData.DragToNum);
                this.CheckTutorialNext();
                //this.Flush(this.dragData.DragFromGroupType, this.dragData.DragFromNum);
                //抖动
                // var xxx = this.deckData.pokerLineList.slice(this.dragData.DragFromNum - 1, this.dragData.DragFromNum);
                // this.deckData.pokerLineList.splice(this.dragData.DragFromNum - 1, 1);
                // this.deckData.pokerLineList.push(xxx[0]);
                // ////console.log('xxxxxxxxxxxxx', this.deckData.pokerLineList[this.deckData.pokerLineList.length - 1][this.dragPokerGroupIndex]);		
                var spr = this.clickImg;
                // var spr = this.deckData.pokerLineList[this.deckData.pokerLineList.length - 1].data.pokerList[this.dragPokerGroupIndex].render.img;
                var oldX = spr.x;
                var maxI = 3;
                var deviations = [10, 7, 5];
                if (!this.isEabToDown) {
                    this.isEabToDown = true;
                    for (var i = 0; i < maxI; i++) {
                        var pluse = i % 2 == 0 ? -1 : 1;
                        var num = pluse * deviations[i];
                        var time = 40;
                        // ////console.log('oldX', oldX + num);
                        Laya.Tween.to(spr, { x: oldX + num }, time, Laya.Ease.linearIn, null, i * time, false);
                    }
                    Laya.Tween.to(spr, { x: oldX }, time, Laya.Ease.linearIn, new Laya.Handler(this, function () {
                    }), maxI * time, false);
                    Laya.timer.once(200, this, function () {
                        this.isEabToDown = false;
                    });
                    for (var indexx = 0; indexx < this.dragPokerGroup.length; indexx++) {
                        var spr = this.dragPokerGroup[indexx];
                        var oldX = spr.x;
                        var maxI = 3;
                        var deviations = [10, 7, 5];
                        for (var i = 0; i < maxI; i++) {
                            var pluse = i % 2 == 0 ? -1 : 1;
                            var num = pluse * deviations[i];
                            var time = 40;
                            Laya.Tween.to(spr, { x: oldX + num }, time, Laya.Ease.linearIn, null, i * time, false);
                        }
                        Laya.Tween.to(spr, { x: oldX }, time, Laya.Ease.linearIn, new Laya.Handler(this, function () {
                        }), maxI * time, false);
                    }
                }
                this.rstyYYYY();
            }
            return;
        };
        CardControls.prototype.upupup = function () {
            GameMain.app.upVoiceBool = false;
            GameMain.app.upVoiceCount = 0;
        };
        CardControls.prototype.dragDataBack = function () {
            this.dragData.DragFromDeckBackToFront = false;
            this.dragData.DragToGroupType = this.dragData.DragFromGroupType;
            this.dragData.DragToNum = this.dragData.DragFromNum;
            this.connectDragGroup();
            // ////console.log('Flush1');
            this.Flush(this.dragData.DragToGroupType, this.dragData.DragToNum);
            this.dragData.DragingGroup.FlushRender();
        };
        //拖动放手之后，播放移动的动画
        CardControls.prototype.PlayDragAutoMoveAni = function (cardStyle, backstep) {
            if (cardStyle === void 0) { cardStyle = 1; }
            if (backstep === void 0) { backstep = 0; }
            GameGlobal.Dispatcher.sendEvent(GameGlobal.EVENT.ClearTips);
            this.IsAutoMoving = true;
            // ////console.log('changettt1', this.dragData);
            // ////console.log('dragData', this.dragData.DragToGroupType, this.dragData.DragToNum);
            var checkGroup = this.deckData.GetDeck(this.dragData.DragToGroupType, this.dragData.DragToNum);
            var toSprRoot = checkGroup.render.parent;
            var targetPos = new Laya.Point(toSprRoot.x, toSprRoot.y);
            // ////console.log('changettt2', checkGroup);
            var posCard = checkGroup.data.GetLastCard();
            if (posCard != null) {
                var cardPos = new Laya.Point(0, 0);
                cardPos = new Laya.Point(posCard.render.img.x, posCard.render.img.y);
                targetPos.x += cardPos.x * toSprRoot.scaleX;
                targetPos.y += cardPos.y * toSprRoot.scaleY;
            }
            var xx = Laya.Ease.sineOut;
            if (this.dragData.DragToGroupType == pokerGame.pokerDeckType.Line) {
                if (checkGroup.data.pokerList.length != 0) {
                    if (backstep == 0) {
                        targetPos.y += poker.pokerGroupRender.lineHeightSpacing + 40;
                    }
                    else {
                        targetPos.y += poker.pokerGroupRender.lineHeightSpacing;
                    }
                }
            }
            else if (this.dragData.DragToGroupType == pokerGame.pokerDeckType.threeCardDeck) {
                if (checkGroup.data.pokerList.length != 0) {
                    targetPos.x += poker.pokerGroupRender.threeCardSpacing;
                    // ////console.log('距离2：', this.deckData.table.LineMove.x, this.deckData.table.LineMove.y, targetPos.x, targetPos.y);
                    xx = Laya.Ease.linearOut;
                }
            }
            var aniDruation = CardSpeedSetting.speed0;
            if (this.dragData.DragToGroupType == pokerGame.pokerDeckType.threeCardDeck) {
                // ////console.log('????????xczczxczxc');
                // aniDruation = 1100;
            }
            else if (this.IsAutoBacking) {
                aniDruation = CardSpeedSetting.speed4;
            }
            var isFanPai = false;
            if (cardStyle == 0) {
                aniDruation = CardSpeedSetting.speed3;
            }
            else if (cardStyle == 1) {
                aniDruation = CardSpeedSetting.speed1;
            }
            else if (cardStyle == 2) {
                aniDruation = CardSpeedSetting.speed2;
                // ////console.log('222222222222222222222222222222');
            }
            else if (cardStyle == 3) {
                //翻牌动画结束
                isFanPai = true;
                aniDruation = CardSpeedSetting.speed5;
            }
            Laya.Tween.clearAll(this.deckData.table.LineMove);
            var yumao = 0;
            if (targetPos.x == -48 && targetPos.y == -141) {
                yumao = 1;
            }
            else if (targetPos.x == 56 && targetPos.y == -141) {
                yumao = 2;
            }
            else if (targetPos.x == 160 && targetPos.y == -141) {
                yumao = 3;
            }
            else if (targetPos.x == 264 && targetPos.y == -141) {
                yumao = 4;
            }
            // Laya.stage.mouseEnabled = false;
            Laya.Tween.to(this.deckData.table.LineMove, { x: targetPos.x, y: targetPos.y }, aniDruation, xx, Laya.Handler.create(this, this.PlayDragAutoMoveAniEnd, [0, yumao, isFanPai]), 0);
        };
        //拖动动画结束
        CardControls.prototype.PlayDragAutoMoveAniEnd = function (type, yumao, isFanPai) {
            if (type === void 0) { type = 0; }
            if (yumao === void 0) { yumao = 0; }
            if (isFanPai === void 0) { isFanPai = false; }
            // Laya.stage.mouseEnabled = true;
            if (yumao != 0) {
                GameGlobal.Dispatcher.GetInstance().brodcastEvent(GameGlobal.EVENT.onMoveFourAni, [yumao]);
            }
            if (this.dragData.moveType == pokerGame.MovingType.backStep) {
                // ////console.log('xxyy1');
                this.dragData.SetDragDataBackToFromDeck(this.deckData);
                var backstep = this.deckData.BackStep();
                if (backstep != null) {
                    // ////console.log('FlushClickEvent2');
                    this.FlushClickEvent(backstep.fromDeckType, backstep.fromDeckNum);
                    this.FlushClickEvent(backstep.addToDeckType, backstep.addToDeckNum);
                }
                pokerGame.SoundPlayer.PlaySound(0);
                this.dragData.DragingGroup.FlushRender();
            }
            else if (this.dragData.DragToGroupType == pokerGame.pokerDeckType.threeCardDeck) {
                // ////console.log('xxyy2', this.dragData);
                this.checkRecord();
                this.deckData.ThreeCard.render.AddPokerList(this.dragData.DragingGroup.data);
                this.deckData.ThreeCard.data.Concat(this.dragData.DragingGroup.data);
                this.deckData.ThreeCard.render.SortAndMoveToPos();
                this.FlushThreeCardClick();
                // ////console.log('Flush2');
                this.Flush(this.dragData.DragFromGroupType, this.dragData.DragFromNum);
                this.CheckTutorialNext();
                // pokerGame.SoundPlayer.PlaySound(0);
                pokerGame.SoundPlayer.PlaySound(GameMain.app.getRandom(5, 6));
            }
            else {
                this.checkRecord();
                this.connectDragGroup();
                // ////console.log('Flush3');
                // ////console.log('卡牌卡牌', this.dragData);
                this.Flush(this.dragData.DragToGroupType, this.dragData.DragToNum);
                this.Flush(this.dragData.DragFromGroupType, this.dragData.DragFromNum);
                if (this.dragData.moveType == pokerGame.MovingType.showHiddenCard) {
                    // ////console.log('xxyy3');
                    this.ShowOneLineHiddenCard();
                }
                else if (this.dragData.moveType == pokerGame.MovingType.autoBackToDeck) {
                    // ////console.log('xxyy4');
                    if (this.IsAutoBacking && !this.IsHaveHiddenCard()) {
                        this.AutoBack();
                        // ////console.log('xxyy2004');
                    }
                }
                // ////console.log('xxyy5', this.IsTutorialStarted);
                this.CheckWin();
                if (this.IsTutorialStarted) {
                    this.CheckTutorialNext();
                }
                // if (!GameMain.app.ismingpai) {
                this.CheckAutoPlay(); //检测是否需要激活自动
                // }
                pokerGame.SoundPlayer.PlaySound(0);
            }
            this.IsAutoMoving = false;
            this.dragData.DragFromDeckBackToFront = false;
            if (isFanPai) {
                Laya.timer.once(500, this, this.AutoBack, [2]);
            }
            this.rstyYYYY();
        };
        CardControls.prototype.rstyYYYY = function () {
            if (pokerRender.rsty == 1 && (this.dragData.DragToGroupType == pokerGame.pokerDeckType.Line || this.dragData.DragToGroupType == pokerGame.pokerDeckType.Deck)) {
                // ////console.log('rsty2', this.dragData.DragToNum);
                if (this.dragData.DragToGroupType == pokerGame.pokerDeckType.Line) {
                    if (this.dragData.DragFromGroupType == pokerGame.pokerDeckType.Line) {
                        if (GameMain.app.isBackToFront) {
                            GameGlobal.Dispatcher.GetInstance().brodcastEvent(GameGlobal.EVENT.onChangeLastCard, [0, this.dragData.DragFromNum]);
                        }
                        else {
                            if (this.deckData.pokerLineList[this.dragData.DragFromNum - 1] != null && this.deckData.pokerLineList[this.dragData.DragFromNum - 1].data != null && this.deckData.pokerLineList[this.dragData.DragFromNum - 1].data.pokerList[this.deckData.pokerLineList[this.dragData.DragFromNum - 1].data.pokerList.length - 1] != null && !this.deckData.pokerLineList[this.dragData.DragFromNum - 1].data.pokerList[this.deckData.pokerLineList[this.dragData.DragFromNum - 1].data.pokerList.length - 1].data.IsCardBack &&
                                this.deckData.pokerLineList[this.dragData.DragFromNum - 1].data.pokerList[this.deckData.pokerLineList[this.dragData.DragFromNum - 1].data.pokerList.length - 2] != null &&
                                !this.deckData.pokerLineList[this.dragData.DragFromNum - 1].data.pokerList[this.deckData.pokerLineList[this.dragData.DragFromNum - 1].data.pokerList.length - 2].data.IsCardBack) {
                                GameGlobal.Dispatcher.GetInstance().brodcastEvent(GameGlobal.EVENT.onChangeLastCard, [0, this.dragData.DragFromNum]);
                            }
                        }
                        GameGlobal.Dispatcher.GetInstance().brodcastEvent(GameGlobal.EVENT.onChangeLastCard, [0, this.dragData.DragToNum]);
                    }
                    else if (this.dragData.DragFromGroupType == pokerGame.pokerDeckType.startDeck) {
                        GameGlobal.Dispatcher.GetInstance().brodcastEvent(GameGlobal.EVENT.onChangeLastCard, [0, this.dragData.DragToNum]);
                    }
                    else if (this.dragData.DragFromGroupType == pokerGame.pokerDeckType.threeCardDeck) {
                        GameGlobal.Dispatcher.GetInstance().brodcastEvent(GameGlobal.EVENT.onChangeLastCard, [0, this.dragData.DragToNum]);
                    }
                    else if (this.dragData.DragFromGroupType == pokerGame.pokerDeckType.Deck) {
                        GameGlobal.Dispatcher.GetInstance().brodcastEvent(GameGlobal.EVENT.onChangeLastCard, [0, this.dragData.DragToNum]);
                    }
                }
                else if (this.dragData.DragToGroupType == pokerGame.pokerDeckType.Deck) {
                    if (this.dragData.DragFromGroupType == pokerGame.pokerDeckType.Line) {
                        if (GameMain.app.isBackToFront) {
                            GameGlobal.Dispatcher.GetInstance().brodcastEvent(GameGlobal.EVENT.onChangeLastCard, [0, this.dragData.DragFromNum]);
                        }
                        else {
                            if (this.deckData.pokerLineList[this.dragData.DragFromNum - 1] != null && this.deckData.pokerLineList[this.dragData.DragFromNum - 1].data != null && this.deckData.pokerLineList[this.dragData.DragFromNum - 1].data.pokerList[this.deckData.pokerLineList[this.dragData.DragFromNum - 1].data.pokerList.length - 1] != null && !this.deckData.pokerLineList[this.dragData.DragFromNum - 1].data.pokerList[this.deckData.pokerLineList[this.dragData.DragFromNum - 1].data.pokerList.length - 1].data.IsCardBack &&
                                this.deckData.pokerLineList[this.dragData.DragFromNum - 1].data.pokerList[this.deckData.pokerLineList[this.dragData.DragFromNum - 1].data.pokerList.length - 2] != null &&
                                !this.deckData.pokerLineList[this.dragData.DragFromNum - 1].data.pokerList[this.deckData.pokerLineList[this.dragData.DragFromNum - 1].data.pokerList.length - 2].data.IsCardBack) {
                                GameGlobal.Dispatcher.GetInstance().brodcastEvent(GameGlobal.EVENT.onChangeLastCard, [0, this.dragData.DragFromNum]);
                            }
                        }
                    }
                    else if (this.dragData.DragFromGroupType == pokerGame.pokerDeckType.startDeck) {
                        // GameGlobal.Dispatcher.GetInstance().brodcastEvent(GameGlobal.EVENT.onChangeLastCard, [0, this.dragData.DragToNum]);
                    }
                    else if (this.dragData.DragFromGroupType == pokerGame.pokerDeckType.threeCardDeck) {
                        // GameGlobal.Dispatcher.GetInstance().brodcastEvent(GameGlobal.EVENT.onChangeLastCard, [0, this.dragData.DragToNum]);
                    }
                }
            }
        };
        CardControls.prototype.CheckTutorialFlush = function () {
            if (this.IsTutorialStarted) {
                GameGlobal.Dispatcher.GetInstance().brodcastEvent(GameGlobal.EVENT.FlushTutorialRender);
            }
        };
        CardControls.prototype.CheckTutorialNext = function () {
            if (this.IsTutorialStarted) {
                GameGlobal.Dispatcher.GetInstance().brodcastEvent(GameGlobal.EVENT.CheckNextTutorial);
            }
        };
        //检测是否需要弹出自动窗口
        CardControls.prototype.CheckAutoPlay = function () {
            if (!this.IsAutoBacking) {
                // ////console.log('atnantantnant');
                if (!this.IsHaveHiddenCard()) {
                    GameGlobal.Dispatcher.sendEvent(GameGlobal.EVENT.CheckAutoPlay);
                }
            }
        };
        CardControls.prototype.CheckWin = function () {
            if (this.IsGameEnd) {
                return;
            }
            for (var i = 0; i < this.deckData.pokerDeckList.length; i++) {
                var deck = this.deckData.pokerDeckList[i];
                if (deck.data.pokerList.length != 13) {
                    return;
                }
            }
            //----已完成---
            GameGlobal.Dispatcher.GetInstance().brodcastEvent(GameGlobal.EVENT.onGameWin);
            this.IsGameEnd = true; //游戏结束
        };
        CardControls.prototype.checkRecord = function () {
            if (this.dragData.IsNeedAddToStepRecord) {
                var checkGroup = this.deckData.GetDeck(this.dragData.DragToGroupType, this.dragData.DragToNum);
                this.deckData.AddStep(this.dragData.DragToGroupType, this.dragData.DragToNum, checkGroup.data.pokerList.length, this.dragData.DragFromGroupType, this.dragData.DragFromNum, this.dragData.DragFromDeckBackToFront);
            }
        };
        //动画播放完毕之后 处理拖动的组
        CardControls.prototype.connectDragGroup = function () {
            // ////console.log('111deal');
            var checkGroup = this.deckData.GetDeck(this.dragData.DragToGroupType, this.dragData.DragToNum);
            this.ConcatDragsToGroup(checkGroup, this.dragData.DragingGroup);
            //this.dragData.DragingGroup = null;
        };
        CardControls.prototype.ConcatDragsToGroup = function (toGroup, dragGroup) {
            // ////console.log('this.deckData.table.LineMove1', dragGroup.data);
            toGroup.data.Concat(dragGroup.data.SplitePokerGroup(0));
            // ////console.log('this.deckData.table.LineMove2', toGroup.data);
            toGroup.FlushRender();
            dragGroup.FlushRender();
        };
        CardControls.prototype.EndTutorial = function () {
            this.IsTutorialStarted = false;
        };
        //发新手指引牌
        CardControls.prototype.DearTutorialCard = function () {
            this.ResetPlayData();
            var cardList = this.deckData.DearTutorialCard();
            this.IsTutorialStarted = true;
            for (var i = 0; i < cardList.length; i++) {
                //创建扑克渲染器
                var spr = new Laya.Sprite();
                spr.scaleX = this.deckData.table.LineMove.scaleX;
                spr.scaleY = this.deckData.table.LineMove.scaleY;
                var sprRoot = this.deckData.table.LineMove.parent;
                var startRoot = this.deckData.table.StartCard;
                sprRoot.addChild(spr);
                var render = new poker.pokerGroupRender(poker.PokerGroupRenderMode.lastOneCard);
                cardList[i].SetAllCardToBack();
                render.FlushPokerList(cardList[i], false);
                spr.addChild(render);
                spr.pos(startRoot.x, startRoot.y);
                spr.visible = false;
                Laya.Tween.clearAll(spr);
                var lineRoot = this.deckData.GetDeckSpriteRoot(pokerGame.pokerDeckType.Line, i + 1);
                var delaytime = i * 70;
                Laya.Tween.from(spr, {}, 0, null, Laya.Handler.create(this, this.SetDearCardRootVisible, [spr]), delaytime);
                Laya.Tween.to(spr, { x: lineRoot.x, y: lineRoot.y }, 250, Laya.Ease.sineOut, Laya.Handler.create(this, this.PlayDearCardAutoMoveAniEnd, [i]), delaytime);
                //tw.update=Laya.Handler.create(this,this.PlayDearCardAutoMoveAniEnd,[i]);
            }
            this.IsAutoMoving = true;
        };
        //发牌
        CardControls.prototype.DearCard = function (isReTry) {
            this.ResetPlayData();
            var cardList;
            var fourDeck;
            GameGlobal.Dispatcher.sendEvent(GameGlobal.EVENT.onMingPaiTaiJi, [false]);
            if (ShopSetting.powerStyle == 2 && !isReTry) {
                if (ShopSetting.nowPpower > 0) {
                    ShopSetting.nowPpower -= 1;
                    GameMain.app.mWX.startCutDown(true);
                    ShopSetting.powerConsumeTime = Math.floor(new Date().getTime() / 1000);
                    GameMain.app.mWX.setUserValue('resume_physical_power_time', ShopSetting.powerConsumeTime + '');
                    GameMain.app.mWX.setUserValue('now_physical_power', ShopSetting.nowPpower + '');
                }
            }
            if (GameMain.app.isXinShow) {
                this.IsTutorialStarted = true;
            }
            var isOddNum = 0;
            if (GameMain.app.mWX.isAbTest) {
                // if (GameMain.app.mWX.mUID % 2 == 0) {
                isOddNum = 1; //偶数，关卡
                // } else {
                // 	isOddNum = 2; //奇数，自由
                // }
            }
            else {
                isOddNum = 3;
            }
            // ////console.log('GameMain.app.mWX.mUID1', GameMain.app.mWX.mUID, isOddNum, isReTry);
            if (GameMain.app.levelnum != 0 && GameMain.app.cutlevel <= GameMain.app.levelnum && !GameMain.app.isOpenFreeModel && isOddNum != 3 && isOddNum != 2) {
                if (isReTry) {
                    Laya.timer.once(1000, this, function () {
                        GameGlobal.Dispatcher.GetInstance().brodcastEvent(GameGlobal.EVENT.onClickShowPopup, [2]);
                    });
                    GameMain.app.isLevelGame = 1;
                    // cardList = this.deckData.RestartDearCard()
                    if (!GameMain.app.isOpenFreeModel) {
                        if (GameMain.app.mingpainum <= GameMain.app.mWX.passTheLevelNum) {
                            GameMain.app.mingpainum = GameMain.app.mingpainum + 1;
                        }
                        else {
                            GameGlobal.Dispatcher.sendEvent(GameGlobal.EVENT.onMingPaiTaiJi, [true]);
                        }
                    }
                    cardList = this.deckData.DearLevelCard();
                    if (GameMain.app.isSpecialModel) {
                        fourDeck = this.deckData.DearFourDeck();
                    }
                }
                else {
                    GameMain.app.isLevelGame = 2;
                    cardList = this.deckData.DearLevelCard();
                    if (GameMain.app.isSpecialModel) {
                        fourDeck = this.deckData.DearFourDeck();
                    }
                }
            }
            else {
                GameMain.app.isSpecialModel = false;
                GameMain.app.isLevelGame = 0;
                // ////console.log('GameMain.app.mWX.mUID2:', cardList, GameMain.app.isSpecialModel);
                cardList = isReTry ? this.deckData.RestartDearCard() : this.deckData.DearCard();
            }
            for (var i = 0; i < cardList.length; i++) {
                //创建扑克渲染器
                var spr = new Laya.Sprite();
                spr.scaleX = this.deckData.table.LineMove.scaleX;
                spr.scaleY = this.deckData.table.LineMove.scaleY;
                var sprRoot = this.deckData.table.LineMove.parent;
                var startRoot = this.deckData.table.StartCard;
                sprRoot.addChild(spr);
                var render = new poker.pokerGroupRender(poker.PokerGroupRenderMode.lastOneCard);
                cardList[i].SetAllCardToBack();
                render.FlushPokerList(cardList[i], false);
                spr.addChild(render);
                spr.pos(startRoot.x, startRoot.y);
                spr.visible = false;
                Laya.Tween.clearAll(spr);
                var lineRoot = this.deckData.GetDeckSpriteRoot(pokerGame.pokerDeckType.Line, i + 1);
                var delaytime = i * 70;
                Laya.Tween.from(spr, {}, 0, null, Laya.Handler.create(this, this.SetDearCardRootVisible, [spr]), delaytime);
                Laya.Tween.to(spr, { x: lineRoot.x, y: lineRoot.y }, CardSpeedSetting.speed10, Laya.Ease.sineOut, Laya.Handler.create(this, this.PlayDearCardAutoMoveAniEnd, [i]), delaytime);
            }
            if (GameMain.app.isSpecialModel) {
                for (var j = 0; j < 4; j++) {
                    this.deckData.connectDearCardArrayToRender2(j, null);
                }
            }
            this.IsAutoMoving = true;
        };
        CardControls.prototype.SetDearCardRootVisible = function (spr) {
            spr.visible = true;
        };
        //发牌动画结束
        CardControls.prototype.PlayDearCardAutoMoveAniEnd = function (index) {
            if (index == 6) {
                this.deckData.connectDearCardArrayToRender(index, new Laya.Handler(this, this.CheckTutorialNext));
                this.IsAutoMoving = false;
                this.FlushAllClickEvent();
            }
            else {
                this.deckData.connectDearCardArrayToRender(index, null);
                this.FlushAllClickEvent();
            }
            // Laya.timer.once(1000, this, function () {
            // 	GameGlobal.Dispatcher.GetInstance().brodcastEvent(GameGlobal.EVENT.onChangeLastCard);
            // })
        };
        CardControls.prototype.GetCardBound = function (cardImg) {
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
            return rect1;
        };
        CardControls.prototype.CheckCollision = function (group1, group2) {
            if (group1.render.collisionImage == null || group2.render.collisionImage == null) {
                return false;
            }
            var img1 = group1.render.collisionImage;
            var img2 = group2.render.collisionImage;
            var rect1 = this.GetCardBound(img1);
            var rect2 = this.GetCardBound(img2);
            var tRet = rect1.intersects(rect2);
            var IsNeedShowCollision = false;
            if (IsNeedShowCollision && !tRet) {
                //画矩形
                var sp = new Laya.Sprite();
                sp.graphics.drawRect(rect1.x, rect1.y, rect1.width, rect1.height, "#ffff00");
                sp.graphics.drawRect(rect2.x, rect2.y, rect2.width, rect2.height, "#ffff00");
                img2.parent.parent.parent.parent.addChild(sp);
                this.CollisionArrList.push(sp);
            }
            //console.debug( (tRet?"true":"false")+  " rect1="+rect1.toString()+"rect2="+rect2.toString());
            return tRet;
        };
        //刷新三卡堆的render
        CardControls.prototype.FlushThreeCardRender = function () {
            this.deckData.ThreeCard.data.SetLastThreeCardToFrontIfNot();
            this.deckData.ThreeCard.FlushRender();
        };
        //刷新三卡堆的event
        CardControls.prototype.FlushThreeCardClick = function () {
            for (var i = 0; i < this.deckData.ThreeCard.data.pokerList.length; i++) {
                var poker2 = this.deckData.ThreeCard.data.pokerList[i];
                poker2.render.img.offAll();
            }
            //最后一张卡
            var lastCard = this.deckData.ThreeCard.data.GetLastCard();
            if (lastCard != null) {
                var lastCardIndex = this.deckData.ThreeCard.data.GetLastCardIndex();
                // ////console.log('onMounseDown1');
                lastCard.render.img.on(Laya.Event.MOUSE_DOWN, this, this.onMounseDown, [this.deckData.ThreeCard, pokerGame.pokerDeckType.threeCardDeck, -1, lastCardIndex]);
            }
        };
        //刷新起始堆的显示
        CardControls.prototype.FlushStartRender = function () {
            this.deckData.SetAllStartCardToBack();
            this.deckData.StartCard.FlushRender();
        };
        //刷新起始堆的点击事件
        CardControls.prototype.FlushStartClick = function () {
            for (var i = 0; i < this.deckData.StartCard.render.numChildren; i++) {
                var poker = this.deckData.StartCard.render.getChildAt(i);
                poker.offAll();
                poker.on(Laya.Event.MOUSE_DOWN, this, this.ClickStartDeck);
            }
        };
        CardControls.prototype.FlushAllClickEvent = function () {
            // ////console.log('FlushLineClick2');
            for (var i = 0; i < 7; i++) {
                this.FlushLineClick(i);
            }
            this.FlushClickEvent(pokerGame.pokerDeckType.startDeck, 0);
            for (var i = 0; i < 4; i++) {
                this.FlushFourDackClick(i);
            }
        };
        CardControls.prototype.FlushDeckRender = function (deckIndex) {
            var deckGroup = this.deckData.pokerDeckList[deckIndex];
            if (deckGroup == null) {
                return;
            }
            deckGroup.FlushRender();
        };
        CardControls.prototype.FlushDeckClick = function (deckIndex) {
            var deckGroup = this.deckData.pokerDeckList[deckIndex];
            if (deckGroup == null) {
                return;
            }
            if (deckGroup.data.pokerList.length == 0) {
                return;
            }
            var lastIndex = deckGroup.data.pokerList.length - 1;
            for (var i = 0; i < deckGroup.data.pokerList.length; i++) {
                var poker = deckGroup.data.pokerList[i];
                //poker.render.img.offAll();
                if (i == lastIndex) {
                    // ////console.log('onMounseDown2');
                    poker.render.img.on(Laya.Event.MOUSE_DOWN, this, this.onMounseDown, [deckGroup, pokerGame.pokerDeckType.Deck, deckIndex + 1, i]);
                }
                else {
                    poker.render.img.offAll();
                }
            }
        };
        //刷新线的render
        CardControls.prototype.FlushLineRender = function (LineIndex) {
            this.FlushLineBack(LineIndex);
        };
        //线上的  最后一张牌 如果是卡背就翻过来
        CardControls.prototype.FlushLineBack = function (LineIndex) {
            if (LineIndex < 0) {
                return;
            }
            var lineGroup = this.deckData.pokerLineList[LineIndex];
            lineGroup.data.SetLastCardFrontIfNot();
            lineGroup.FlushRender();
        };
        //刷新线牌组的点击事件
        CardControls.prototype.FlushLineClick = function (LineIndex) {
            if (LineIndex < 0) {
                return;
            }
            var lineGroup = this.deckData.pokerLineList[LineIndex];
            for (var i = 0; i < lineGroup.data.pokerList.length; i++) {
                var poker = lineGroup.data.pokerList[i];
                poker.render.img.offAll();
                if (poker.data.IsCardBack) {
                    continue;
                }
                // ////console.log('onMounseDown3');
                poker.render.img.on(Laya.Event.MOUSE_DOWN, this, this.onMounseDown, [lineGroup, pokerGame.pokerDeckType.Line, LineIndex + 1, i]);
                // console.debug("AddLineClick=onMounseDown=" + (LineIndex + 1) + "index=" + i + "length=" + lineGroup.data.pokerList.length);
            }
        };
        CardControls.prototype.FlushFourDackClick = function (index) {
            if (index < 0) {
                return;
            }
            var lineGroup = this.deckData.pokerDeckList[index];
            for (var i = 0; i < lineGroup.data.pokerList.length; i++) {
                var poker = lineGroup.data.pokerList[i];
                poker.render.img.offAll();
                if (poker.data.IsCardBack) {
                    continue;
                }
                // ////console.log('onMounseDown3');
                poker.render.img.on(Laya.Event.MOUSE_DOWN, this, this.onMounseDown, [lineGroup, pokerGame.pokerDeckType.Deck, index + 1, i]);
            }
        };
        return CardControls;
    }());
    pokerGame.CardControls = CardControls;
})(pokerGame || (pokerGame = {}));
//# sourceMappingURL=CardControls.js.map