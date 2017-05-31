bootGame={
   create:function(){
    game.physics.startSystem(Phaser.Physics.ARCADE);
	game.stage.backgroundColor = "#fcc";
	keyboard = game.input.keyboard.createCursorKeys();

    game.scale.scaleMode = Phaser.ScaleManager.EXACT_FIT;
    game.scale.forceLandscape = true;
    game.scale.pageAlignHorizontally = true;
    game.scale.pageAlignVertically = true;
    game.scale.setScreenSize =true;

    game.state.start("preloadGame");
    


   },
	
}