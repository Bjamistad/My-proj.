menuGame={
	create:function(){
		   game.stage.backgroundColor="#ff0";
    mainmenu = game.add.image(0,0,"mainmenu")

    // menuText  = game.add.text(game.width/2-50,game.height/3-50,"Menu",{"fill":"pink"});
    // menuText.scale.x = 2;
    // menuText.scale.y = 2;
    playText = game.add.text(game.width/2-50,game.height/2,"Play",{"fill":"pink"});
    button = game.add.button(game.width/2-80,game.height/2,"button",play.go);
    // about = game.add.button(game.width/2-80,game.height/2+50,"about",about.go);
	  


	},
    update:function(){
    //     if(keyboard.up.isDown){

    // }
    }
}
    play = {
        go:function(){
           game.state.start("playGame");
        }
    };
    // about = {
    //     go:function(){
    //        game.state.start("aboutGame");
    //     }
    // };

// function actionOnClick(){
// 	titlepage.visible =! startButton.visible;
	
// 	startButton.destroy();

// }
