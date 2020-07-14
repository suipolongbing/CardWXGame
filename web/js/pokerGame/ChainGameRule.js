/**
* 纸牌游戏规则
*/
var pokerGame;
(function (pokerGame) {
    var ChainGameRule = /** @class */ (function () {
        function ChainGameRule() {
            this.IsThreeCard = false; //每次三张
            this.IsVegasMode = false; //每次仅能跳过三次
            this.VegasModeJumpTime = 3; //维加斯模式下跳过次数
            var a = 'a';
            if (a == 'a')
                a = 'a';
        }
        ChainGameRule.prototype.GetConnectErroMessage = function (poker1, poker2) {
            if (poker1 == null) {
                //空的位置 只能放k
                if (poker2.data.mNum == 13) {
                    return 10004;
                }
                if (poker2.data.mNum != 0) {
                    return 10012;
                }
                return 0;
            }
            if (poker1.data.mNum != poker2.data.mNum + 1) {
                return 10002;
            }
            var IsPoker1Black = poker1.data.IsBlack() ? 1 : 0;
            var IsPoker2Black = poker2.data.IsBlack() ? 1 : 0;
            if (IsPoker1Black == IsPoker2Black) {
                return 10001;
            }
            return 0;
        };
        //是否可以连接两张牌
        ChainGameRule.prototype.IsCanConnect = function (poker1, poker2) {
            //if(poker1.data.IsKing()||poker2.data.IsKing())//国王卡，在纸牌里面没有意义
            //{
            //	return false;
            //}
            if (poker1 == null) {
                return poker2.data.mNum == 13; //空的位置 只能放k
            }
            var IsPoker1Black = poker1.data.IsBlack() ? 1 : 0;
            var IsPoker2Black = poker2.data.IsBlack() ? 1 : 0;
            if (IsPoker1Black != IsPoker2Black) {
                return poker1.data.mNum == poker2.data.mNum + 1;
            }
            else {
                //////console.log("poker1.data="+poker1.data.mType+"num="+poker1.data.mNum+" poker2.data="+poker2.data.mType+"num="+poker2.data.mNum);
            }
            return false;
        };
        ChainGameRule.prototype.GetTackBackErroMessage = function (pokerLastOneCard, pokerToTackBack) {
            if (pokerLastOneCard == null) {
                if (pokerToTackBack.data.mNum != 1) {
                    return 10003;
                }
            }
            if (pokerLastOneCard.data.mType != pokerToTackBack.data.mType) {
                return 10005;
            }
            else {
                if ((pokerLastOneCard.data.mNum + 1) != pokerToTackBack.data.mNum) {
                    return 10002;
                }
            }
        };
        //是否可以收回牌
        //pokerLastOneCard：最后一张卡，可能为空
        //pokerToTackBack:想要收回的卡
        ChainGameRule.prototype.IsCanTackBack = function (pokerLastOneCard, pokerToTackBack) {
            if (pokerLastOneCard == null) {
                return pokerToTackBack.data.mNum == 1;
            }
            if (pokerLastOneCard.data.mType == pokerToTackBack.data.mType) {
                return (pokerLastOneCard.data.mNum + 1) == pokerToTackBack.data.mNum;
            }
        };
        return ChainGameRule;
    }());
    pokerGame.ChainGameRule = ChainGameRule;
})(pokerGame || (pokerGame = {}));
//# sourceMappingURL=ChainGameRule.js.map