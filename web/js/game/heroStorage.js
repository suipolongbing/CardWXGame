/*
* name;
*/
var heroStorage = /** @class */ (function () {
    function heroStorage() {
        this.mainWeapon = '空手';
        this.offHandWeapon = '副手';
        this.kongfuArray = [];
        this.propsArray = [];
        //是否是功法生成且会持续减少的护盾
        this.specialShield = 0;
        //获得幸运BUFF
        this.luckyBuffTime = 0;
    }
    Object.defineProperty(heroStorage, "Inst", {
        get: function () {
            if (!this._instance) {
                this._instance = new heroStorage();
            }
            return this._instance;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * 每次行动后执行BUFF效果
     */
    heroStorage.prototype.StateEffect = function (cardType) {
        //功法执行顺序需要排序
        var array = this.SortCheatOrder();
        for (var index = 0; index < array.length; index++) {
            this.DealStateGruop(array, index, cardType);
        }
        return true;
    };
    heroStorage.prototype.SortCheatOrder = function () {
        var newArray = this.kongfuArray.concat();
        newArray.forEach(function (element, index) {
            if (element.id == 5) {
                MathUtils.SwapItems(newArray, index, 0);
            }
        });
        newArray.forEach(function (element, index) {
            if (element.id == 3) {
                MathUtils.SwapItems(newArray, index, 0);
            }
        });
        newArray.forEach(function (element, index) {
            if (element.id == 8) {
                MathUtils.SwapItems(newArray, index, 0);
            }
        });
        newArray.forEach(function (element, index) {
            if (element.id == 2) {
                MathUtils.SwapItems(newArray, index, 0);
            }
        });
        newArray.forEach(function (element, index) {
            if (element.id == 6) {
                MathUtils.SwapItems(newArray, index, 0);
            }
        });
        return newArray;
    };
    /**
     * 处理功法效果
     */
    heroStorage.prototype.DealStateGruop = function (array, index, cardType) {
        var _this = this;
        var name = array[index].name;
        //是否可以主动开启
        if (array[index].isItv) {
        }
        else {
            switch (array[index].id) {
                case 1:
                    this.SetHandsHold(true);
                    break;
                case 2:
                    if (this.Action) {
                        return;
                    }
                    if (this.BattleValue > 0) {
                        var hp = Math.floor(this.BattleValue / 2);
                        if (hp <= 1) {
                            hp = 1;
                        }
                        BaseViewManager.Inst.sceneTable.LaunchCheatWithUI(true, { name: name, index: index, num: hp }, function () {
                            heroStorage.Inst.SetHp(hp);
                            heroStorage.Inst.SetBattleValue(0);
                        });
                    }
                    break;
                case 3:
                    if (this.Action) {
                        return;
                    }
                    if (this.Weapon != '空手' || this.OffHandWeapon != '副手') {
                        BaseViewManager.Inst.sceneTable.LaunchCheatWithUI(true, { name: name, index: index, num: 1 }, function () {
                            if (_this.Weapon != '空手' || _this.OffHandWeapon != '副手') {
                                // console.log("handsix")
                                heroStorage.Inst.SetExtraAtk(1, true);
                            }
                            else {
                                if (_this.ExtraAtk != 0) {
                                    _this.SetHp(_this.ExtraAtk);
                                }
                                _this.SetExtraAtk(0, false);
                            }
                        });
                    }
                    else {
                        if (this.ExtraAtk != 0) {
                            this.SetHp(this.ExtraAtk);
                        }
                        this.SetExtraAtk(0, false);
                    }
                    break;
                case 4:
                    if (this.Hp <= Math.ceil(this.CompleteHp * 0.2) && array[index].cd == 5) {
                        BaseViewManager.Inst.sceneTable.LaunchCheatWithUI(true, { name: name, index: index, num: 5 }, function () {
                            heroStorage.Inst.kongfuArray[index].cd = 0;
                            heroStorage.Inst.specialShield = 5;
                            heroStorage.Inst.SetShiled(5, false);
                        });
                    }
                    else if (array[index].cd < 5) {
                        array[index].cd++;
                        if (this.specialShield != 0) {
                            this.SetShiled(-1, true);
                        }
                        if (array[index].cd >= 5) {
                            array[index].cd = 5;
                            this.specialShield = 0;
                        }
                    }
                    break;
                case 5:
                    if (this.Action) {
                        return;
                    }
                    BaseViewManager.Inst.sceneTable.LaunchCheatWithUI(true, { name: name, index: index, num: 1 }, function () {
                        heroStorage.Inst.SetHp(1);
                    });
                    break;
                case 6:
                    if (cardType == PokerType.enemy) {
                        BaseViewManager.Inst.sceneTable.LaunchCheatWithUI(true, { name: name, index: index, num: -1 }, function () {
                            heroStorage.Inst.SetReduceValue(1);
                        });
                    }
                    break;
                case 7:
                    this.SetDisregard(true);
                    break;
                case 8:
                    if (this.Action) {
                        return;
                    }
                    if (this.BattleEnemyHp > 0 && cardType == PokerType.enemy) {
                        var hp = Math.floor(this.BattleEnemyHp * 0.1);
                        if (hp <= 1) {
                            hp = 1;
                        }
                        BaseViewManager.Inst.sceneTable.LaunchCheatWithUI(true, { name: name, index: index, num: hp }, function () {
                            heroStorage.Inst.SetHp(hp);
                            _this.SetBattleEnemyHp(0);
                        });
                    }
                    break;
            }
        }
    };
    Object.defineProperty(heroStorage.prototype, "Hp", {
        get: function () {
            return this.hp + this.ExtraHp;
        },
        enumerable: true,
        configurable: true
    });
    heroStorage.prototype.SetHp = function (value) {
        this.hp += value;
        if (this.hp >= this.completeHp) {
            this.hp = this.completeHp;
        }
    };
    Object.defineProperty(heroStorage.prototype, "Shiled", {
        get: function () {
            return this.shiled;
        },
        enumerable: true,
        configurable: true
    });
    heroStorage.prototype.SetShiled = function (value, isSum) {
        if (isSum) {
            this.shiled += value;
            if (value < 0) {
                this.specialShield -= value;
                if (this.specialShield <= 0) {
                    this.specialShield = 0;
                }
            }
            if (this.shiled <= 0) {
                this.shiled = 0;
            }
        }
        else {
            this.shiled = value;
        }
    };
    Object.defineProperty(heroStorage.prototype, "Atk", {
        get: function () {
            if (this.Weapon != '空手') {
                return this.atk + this.ExtraAtk;
            }
            else {
                return this.atk;
            }
        },
        enumerable: true,
        configurable: true
    });
    heroStorage.prototype.SetAtk = function (value, isSum) {
        if (isSum) {
            this.atk += value;
            if (this.atk <= 0) {
                // console.log("handfive")
                this.mainWeapon = '空手';
                this.atk = 0;
            }
        }
        else {
            this.atk = value;
        }
    };
    Object.defineProperty(heroStorage.prototype, "OtherAtk", {
        get: function () {
            if (this.OffHandWeapon != '副手') {
                return this.otherAtk + this.ExtraAtk;
            }
            else {
                return this.otherAtk;
            }
        },
        enumerable: true,
        configurable: true
    });
    heroStorage.prototype.SetOtherAtk = function (value, isSum) {
        if (isSum) {
            this.otherAtk += value;
            if (this.otherAtk <= 0) {
                this.offHandWeapon = '副手';
                this.otherAtk = 0;
            }
        }
        else {
            this.otherAtk = value;
        }
    };
    Object.defineProperty(heroStorage.prototype, "IsMain", {
        get: function () {
            return this.isMain;
        },
        enumerable: true,
        configurable: true
    });
    heroStorage.prototype.SetMain = function (bool) {
        this.isMain = bool;
    };
    Object.defineProperty(heroStorage.prototype, "Coin", {
        get: function () {
            return this.coin;
        },
        enumerable: true,
        configurable: true
    });
    heroStorage.prototype.SetCoin = function (value) {
        if (this.LuckyBuffTime > 0) {
            value *= 2;
        }
        this.coin += value;
    };
    Object.defineProperty(heroStorage.prototype, "CompleteHp", {
        get: function () {
            return this.completeHp;
        },
        enumerable: true,
        configurable: true
    });
    heroStorage.prototype.SetCompleteHp = function (value) {
        this.completeHp += value;
    };
    heroStorage.prototype.SetWeapon = function (value) {
        this.mainWeapon = value;
    };
    Object.defineProperty(heroStorage.prototype, "Weapon", {
        get: function () {
            return this.mainWeapon;
        },
        enumerable: true,
        configurable: true
    });
    heroStorage.prototype.SetOffHandWeapon = function (value) {
        this.offHandWeapon = value;
    };
    Object.defineProperty(heroStorage.prototype, "OffHandWeapon", {
        get: function () {
            return this.offHandWeapon;
        },
        enumerable: true,
        configurable: true
    });
    heroStorage.prototype.SetFloor = function () {
        this.floor += 1;
    };
    Object.defineProperty(heroStorage.prototype, "Floor", {
        get: function () {
            return this.floor;
        },
        enumerable: true,
        configurable: true
    });
    heroStorage.prototype.SetExtraHp = function (value) {
        this.extraHp += value;
    };
    Object.defineProperty(heroStorage.prototype, "ExtraHp", {
        get: function () {
            return this.extraHp;
        },
        enumerable: true,
        configurable: true
    });
    heroStorage.prototype.SetExtraAtk = function (value, isSum) {
        if (!isSum) {
            this.extraAtk = value;
        }
        else {
            this.extraAtk += value;
        }
    };
    Object.defineProperty(heroStorage.prototype, "ExtraAtk", {
        get: function () {
            return this.extraAtk;
        },
        enumerable: true,
        configurable: true
    });
    heroStorage.prototype.SetHandsHold = function (bool) {
        this.isHandsHold = bool;
    };
    Object.defineProperty(heroStorage.prototype, "IsHandsHold", {
        get: function () {
            return this.isHandsHold;
        },
        enumerable: true,
        configurable: true
    });
    heroStorage.prototype.SetDisregard = function (bool) {
        this.isDisregard = bool;
    };
    Object.defineProperty(heroStorage.prototype, "IsDisregard", {
        get: function () {
            return this.isDisregard;
        },
        enumerable: true,
        configurable: true
    });
    heroStorage.prototype.SetBattleValue = function (value) {
        this.battleValue = value;
    };
    Object.defineProperty(heroStorage.prototype, "BattleValue", {
        get: function () {
            return this.battleValue;
        },
        enumerable: true,
        configurable: true
    });
    heroStorage.prototype.SetBattleEnemyHp = function (value) {
        this.battleEnemyHp = value;
    };
    Object.defineProperty(heroStorage.prototype, "BattleEnemyHp", {
        get: function () {
            return this.battleEnemyHp;
        },
        enumerable: true,
        configurable: true
    });
    heroStorage.prototype.SetReduceValue = function (value) {
        this.reduceValue = value;
    };
    Object.defineProperty(heroStorage.prototype, "ReduceValue", {
        get: function () {
            return this.reduceValue;
        },
        enumerable: true,
        configurable: true
    });
    heroStorage.prototype.SetAction = function (bool) {
        this.action = bool;
    };
    Object.defineProperty(heroStorage.prototype, "Action", {
        get: function () {
            return this.action;
        },
        enumerable: true,
        configurable: true
    });
    heroStorage.prototype.SetLuckyBuffTime = function (isReduce, value) {
        if (isReduce) {
            this.luckyBuffTime--;
            if (this.luckyBuffTime <= 0) {
                this.luckyBuffTime = 0;
            }
        }
        else {
            this.luckyBuffTime = value;
        }
    };
    Object.defineProperty(heroStorage.prototype, "LuckyBuffTime", {
        get: function () {
            return this.luckyBuffTime;
        },
        enumerable: true,
        configurable: true
    });
    heroStorage.prototype.SetKongFuArray = function (value) {
        var _this = this;
        CardConstant.CardTreasure.forEach(function (element, index) {
            if (element.name == value) {
                _this.kongfuArray.push(element);
            }
        });
    };
    Object.defineProperty(heroStorage.prototype, "KongFuArray", {
        get: function () {
            return this.kongfuArray;
        },
        enumerable: true,
        configurable: true
    });
    heroStorage.prototype.SetPropsArray = function (value) {
        var _this = this;
        CardConstant.CardStore.forEach(function (element, index) {
            //console.log("propsArray:", element.name, value)
            if (element.name == value) {
                _this.propsArray.push(element);
            }
        });
    };
    Object.defineProperty(heroStorage.prototype, "PropsArray", {
        get: function () {
            return this.propsArray;
        },
        enumerable: true,
        configurable: true
    });
    heroStorage.prototype.initHeroStorage = function (isNext) {
        // console.log("isNext:", isNext)
        this.shiled = 0;
        this.atk = 0;
        this.otherAtk = 0;
        if (!isNext) {
            this.kongfuArray = [];
            this.propsArray = [];
            this.completeHp = 10;
            this.hp = 10;
            this.coin = 0;
        }
        else {
            this.SetHp(10);
        }
        // CardConstant.CardTreasure.forEach((element: any, index: number) => {
        //     if (index > 0) {
        // this.kongfuArray.push(CardConstant.CardTreasure[1], CardConstant.CardTreasure[3]);
        //     }
        // });
        // CardConstant.CardStore.forEach((element: any, index: number) => {
        // if (index > 0) {
        // this.propsArray.push(CardConstant.CardStore[1], CardConstant.CardStore[2], CardConstant.CardStore[2], CardConstant.CardStore[2], CardConstant.CardStore[3]);
        //     }
        // });
        this.mainWeapon = '空手';
        this.offHandWeapon = '副手';
        this.floor = 0;
        this.extraHp = 0;
        this.extraAtk = 0;
        this.isDisregard = false;
        this.isHandsHold = false;
        this.battleValue = 0;
        this.battleEnemyHp = 0;
        this.reduceValue = 0;
        this.action = false;
        this.isMain = true;
    };
    return heroStorage;
}());
//# sourceMappingURL=heroStorage.js.map