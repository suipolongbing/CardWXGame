//扑克类型
var PokerType;
(function (PokerType) {
    PokerType[PokerType["enemy"] = 1] = "enemy";
    PokerType[PokerType["blood"] = 2] = "blood";
    PokerType[PokerType["atk"] = 3] = "atk";
    PokerType[PokerType["store"] = 4] = "store";
    PokerType[PokerType["treasure"] = 5] = "treasure";
    PokerType[PokerType["coin"] = 6] = "coin";
    PokerType[PokerType["shiled"] = 7] = "shiled"; //护盾
})(PokerType || (PokerType = {}));
var TreasureType;
(function (TreasureType) {
    TreasureType[TreasureType["Props"] = 0] = "Props";
    TreasureType[TreasureType["KongFu"] = 1] = "KongFu";
})(TreasureType || (TreasureType = {}));
var poker;
(function (poker) {
    //扑克数学数据
    var pokerdata = /** @class */ (function () {
        function pokerdata(vType, vNum) {
            this.IsCardBack = false; //是否为卡背面
            this.mLast = false; //是否在最底下
            var a = 'a';
            if (a == 'a')
                a = 'a';
            this.mType = vType;
            this.mNum = vNum;
            this.mFloor = 0;
            this.mAtk = 0;
            this.mHurt = 0;
        }
        pokerdata.prototype.RestartInit = function () {
            this.mType = PokerType.coin;
            this.mNum = 1;
            this.mFloor = 0;
            this.mAtk = 0;
            this.mHurt = 0;
            this.IsCardBack = false;
        };
        pokerdata.prototype.SetData = function (data) {
            this.mType = data.mType;
            this.mNum = data.mNum;
        };
        pokerdata.prototype.SetAtk = function (value) {
            this.mAtk = value;
        };
        pokerdata.prototype.SetHurt = function (value) {
            this.mHurt = value;
        };
        pokerdata.prototype.SetFloor = function (value) {
            this.mFloor = value;
        };
        pokerdata.prototype.SetCardBack = function (bool) {
            this.IsCardBack = bool;
        };
        pokerdata.prototype.SetIsLast = function (bool) {
            this.mLast = bool;
        };
        pokerdata.Getkey = function (type, num) {
            return type * 1000 + num;
        };
        pokerdata.prototype.Getkey = function () {
            return this.mType * 1000 + this.mNum;
        };
        pokerdata.prototype.Clone = function () {
            return new pokerdata(this.mType, this.mNum);
        };
        pokerdata.prototype.IsLast = function () {
            return this.mLast;
        };
        return pokerdata;
    }());
    poker.pokerdata = pokerdata;
})(poker || (poker = {}));
//# sourceMappingURL=pokerdata.js.map