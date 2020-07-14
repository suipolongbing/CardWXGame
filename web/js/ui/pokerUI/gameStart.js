/**
* 设置主界面
*/
var pokerUI;
(function (pokerUI) {
    var startGame = /** @class */ (function () {
        function startGame() {
            this._sk = null;
            this.bigStoreView = null;
            this.isStart = false;
            var a = 'a';
            if (a == 'a')
                a = 'a';
            Laya.loader.load([{ url: "res/atlas/UI.atlas", type: Laya.Loader.ATLAS },
            ], Laya.Handler.create(this, this.onUILoad));
            // this.onUILoad()
        }
        startGame.prototype.onUILoad = function () {
            this.startGameUI = new ui.poker.StartGameUI();
            this.startGameUI.height = Laya.stage.height;
            this.startGameUI.shop.visible = false;
            Laya.stage.addChild(this.startGameUI);
            this.startGameUI.visible = false;
            this.startGameUI.rankList.on(Laya.Event.CLICK, this, this.onRanking);
            this.startGameUI.startGame.on(Laya.Event.CLICK, this, this.onClickStartGame, [1]);
            this.startGameUI.shop.clickHandler = new Laya.Handler(this, this.onClickShop);
            this.startGameUI.startFreeGame.on(Laya.Event.CLICK, this, this.onClickStartGame, [2]);
            this.startGameUI.textLabel.on(Laya.Event.CLICK, this, this.onClickTestStartGame);
            this.startGameUI.bigStore.on(Laya.Event.CLICK, this, this.onClickOpenStore);
            this.startGameUI.powerBox.on(Laya.Event.CLICK, this, this.onPower);
            this.startGameUI.skBox.on(Laya.Event.CLICK, this, this.onSK);
            this.startGameUI.moregame.on(Laya.Event.MOUSE_DOWN, this, GameMain.app.mWX.showMoreGamePage, [this.startGameUI.moregame]);
            this.startGameUI.showmore.on(Laya.Event.MOUSE_DOWN, this, this.openMore);
            this.clound1Speed = (GameMain.app.getRandom(0, 1) == 1 ? -1 : 1) * Math.random() * 1 + 0.5;
            this.clound2Speed = (GameMain.app.getRandom(0, 1) == 1 ? -1 : 1) * Math.random() * 1 + 0.5;
            this.clound3Speed = (GameMain.app.getRandom(0, 1) == 1 ? -1 : 1) * Math.random() * 1 + 0.5;
            this.clound4Speed = (GameMain.app.getRandom(0, 1) == 1 ? -1 : 1) * Math.random() * 1 + 0.5;
            this.clound5Speed = (GameMain.app.getRandom(0, 1) == 1 ? -1 : 1) * Math.random() * 1 + 0.5;
            this.clound6Speed = (GameMain.app.getRandom(0, 1) == 1 ? -1 : 1) * Math.random() * 1 + 0.5;
            this.clound7Speed = (GameMain.app.getRandom(0, 1) == 1 ? -1 : 1) * Math.random() * 1 + 0.5;
            var point = GameMain.app.mWX.getMenuButtonTop_CenterPoint();
            this.startGameUI.powerBox.y = point.x + point.y / 2;
            this.startGameUI.goldBox.y = point.x + point.y / 2;
            Laya.timer.once(1000, this, function () {
                GameMain.app.isServer1 = true;
                //console.log('GameMain.app.isServer1---ok');
            });
            GameMain.app.mWX.initMoreGame(this.startGameUI.moregame, true);
            this._sk = new Laya.Skeleton();
            // this._sk.load("local/sk/1.sk", Laya.Handler.create(this, this.stopSK, null, true));
            this._sk.x = 150;
            this._sk.y = 520;
            this.startGameUI.skBox.addChild(this._sk);
            this.initSKDialog();
            this.initSToreDialog();
            this.initRanking();
            if (GameMain.app.mWX.isAbTest) {
                // if (GameMain.app.mWX.mUID % 2 == 0) {
                this.startGameUI.startGame.visible = true;
                this.startGameUI.startFreeGame.visible = false;
                this.startGameUI.model.visible = false;
                // } else {
                // 	this.startGameUI.startGame.visible = false;
                // 	this.startGameUI.startFreeGame.visible = true;
                // 	this.startGameUI.model.visible = false;
                // }
            }
            else {
                this.startGameUI.startGame.visible = true;
                this.startGameUI.startFreeGame.visible = true;
                this.startGameUI.model.visible = false;
            }
            if (GameMain.app.isTestModel) {
                this.startGameUI.writeLevelTxt.visible = true;
                this.startGameUI.textLabel.visible = true;
            }
            else {
                this.startGameUI.writeLevelTxt.visible = false;
                this.startGameUI.textLabel.visible = false;
            }
            this.startGameUI.num.text = GameMain.app.fakerlevelnum + 1;
            if (GameMain.app.mWX.fhOnoff == 0) {
                this.startGameUI.skBox.visible = false;
                this.startGameUI.bigStore.visible = false;
                this.startGameUI.rankList.bottom = 48;
            }
            else {
                this.startGameUI.skBox.visible = true;
                this.startGameUI.bigStore.visible = true;
                this.startGameUI.rankList.bottom = 207;
            }
            Laya.timer.frameLoop(1, this, this.update);
        };
        startGame.prototype.firstInit = function () {
            this.initGameClub(this.startGameUI.luntan);
        };
        startGame.prototype.initGameClub = function (Reference) {
            GameMain.app.mWX.gameClub = wx.createGameClubButton({
                type: 'image',
                icon: 'dark',
                image: 'luntan.png',
                style: {
                    right: 38 / (750 / GameMain.app.mScreenWidth),
                    bottom: 48 / (750 / GameMain.app.mScreenWidth),
                    width: 98 / (750 / GameMain.app.mScreenWidth),
                    height: 140 / (750 / GameMain.app.mScreenWidth)
                }
            });
        };
        //打开侧边栏
        startGame.prototype.openMore = function () {
            this.showHonor();
        };
        startGame.prototype.showHonor = function () {
            gameBox.showBoxPage("", GameMain.app.mWX.mGamesBox, "全民接龙高手");
            wxCore.uo.commitTotle("recom_icon_click", { "create_time": "", "uid": "", "session_id": "", "is_new": "", "click": 2 });
        };
        startGame.prototype.playSK = function () {
            if (!GameMain.app.mWX.gameClub && this.startGameUI.visible) {
                this.firstInit();
                ////console.log('puhahahahahahahahahahaha');
            }
            this.rotaOtherGame();
            if (this.startGameUI.visible) {
                if (GameMain.app.isShouYeUp) {
                    this.startGameUI.upupupbtn.visible = true;
                    this.startGameUI.startGame.skin = 'local/newBg/shengji.png';
                }
                else {
                    this.startGameUI.upupupbtn.visible = false;
                    this.startGameUI.startGame.skin = 'local/newBg/index_btn_开始游戏.png';
                }
                if (GameMain.app.mWX.gameClub != null)
                    GameMain.app.mWX.gameClub.show();
            }
            if (this._sk)
                this._sk.play(0, true);
        };
        startGame.prototype.stopSK = function () {
            Laya.Tween.clearAll(this.startGameUI.moregame);
            if (GameMain.app.mWX.gameClub != null)
                GameMain.app.mWX.gameClub.hide();
            if (this._sk)
                this._sk.stop();
        };
        startGame.prototype.changeSK = function () {
            if (this._sk) {
                this.stopSK();
                this._sk.load("local/sk/" + ShopSetting.LevelNow + ".sk", Laya.Handler.create(this, this.playSK, null, true));
                var sssss = ShopSetting.LevelSK[ShopSetting.LevelNow - 1]['NAME'].split("").join("\n");
                this.startGameUI.skName.text = sssss;
            }
        };
        // 广告动画
        startGame.prototype.rotaOtherGame = function () {
            Laya.Tween.clearAll(this.startGameUI.moregame);
            var __this = this;
            function Tw1() {
                Laya.Tween.to(__this.startGameUI.moregame, { rotation: 0 }, 200, null, new Laya.Handler(__this, Tw2));
            }
            function Tw2() {
                Laya.Tween.to(__this.startGameUI.moregame, { rotation: 30 }, 200, null, new Laya.Handler(__this, Tw3), 2000);
            }
            function Tw3() {
                Laya.Tween.to(__this.startGameUI.moregame, { rotation: 0 }, 200, null, new Laya.Handler(__this, Tw4));
            }
            function Tw4() {
                Laya.Tween.to(__this.startGameUI.moregame, { rotation: 30 }, 200, null, new Laya.Handler(__this, Tw1));
            }
            Laya.Tween.to(__this.startGameUI.moregame, { rotation: 30 }, 200, null, new Laya.Handler(__this, Tw1));
        };
        startGame.prototype.onClickStartGame = function (type) {
            if (GameMain.app.mWX.fhOnoff == 0) {
                GameMain.app.isOpenFreeModel = false;
                GameGlobal.Dispatcher.GetInstance().brodcastEvent(GameGlobal.EVENT.OnGameStart, [false]);
            }
            else {
                if (this.startGameUI.startGame.skin == 'local/newBg/shengji.png') {
                    GameGlobal.Dispatcher.sendEvent(GameGlobal.EVENT.onRefreshSKAniLevel);
                    GameMain.app.isShouYeUp = false;
                    this.startGameUI.startGame.skin = 'local/newBg/index_btn_开始游戏.png';
                    pokerGame.SoundPlayer.PlaySound(19);
                    var boomAni = new Laya.Animation();
                    boomAni.loadAnimation("GSolibs.ani");
                    boomAni.scale(1, 1);
                    boomAni.pos(this.startGameUI.skBox.x, Laya.stage.height - this.startGameUI.skBox.bottom - this.startGameUI.skBox.pivotY + this.startGameUI.skBox.height / 2);
                    boomAni.play(0, false);
                    boomAni.on(Laya.Event.COMPLETE, this, function () {
                        boomAni.removeSelf();
                        boomAni.destroy();
                    });
                    this.startGameUI.addChild(boomAni);
                }
                else {
                    GameMain.app.isOpenFreeModel = false;
                    GameGlobal.Dispatcher.GetInstance().brodcastEvent(GameGlobal.EVENT.OnGameStart, [false]);
                }
            }
            pokerGame.SoundPlayer.PlaySound(1);
        };
        startGame.prototype.onClickShop = function () {
            GameGlobal.Dispatcher.GetInstance().brodcastEvent(GameGlobal.EVENT.OnClickShop);
            pokerGame.SoundPlayer.PlaySound(1);
        };
        startGame.prototype.onClickTestStartGame = function () {
            var xxx;
            if (this.startGameUI.writeLevelTxt.text.length > 0) {
                xxx = this.startGameUI.writeLevelTxt.text;
            }
            else {
                xxx = 1;
            }
            GameMain.app.testLevel = xxx;
            this.onClickStartGame(1);
            // ////console.log('???????????', GameMain.app.testLevel);
        };
        startGame.prototype.onClickOpenStore = function () {
            if (GameMain.app.mWX.gameClub != null)
                GameMain.app.mWX.gameClub.hide();
            if (this.bigStoreView) {
                this.bigStoreView.refreshCoinAndPower();
                this.bigStoreView.popup();
            }
        };
        startGame.prototype.update = function () {
            if (this.isStart) {
                this.startGameUI.powerLabel.text = '' + ShopSetting.nowPpower + '/' + ShopSetting.nowPowerMax;
                this.startGameUI.goldLabel.text = '' + ShopSetting.nowcoin;
                this.moveClound();
            }
        };
        startGame.prototype.moveClound = function () {
            this.startGameUI.clound1.x += this.clound1Speed;
            this.startGameUI.clound2.x += this.clound2Speed;
            this.startGameUI.clound3.x += this.clound3Speed;
            this.startGameUI.clound4.x += this.clound4Speed;
            this.startGameUI.clound5.x += this.clound5Speed;
            this.startGameUI.clound6.x += this.clound6Speed;
            this.startGameUI.clound7.x += this.clound7Speed;
            this.moveDirSpeedControl(this.clound1Speed > 0 ? true : false, this.startGameUI.clound1, this.clound1Speed);
            this.moveDirSpeedControl(this.clound2Speed > 0 ? true : false, this.startGameUI.clound2, this.clound2Speed);
            this.moveDirSpeedControl(this.clound3Speed > 0 ? true : false, this.startGameUI.clound3, this.clound3Speed);
            this.moveDirSpeedControl(this.clound4Speed > 0 ? true : false, this.startGameUI.clound4, this.clound4Speed);
            this.moveDirSpeedControl(this.clound5Speed > 0 ? true : false, this.startGameUI.clound5, this.clound5Speed);
            this.moveDirSpeedControl(this.clound6Speed > 0 ? true : false, this.startGameUI.clound6, this.clound6Speed);
            this.moveDirSpeedControl(this.clound7Speed > 0 ? true : false, this.startGameUI.clound7, this.clound7Speed);
        };
        startGame.prototype.moveDirSpeedControl = function (bool, clound, cloundSpeed) {
            if (clound.x > 750 && bool) {
                var xx1 = Math.random();
                if (xx1 > 0.5) {
                    clound.x = -clound.width;
                    cloundSpeed = 1 * Math.random() * 1 + 0.5;
                }
                else {
                    clound.x = 750;
                    cloundSpeed = -1 * Math.random() * 1 + 0.5;
                }
            }
            if (clound.x + clound.width < 0 && !bool) {
                var xx1 = Math.random();
                if (xx1 > 0.5) {
                    clound.x = -clound.width;
                    cloundSpeed = 1 * Math.random() * 1 + 0.5;
                }
                else {
                    clound.x = 750;
                    cloundSpeed = -1 * Math.random() * 1 + 0.5;
                }
            }
        };
        startGame.prototype.onPower = function () {
            if (GameMain.app.mWX.gameClub != null)
                GameMain.app.mWX.gameClub.hide();
            if (!GameMain.app.physicalPowerView) {
                GameMain.app.physicalPowerView = new PhysicalPowerView();
            }
            GameMain.app.physicalPowerView.refreshCoinAndPower(1);
            GameMain.app.physicalPowerView.popup();
        };
        startGame.prototype.onSK = function () {
            if (GameMain.app.mWX.gameClub != null)
                GameMain.app.mWX.gameClub.hide();
            if (this._sk && this.skView) {
                this.skView.closeT(false);
                this.skView.refresh();
                this.skView.popup();
            }
        };
        startGame.prototype.initSKDialog = function () {
            if (this._sk) {
                if (!this.skView) {
                    this.skView = new SkView();
                }
            }
        };
        startGame.prototype.initSToreDialog = function () {
            if (!this.bigStoreView) {
                this.bigStoreView = new BigStoreView();
                this.bigStoreView.init();
            }
        };
        startGame.prototype.refreshSKDialog = function () {
            if (this._sk && this.skView) {
                this.skView.refresh();
                this.skView.loopMove();
            }
        };
        startGame.prototype.onRanking = function () {
            if (GameMain.app.mWX.gameClub != null)
                GameMain.app.mWX.gameClub.hide();
            if (this.sceneRank)
                this.sceneRank.onShow(true);
        };
        startGame.prototype.initRanking = function () {
            if (!this.sceneRank) {
                this.sceneRank = new SceneRank();
                this.startGameUI.addChild(this.sceneRank);
                this.sceneRank.onShow(false);
            }
        };
        return startGame;
    }());
    pokerUI.startGame = startGame;
})(pokerUI || (pokerUI = {}));
//# sourceMappingURL=gameStart.js.map