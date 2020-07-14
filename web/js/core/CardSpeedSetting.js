/*
* 调整各种动画速度;
*/
var CardSpeedSetting = /** @class */ (function () {
    function CardSpeedSetting() {
    }
    //默认速度(必须填)
    CardSpeedSetting.speed0 = 150;
    //右上角牌组翻牌到堆的速度
    CardSpeedSetting.speed2 = 150;
    //右上角牌堆的牌左移的速度
    CardSpeedSetting.speed6 = 90;
    //撤回牌移动速度
    CardSpeedSetting.speed3 = 200;
    //撤回翻牌速度
    CardSpeedSetting.speed8 = 100;
    //结束牌自动移动速度
    CardSpeedSetting.speed4 = 200;
    //结束左上角牌堆的牌向左移动的速度
    CardSpeedSetting.speed5 = 200;
    //下面的牌移动速度
    CardSpeedSetting.speed1 = 150;
    //下面的牌翻牌速度（第一种情况，点击并翻牌）
    CardSpeedSetting.speed7 = 75;
    //下面的牌翻牌速度（第二种情况，拖拽后翻牌）
    CardSpeedSetting.speed9 = 150;
    //发牌速度
    CardSpeedSetting.speed10 = 300;
    return CardSpeedSetting;
}());
//# sourceMappingURL=CardSpeedSetting.js.map