/*
* name;
*/
var CardConstant = /** @class */ (function () {
    function CardConstant() {
    }
    CardConstant.CardCK = [
        "默认",
        { name: "敌人1", desc: "功夫低微的帮众", num: [1, 3] },
        { name: "敌人2", desc: "能力不错的堂主", num: [2, 4] },
        { name: "敌人3", desc: "武功高强的舵主", num: [3, 5] },
        { name: "敌人4", desc: "长老", num: [6, 9] },
        { name: "敌人5", desc: "执法队护法", num: [10, 12] },
        { name: "敌人6", desc: "掌门", num: [13, 15] },
    ];
    CardConstant.CardCoin = [
        { name: "碎银", desc: "商店购买物品时可用" },
    ];
    CardConstant.CardBlood = [
        { name: "篝火", desc: "坐下休息能够回复生命" },
    ];
    CardConstant.CardWeapon = [
        "默认",
        { name: "短刀", desc: "很短的刀，适合刺客使用", num: [1, 3] },
        { name: "长剑", desc: "很长的剑，可突刺", num: [2, 5] },
        { name: "长刀", desc: "十分沉重，适合大力劈砍", num: [3, 5] },
        { name: "长枪", desc: "兵器之王，如运用得当无人可近身", num: [4, 7] },
        { name: "大斧", desc: "大概只有力大无穷的人才适合使用吧", num: [5, 9] },
    ];
    CardConstant.CardTreasure = [
        { id: 0, name: "默认", desc: "功法" },
        { id: 1, name: "功法1", desc: "可双持武器，抵抗两次攻击，拾取武器会优先替换掉攻击力低的那一把", type: TreasureType.KongFu, isItv: false, price: 5 },
        { id: 2, name: "功法2", desc: "攻击或受到攻击，伤害结算后血量回复本次损失血量的一半数值", type: TreasureType.KongFu, isItv: false, price: 5 },
        { id: 3, name: "功法3", desc: "在持有武器的情况下，每次行动后提升武器1点伤害，武器使用后回复累计数值的生命值", type: TreasureType.KongFu, isItv: false, price: 5 },
        { id: 4, name: "功法4", desc: "生命值在20%以下时，获得一个+5的护盾，每次行动会减少一点护盾值，减到0会自动销毁，护盾被打破或销毁后该功法冷却5回合", type: TreasureType.KongFu, isItv: false, cd: 5, price: 5 },
        { id: 5, name: "功法5", desc: "每次行动后回复1点生命值", type: TreasureType.KongFu, isItv: false, price: 5 },
        { id: 6, name: "功法6", desc: "敌人对你造成的伤害会减少1点", type: TreasureType.KongFu, isItv: false, price: 5 },
        { id: 7, name: "功法7", desc: "敌人不会主动攻击", type: TreasureType.KongFu, isItv: false, price: 5 },
        { id: 8, name: "功法8", desc: "主动击败敌人后回复敌人生命值10%的血量", type: TreasureType.KongFu, isItv: false, price: 5 },
    ];
    CardConstant.CardStore = [
        { id: 0, name: "商店", desc: "可花费碎银购买物品" },
        { id: 1, name: "道具1", desc: "使用后回复5点生命", type: TreasureType.Props, price: 5, isItv: true },
        { id: 2, name: "道具2", desc: "使用后生命值上限+5", type: TreasureType.Props, price: 5, isItv: true },
        { id: 3, name: "道具3", desc: "选择上层的任意一个敌人，造成8点伤害", type: TreasureType.Props, price: 5, isItv: true },
        { id: 4, name: "道具4", desc: "选择上层的任意一张牌，更换成新的牌", type: TreasureType.Props, price: 5, isItv: true },
        { id: 5, name: "道具5", desc: "转移当前玩家路线，可选择更换到另外两个路线", type: TreasureType.Props, price: 5, isItv: true },
        { id: 6, name: "道具6", desc: "使用后获得幸运buff，获得金币数量翻倍，行动3次后消失", type: TreasureType.Props, price: 5, isItv: true },
        { id: 7, name: "道具7", desc: "剩下的所有卡牌按照原来的位置重新洗牌", type: TreasureType.Props, price: 5, isItv: true },
        { id: 8, name: "道具8", desc: "使用后获得+5护盾", type: TreasureType.Props, price: 5, isItv: true },
    ];
    CardConstant.CardSpecial = [
        { id: 0, name: "特殊物品", desc: "一般是剧情赠送或者特定的商店才能购买" },
        { id: 1, name: "道具998", desc: "商店购物打9折", type: TreasureType.Props, price: 0, isItv: false },
        { id: 2, name: "道具999", desc: "在遭受一次死亡攻击后，免疫此次伤害，血量变为1，使用后销毁", type: TreasureType.Props, price: 5, isItv: true },
        { id: 3, name: "碎岩拳法", desc: "无法使用武器，每次拾取武器会给空手增加武器攻击力一半的伤害，可叠加", type: TreasureType.KongFu, price: 5, isItv: false },
        { id: 4, name: "血蝉经", desc: "可主动开启或关闭，开启后血量-1点，伤害+1点，每次行动后翻倍", type: TreasureType.KongFu, price: 0, isItv: true },
    ];
    return CardConstant;
}());
// 宝物：
// 绝影披风：敌人不会主动攻击
// 嗜血宝珠：击败敌人可回复敌人生命值10%的血量
// 元宝护符：商店购物打9折
// 酒：可主动使用，回复5点生命，使用后销毁
// 诡木牌：在遭受一次死亡攻击后，免疫此次伤害，血量变为1，使用后销毁
// 庇护羽衣：生命值上限+5
// 功法：
// 血蝉经：可主动开启或关闭，开启后血量-1点，伤害+1点，每回合翻倍
// 左右互搏心法：可双持武器，抵抗两次攻击，拾取武器会优先替换掉攻击力低的那一把
// 金丹神功：受到伤害后，下回合回复50%伤害量的血量
// 龙吟虎啸诀：在持有武器的情况下，每回合提升武器1点伤害，武器使用后回复累计数值的生命值
// 金刚剑经：生命值在20%以下时，出现一个+5的护盾，护盾被打破后冷却5回合
// 碎岩拳法：无法使用武器，每次拾取武器会给空手增加武器50%的伤害，可叠加
//# sourceMappingURL=CardConstant.js.map