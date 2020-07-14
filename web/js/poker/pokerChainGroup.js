/**
* name
*/
var poker;
(function (poker) {
    var pokerChainGroup = /** @class */ (function () {
        function pokerChainGroup(renderMode) {
            // ////console.log('sp31', this.data);
            this.data = new poker.pokerGroupData();
            // ////console.log('sp32', this.data);
            this.render = new poker.pokerGroupRender(renderMode);
        }
        pokerChainGroup.prototype.FlushRender = function (withSort) {
            if (withSort === void 0) { withSort = true; }
            this.render.FlushPokerList(this.data, withSort);
        };
        pokerChainGroup.prototype.GetSortedPos = function (index) {
            return this.render.GetSortedPos(index);
            //var tRet=new Laya.Point();
        };
        return pokerChainGroup;
    }());
    poker.pokerChainGroup = pokerChainGroup;
})(poker || (poker = {}));
//# sourceMappingURL=pokerChainGroup.js.map