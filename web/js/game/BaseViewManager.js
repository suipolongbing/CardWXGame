/*
* name;
*/
var BaseViewManager = /** @class */ (function () {
    function BaseViewManager() {
        this.scenes = [];
    }
    Object.defineProperty(BaseViewManager, "Inst", {
        get: function () {
            if (!this._instance) {
                this._instance = new BaseViewManager();
            }
            return this._instance;
        },
        enumerable: true,
        configurable: true
    });
    BaseViewManager.prototype.onSceneHide = function () {
        this.scenes.forEach(function (scene) {
            if (scene)
                scene.onShow(false);
        });
    };
    BaseViewManager.prototype.onSceneStore = function () {
        // this.onSceneHide();
        if (!this.sceneStore) {
            this.sceneStore = new gameStoreView();
            Laya.stage.addChild(this.sceneStore);
            this.sceneStore.zOrder = 101;
            this.scenes.push(this.sceneStore);
        }
        this.sceneStore.onShow(true);
    };
    BaseViewManager.prototype.onSceneTable = function () {
        this.onSceneHide();
        if (!this.sceneTable) {
            this.sceneTable = new gameTableView();
            Laya.stage.addChild(this.sceneTable);
            this.sceneTable.zOrder = 0;
            this.scenes.push(this.sceneTable);
        }
        this.sceneTable.onShow(true);
    };
    BaseViewManager.prototype.onSceneIndex = function () {
        if (!this.sceneIndex) {
            this.sceneIndex = new gameIndexView();
            Laya.stage.addChild(this.sceneIndex);
            this.sceneIndex.zOrder = 101;
            this.scenes.push(this.sceneIndex);
        }
        this.sceneIndex.onShow(true);
    };
    return BaseViewManager;
}());
//# sourceMappingURL=BaseViewManager.js.map