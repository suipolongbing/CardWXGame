/*
* name;
*/
var CheatsManager = /** @class */ (function () {
    function CheatsManager() {
    }
    Object.defineProperty(CheatsManager, "Inst", {
        get: function () {
            if (!CheatsManager._instance) {
                CheatsManager._instance = new CheatsManager();
            }
            return CheatsManager._instance;
        },
        enumerable: true,
        configurable: true
    });
    CheatsManager.prototype.SetCheat = function (id) {
        switch (id) {
            case 1:
                break;
            case 2:
                break;
        }
    };
    CheatsManager._instance = null;
    return CheatsManager;
}());
var Cheat = /** @class */ (function () {
    function Cheat() {
        this.damage = 0; //伤害
        this.heal = 0; //治疗
        this.cheatType = 0; //秘籍类型
        this.states = []; //状态
    }
    Object.defineProperty(Cheat, "Inst", {
        get: function () {
            if (!Cheat._instance) {
                Cheat._instance = new Cheat();
            }
            return Cheat._instance;
        },
        enumerable: true,
        configurable: true
    });
    Cheat.prototype.CreateDamageSkill = function (id, target, damage) {
        var s = new Cheat();
        s.cheatType = CheatType.Damage;
        s.id = id;
        s.damage = damage;
        s.cheatTarget = target;
        return s;
    };
    Cheat.prototype.CreateHealSkill = function (id, target, heal) {
        var s = new Cheat();
        s.cheatType = CheatType.Heal;
        s.id = id;
        s.damage = heal;
        s.cheatTarget = target;
        return s;
    };
    Cheat.prototype.CreateAddStateSkill = function (id, target, states) {
        var s = new Cheat();
        s.cheatType = CheatType.AddState;
        s.id = id;
        s.states = states;
        s.cheatTarget = target;
        return s;
    };
    Object.defineProperty(Cheat.prototype, "Id", {
        get: function () {
            return this.id;
        },
        enumerable: true,
        configurable: true
    });
    Cheat.prototype.SetDamage = function (value) {
        this.damage = value;
    };
    Cheat.prototype.SetHeal = function (value) {
        this.heal = value;
    };
    Object.defineProperty(Cheat.prototype, "CheatType", {
        get: function () {
            return this.cheatType;
        },
        enumerable: true,
        configurable: true
    });
    Cheat.prototype.SetCheatType = function (value) {
        this.cheatType = value;
    };
    Object.defineProperty(Cheat.prototype, "CheatTarget", {
        get: function () {
            return this.cheatTarget;
        },
        enumerable: true,
        configurable: true
    });
    Cheat.prototype.SetCheatTarget = function (value) {
        this.cheatTarget = value;
    };
    Object.defineProperty(Cheat.prototype, "States", {
        get: function () {
            return this.states;
        },
        enumerable: true,
        configurable: true
    });
    Cheat.prototype.SetStates = function (value) {
        this.states = value;
    };
    Cheat._instance = null;
    return Cheat;
}());
var State = /** @class */ (function () {
    function State(type, time) {
        this.type = type;
        this.time = time;
        this.TypeofEffect();
    }
    State.prototype.Copy = function () {
        return new State(this.type, this.time);
    };
    State.prototype.TypeofEffect = function () {
        switch (this.type) {
            case StateType.HandsHold:
                break;
            case StateType.Disregard:
                break;
        }
    };
    return State;
}());
var CheatType;
(function (CheatType) {
    CheatType[CheatType["Damage"] = 1] = "Damage";
    CheatType[CheatType["Heal"] = 2] = "Heal";
    CheatType[CheatType["AddState"] = 3] = "AddState";
})(CheatType || (CheatType = {}));
var CheatTarget;
(function (CheatTarget) {
    CheatTarget[CheatTarget["Enemy"] = 1] = "Enemy";
    CheatTarget[CheatTarget["Self"] = 2] = "Self";
})(CheatTarget || (CheatTarget = {}));
var StateType;
(function (StateType) {
    //双持武器
    StateType[StateType["HandsHold"] = 1] = "HandsHold";
    //无视上层攻击
    StateType[StateType["Disregard"] = 2] = "Disregard";
})(StateType || (StateType = {}));
//# sourceMappingURL=CheatsManager.js.map