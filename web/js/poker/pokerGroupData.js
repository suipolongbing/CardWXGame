/**
* 一组扑克的数据
*/
var poker;
(function (poker_1) {
    var pokerGroupData = /** @class */ (function () {
        function pokerGroupData(vpokerList) {
            if (vpokerList === void 0) { vpokerList = null; }
            var a = 'a';
            if (a == 'a')
                a = 'a';
            if (vpokerList != null) {
                this.pokerList = vpokerList;
            }
            else {
                this.pokerList = new Array();
            }
        }
        //从初始化的卡组中快速寻找卡
        pokerGroupData.prototype.FindCardFromFormatCardIndex = function (type, num) {
            // var index = Math.floor((num - 1) * 4 + <number>(type - 1));
            // return index;
            for (var _i = 0, _a = this.pokerList; _i < _a.length; _i++) {
                var item = _a[_i];
                if (item.data.mType == type && item.data.mNum == num) {
                    return item;
                }
            }
            return null;
        };
        pokerGroupData.prototype.Dispose = function () {
            for (var i = 0; i < this.pokerList.length; i++) {
                this.pokerList[i].Dispose();
            }
            this.pokerList.splice(0);
        };
        //连接
        pokerGroupData.prototype.Concat = function (vGroupData) {
            this.pokerList = this.pokerList.concat(vGroupData.pokerList);
            vGroupData.pokerList.splice(0);
        };
        //最后一张卡不是正面,就显示为正面
        pokerGroupData.prototype.SetLastCardFrontIfNot = function () {
            var lastcard = this.GetLastCard();
            if (lastcard == null) {
                return;
            }
            if (lastcard.data.IsCardBack) {
                lastcard.data.IsCardBack = false;
                if (!GameMain.app.isNotDraging) {
                    // ////console.log('??????????????');
                    GameMain.app.isBackToFront = true;
                }
            }
        };
        //设置最后三张卡显示正面
        pokerGroupData.prototype.SetLastThreeCardToFrontIfNot = function () {
            var lastindex = this.pokerList.length - 1;
            for (var i = lastindex - 2; i < this.pokerList.length; i++) {
                if (i >= 0) {
                    if (this.pokerList[i].data.IsCardBack) {
                        this.pokerList[i].data.IsCardBack = false;
                    }
                }
            }
        };
        pokerGroupData.prototype.RemoveAllCardRender = function () {
            this.pokerList.forEach(function (element) {
                element.render.img.removeSelf();
            });
        };
        //刷新所有卡片的render
        pokerGroupData.prototype.FlushAllCardRender = function () {
            this.pokerList.forEach(function (element) {
                element.render.ChangeRenderByData(element.data);
            });
            //console.log("baibaibai3")
            // if (pokerRender.rsty == 1) {
            // 	for (let index = 0; index < this.pokerList.length; index++) {
            // 		if (index == this.pokerList.length - 1) {
            // 			pokerRender.ReadSkin(1, true);
            // 		} else {
            // 			pokerRender.ReadSkin(1, false);
            // 		}
            // 		this.pokerList[index].render.ChangeRenderByData(this.pokerList[index].data);
            // 	}
            // }
        };
        pokerGroupData.prototype.SetAllCardToBack = function () {
            this.pokerList.forEach(function (element) {
                if (!element.data.IsCardBack) {
                    element.data.IsCardBack = true;
                }
            });
        };
        pokerGroupData.prototype.SetAllCardToFront = function () {
            this.pokerList.forEach(function (element) {
                if (element.data.IsCardBack) {
                    element.data.IsCardBack = false;
                }
            });
        };
        //最后一张卡不是背面,就显示为背面
        pokerGroupData.prototype.SetLastCardBackIfNot = function () {
            var lastcard = this.GetLastCard();
            if (lastcard == null) {
                return;
            }
            if (!lastcard.data.IsCardBack) {
                lastcard.data.IsCardBack = true;
            }
        };
        //只让最后一张卡显示正面,其他都是背面
        pokerGroupData.prototype.SetOnlyLastCardFront = function () {
            for (var i = 0; i < this.pokerList.length; i++) {
                var poker = this.pokerList[i];
                poker.data.IsCardBack = ((i + 1) != this.pokerList.length);
                // if (i == this.pokerList.length - 1) {
                // 	var rd = this.pokerList[this.pokerList.length - 1].render;
                // 	var ifname = pokerRender.cardSkinName + pokerRender.GetImgFileName(this.pokerList[this.pokerList.length - 1].data);
                // 	rd.img.skin = '';
                // 	rd.img.size(102, 152);
                // 	rd.shadowImg1.visible = false;
                // 	var x1: Laya.Image;
                // 	var x2: Laya.Image;
                // 	if (!x1) {
                // 		x1 = new Laya.Image();
                // 	}
                // 	if (!x2) {
                // 		x2 = new Laya.Image();
                // 	}
                // 	x1.size(rd.img.width, rd.img.height);
                // 	x2.size(rd.img.width, rd.img.height);
                // 	x1.skin = pokerRender.backSkinName;
                // 	x2.skin = ifname;
                // 	rd.img.addChild(x1);
                // 	rd.img.addChild(x2);
                // 	x1.scaleX = 1;
                // 	x2.scaleX = 0;
                // 	x1.anchorX = 0.5;
                // 	x2.anchorX = 0.5;
                // 	x1.pos(x1.width / 2, 0);
                // 	x2.pos(x2.width / 2, 0);
                // 	Laya.Tween.to(x1, { scaleX: 0 }, 150, Laya.Ease.linearIn, new Laya.Handler(this, function () {
                // 		Laya.Tween.to(x2, { scaleX: 1 }, 150, Laya.Ease.linearOut, new Laya.Handler(this, function () {
                // 			x1.removeSelf();
                // 			x2.removeSelf();
                // 			x1 = null;
                // 			x2 = null;
                // 			var newSkinName = ifname;
                // 			if (rd.img.skin != newSkinName) {
                // 				rd.img.graphics.clear();
                // 				rd.img.skin = ifname;
                // 			}
                // 			rd.shadowImg1.visible = true;
                // 			poker.data.IsCardBack = false;
                // 			callback(ii, that);
                // 		}));
                // 	}));
                // } else {
                // 	poker.data.IsCardBack = true;
                // }
            }
        };
        pokerGroupData.prototype.GetFirstCard = function () {
            if (this.pokerList.length > 0) {
                return this.pokerList[0];
            }
            return null;
        };
        pokerGroupData.prototype.GetLastCard = function () {
            if (this.pokerList.length > 0) {
                var lastindex = this.pokerList.length - 1;
                return this.pokerList[lastindex];
            }
            return null;
        };
        pokerGroupData.prototype.GetLastCardIndex = function () {
            if (this.pokerList.length > 0) {
                var lastindex = this.pokerList.length - 1;
                return lastindex;
            }
            return -1;
        };
        pokerGroupData.prototype.GetIndexCard = function (value) {
            if (this.pokerList.length > 0) {
                return this.pokerList[value];
            }
            return null;
        };
        //获得牌组中最上面的n张卡
        pokerGroupData.prototype.SplitePokerGroupByNum = function (num) {
            var pGrouop = null;
            if (this.pokerList.length <= num) {
                pGrouop = this.SplitePokerGroup(0);
            }
            else {
                var startSpliteIndex = this.pokerList.length - num;
                pGrouop = this.SplitePokerGroup(startSpliteIndex);
            }
            //console.log("pGrouop.pokerList.length: ", pGrouop.pokerList.length)
            pGrouop.pokerList.forEach(function (element, index) {
                element.data.SetFloor(index);
            });
            return pGrouop;
        };
        //获得牌组中上面的1张卡
        pokerGroupData.prototype.SplitePokerGroupByNum2 = function (num) {
            var pGrouop = null;
            var startSpliteIndex = num;
            pGrouop = this.SplitePokerGroup2(startSpliteIndex);
            //pGrouop.pokerList.reverse();
            // ////console.log('pGrouop', pGrouop);
            return pGrouop;
        };
        //分割牌组 获得前面的几张牌
        pokerGroupData.prototype.SplitePokerGroupFromFront = function (endIndex) {
            var tPokerArray = null;
            if (endIndex >= this.pokerList.length) {
                tPokerArray = this.pokerList;
                this.pokerList = new Array();
            }
            else {
                var tPokerArrayTRet = this.pokerList.slice(0, endIndex + 1);
                var tPokerArrayKeep = this.pokerList.slice(endIndex + 1);
                tPokerArray = tPokerArrayTRet;
                this.pokerList.splice(0);
                this.pokerList = tPokerArrayKeep;
            }
            var tRet = new pokerGroupData(tPokerArray);
            return tRet;
        };
        //分割牌组
        pokerGroupData.prototype.SplitePokerGroup = function (startIndex) {
            var tPokerArray = this.pokerList.slice(startIndex);
            // ////console.log('xxyy0-', this.pokerList);
            this.pokerList.splice(startIndex);
            var tRet = new pokerGroupData(tPokerArray);
            // ////console.log('xxyy1-', this.pokerList);
            // ////console.log('xxyy2-', tPokerArray);
            // ////console.log('xxyy3-', tRet);
            return tRet;
        };
        //分割牌组
        pokerGroupData.prototype.SplitePokerGroup2 = function (startIndex) {
            var tPokerArray = this.pokerList.slice(startIndex, startIndex + 1);
            // ////console.log('xxyy0-', this.pokerList);
            this.pokerList.splice(startIndex, 1);
            var tRet = new pokerGroupData(tPokerArray);
            // ////console.log('xxyy1-', this.pokerList);
            // ////console.log('xxyy2-', tPokerArray);
            // ////console.log('xxyy3-', tRet);
            return tRet;
        };
        //获得分割的牌组的引用
        pokerGroupData.prototype.SlicePokerGroup = function (startIndex) {
            var tPokerArray = this.pokerList.slice(startIndex);
            var tRet = new pokerGroupData(tPokerArray);
            return tRet;
        };
        //复制牌组中的数据
        pokerGroupData.prototype.ClonePokerGroup = function (startIndex) {
            var tPokerArray = new Array();
            for (var i = startIndex; i < this.pokerList.length; i++) {
                var data = this.pokerList[i].data; //.Clone();
                var newpokerChain = new poker_1.pokerChain(data.mType, data.mNum);
                tPokerArray.push(newpokerChain);
            }
            var tRet = new pokerGroupData(tPokerArray);
            return tRet;
        };
        //创建一整套的扑克
        pokerGroupData.prototype.CreateFull = function (WithKing) {
            if (WithKing === void 0) { WithKing = false; }
            this.pokerList = new Array();
            // for (let i = 0; i < 15; i++) {
            // 	var poker1 = new pokerChain(PokerType.blood, MathUtils.getRandom(1, 9));
            // 	poker1.CreateRender();
            // 	this.pokerList.push(poker1);
            // }
            // for (let j = 0; j < 15; j++) {
            // 	var num = MathUtils.getRandom(1, 5);
            // 	var poker2 = new pokerChain(PokerType.shiled, num);
            // 	poker2.CreateHurt(MathUtils.getRandom(CardConstant.CardWeapon[num]["num"][0], CardConstant.CardWeapon[num]["num"][1]).toString());
            // 	poker2.CreateRender();
            // 	this.pokerList.push(poker2);
            // }
            // for (let k = 0; k < 15; k++) {
            // 	var num = MathUtils.getRandom(1, 3);
            // 	var poker3 = new pokerChain(PokerType.enemy, num);
            // 	poker3.CreateAtk(MathUtils.getRandom(CardConstant.CardCK[num]["num"][0], CardConstant.CardCK[num]["num"][1]).toString());
            // 	poker3.CreateRender();
            // 	this.pokerList.push(poker3);
            // }
            for (var l = 0; l < 36; l++) {
                var poker4 = new poker_1.pokerChain(PokerType.coin, 1);
                poker4.CreateRender();
                this.pokerList.push(poker4);
            }
            //console.log("start:", this.pokerList.length)
        };
        //把扑克加入组中
        pokerGroupData.prototype.AddPoker = function (poker) {
            this.pokerList.push(poker);
        };
        //经典洗牌算法
        pokerGroupData.prototype.Shuffle = function () {
            var length = this.pokerList.length;
            for (var i = 0; i < length; i++) {
                var indexf = Math.random() * (length);
                var rIndex = Math.floor(indexf);
                if (rIndex == i) {
                    continue;
                }
                var a = this.pokerList[i];
                var b = this.pokerList[rIndex];
                this.pokerList[i] = b;
                this.pokerList[rIndex] = a;
            }
        };
        //洗牌 参数：次数
        pokerGroupData.prototype.ShuffleWithTime = function (time) {
            if (time === void 0) { time = 1; }
            for (var i = 0; i < time; i++) {
                this.Shuffle();
            }
        };
        return pokerGroupData;
    }());
    poker_1.pokerGroupData = pokerGroupData;
})(poker || (poker = {}));
//# sourceMappingURL=pokerGroupData.js.map