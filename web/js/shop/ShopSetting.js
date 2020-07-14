/*
* name;
*/
var ShopSetting = /** @class */ (function () {
    function ShopSetting() {
    }
    ShopSetting.shopListArray = new Array();
    ShopSetting.nowUseBg = null; //现在用的背景
    ShopSetting.nowCardBack = null; //现在用的卡背
    ShopSetting.nowcoin = 0; //现在剩余的金币
    ShopSetting.nowPpower = null; //体力
    ShopSetting.nowPowerMax = null; //最大体力
    ShopSetting.nowPowerConsume = null; //消耗体力
    ShopSetting.powerStyle = null; //体力消耗方式
    ShopSetting.powerRecoverTime = null; //体力恢复的总时间
    ShopSetting.powerLabel = ''; //体力恢复的时间
    ShopSetting.powerConsumeTime = null; //体力消耗的当前时间
    ShopSetting.LevelSK = [
        { 'NAME': '乞丐', 'LIMIT': 0 },
        { 'NAME': '棋牌老头', 'LIMIT': 3 },
        { 'NAME': '老农', 'LIMIT': 5 },
        { 'NAME': '地痞', 'LIMIT': 7 },
        { 'NAME': '滑头', 'LIMIT': 9 },
        { 'NAME': '新星', 'LIMIT': 12 },
        { 'NAME': '包租婆', 'LIMIT': 15 },
        { 'NAME': '女神', 'LIMIT': 18 },
        { 'NAME': '老头', 'LIMIT': 22 },
        { 'NAME': '赌徒', 'LIMIT': 27 },
        { 'NAME': '赌侠', 'LIMIT': 32 },
        { 'NAME': '赌王', 'LIMIT': 38 },
        { 'NAME': '赌神', 'LIMIT': 44 },
        { 'NAME': '赌尊', 'LIMIT': 50 },
        { 'NAME': '赌仙', 'LIMIT': 57 },
        { 'NAME': '赌圣', 'LIMIT': 65 },
        { 'NAME': '赌帝', 'LIMIT': 73 },
        { 'NAME': '千王之王', 'LIMIT': 81 },
        { 'NAME': '神之手', 'LIMIT': 90 },
        { 'NAME': '世外高人', 'LIMIT': 100 },
    ];
    ShopSetting.LevelNow = 0;
    return ShopSetting;
}());
//# sourceMappingURL=ShopSetting.js.map