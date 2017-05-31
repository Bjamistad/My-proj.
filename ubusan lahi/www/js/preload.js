preloadGame={
  preload:function() {
    game.load.spritesheet('player', 'img/sprites/hero-transparent-borderless.png', 28, 28);
    game.load.spritesheet('slime', 'img/sprites/slime-transparent-set-withdir.png', 28, 28);

    // load images
    game.load.image('bg', 'img/bg/wall.png');
    game.load.image('ground', 'img/bg/ground.png');
    game.load.image('bullet', 'img/sprites/red-square-bullet.png');
    game.load.spritesheet("gameover","img/gameover.png");
    game.load.spritesheet("gover","img/gover.png");

    game.load.spritesheet("win","img/youwin.png");
    game.load.spritesheet("youwin1","img/youwin1.png");
    game.load.spritesheet("gameover1","img/gameover1.png");
    game.load.spritesheet("tgameover","img/tgameover.png");

    game.load.image("mainmenu", 'img/title1.png');
        game.load.image("back","img/background.jpg");
    game.load.image('pause','img/pauseb.png');
    //     game.load.image('title','img/title1.png');
    game.load.spritesheet('button', 'img/button.png');
     game.load.spritesheet('about', 'img/about.png');
     game.load.spritesheet('paused', 'img/background.jpg');
   
    game.load.spritesheet('pagain', 'img/background.jpg');
          game.load.audio('bgMusic', 'audio/BG2.wav');
          // game.load.audio('youwin', 'audio/youwin.mp3');

                      game.load.audio('yay', 'audio/GAME OVER2.wav');
                      game.load.audio('boo', 'audio/FIREBALL.wav');
                       game.load.spritesheet('buttonhorizontals', 'img/brick2.png',50,50);
                   game.load.spritesheet('buttonhorizontal', 'img/brick3.png',50,50);
                     game.load.spritesheet("btnup","img/brick4.png");
                   game.load.spritesheet("btngunr","img/btngun.png");
    this.load.image('timesup', 'img/timesup.png');

                   game.load.spritesheet("btngunl","img/btngun.png");
                   // game.load.spritesheet("btngun","img/btngun.png");



                     


  },
  create:function() {

    game.state.start("menuGame");
  },
}