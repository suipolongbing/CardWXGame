/**
* name
*/
var pokerEvent;
(function (pokerEvent) {
    var GameEvent = /** @class */ (function () {
        function GameEvent() {
        }
        /** 一个空的 Event 对象。用于事件派发中转使用。*/
        GameEvent.EMPTY = "EMPTY";
        //开局进入游戏
        GameEvent.OnEnterGameStart = "OnEnterGameStart";
        //点击游戏开始
        GameEvent.OnGameStart = "OnGameStart";
        //点击商店
        GameEvent.OnClickShop = "OnClickShop";
        //点击每日挑战
        GameEvent.onClickChallenge = "onClickChallenge";
        //点击设置
        GameEvent.onClickSetting = "onClickSetting";
        //点击返回主界面
        GameEvent.onClickBackToMain = "onClickBackToMain";
        //从商店返回
        GameEvent.onClickBackToMainFromShop = "onClickBackToMainFromShop";
        //主界面点击显示popupUI
        GameEvent.onClickShowPopup = "onClickShowPopup";
        //更换音乐按钮
        GameEvent.onMusicBtnChange = 'onMusicBtnChange';
        //移动卡牌到左上角动画
        GameEvent.onMoveFourAni = 'onMoveFourAni';
        //新游戏
        GameEvent.onClickNewGame = "onClickNewGame";
        //清除历史痕迹
        GameEvent.onClearHistory = 'onClearHistory';
        //重新开始
        GameEvent.onClickRetry = "onClickRetry";
        //结束游戏
        GameEvent.onClickEndGame = "onClickEndGame";
        //换卡牌尺寸
        GameEvent.onClickChangeCardSize = "onClickChangeCardSize";
        //出现明牌
        GameEvent.onMingPaiTaiJi = "onMingPaiTaiJi";
        //出现过关提示
        GameEvent.onShowTipOfJumpLevel = 'onShowTipOfJumpLevel';
        //左手模式
        GameEvent.onClickSettingLeftHandMode = "onClickLeftHandMode";
        GameEvent.onClickSettingSound = "onClickSound";
        GameEvent.onClickSettingShowTimer = "onClickShowTimer";
        GameEvent.onClickSettingThreecard = "onClickThreecard";
        GameEvent.onClickSettingVigasMode = "onClickVigasMode";
        //提示信息
        GameEvent.ShowMessage = "ShowMessage";
        //撤销
        GameEvent.onClickBackStep = "onClickBackStep";
        //设置模式
        GameEvent.isVJIASI = 'ISVJIASI';
        //清理tips
        GameEvent.ClearTips = "ClearTips";
        //购买
        GameEvent.BuyBgSkin = 'BuyBgSkin';
        GameEvent.BuyCardBackSkin = 'BuyCardBackSkin';
        //点击提示
        GameEvent.onClickTips = "onClickTips";
        //点击明牌
        GameEvent.OnClickShowAllHiddenCard = "ShowAllHiddenCard";
        //自动
        GameEvent.OnClickAutoBackToAceCardDeck = "OnClickAutoBackToAceCardDeck";
        //换底牌
        GameEvent.onChangeLastCard = "onChangeLastCard";
        //游戏胜利的时候
        GameEvent.onGameWin = "onGameWin";
        //游戏中点击商店
        GameEvent.onClickShopInGame = "onClickShopInGame";
        //点击购买
        GameEvent.OnClickBuy = "OnClickBuy";
        //点击试用
        GameEvent.OnClickTry = "OnClickTry";
        //点击试用
        GameEvent.OnClickUse = "OnClickUse";
        //购买成功
        GameEvent.OnBuySuccess = "OnBuySuccess";
        //试用成功
        GameEvent.OnTrySuccess = "OnTrySuccess";
        GameEvent.OnClickGameStartTutorial = "OnClickGameStartTutorial";
        //开始新手指引
        GameEvent.StartTutorial = "StartTutorial";
        //下一步新手指引
        GameEvent.CheckNextTutorial = "CheckNextTutorial";
        //检测是否要提示自动play
        GameEvent.CheckAutoPlay = "CheckAutoPlay";
        //刷新新手指引显示
        GameEvent.FlushTutorialRender = "FlushTutorialRender";
        //结束新手指引
        GameEvent.EndTutorial = "EndTutorial";
        //点击退出新手指引
        GameEvent.OnClickQuitTutorial = "OnClickQuitTutorial";
        //新手指引隐藏
        GameEvent.HideTutorial = "HideTutorial";
        //提示遮罩是否显示
        GameEvent.TipMaskVis = "TipMaskVis";
        //开始新手指引
        GameEvent.OnGameStartTutorial = "OnGameStartTutorial";
        //新手指引最后一步
        GameEvent.ShowLastTutorial = "ShowLastTutorial";
        //背景音乐播放
        GameEvent.PlayMusic = "PlayMusic";
        //音效播放
        GameEvent.PlaySound = "PlaySound";
        //分享微信成功
        GameEvent.onShareWeChatSuccesse = "onShareWeChatSuccesse";
        //关闭自动完成的确认窗口
        GameEvent.onClickCLoseConfirmAutoPlayUI = "onClickCLoseConfirmAutoPlayUI";
        //开始明牌
        GameEvent.ShowHiddenCard = "ShowHiddenCard";
        //加体力
        GameEvent.AddPhysicalPower = 'AddPhysicalPower';
        //更新UI中的金币数字
        GameEvent.UpdateGoldUI = "UpdateGoldUI";
        //所有TableUI加载完毕 top bottom跟 table
        GameEvent.onALLTableUILoadedDone = "onALLTableUILoadedDone";
        //某一个tableUI加载
        GameEvent.onTableUILoadedDone = "onTableUILoadedDone";
        GameEvent.onClickGoldUseShowCard = "onClickGoldUseShowCard";
        //更新首页SK动画等级
        GameEvent.onRefreshSKAniLevel = 'onRefreshSKAniLevel';
        //更新首页SK动画
        GameEvent.onRefreshStartSK = 'onRefreshStartSK';
        return GameEvent;
    }());
    pokerEvent.GameEvent = GameEvent;
})(pokerEvent || (pokerEvent = {}));
//# sourceMappingURL=GameEvent.js.map