/**
* 游戏的事件处理
*/
var pokerGame;
(function (pokerGame) {
    var EventHandlePoker = /** @class */ (function () {
        function EventHandlePoker() {
            var a = 'a';
            if (a == 'a')
                a = 'a';
        }
        EventHandlePoker.prototype.SetGameManager = function (gameManager) {
            this.gameManager = gameManager;
            GameGlobal.Dispatcher.GetInstance().addEventHandle(GameGlobal.EVENT.OnGameStart, this, this.OnClickGameStart);
            GameGlobal.Dispatcher.GetInstance().addEventHandle(GameGlobal.EVENT.OnClickShop, this, this.OnClickShop);
            GameGlobal.Dispatcher.GetInstance().addEventHandle(GameGlobal.EVENT.onClickChallenge, this, this.onClickChallenge);
            GameGlobal.Dispatcher.GetInstance().addEventHandle(GameGlobal.EVENT.onClickSetting, this, this.onClickSetting);
            GameGlobal.Dispatcher.GetInstance().addEventHandle(GameGlobal.EVENT.onClickBackToMainFromShop, this, this.onClickBackToMainFromShop);
            GameGlobal.Dispatcher.GetInstance().addEventHandle(GameGlobal.EVENT.onClickShowPopup, this, this.onClickShowPopup);
            GameGlobal.Dispatcher.GetInstance().addEventHandle(GameGlobal.EVENT.onClickBackToMain, this, this.onClickEndGame);
            GameGlobal.Dispatcher.GetInstance().addEventHandle(GameGlobal.EVENT.onMusicBtnChange, this, this.onMusicBtnChange);
            GameGlobal.Dispatcher.GetInstance().addEventHandle(GameGlobal.EVENT.onMoveFourAni, this, this.onMoveFourAni);
            GameGlobal.Dispatcher.GetInstance().addEventHandle(GameGlobal.EVENT.onClickNewGame, this, this.onClickNewGame);
            GameGlobal.Dispatcher.GetInstance().addEventHandle(GameGlobal.EVENT.onClickRetry, this, this.onClickRetry);
            GameGlobal.Dispatcher.GetInstance().addEventHandle(GameGlobal.EVENT.onClickEndGame, this, this.onClickEndGame);
            GameGlobal.Dispatcher.GetInstance().addEventHandle(GameGlobal.EVENT.onClickChangeCardSize, this, this.onClickChangeSize);
            GameGlobal.Dispatcher.GetInstance().addEventHandle(GameGlobal.EVENT.onShowTipOfJumpLevel, this, this.onClickShowPopup);
            GameGlobal.Dispatcher.GetInstance().addEventHandle(GameGlobal.EVENT.onMingPaiTaiJi, this, this.onMingPaiTaiJi);
            GameGlobal.Dispatcher.GetInstance().addEventHandle(GameGlobal.EVENT.onClickBackStep, this, this.onClickBackStep); //回撤
            GameGlobal.Dispatcher.GetInstance().addEventHandle(GameGlobal.EVENT.onClickTips, this, this.onClickTips); //点击提示
            // GameGlobal.Dispatcher.GetInstance().addEventHandle(GameGlobal.EVENT.onClickTips, this, this.onClickNextStep);//点击提示
            GameGlobal.Dispatcher.GetInstance().addEventHandle(GameGlobal.EVENT.onChangeLastCard, this, this.onChangeLastCard); //变底牌
            GameGlobal.Dispatcher.GetInstance().addEventHandle(GameGlobal.EVENT.OnClickShowAllHiddenCard, this, this.OnClickShowAllHiddenCard); //点击明牌
            GameGlobal.Dispatcher.GetInstance().addEventHandle(GameGlobal.EVENT.OnClickAutoBackToAceCardDeck, this, this.OnClickAutoBackToAceCardDeck); //点击自动
            GameGlobal.Dispatcher.GetInstance().addEventHandle(GameGlobal.EVENT.onGameWin, this, this.onGameWin); //游戏胜利的时候
            GameGlobal.Dispatcher.addEvent(GameGlobal.EVENT.BuyBgSkin, this, this.BuyBgSkin);
            GameGlobal.Dispatcher.addEvent(GameGlobal.EVENT.BuyCardBackSkin, this, this.BuyCardBackSkin);
            GameGlobal.Dispatcher.addEvent(GameGlobal.EVENT.ClearTips, this, this.ClearTips);
            GameGlobal.Dispatcher.addEvent(GameGlobal.EVENT.onClickShopInGame, this, this.onClickShopInGame);
            GameGlobal.Dispatcher.addEvent(GameGlobal.EVENT.onClickCLoseConfirmAutoPlayUI, this, this.onClickCLoseConfirmAutoPlayUI);
            GameGlobal.Dispatcher.addEvent(GameGlobal.EVENT.onShareWeChatSuccesse, this, this.onShareWeChatSuccesse); //解锁下面所有牌后出现
            GameGlobal.Dispatcher.addEvent(GameGlobal.EVENT.CheckAutoPlay, this, this.CheckAutoPlay);
            GameGlobal.Dispatcher.addEvent(GameGlobal.EVENT.ShowHiddenCard, this, this.ShowHiddenCard);
            GameGlobal.Dispatcher.addEvent(GameGlobal.EVENT.AddPhysicalPower, this, this.AddPhysicalPower);
            GameGlobal.Dispatcher.GetInstance().addEventHandle(GameGlobal.EVENT.isVJIASI, this, this.IsVJIASI);
            GameGlobal.Dispatcher.addEvent(GameGlobal.EVENT.UpdateGoldUI, this, this.UpdateGoldUI);
            GameGlobal.Dispatcher.addEvent(GameGlobal.EVENT.onTableUILoadedDone, this, this.onTableUILoadedDone);
            GameGlobal.Dispatcher.addEvent(GameGlobal.EVENT.onClickGoldUseShowCard, this, this.onClickGoldUseShowCard);
            GameGlobal.Dispatcher.addEvent(GameGlobal.EVENT.onRefreshSKAniLevel, this, this.onRefreshSKAniLevel);
            GameGlobal.Dispatcher.addEvent(GameGlobal.EVENT.onRefreshStartSK, this, this.onRefreshStartSK);
        };
        EventHandlePoker.prototype.onTableUILoadedDone = function () {
            if (this.gameManager.UIManager.IsAllTableUILoadDone()) {
                this.gameManager.UIManager.pokerTable.tableTopUI = this.gameManager.UIManager.pokerTop;
                this.gameManager.UIManager.pokerTable.tableBottomUI = this.gameManager.UIManager.pokerBottom;
                GameGlobal.Dispatcher.sendEvent(GameGlobal.EVENT.onALLTableUILoadedDone);
            }
        };
        EventHandlePoker.prototype.onClickShopInGame = function () {
            this.gameManager.UIManager.shopUI.OpenShop(true);
        };
        EventHandlePoker.prototype.OnClickGameStart = function (bool) {
            if (bool === void 0) { bool = false; }
            // ////console.log('???:::', GameMain.app.mWX.isAbTest, bool);
            GameGlobal.Dispatcher.sendEvent(GameGlobal.EVENT.BuyBgSkin);
            GameGlobal.Dispatcher.sendEvent(GameGlobal.EVENT.BuyCardBackSkin);
            // if (GameMain.app.mWX.isAbTest && bool) {
            if (ShopSetting.nowPpower > 0) {
                this.OnGameStart();
            }
            else {
                this.SetGameMainUIVisible(false);
                this.gameManager.UIManager.startGameUI.startGameUI.visible = true;
                this.gameManager.UIManager.startGameUI.playSK();
                this.gameManager.UIManager.startGameUI.isStart = true;
                if (!GameMain.app.physicalPowerView) {
                    GameMain.app.physicalPowerView = new PhysicalPowerView();
                }
                GameMain.app.physicalPowerView.refreshCoinAndPower();
                GameMain.app.physicalPowerView.popup();
            }
            // } else if (!GameMain.app.mWX.isAbTest && !bool) {
            // this.OnGameStart();
            // }
        };
        EventHandlePoker.prototype.ClearTips = function () {
            this.gameManager.UIManager.pokerTable.pokerGroup.cardTips.ClearData();
            this.gameManager.UIManager.pokerTable.pokerGroup.cardTips.ClearTutorialTips();
        };
        EventHandlePoker.prototype.BuyBgSkin = function () {
            ////console.log('加载背景：' + ShopSetting.nowUseBg);
            this.gameManager.UIManager.pokerTable.pokerTableUI.BGImg.skin = util.getCDN() + "res1/background/bg" + ShopSetting.nowUseBg + ".png";
        };
        EventHandlePoker.prototype.BuyCardBackSkin = function () {
            ////console.log('加载卡背：' + ShopSetting.nowCardBack);
            pokerRender.backSkinName = "local/\u5361\u80CC/CardBack_" + ShopSetting.nowCardBack + ".png";
        };
        //游戏开始事件
        EventHandlePoker.prototype.OnGameStart = function () {
            if (ShopSetting.nowPpower > 0) {
                this.GamePlayStart(false);
            }
            else {
                this.SetGameMainUIVisible(false);
                this.gameManager.UIManager.startGameUI.startGameUI.visible = true;
                this.gameManager.UIManager.startGameUI.playSK();
                this.gameManager.UIManager.startGameUI.isStart = true;
                if (!GameMain.app.physicalPowerView) {
                    GameMain.app.physicalPowerView = new PhysicalPowerView();
                }
                GameMain.app.physicalPowerView.refreshCoinAndPower();
                GameMain.app.physicalPowerView.popup();
            }
        };
        EventHandlePoker.prototype.GamePlayStart = function (IsRetry) {
            if (!this.gameManager.UIManager.pokerTable.pokerGroup.cardControls.IsCanDearCard()) {
                return;
            }
            this.gameManager.UIManager.challengeUI.FlushChallengeDateStr(); //刷新挑战字符串
            this.gameManager.UIManager.pokerTable.FlushBGImg();
            // ////console.log('l1');
            var isz = Number(Laya.LocalStorage.getItem("isChangeSize"));
            pokerRender.ReadSkin(isz);
            // ////console.log('l2');
            // if (GameMain.app.mWX.fhOnoff != 0 && GameMain.app.cutlevel == 0) {//第一次玩的话 开启新手指引
            // 	GameMain.app.isXinShow = true;
            // 	this.gameManager.userData.SetFirstPlay(false);
            // 	GameGlobal.Dispatcher.GetInstance().brodcastEvent(GameGlobal.EVENT.OnGameStartTutorial);
            // }
            // else {
            GameGlobal.Dispatcher.GetInstance().brodcastEvent(GameGlobal.EVENT.HideTutorial);
            this.gameManager.UIManager.pokerTable.pokerGroup.cardDecksData.SetGameModeByUserData(this.gameManager.userData);
            this.gameManager.UIManager.startGameUI.startGameUI.visible = false;
            this.gameManager.UIManager.startGameUI.stopSK();
            this.gameManager.UIManager.startGameUI.isStart = false;
            this.gameManager.UIManager.pokerTable.DearCard(IsRetry ? pokerUI.DearCardType.retry : pokerUI.DearCardType.normal); //发牌
            this.gameManager.UIManager.pokerTop.RestartTimer(); //重启计时器
            this.SetGameMainUIVisible(true);
            // }
            this.gameManager.userData.ClearTry();
            this.gameManager.UIManager.shopUI.FlushData(this.gameManager.userData);
            // ////console.log('s1');
        };
        //点击商店
        EventHandlePoker.prototype.OnClickShop = function () {
            this.gameManager.UIManager.startGameUI.startGameUI.visible = false;
            this.gameManager.UIManager.startGameUI.stopSK();
            this.gameManager.UIManager.startGameUI.isStart = false;
            this.gameManager.UIManager.shopUI.OpenShop(false);
        };
        //点击挑战
        EventHandlePoker.prototype.onClickChallenge = function () {
            this.gameManager.UIManager.challengeUI.SetVisible(true);
        };
        //点击设置
        EventHandlePoker.prototype.onClickSetting = function () {
            // GameGlobal.Dispatcher.GetInstance().brodcastEvent(GameGlobal.EVENT.TipMaskVis, [true]);
            // this.gameManager.UIManager.settingUI.settingPopup.visible = true;
            if (this.gameManager.UIManager.pokerBottom.gameBottom.set.skin == 'local/游戏页/game_btn_声音关.png') {
                this.gameManager.UIManager.pokerBottom.gameBottom.set.skin = 'local/游戏页/game_btn_声音开.png';
                GameGlobal.Dispatcher.GetInstance().brodcastEvent(GameGlobal.EVENT.onClickSettingSound, [true]);
            }
            else {
                this.gameManager.UIManager.pokerBottom.gameBottom.set.skin = 'local/游戏页/game_btn_声音关.png';
                GameGlobal.Dispatcher.GetInstance().brodcastEvent(GameGlobal.EVENT.onClickSettingSound, [false]);
            }
        };
        //从商店返回
        EventHandlePoker.prototype.onClickBackToMainFromShop = function () {
            this.gameManager.UIManager.shopUI.shopUI.visible = false;
            this.gameManager.UIManager.startGameUI.startGameUI.visible = true;
            this.gameManager.UIManager.startGameUI.playSK();
            this.gameManager.UIManager.startGameUI.isStart = true;
        };
        EventHandlePoker.prototype.SetGameMainUIVisible = function (isVisible) {
            this.gameManager.UIManager.pokerTable.pokerTableUI.visible = isVisible;
            this.gameManager.UIManager.pokerTop.gameTopUI.visible = isVisible;
            this.gameManager.UIManager.pokerBottom.gameBottom.visible = isVisible;
            if (!isVisible) {
                this.gameManager.UIManager.pokerPopup.gamePopup.visible = isVisible;
            }
        };
        //点击返回主界面
        EventHandlePoker.prototype.onClickBackToMain = function () {
            this.SetGameMainUIVisible(false);
            GameMain.app.mingpainum = 1;
            this.gameManager.UIManager.startGameUI.startGameUI.num.text = GameMain.app.fakerlevelnum + 1;
            // GameMain.app.ismingpai = false;
            this.gameManager.UIManager.startGameUI.startGameUI.visible = true;
            this.gameManager.UIManager.startGameUI.playSK();
            this.gameManager.UIManager.startGameUI.isStart = true;
            if (GameMain.app.mWX.isAbTest) {
                // if (GameMain.app.mWX.mUID % 2 == 0) {
                this.gameManager.UIManager.startGameUI.startGameUI.startGame.visible = true;
                this.gameManager.UIManager.startGameUI.startGameUI.startFreeGame.visible = false;
                this.gameManager.UIManager.startGameUI.startGameUI.model.visible = false;
                // } 
                // else {
                // 	this.gameManager.UIManager.startGameUI.startGameUI.startGame.visible = false;
                // 	this.gameManager.UIManager.startGameUI.startGameUI.startFreeGame.visible = true;
                // 	this.gameManager.UIManager.startGameUI.startGameUI.model.visible = false;
                // }
            }
            else {
                this.gameManager.UIManager.startGameUI.startGameUI.startGame.visible = true;
                this.gameManager.UIManager.startGameUI.startGameUI.startFreeGame.visible = true;
                this.gameManager.UIManager.startGameUI.startGameUI.model.visible = false;
            }
        };
        EventHandlePoker.prototype.onMusicBtnChange = function (bool) {
            if (bool) {
                this.gameManager.UIManager.pokerBottom.gameBottom.set.skin = 'local/游戏页/game_btn_声音开.png';
            }
            else {
                this.gameManager.UIManager.pokerBottom.gameBottom.set.skin = 'local/游戏页/game_btn_声音关.png';
            }
        };
        //主界面点击showpopup
        EventHandlePoker.prototype.onClickShowPopup = function (type) {
            if (type === void 0) { type = 0; }
            if (GameMain.app.isXinShow) {
                return;
            }
            if (type == 0) {
                this.gameManager.UIManager.pokerPopup.gamePopup.cardSize.visible = false;
                this.gameManager.UIManager.pokerPopup.gamePopup.reTry.visible = true;
                this.gameManager.UIManager.pokerPopup.gamePopup.NEWGame.visible = true;
                this.gameManager.UIManager.pokerPopup.gamePopup.jump.visible = false;
                if (GameMain.app.isOpenFreeModel) {
                    this.gameManager.UIManager.pokerPopup.gamePopup.back.visible = true;
                    this.gameManager.UIManager.pokerPopup.gamePopup.NEWGame.skin = 'local/游戏页/game_btn_重试.png';
                }
                else {
                    this.gameManager.UIManager.pokerPopup.gamePopup.back.visible = false;
                    this.gameManager.UIManager.pokerPopup.gamePopup.NEWGame.skin = 'local/游戏页/game_btn_返回首页.png';
                    // if (GameMain.app.mWX.isAbTest) {
                    // if (GameMain.app.mWX.mUID % 2 == 0) {
                    // } else {
                    // 	this.gameManager.UIManager.pokerPopup.gamePopup.back.visible = true;
                    // 	this.gameManager.UIManager.pokerPopup.gamePopup.NEWGame.skin = 'local/游戏页/game_btn_重试.png';
                    // }
                    // }
                }
            }
            else if (type == 1) {
                this.gameManager.UIManager.pokerPopup.gamePopup.cardSize.visible = true;
                this.gameManager.UIManager.pokerPopup.gamePopup.reTry.visible = false;
                this.gameManager.UIManager.pokerPopup.gamePopup.NEWGame.visible = false;
                this.gameManager.UIManager.pokerPopup.gamePopup.jump.visible = false;
                this.gameManager.UIManager.pokerPopup.gamePopup.back.visible = false;
                var isz = Number(Laya.LocalStorage.getItem("isChangeSize"));
                // ////console.log('isz', isz);
                if (isz == 0) {
                    this.gameManager.UIManager.pokerPopup.gamePopup.bigKMask.visible = false;
                    this.gameManager.UIManager.pokerPopup.gamePopup.smallKMask.visible = true;
                }
                else {
                    this.gameManager.UIManager.pokerPopup.gamePopup.bigKMask.visible = true;
                    this.gameManager.UIManager.pokerPopup.gamePopup.smallKMask.visible = false;
                }
            }
            else if (type == 2) {
                if (this.gameManager.UIManager.startGameUI.startGameUI.visible) {
                    return;
                }
                Laya.timer.clear(this, this.hidePop);
                this.gameManager.UIManager.pokerPopup.gamePopup.cardSize.visible = false;
                this.gameManager.UIManager.pokerPopup.gamePopup.reTry.visible = false;
                this.gameManager.UIManager.pokerPopup.gamePopup.NEWGame.visible = false;
                this.gameManager.UIManager.pokerPopup.gamePopup.jump.visible = true;
                this.gameManager.UIManager.pokerPopup.gamePopup.back.visible = false;
                Laya.timer.once(10000, this, this.hidePop);
            }
            this.gameManager.UIManager.pokerPopup.gamePopup.visible = true;
        };
        EventHandlePoker.prototype.hidePop = function () {
            this.gameManager.UIManager.pokerPopup.gamePopup.visible = false;
        };
        EventHandlePoker.prototype.onClickNewGame = function () {
            this.OnGameStart();
        };
        EventHandlePoker.prototype.onClickRetry = function () {
            // if (ShopSetting.nowPpower > 0) {
            this.GamePlayStart(true);
            // } else {
            // 	this.onClickBackToMain();
            // 	if (!GameMain.app.physicalPowerView) {
            // 		GameMain.app.physicalPowerView = new PhysicalPowerView();
            // 	}
            // 	GameMain.app.physicalPowerView.refreshCoinAndPower();
            // 	GameMain.app.physicalPowerView.popup();
            // }
        };
        EventHandlePoker.prototype.onClickEndGame = function () {
            this.onClickBackToMain();
        };
        EventHandlePoker.prototype.onClickChangeSize = function (type) {
            pokerRender.ReadSkin(type);
            this.gameManager.UIManager.pokerTable.FlushBGImg();
            this.gameManager.UIManager.pokerTable.FlushAllCardRender();
        };
        //回撤 
        EventHandlePoker.prototype.onClickBackStep = function (type) {
            if (type === void 0) { type = 0; }
            this.gameManager.UIManager.pokerTable.pokerGroup.cardControls.BackStep(type);
            // this.gameManager.UIManager.pokerTable.pokerGroup.cardControls.setMoveBackFourDeck();
            // this.gameManager.UIManager.pokerTable.pokerGroup.cardControls.AutoBack(1);
            // ////console.log('xxyy2005');
            wxCore.uo.commitTotle("icon_page", { "create_time": "", "session_id": "", "is_new": "", "icon_type": 'Back_Step' });
        };
        EventHandlePoker.prototype.onClickNextStep = function () {
            this.gameManager.UIManager.pokerTable.pokerGroup.cardControls.resetAllCards();
        };
        //点击提示
        EventHandlePoker.prototype.onClickTips = function () {
            //onClickTips
            this.gameManager.UIManager.pokerTable.pokerGroup.cardTips.onClickTips();
            // wxCore.uo.commitTotle("icon_page", { "create_time": "", "session_id": "", "is_new": "", "icon_type": 'Show_Tips' });
        };
        //改变最下面的卡
        EventHandlePoker.prototype.onChangeLastCard = function (type, index, drag) {
            if (type === void 0) { type = 0; }
            if (index === void 0) { index = 0; }
            if (drag === void 0) { drag = null; }
            this.gameManager.UIManager.pokerTable.pokerGroup.cardTips.recoverAllCards(type, index, drag);
        };
        //点击明牌
        EventHandlePoker.prototype.OnClickShowAllHiddenCard = function () {
            if (this.gameManager.UIManager.pokerTable.IsTutorialStart) {
                return;
            }
            if (!this.gameManager.UIManager.pokerTable.pokerGroup.cardControls.IsCanUseShowHiddenCardItem()) {
                GameGlobal.Dispatcher.sendEvent(GameGlobal.EVENT.ShowMessage, [10010]);
                return;
            }
            //
            this.gameManager.UIManager.confirmShowCard.confirmShowCardUI.visible = true;
        };
        //开始明牌
        EventHandlePoker.prototype.ShowHiddenCard = function () {
            this.gameManager.UIManager.confirmShowCard.confirmShowCardUI.visible = false;
            this.gameManager.UIManager.pokerTable.pokerGroup.cardControls.ShowAllHiddenCard();
        };
        //自动
        EventHandlePoker.prototype.OnClickAutoBackToAceCardDeck = function () {
            if (!this.gameManager.UIManager.pokerTable.pokerGroup.cardControls.GetIsAutoBacking()) {
                this.gameManager.UIManager.confirmAutoPlayUI.confirmAutoPlayUI.visible = true;
                this.gameManager.UIManager.pokerBottom.SetAutoEnable(false);
            }
        };
        //加体力，关闭体力框
        EventHandlePoker.prototype.AddPhysicalPower = function (bool) {
            if (ShopSetting.nowPpower < ShopSetting.nowPowerMax) {
                if (bool) {
                    ShopSetting.nowPpower += 3;
                }
                else {
                    ShopSetting.nowPpower += 1;
                }
                GameMain.app.mWX.refreshCutDown();
                GameMain.app.mWX.setUserValue('now_physical_power', ShopSetting.nowPpower + '');
            }
            if (GameMain.app.physicalPowerView) {
                GameMain.app.physicalPowerView.closeT();
            }
        };
        //显示胜利
        EventHandlePoker.prototype.onGameWin = function () {
            this.gameManager.UIManager.pokerTop.StopTimer();
            var text = this.gameManager.UIManager.pokerTop.GetTimeTextStr();
            this.gameManager.UIManager.winUI.ShowWin(text);
            if (pokerUI.challenge.nowChallengeDateStr != null && pokerUI.challenge.nowChallengeDateStr.length == 8) //挑战成功
             {
                this.gameManager.userData.addTochallengeMap(pokerUI.challenge.nowChallengeDateStr);
                pokerUI.challenge.nowChallengeDateStr = null;
            }
            this.gameManager.userData.AddGold(this.gameManager.userData.compliteOneGameGoldGain);
        };
        //检测是否要弹出自动
        EventHandlePoker.prototype.CheckAutoPlay = function () {
            if (this.gameManager.UIManager.confirmAutoPlayUI.confirmAutoPlayUI.visible) {
                return;
            }
            if (this.gameManager.UIManager.pokerBottom.IsAutoEnable()) {
                return;
            }
            if (this.gameManager.UIManager.pokerTable.pokerGroup.cardControls.GetIsAutoBacking()) {
                return;
            }
            if (!this.gameManager.UIManager.pokerTable.pokerGroup.cardControls.IsHaveHiddenCard()) {
                // pokerGame.SoundPlayer.PlaySound(17);
                // this.gameManager.UIManager.confirmAutoPlayUI.confirmAutoPlayUI.visible = true;
                this.gameManager.UIManager.pokerTable.shouVis(true);
                return;
            }
        };
        //微信分享成功
        EventHandlePoker.prototype.onShareWeChatSuccesse = function () {
            this.gameManager.UIManager.confirmAutoPlayUI.confirmAutoPlayUI.visible = false;
            this.gameManager.UIManager.pokerBottom.SetAutoEnable(false);
            if (!this.gameManager.UIManager.pokerTable.pokerGroup.cardControls.GetIsAutoBacking()) {
                if (!this.gameManager.UIManager.pokerTable.pokerGroup.cardControls.IsHaveHiddenCard()) {
                    this.gameManager.UIManager.pokerTable.pokerGroup.cardControls.AutoBack(1);
                    // ////console.log('xxyy2006');
                }
            }
        };
        EventHandlePoker.prototype.onMoveFourAni = function (type) {
            switch (type) {
                case 1:
                    var dk = this.gameManager.UIManager.pokerTable.pokerTableUI.Deck1;
                    this.runRAni(dk);
                    break;
                case 2:
                    var dk = this.gameManager.UIManager.pokerTable.pokerTableUI.Deck2;
                    this.runRAni(dk);
                    break;
                case 3:
                    var dk = this.gameManager.UIManager.pokerTable.pokerTableUI.Deck3;
                    this.runRAni(dk);
                    break;
                case 4:
                    var dk = this.gameManager.UIManager.pokerTable.pokerTableUI.Deck4;
                    this.runRAni(dk);
                    break;
            }
        };
        EventHandlePoker.prototype.runRAni = function (dk) {
            var rani = new Laya.Image();
            rani.skin = 'new/game_image_light.png';
            rani.size(120 * 1.05, 170 * 1.05);
            rani.alpha = 1;
            rani.anchorX = 0.5;
            rani.anchorY = 0.5;
            rani.pos(49, 80);
            dk.addChild(rani);
            Laya.Tween.to(rani, { width: 120 * 1.3, height: 170 * 1.3, alpha: 1 }, 100, Laya.Ease.cubicOut, Laya.Handler.create(this, function () {
                Laya.Tween.to(rani, { width: 120 * 1.8, height: 170 * 1.8, alpha: 0 }, 400, Laya.Ease.linearOut, Laya.Handler.create(this, function () {
                    rani.removeSelf();
                    rani.destroy();
                }));
            }));
        };
        //关闭自动完成确认按钮
        EventHandlePoker.prototype.onClickCLoseConfirmAutoPlayUI = function () {
            if (!this.gameManager.UIManager.pokerTable.pokerGroup.cardControls.GetIsAutoBacking()) {
                this.gameManager.UIManager.pokerBottom.SetAutoEnable(true);
            }
        };
        //更新金币显示
        EventHandlePoker.prototype.UpdateGoldUI = function () {
            var goldNum = this.gameManager.userData.Gold;
            if (this.gameManager.UIManager.pokerTop != null) {
                this.gameManager.UIManager.pokerTop.SetGoldText(goldNum.toString());
            }
            if (this.gameManager.UIManager.shopUI != null) {
                this.gameManager.UIManager.shopUI.SetGoldText(goldNum.toString());
            }
        };
        //点击金币使用明牌
        EventHandlePoker.prototype.onClickGoldUseShowCard = function () {
            if (!this.gameManager.UIManager.pokerTable.pokerGroup.cardControls.IsCanUseShowHiddenCardItem()) {
                GameGlobal.Dispatcher.sendEvent(GameGlobal.EVENT.ShowMessage, [10010]);
                return;
            }
            if (this.gameManager.userData.IsHaveGold(this.gameManager.userData.showCardNeedGold)) //检测金币是否足够
             {
                this.gameManager.userData.AddGold(-this.gameManager.userData.showCardNeedGold);
                GameGlobal.Dispatcher.sendEvent(GameGlobal.EVENT.ShowHiddenCard);
            }
            else {
                GameGlobal.Dispatcher.sendEvent(GameGlobal.EVENT.ShowMessage, [10009]);
            }
        };
        EventHandlePoker.prototype.IsVJIASI = function (type, num) {
            this.gameManager.UIManager.pokerTable.setModel(type, num);
        };
        EventHandlePoker.prototype.onMingPaiTaiJi = function (bool) {
            if (GameMain.app.isOpenFreeModel) {
                this.gameManager.UIManager.pokerTable.MingPaiTaiJi(false);
            }
            else {
                this.gameManager.UIManager.pokerTable.MingPaiTaiJi(bool);
            }
        };
        EventHandlePoker.prototype.onRefreshSKAniLevel = function () {
            this.gameManager.UIManager.startGameUI.refreshSKDialog();
        };
        EventHandlePoker.prototype.onRefreshStartSK = function () {
            this.gameManager.UIManager.startGameUI.changeSK();
        };
        return EventHandlePoker;
    }());
    pokerGame.EventHandlePoker = EventHandlePoker;
})(pokerGame || (pokerGame = {}));
//# sourceMappingURL=EventHandlePoker.js.map