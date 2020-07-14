/**
* 牌桌界面
*/
var pokerUI;
(function (pokerUI) {
    var DearCardType;
    (function (DearCardType) {
        DearCardType[DearCardType["normal"] = 0] = "normal";
        DearCardType[DearCardType["tutorial"] = 1] = "tutorial";
        DearCardType[DearCardType["retry"] = 2] = "retry";
        DearCardType[DearCardType["protect"] = 3] = "protect";
    })(DearCardType = pokerUI.DearCardType || (pokerUI.DearCardType = {}));
    var pokerTable = /** @class */ (function () {
        function pokerTable() {
            this.LineDeckList = new Array();
            this.ADeckList = new Array();
            this.IsLeftMode = false;
            this.LineMaxX = 0; //桌面中的牌堆中的最大的那个X, 左右置换的时候计算用
            this.LineMinX = 0; //桌面中的牌堆中的最小的那个X, 左右置换的时候计算用
            this.StartDeckMaxX = 0; //桌面中的牌堆中的最大的那个X, 左右置换的时候计算用
            this.StartDeckMinX = 0; //桌面中的牌堆中的最小的那个X, 左右置换的时候计算用
            this.ThreecardPosPluse = 0;
            this.IsTutorialStart = false; //是否为新手指引
            var a = 'a';
            if (a == 'a')
                a = 'a';
            this.InitTable();
        }
        pokerTable.prototype.InitTable = function () {
            //加载图集资源，加载成功后添加到舞台
            Laya.loader.load([{ url: "res/atlas/UI.atlas", type: Laya.Loader.ATLAS }], Laya.Handler.create(this, this.onPokerTableUILoaded));
            this.messageConfig = new gameconfig.messageConfig();
            this.messageConfig.StartLoad(null);
            GameGlobal.Dispatcher.addEvent(GameGlobal.EVENT.onALLTableUILoadedDone, this, this.onALLTableUILoadedDone);
        };
        pokerTable.prototype.SetLeftMode = function (isLeftMode) {
            if (this.IsLeftMode != isLeftMode) {
                this.IsLeftMode = isLeftMode;
                this.FlushTablePos();
            }
        };
        pokerTable.prototype.FlushTablePos = function () {
            this.SetPos(this.pokerTableUI.Deck1, this.ADeckList[0], false);
            this.SetPos(this.pokerTableUI.Deck2, this.ADeckList[1], false);
            this.SetPos(this.pokerTableUI.Deck3, this.ADeckList[2], false);
            this.SetPos(this.pokerTableUI.Deck4, this.ADeckList[3], false);
            this.SetPos(this.pokerTableUI.ThreeCard, this.threeCardDeckPos, false);
            this.SetPos(this.pokerTableUI.StartCard, this.startCardDeckPos, false);
            this.SetPos(this.pokerTableUI.Line1, this.LineDeckList[0], true);
            this.SetPos(this.pokerTableUI.Line2, this.LineDeckList[1], true);
            this.SetPos(this.pokerTableUI.Line3, this.LineDeckList[2], true);
            this.SetPos(this.pokerTableUI.Line4, this.LineDeckList[3], true);
            this.SetPos(this.pokerTableUI.Line5, this.LineDeckList[4], true);
            this.SetPos(this.pokerTableUI.Line6, this.LineDeckList[5], true);
            this.SetPos(this.pokerTableUI.Line7, this.LineDeckList[6], true);
            if (this.IsLeftMode) {
                this.pokerTableUI.ThreeCard.x = this.pokerTableUI.StartCard.x + this.ThreecardPosPluse;
            }
        };
        pokerTable.prototype.SetPos = function (node, pos, IsLine) {
            var tRet = new Laya.Point(pos.x, pos.y);
            if (this.IsLeftMode) {
                if (IsLine) {
                    tRet.x = this.LineMaxX - tRet.x + this.LineMinX;
                }
                else {
                    tRet.x = this.StartDeckMaxX - tRet.x + this.StartDeckMinX;
                }
            }
            node.pos(tRet.x, tRet.y);
            return tRet;
        };
        //注册位置
        pokerTable.prototype.initDeckPos = function () {
            this.ADeckList.push(new Laya.Point(this.pokerTableUI.Deck1.x, this.pokerTableUI.Deck1.y));
            this.ADeckList.push(new Laya.Point(this.pokerTableUI.Deck2.x, this.pokerTableUI.Deck2.y));
            this.ADeckList.push(new Laya.Point(this.pokerTableUI.Deck3.x, this.pokerTableUI.Deck3.y));
            this.ADeckList.push(new Laya.Point(this.pokerTableUI.Deck4.x, this.pokerTableUI.Deck4.y));
            this.LineDeckList.push(new Laya.Point(this.pokerTableUI.Line1.x, this.pokerTableUI.Line1.y));
            this.LineDeckList.push(new Laya.Point(this.pokerTableUI.Line2.x, this.pokerTableUI.Line2.y));
            this.LineDeckList.push(new Laya.Point(this.pokerTableUI.Line3.x, this.pokerTableUI.Line3.y));
            this.LineDeckList.push(new Laya.Point(this.pokerTableUI.Line4.x, this.pokerTableUI.Line4.y));
            this.LineDeckList.push(new Laya.Point(this.pokerTableUI.Line5.x, this.pokerTableUI.Line5.y));
            this.LineDeckList.push(new Laya.Point(this.pokerTableUI.Line6.x, this.pokerTableUI.Line6.y));
            this.LineDeckList.push(new Laya.Point(this.pokerTableUI.Line7.x, this.pokerTableUI.Line7.y));
            this.LineMaxX = this.pokerTableUI.Line7.x;
            this.LineMinX = this.pokerTableUI.Line1.x;
            this.threeCardDeckPos = new Laya.Point(this.pokerTableUI.ThreeCard.x, this.pokerTableUI.ThreeCard.y);
            this.startCardDeckPos = new Laya.Point(this.pokerTableUI.StartCard.x, this.pokerTableUI.StartCard.y);
            this.StartDeckMaxX = this.pokerTableUI.StartCard.x;
            this.StartDeckMinX = this.pokerTableUI.Deck1.x;
            this.ThreecardPosPluse = this.pokerTableUI.ThreeCard.x - this.pokerTableUI.Deck4.x;
            //this.pokerTableUI.tutorialCardSpr
            this.pokerTableUI.tutorialMask.visible = false;
            this.pokerTableUI.BackGround.y = Laya.stage.height;
        };
        pokerTable.prototype.SetTutorialMaskClickToCloseTutorial = function (isON) {
            if (isON) {
                // this.pokerTableUI.tutorialMask.on(Laya.Event.CLICK, this, this.CloseTutorial);
                this.CloseTutorial();
            }
            else {
                this.pokerTableUI.tutorialMask.offAll();
            }
        };
        pokerTable.prototype.CloseTutorial = function () {
            GameGlobal.Dispatcher.GetInstance().brodcastEvent(GameGlobal.EVENT.EndTutorial);
            this.pokerTableUI.tutorialMask.offAll();
        };
        pokerTable.prototype.SetTutorialMaskVisible = function (visible, alpha) {
            if (alpha === void 0) { alpha = 0.5; }
            this.pokerTableUI.tutorialMask.visible = visible;
            this.pokerTableUI.tutorialMask.alpha = alpha;
        };
        pokerTable.prototype.SetCardRenderToTutorialSpriteRoot = function (cardRender, RootNum) {
            var parentRoot = cardRender.parent.parent;
            var parentPos = new Laya.Point(parentRoot.x, parentRoot.y);
            var pos = new Laya.Point(cardRender.x, cardRender.y);
            cardRender.removeSelf();
            if (RootNum == 1) {
                this.pokerTableUI.tutorialCardSpr1.addChild(cardRender);
                var parspr1 = this.pokerTableUI.tutorialCardSpr1.parent;
                parspr1.pos(parentPos.x, parentPos.y);
            }
            else if (RootNum == 2) {
                this.pokerTableUI.tutorialCardSpr2.addChild(cardRender);
                var parspr2 = this.pokerTableUI.tutorialCardSpr2.parent;
                parspr2.pos(parentPos.x, parentPos.y);
            }
            cardRender.pos(pos.x, pos.y);
            //this.pokerTableUI.tutorialCardSpr.pos(parentPos,parentPos);
        };
        //桌面所有UI加载完毕时回调（包括桌面上半部分跟下半部分的操作UI）
        pokerTable.prototype.onALLTableUILoadedDone = function () {
            this.pokerGroup.AddToTable(this.pokerTableUI, this.tableTopUI.gameTopUI, this.tableBottomUI.gameBottom);
        };
        pokerTable.prototype.onPokerTableUILoaded = function () {
            if (this.pokerTableUI == null) {
                this.pokerTableUI = new ui.poker.pokerTableUI();
                Laya.stage.addChild(this.pokerTableUI);
                this.pokerTableUI.visible = false;
                this.initDeckPos();
                this.pokerTableUI.mingpai.visible = false;
            }
            if (this.pokerGroup == null) {
                this.pokerGroup = new pokerGame.pokerTableData();
            }
            GameGlobal.Dispatcher.sendEvent(GameGlobal.EVENT.onTableUILoadedDone);
        };
        pokerTable.prototype.MingPaiTaiJi = function (bool) {
            this.pokerTableUI.mingpai.visible = bool;
            if (bool) {
                this.taijiRotate();
                this.pokerTableUI.mingpai.on(Laya.Event.CLICK, this, this.onClickTaiJi);
            }
            else {
                Laya.Tween.clearAll(this.pokerTableUI.taiji);
                this.pokerTableUI.mingpai.off(Laya.Event.CLICK, this, this.onClickTaiJi);
            }
        };
        pokerTable.prototype.onClickTaiJi = function () {
            if (GameMain.app.mWX.isPassTheLevelType == 1) {
                GameGlobal.Dispatcher.sendEvent(GameGlobal.EVENT.onMingPaiTaiJi, [false]);
                // GameMain.app.ismingpai = true;
                GameGlobal.Dispatcher.sendEvent(GameGlobal.EVENT.ShowHiddenCard);
            }
            else if (GameMain.app.mWX.isPassTheLevelType == 2) {
                GameGlobal.Dispatcher.sendEvent(GameGlobal.EVENT.onMingPaiTaiJi, [false]);
                GameGlobal.Dispatcher.sendEvent(GameGlobal.EVENT.ShowHiddenCard);
            }
            else if (GameMain.app.mWX.isPassTheLevelType == 3) {
                GameMain.app.mShares++;
                GameMain.shareIndex = 10;
                GameMain.app.mShareCurrentTime = GameMain.app.getCurrTime();
                var shareTitle = "这局太难了，听说只有1%完成了。";
                var shareImg = "login/share.jpg";
                var surl = "3";
                if (GameMain.app.mWX.shareUrl.length > 0) {
                    shareTitle = GameMain.app.mWX.shareUrl[0]["title"];
                    shareImg = GameMain.app.mWX.shareUrl[0]["url"];
                    // surl = GameMain.app.mWX.shareUrl[0]["id"];
                }
                wx.shareAppMessage({
                    title: shareTitle,
                    imageUrl: shareImg,
                });
            }
            else {
                GameGlobal.Dispatcher.sendEvent(GameGlobal.EVENT.onMingPaiTaiJi, [false]);
                GameGlobal.Dispatcher.sendEvent(GameGlobal.EVENT.ShowHiddenCard);
            }
        };
        //太极旋转
        pokerTable.prototype.taijiRotate = function (rot) {
            if (rot === void 0) { rot = 0; }
            this.pokerTableUI.taiji.rotation = rot;
            Laya.Tween.to(this.pokerTableUI.taiji, {
                rotation: 360 + rot
            }, 5000, null, Laya.Handler.create(this, function (rot) {
                this.taijiRotate(rot);
            }, [rot]));
        };
        //点击规则，临时切换到新手指引的时候  保留原有卡牌  切换到新的牌组
        pokerTable.prototype.ChangeToNewPokerGroupAndKeepOld = function () {
            if (this.pokerGroupKeep == null) {
                this.pokerGroupKeep = new pokerGame.pokerTableData();
            }
            this.onChangeToKeep();
        };
        //切换回keep的牌 
        pokerTable.prototype.onChangeToKeep = function () {
            if (this.pokerGroupKeep == null) {
                return;
            }
            this.pokerGroup.timerCountKeep = this.tableTopUI.timerCount;
            this.pokerGroup.RemoveFromTable();
            //交换
            var tempGroup = this.pokerGroup;
            this.pokerGroup = this.pokerGroupKeep;
            this.pokerGroupKeep = tempGroup;
            //加入桌面中	
            this.pokerGroup.AddToTable(this.pokerTableUI, this.tableTopUI.gameTopUI, this.tableBottomUI.gameBottom);
            this.pokerGroup.cardDecksData.FlushAllPokerRender();
            this.RestartTimer(this.pokerGroup.timerCountKeep);
        };
        pokerTable.prototype.FlushAllPoker = function () {
            this.pokerGroup.cardDecksData.FlushAllPokerRender();
        };
        pokerTable.prototype.FlushAllCardRender = function () {
            this.pokerGroup.cardDecksData.FlushAllCardRender();
        };
        pokerTable.prototype.FlushBGImg = function () {
            //console.debug("FlushBGImg");
            if (pokerUI.shop.ItemSelectedInPage1 != null) {
                //this.pokerTableUI.BGImg.skin=pokerUI.shop.ItemSelectedInPage1.ItemIcon;
                //console.debug("ItemSelectedInPage1="+pokerUI.shop.ItemSelectedInPage1.ItemIcon);
                //Laya.loader.load(pokerUI.shop.ItemSelectedInPage1.ItemAtlas,Laya.Handler.create(this,this.onLoadedBGImg));
                //Laya.loader.load([{url:pokerUI.shop.ItemSelectedInPage1.ItemAtlas, type: Laya.Loader.ATLAS}], Laya.Handler.create(this, this.onLoadedBGImg));
                this.onLoadedBGImg();
            }
        };
        pokerTable.prototype.onLoadedBGImg = function () {
            // if(this.pokerTableUI.BGImg.skin!=pokerUI.shop.ItemSelectedInPage1.ItemIcon)
            // {
            // 	//console.debug("FlushBGImg iconskin="+pokerUI.shop.ItemSelectedInPage1.ItemIcon);
            // 	this.pokerTableUI.BGImg.skin=pokerUI.shop.ItemSelectedInPage1.ItemIcon;
            // }
        };
        //发牌
        pokerTable.prototype.DearCard = function (type) {
            this.IsTutorialStart = type == DearCardType.tutorial;
            this.shouVis(false);
            GameMain.app.gameStartTime = Math.floor(new Date().getTime() / 1000);
            switch (type) {
                case DearCardType.tutorial:
                    this.pokerGroup.cardControls.DearCard(false); //新手指引发牌
                    wxCore.uo.commitTotle("start_button_click", { "create_time": "", "session_id": "", "is_new": "", "game_type": 1, "true_current_level": GameMain.app.cutlevel + 1, "dear_card_style": 0, "game_start_time": GameMain.app.gameStartTime });
                    break;
                case DearCardType.normal:
                    this.pokerGroup.cardControls.DearCard(false);
                    wxCore.uo.commitTotle("start_button_click", { "create_time": "", "session_id": "", "is_new": "", "game_type": 1, "true_current_level": GameMain.app.cutlevel + 1, "dear_card_style": 1, "game_start_time": GameMain.app.gameStartTime });
                    break;
                case DearCardType.retry:
                    this.pokerGroup.cardControls.DearCard(true);
                    wxCore.uo.commitTotle("start_button_click", { "create_time": "", "session_id": "", "is_new": "", "game_type": 1, "true_current_level": GameMain.app.cutlevel + 1, "dear_card_style": 2, "game_start_time": GameMain.app.gameStartTime });
                    break;
                case DearCardType.protect:
                    this.pokerGroup.cardControls.DearCard(true);
                    break;
            }
            this.RestartTimer();
            pokerGame.SoundPlayer.PlaySound(2);
            if (!GameMain.app.isOpenFreeModel) {
                this.aniModel();
            }
            // Laya.timer.once(1000, this, function () {
            // 	Laya.SoundManager.stopMusic();
            // 	pokerGame.SoundPlayer.PlayMusic(18);
            // })
            var topPos = GameMain.app.mWX.getMenuButtonTop_CenterPoint();
            this.tableTopUI.gameTopUI.y = topPos.x + topPos.y / 2;
            // ////console.log('发牌', this.tableTopUI.gameTopUI.y, this.tableBottomUI.gameBottom.y);
        };
        pokerTable.prototype.EndTutorial = function () {
            // ////console.log('log');
            this.IsTutorialStart = false;
        };
        pokerTable.prototype.RestartTimer = function (timeCount) {
            if (timeCount === void 0) { timeCount = 0; }
            this.tableTopUI.RestartTimer(timeCount);
        };
        pokerTable.prototype.GetMessage = function (messageID) {
            var message = this.messageConfig.GetMessage(messageID);
            return message;
        };
        pokerTable.prototype.ShowMessage = function (message) {
            if (!this.pokerTableUI.visible) {
                return;
            }
            //var message:string= this.messageConfig.GetMessage(messageID);
            if (message != null && GameMain.app.mWX.fhOnoff != 0) {
                this.pokerTableUI.message.text = message;
                this.pokerTableUI.message.alpha = 1;
                Laya.Tween.clearAll(this.pokerTableUI.message);
                Laya.Tween.to(this.pokerTableUI.message, { alpha: 0 }, 4000, Laya.Ease.sineInOut, null, 0);
                this.pokerTableUI.messageBg.alpha = 1;
                this.pokerTableUI.messageBg.width = this.pokerTableUI.message.width + 25;
                Laya.Tween.clearAll(this.pokerTableUI.messageBg);
                Laya.Tween.to(this.pokerTableUI.messageBg, { alpha: 0 }, 4000, Laya.Ease.sineInOut, null, 0);
            }
        };
        pokerTable.prototype.setModel = function (type, num) {
            if (type === void 0) { type = 0; }
            if (num === void 0) { num = 3; }
            // if (GameMain.app.isOpenFreeModel) {
            this.pokerTableUI.model.skin = 'login/game_image_logo.png';
            this.pokerTableUI.num.visible = false;
            this.pokerTableUI.lightmodel.visible = false;
            this.pokerTableUI.lightnum.visible = false;
            // } else {
            // 	this.pokerTableUI.model.skin = 'new18/game_image_cutlevel.png';
            // 	this.pokerTableUI.num.visible = true;
            // 	this.pokerTableUI.lightmodel.visible = true;
            // 	this.pokerTableUI.lightnum.visible = true;
            // 	this.pokerTableUI.num.value = GameMain.app.fakerlevelnum + 1;
            // 	this.pokerTableUI.lightmodel.skin = 'new18/game_image_cutlevel_light.png';
            // 	this.pokerTableUI.lightnum.value = GameMain.app.fakerlevelnum + 1;
            // 	this.pokerTableUI.lightmodel.alpha = 0;
            // 	this.pokerTableUI.lightnum.alpha = 0;
            // }
        };
        pokerTable.prototype.aniModel = function () {
            this.pokerTableUI.lightmodel.alpha = 0;
            this.pokerTableUI.lightnum.alpha = 0;
            Laya.Tween.from(this.pokerTableUI.lightmodel, { alpha: 1 }, 800, Laya.Ease.sineIn, null, 1200);
            Laya.Tween.from(this.pokerTableUI.lightmodel, { alpha: 0 }, 500, Laya.Ease.sineOut, null, 2000);
            Laya.Tween.from(this.pokerTableUI.lightmodel, { alpha: 1 }, 800, Laya.Ease.sineIn, null, 2500);
            Laya.Tween.from(this.pokerTableUI.lightmodel, { alpha: 0 }, 500, Laya.Ease.sineOut, null, 3300);
            Laya.Tween.from(this.pokerTableUI.lightnum, { alpha: 1 }, 800, Laya.Ease.sineIn, null, 1200);
            Laya.Tween.from(this.pokerTableUI.lightnum, { alpha: 0 }, 500, Laya.Ease.sineOut, null, 2000);
            Laya.Tween.from(this.pokerTableUI.lightnum, { alpha: 1 }, 800, Laya.Ease.sineIn, null, 2500);
            Laya.Tween.from(this.pokerTableUI.lightnum, { alpha: 0 }, 500, Laya.Ease.sineOut, null, 3300);
        };
        pokerTable.prototype.shouVis = function (bool) {
            this.pokerTableUI.shoupai.visible = bool;
            if (bool) {
                this.pokerTableUI.shoupai.on(Laya.Event.CLICK, this, this.onClickShouPai);
            }
            else {
                this.pokerTableUI.shoupai.off(Laya.Event.CLICK, this, this.onClickShouPai);
            }
        };
        pokerTable.prototype.onClickShouPai = function () {
            GameGlobal.Dispatcher.sendEvent(GameGlobal.EVENT.onShareWeChatSuccesse);
            this.pokerTableUI.shoupai.visible = false;
        };
        return pokerTable;
    }());
    pokerUI.pokerTable = pokerTable;
})(pokerUI || (pokerUI = {}));
//# sourceMappingURL=pokerTable.js.map