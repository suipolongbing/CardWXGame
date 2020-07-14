/**
* name
*/
var pokerGame;
(function (pokerGame) {
    var SoundPlayer = /** @class */ (function () {
        function SoundPlayer(userda) {
            var a = 'a';
            if (a == 'a')
                a = 'a';
            this.userda = userda;
            // Laya.loader.load(this.res, Laya.Handler.create(this, this.onLoadComplite, null, false));
            GameGlobal.Dispatcher.addEvent(GameGlobal.EVENT.PlayMusic, this, this.PlayMusic);
            GameGlobal.Dispatcher.addEvent(GameGlobal.EVENT.PlaySound, this, this.PlaySound);
        }
        SoundPlayer.prototype.onLoadComplite = function () {
        };
        SoundPlayer.prototype.PlayMusic = function (index) {
            if (this.userda.isSoundOn) {
                // ////console.log('this.res[index]',index);
                Laya.SoundManager.playMusic(GameMain.app.soundres[index]["url"], 0);
            }
        };
        SoundPlayer.prototype.PlaySound = function (index) {
            if (this.userda.isSoundOn) {
                // ////console.log('this.res[index]',this.res[index][`url`]);
                Laya.SoundManager.playSound(GameMain.app.soundres[index]["url"], 1);
            }
        };
        //pokerGame.SoundPlayer.PlaySound(0);
        //pokerGame.SoundPlayer.PlaySound(1);
        SoundPlayer.PlaySound = function (index) {
            GameGlobal.Dispatcher.sendEvent(GameGlobal.EVENT.PlaySound, [index]);
        };
        SoundPlayer.PlayMusic = function (index) {
            GameGlobal.Dispatcher.sendEvent(GameGlobal.EVENT.PlayMusic, [index]);
        };
        return SoundPlayer;
    }());
    pokerGame.SoundPlayer = SoundPlayer;
})(pokerGame || (pokerGame = {}));
//# sourceMappingURL=SoundPlayer.js.map