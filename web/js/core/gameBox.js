/**
 * 小游戏中显示游戏盒子页面所有接口说明：
 *
 * 1. 在bin/ultima/放入 MoreGame.js
 * 2. 在index.html 中 加入
 * <!--用户自定义顺序文件添加到这里-->
 * <!--jsfile--Custom-->
        <script type="text/javascript" src="ultima/MoreGame.min.js"></script>
 * <!--jsfile--Custom-->
 *
**/
var gameBox = /** @class */ (function () {
    function gameBox() {
    }
    /**
     * 所有广告入口都需要换（摇摆广告和抽屉广告需要根据审核版本开关关闭和打开）
     * @param appid 对应游戏的appid，没有可以传空字符串
     * @param groupList 已经获取到的游戏列表 lauch 中返回的 games_box 列表
     * @param gname 游戏名称 如： 神鲲
     */
    gameBox.showBoxPage = function (appid, groupList, gname, zorder) {
        if (zorder === void 0) { zorder = 9; }
        if (!gameBox.showBefore())
            return;
        // 显示盒子页面
        MoreGame.ShowList(groupList, gname, WriteBoxList.mWriteBox, appid, new Laya.Handler(this, gameBox.CloseBox), zorder);
        return;
    };
    // 显示之前
    gameBox.showBefore = function () {
        if (GameMain.app.mWX.gameClub != null)
            GameMain.app.mWX.gameClub.hide();
        // if (GameMain.app.gameInstance.sceneMenu != null)
        //     GameMain.app.gameInstance.sceneMenu.luntan.visible = false;
        // if (GameMain.app.gameInstance.sceneEnd != null && GameMain.app.gameInstance.sceneEnd.visible) {
        //     GameMain.app.gameInstance.sceneEnd.hideADBanner();
        // }
        // if (GameMain.app.gameInstance.sceneMenu != null && GameMain.app.gameInstance.sceneMenu.visible) {
        //     GameMain.app.gameInstance.sceneMenu.hideADBanner();
        // }
        return true;
    };
    // 关闭回调
    gameBox.CloseBox = function () {
        // if (!GameMain.app.isQun) {
        //     if (GameMain.app.gameInstance.sceneEnd != null) {
        //         if (GameMain.app.gameInstance.sceneEnd.visible) {
        //         } else {
        if (GameMain.app.mWX.gameClub != null)
            GameMain.app.mWX.gameClub.show();
        // if (GameMain.app.gameInstance.sceneMenu != null)
        //     GameMain.app.gameInstance.sceneMenu.luntan.visible = true;
        //         }
        //     } else {
        //         if (GameMain.app.mWX.gameClub != null) GameMain.app.mWX.gameClub.show();
        //         // if (GameMain.app.gameInstance.sceneMenu != null)
        //         //     GameMain.app.gameInstance.sceneMenu.luntan.visible = true;
        //     }
        // } else {
        //     GameMain.app.isQun = false;
        // }
        // if (GameMain.app.gameInstance.sceneEnd != null && GameMain.app.gameInstance.sceneEnd.visible) {
        //     GameMain.app.gameInstance.sceneEnd.showADBanner();
        // }
        // if (GameMain.app.gameInstance.sceneMenu != null && GameMain.app.gameInstance.sceneMenu.visible) {
        //     GameMain.app.gameInstance.sceneMenu.showADBanner();
        // }
    };
    return gameBox;
}());
//# sourceMappingURL=gameBox.js.map