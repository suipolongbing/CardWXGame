var pokerRender = poker.pokerRender;
/**
* 接龙用的扑克结构体
*/
var poker;
(function (poker) {
    var pokerChain = /** @class */ (function () {
        function pokerChain(type, num) {
            var a = 'a';
            if (a == 'a')
                a = 'a';
            this.data = new poker.pokerdata(type, num);
        }
        pokerChain.prototype.Dispose = function () {
            if (this.render != null) {
                this.render.Dispose();
            }
        };
        pokerChain.prototype.CreateRender = function () {
            this.render = new poker.pokerRender();
            this.render.ChangeRenderByData(this.data);
            //console.log("baibaibai1")
        };
        pokerChain.prototype.CreateAtk = function (value) {
            if (this.data != null) {
                this.data.SetAtk(value);
            }
        };
        pokerChain.prototype.CreateHurt = function (value) {
            if (this.data != null) {
                this.data.SetHurt(value);
            }
        };
        pokerChain.prototype.FlushRender = function () {
            if (this.render == null) {
                this.CreateRender();
            }
            else {
                this.render.ChangeRenderByData(this.data);
                //console.log("baibaibai2")
            }
        };
        return pokerChain;
    }());
    poker.pokerChain = pokerChain;
})(poker || (poker = {}));
//# sourceMappingURL=pokerChain.js.map