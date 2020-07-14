/*
* name;
*/
var pokerGame;
(function (pokerGame) {
    var personalCard = /** @class */ (function () {
        function personalCard(posIndex, type, num) {
            this.posIndex = posIndex;
            this.pokertype = type;
            this.pokernum = num;
            var a = 'a';
            if (a == 'a')
                a = 'a';
        }
        return personalCard;
    }());
    var PersonalSetCard = /** @class */ (function () {
        function PersonalSetCard(isTutorial) {
            if (isTutorial === void 0) { isTutorial = 0; }
            this.tutorialList = new Array();
            this.row1Array = new Array();
            this.row2Array = new Array();
            this.row3Array = new Array();
            this.row4Array = new Array();
            this.row5Array = new Array();
            this.row6Array = new Array();
            this.row7Array = new Array();
            this.four1Array = new Array();
            this.four2Array = new Array();
            this.four3Array = new Array();
            this.four4Array = new Array();
            //club = 1, //梅花
            //diamond =2,//方块
            //heart =3,//红桃
            //spade =4, //黑桃
            if (GameMain.app.isTestModel) {
                this.level = GameMain.app.testLevel;
            }
            else {
                this.level = GameMain.app.cutlevel;
            }
            if (isTutorial != 0) {
                this.level = 0;
            }
            // ////console.log('levellevellevel', this.level);
            if (GameMain.app.alllevelconf[this.level].level[0].mType != null) {
                GameMain.app.isSpecialModel = false;
                for (var index = 0; index < GameMain.app.alllevelconf[this.level].level.length; index++) {
                    if (index == 51) {
                        this.SetLevelDetail(1, 0, index);
                    }
                    else if (index == 50) {
                        this.SetLevelDetail(2, 1, index);
                    }
                    else if (index == 49) {
                        this.SetLevelDetail(2, 0, index);
                    }
                    else if (index == 48) {
                        this.SetLevelDetail(3, 2, index);
                    }
                    else if (index == 47) {
                        this.SetLevelDetail(3, 1, index);
                    }
                    else if (index == 46) {
                        this.SetLevelDetail(3, 0, index);
                    }
                    else if (index == 45) {
                        this.SetLevelDetail(4, 3, index);
                    }
                    else if (index == 44) {
                        this.SetLevelDetail(4, 2, index);
                    }
                    else if (index == 43) {
                        this.SetLevelDetail(4, 1, index);
                    }
                    else if (index == 42) {
                        this.SetLevelDetail(4, 0, index);
                    }
                    else if (index == 41) {
                        this.SetLevelDetail(5, 4, index);
                    }
                    else if (index == 40) {
                        this.SetLevelDetail(5, 3, index);
                    }
                    else if (index == 39) {
                        this.SetLevelDetail(5, 2, index);
                    }
                    else if (index == 38) {
                        this.SetLevelDetail(5, 1, index);
                    }
                    else if (index == 37) {
                        this.SetLevelDetail(5, 0, index);
                    }
                    else if (index == 36) {
                        this.SetLevelDetail(6, 5, index);
                    }
                    else if (index == 35) {
                        this.SetLevelDetail(6, 4, index);
                    }
                    else if (index == 34) {
                        this.SetLevelDetail(6, 3, index);
                    }
                    else if (index == 33) {
                        this.SetLevelDetail(6, 2, index);
                    }
                    else if (index == 32) {
                        this.SetLevelDetail(6, 1, index);
                    }
                    else if (index == 31) {
                        this.SetLevelDetail(6, 0, index);
                    }
                    else if (index == 30) {
                        this.SetLevelDetail(7, 6, index);
                    }
                    else if (index == 29) {
                        this.SetLevelDetail(7, 5, index);
                    }
                    else if (index == 28) {
                        this.SetLevelDetail(7, 4, index);
                    }
                    else if (index == 27) {
                        this.SetLevelDetail(7, 3, index);
                    }
                    else if (index == 26) {
                        this.SetLevelDetail(7, 2, index);
                    }
                    else if (index == 25) {
                        this.SetLevelDetail(7, 1, index);
                    }
                    else if (index == 24) {
                        this.SetLevelDetail(7, 0, index);
                    }
                    else if (index == 23) {
                        this.SetLevelDetail2(23, index);
                    }
                    else if (index == 22) {
                        this.SetLevelDetail2(22, index);
                    }
                    else if (index == 21) {
                        this.SetLevelDetail2(21, index);
                    }
                    else if (index == 20) {
                        this.SetLevelDetail2(20, index);
                    }
                    else if (index == 19) {
                        this.SetLevelDetail2(19, index);
                    }
                    else if (index == 18) {
                        this.SetLevelDetail2(18, index);
                    }
                    else if (index == 17) {
                        this.SetLevelDetail2(17, index);
                    }
                    else if (index == 16) {
                        this.SetLevelDetail2(16, index);
                    }
                    else if (index == 15) {
                        this.SetLevelDetail2(15, index);
                    }
                    else if (index == 14) {
                        this.SetLevelDetail2(14, index);
                    }
                    else if (index == 13) {
                        this.SetLevelDetail2(13, index);
                    }
                    else if (index == 12) {
                        this.SetLevelDetail2(12, index);
                    }
                    else if (index == 11) {
                        this.SetLevelDetail2(11, index);
                    }
                    else if (index == 10) {
                        this.SetLevelDetail2(10, index);
                    }
                    else if (index == 9) {
                        this.SetLevelDetail2(9, index);
                    }
                    else if (index == 8) {
                        this.SetLevelDetail2(8, index);
                    }
                    else if (index == 7) {
                        this.SetLevelDetail2(7, index);
                    }
                    else if (index == 6) {
                        this.SetLevelDetail2(6, index);
                    }
                    else if (index == 5) {
                        this.SetLevelDetail2(5, index);
                    }
                    else if (index == 4) {
                        this.SetLevelDetail2(4, index);
                    }
                    else if (index == 3) {
                        this.SetLevelDetail2(3, index);
                    }
                    else if (index == 2) {
                        this.SetLevelDetail2(2, index);
                    }
                    else if (index == 1) {
                        this.SetLevelDetail2(1, index);
                    }
                    else if (index == 0) {
                        this.SetLevelDetail2(0, index);
                    }
                }
            }
            else if (GameMain.app.alllevelconf[this.level].level[0].col != null) {
                GameMain.app.isSpecialModel = true;
                for (var index = 0; index < GameMain.app.alllevelconf[this.level].level.length; index++) {
                    if (GameMain.app.alllevelconf[this.level].level[index].row1 != null) {
                        this.row1Array.push(GameMain.app.alllevelconf[this.level].level[index].row1);
                    }
                    if (GameMain.app.alllevelconf[this.level].level[index].row2 != null) {
                        this.row2Array.push(GameMain.app.alllevelconf[this.level].level[index].row2);
                    }
                    if (GameMain.app.alllevelconf[this.level].level[index].row3 != null) {
                        this.row3Array.push(GameMain.app.alllevelconf[this.level].level[index].row3);
                    }
                    if (GameMain.app.alllevelconf[this.level].level[index].row4 != null) {
                        this.row4Array.push(GameMain.app.alllevelconf[this.level].level[index].row4);
                    }
                    if (GameMain.app.alllevelconf[this.level].level[index].row5 != null) {
                        this.row5Array.push(GameMain.app.alllevelconf[this.level].level[index].row5);
                    }
                    if (GameMain.app.alllevelconf[this.level].level[index].row6 != null) {
                        this.row6Array.push(GameMain.app.alllevelconf[this.level].level[index].row6);
                    }
                    if (GameMain.app.alllevelconf[this.level].level[index].row7 != null) {
                        this.row7Array.push(GameMain.app.alllevelconf[this.level].level[index].row7);
                    }
                    if (GameMain.app.alllevelconf[this.level].level[index].deck1 != null) {
                        this.four1Array.push(GameMain.app.alllevelconf[this.level].level[index].deck1);
                    }
                    if (GameMain.app.alllevelconf[this.level].level[index].deck2 != null) {
                        this.four2Array.push(GameMain.app.alllevelconf[this.level].level[index].deck2);
                    }
                    if (GameMain.app.alllevelconf[this.level].level[index].deck3 != null) {
                        this.four3Array.push(GameMain.app.alllevelconf[this.level].level[index].deck3);
                    }
                    if (GameMain.app.alllevelconf[this.level].level[index].deck4 != null) {
                        this.four4Array.push(GameMain.app.alllevelconf[this.level].level[index].deck4);
                    }
                }
                // ////console.log('this.row1Array', this.row1Array, this.row2Array, this.row3Array, this.row4Array, this.row5Array, this.row6Array, this.row7Array, this.four1Array, this.four2Array, this.four3Array, this.four4Array);
                var cardIndex = -1;
                GameMain.app.SpecialRows = [];
                GameMain.app.SpecialDecks = [];
                GameMain.app.SpecialRows = [this.row1Array.length, this.row2Array.length, this.row3Array.length, this.row4Array.length, this.row5Array.length, this.row6Array.length, this.row7Array.length];
                GameMain.app.SpecialDecks = [this.four1Array.length, this.four2Array.length, this.four3Array.length, this.four4Array.length];
                if (this.row1Array.length > 0) {
                    for (var ii = this.row1Array.length - 1; ii >= 0; ii--) {
                        cardIndex += 1;
                        var type = this.row1Array[ii][0];
                        var num = this.row1Array[ii][1];
                        this.SetLevelDetail3(cardIndex, index, type, num);
                    }
                }
                if (this.row2Array.length > 0) {
                    for (var ii = this.row2Array.length - 1; ii >= 0; ii--) {
                        cardIndex += 1;
                        var type = this.row2Array[ii][0];
                        var num = this.row2Array[ii][1];
                        this.SetLevelDetail3(cardIndex, index, type, num);
                    }
                }
                if (this.row3Array.length > 0) {
                    for (var ii = this.row3Array.length - 1; ii >= 0; ii--) {
                        cardIndex += 1;
                        var type = this.row3Array[ii][0];
                        var num = this.row3Array[ii][1];
                        this.SetLevelDetail3(cardIndex, index, type, num);
                    }
                }
                if (this.row4Array.length > 0) {
                    for (var ii = this.row4Array.length - 1; ii >= 0; ii--) {
                        cardIndex += 1;
                        var type = this.row4Array[ii][0];
                        var num = this.row4Array[ii][1];
                        this.SetLevelDetail3(cardIndex, index, type, num);
                    }
                }
                if (this.row5Array.length > 0) {
                    for (var ii = this.row5Array.length - 1; ii >= 0; ii--) {
                        cardIndex += 1;
                        var type = this.row5Array[ii][0];
                        var num = this.row5Array[ii][1];
                        this.SetLevelDetail3(cardIndex, index, type, num);
                    }
                }
                if (this.row6Array.length > 0) {
                    for (var ii = this.row6Array.length - 1; ii >= 0; ii--) {
                        cardIndex += 1;
                        var type = this.row6Array[ii][0];
                        var num = this.row6Array[ii][1];
                        this.SetLevelDetail3(cardIndex, index, type, num);
                    }
                }
                if (this.row7Array.length > 0) {
                    for (var ii = this.row7Array.length - 1; ii >= 0; ii--) {
                        cardIndex += 1;
                        var type = this.row7Array[ii][0];
                        var num = this.row7Array[ii][1];
                        this.SetLevelDetail3(cardIndex, index, type, num);
                    }
                }
                if (this.four1Array.length > 0) {
                    for (var ii = this.four1Array.length - 1; ii >= 0; ii--) {
                        cardIndex += 1;
                        var type = this.four1Array[ii][0];
                        var num = this.four1Array[ii][1];
                        this.SetLevelDetail3(cardIndex, index, type, num);
                    }
                }
                if (this.four2Array.length > 0) {
                    for (var ii = this.four2Array.length - 1; ii >= 0; ii--) {
                        cardIndex += 1;
                        var type = this.four2Array[ii][0];
                        var num = this.four2Array[ii][1];
                        this.SetLevelDetail3(cardIndex, index, type, num);
                    }
                }
                if (this.four3Array.length > 0) {
                    for (var ii = this.four3Array.length - 1; ii >= 0; ii--) {
                        cardIndex += 1;
                        var type = this.four3Array[ii][0];
                        var num = this.four3Array[ii][1];
                        this.SetLevelDetail3(cardIndex, index, type, num);
                    }
                }
                if (this.four4Array.length > 0) {
                    for (var ii = this.four4Array.length - 1; ii >= 0; ii--) {
                        cardIndex += 1;
                        var type = this.four4Array[ii][0];
                        var num = this.four4Array[ii][1];
                        this.SetLevelDetail3(cardIndex, index, type, num);
                    }
                }
            }
        }
        PersonalSetCard.prototype.SetLevelDetail = function (row, col, index) {
            this.AddToTutorialCardArray(this.GetPosIndexByLine(row, col), GameMain.app.alllevelconf[this.level].level[index].mType, GameMain.app.alllevelconf[this.level].level[index].mNum);
        };
        PersonalSetCard.prototype.SetLevelDetail2 = function (top, index) {
            this.AddToTutorialCardArray(this.GetPosIndexByStartDeck(top), GameMain.app.alllevelconf[this.level].level[index].mType, GameMain.app.alllevelconf[GameMain.app.cutlevel].level[index].mNum);
        };
        PersonalSetCard.prototype.SetLevelDetail3 = function (top, index, type, num) {
            this.AddToTutorialCardArray(51 - top, type, num);
        };
        PersonalSetCard.prototype.GetPosIndexByStartDeck = function (StartDeckIndex) {
            var PreCardNum = this.GetPreCardNumByLineNum(8); //前置卡片
            var index = 51 - PreCardNum - StartDeckIndex;
            return index;
        };
        PersonalSetCard.prototype.AddToTutorialCardArray = function (posIndex, type, num) {
            var card = new personalCard(posIndex, type, num);
            this.tutorialList.push(card);
            // ////console.log('tutorialList', this.tutorialList);
        };
        PersonalSetCard.prototype.GetPosIndexByLine = function (lineNum, LineIndex) {
            var PreCardNum = this.GetPreCardNumByLineNum(lineNum); //前置卡片
            var index = 51 - PreCardNum - LineIndex;
            return index;
        };
        PersonalSetCard.prototype.GetPreCardNumByLineNum = function (lineNum) {
            var count = 0;
            for (var i = 0; i < lineNum; i++) {
                count += (i);
            }
            return count;
        };
        PersonalSetCard.prototype.SetTutorialCard = function (deckData) {
            var indexMap = new laya.utils.Dictionary();
            deckData.AllCardBackToStart();
            deckData.StartCard.data.ShuffleWithTime(3); //洗牌三次
            var pokerList = deckData.StartCard.data.pokerList;
            var fourDeck = deckData.pokerDeckList;
            //建立索引映射表
            for (var i = 0; i < pokerList.length; i++) {
                var tpoker = pokerList[i];
                indexMap.set(tpoker.data.Getkey(), i);
            }
            for (var i = 0; i < this.tutorialList.length; i++) {
                var ttCard = this.tutorialList[i];
                var keytt = poker.pokerdata.Getkey(ttCard.pokertype, ttCard.pokernum);
                var indexNow = indexMap.get(keytt);
                var indexToSet = ttCard.posIndex;
                var cardFromTT = pokerList[indexNow];
                var cardToChange = pokerList[indexToSet];
                pokerList[indexNow] = cardToChange; //交换一下位置
                pokerList[indexToSet] = cardFromTT;
                var keyToChange = cardToChange.data.Getkey(); //映射表交换更新
                indexMap.set(keytt, indexToSet);
                indexMap.set(keyToChange, indexNow);
            }
        };
        return PersonalSetCard;
    }());
    pokerGame.PersonalSetCard = PersonalSetCard;
})(pokerGame || (pokerGame = {}));
//# sourceMappingURL=PersonalSetCard.js.map