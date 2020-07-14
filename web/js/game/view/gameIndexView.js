var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
/*
* name;
*/
var gameIndexView = /** @class */ (function (_super) {
    __extends(gameIndexView, _super);
    function gameIndexView() {
        var _this = _super.call(this) || this;
        _this.height = Laya.stage.height;
        return _this;
    }
    gameIndexView.prototype.onShow = function (bool) {
        if (bool) {
            this.visible = true;
            this.addEvent();
            this.initRepeat();
        }
        else {
            this.visible = false;
            this.removeEvent();
        }
    };
    gameIndexView.prototype.addEvent = function () {
        this.starttBtn.on(Laya.Event.CLICK, this, this.onStartGame);
    };
    gameIndexView.prototype.removeEvent = function () {
    };
    gameIndexView.prototype.initRepeat = function () {
    };
    gameIndexView.prototype.onStartGame = function () {
        BaseViewManager.Inst.onSceneTable();
        BaseViewManager.Inst.sceneTable.startGame(false);
    };
    return gameIndexView;
}(ui.game.gameIndexUI));
//# sourceMappingURL=gameIndexView.js.map