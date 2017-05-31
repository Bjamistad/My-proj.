var platforms;
var slimes;
var bullet ,bullets;

var players;
var player;

var cursors;
var spaceBar;

var score = 0;
var scoreText;
var gameover, win;

var bulletXSpeed = 300;
var startButton;
var titlepage;
var bestscore;
var keyboard;
var button, buttonup, buttonr, buttonl ,buttong,paused, score,pagain,about;
var mainmenu , menuText , playText, about;
var bounds = 1500;
    this.time;      //  the clock (Phaser.Time)
    this.game;      //  a reference to the currently running game (Phaser.Game)
    var paused;
	this._timeCounter = null;
	this._leftTime = null;
	this._leftTimeText = null;
	var timesup_title = null;

var bgmusic, loopAudio, boomusic, yaymusic;
var nextJump = 0;
var left=false;
var right=false;
var duck= false;
var jump=false;
var game = new Phaser.Game(650, 490, Phaser.CANVAS, '');

game.state.add('bootGame', bootGame);
game.state.add('preloadGame', preloadGame);
game.state.add('menuGame', menuGame);
game.state.add('playGame', playGame);
game.state.add('winGame', winGame);
game.state.add('aboutGame', aboutGame);

game.state.start("bootGame");