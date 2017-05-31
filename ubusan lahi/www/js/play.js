playGame={
	 create:function() {
        game.add.sprite(0,0,"back");

        bullet = game.add.group();
        bullet.enableBody = true;
        createBullets(300);
        paused = game.add.image(500, 15, 'pause');
        paused.fixedToCamera=true;
        paused.inputEnabled = true;
        paused.events.onInputUp.add(function () {

        game.paused = true;

    }); 
    game.input.onDown.add(unpause, self);
    function unpause(event){
        // Only act if paused
        if(game.paused){
            game.paused = false;
        }

    };

    
    platforms = game.add.group();
    platforms.enableBody = true;
    buttonup = game.add.button(500,400,"btnup",buttonUp);

     // btngun = game.add.button(500,450,"btngun",btngun);
     btngunr = game.add.button(70,420,"btngunr",btngunr);
     btngunl = game.add.button(160,420,"btngunl",btngunl);

    buttonleft = game.add.button(70, 372, 'buttonhorizontal');
    buttonleft.events.onInputOver.add(function(){left=true;});
    buttonleft.events.onInputOut.add(function(){left=false;});
    buttonleft.events.onInputDown.add(function(){left=true;});
    buttonleft.events.onInputUp.add(function(){left=false;});
     
    buttonright = game.add.button(160, 372, 'buttonhorizontals');
    buttonright.events.onInputOver.add(function(){right=true;});
    buttonright.events.onInputOut.add(function(){right=false;});
    buttonright.events.onInputDown.add(function(){right=true;});
    buttonright.events.onInputUp.add(function(){right=false;});
    



        yaymusic = game.add.audio('yay');
        boomusic = game.add.audio('boo');
        bgmusic = game.add.audio('bgMusic');
        // youwin = game.add.audio('youwin');
        bgmusic.play().loopFull();


    var ground = new Platform(this, 0, game.world.height - 16, 640, 16, 'ground');
    platforms.add(ground);

    
    for (var i = 1; i <= 6; i++) {
       
        var ledge = new Platform(this, 50, i * 64, 32 * i * 2, 16, 'ground');
        platforms.add(ledge);
    }

    for (var i = 6; i >= 1; i--) {
        var ledge = new Platform(this, (game.width - 32 * i * 2) - 50, (game.height - 64 * i) - 32, 32 * i * 2, 16, 'ground')
        platforms.add(ledge);
    }

    platforms.forEach(function (item) {
        item.body.collideWorldBounds = true;
        item.body.immovable = true;
        item.body.allowGravity = false;
    }, this);

    slimes = game.add.group();
    slimes.enableBody = true;

    for (var i = 0; i < 10; i++) {
        var slime = new Slime(game, i * 28, i * 32, 50);
        slimes.add(slime);
    }
    for (var i = 0; i < 10; i++) {
        var slime = new Slime(game, i * 128, i * 32, 50);
        slimes.add(slime);
    }


        // ** The score & leftTime
        this.time.advancedTiming = true;
        this._timeCounter = 0;
        this._leftTime = 60;    
        this._leftTimeText = this.add.text(300, 16, 'Time: 0', { fontSize: '28px', fill: '#FFF' });

    
    cursors = game.input.keyboard.createCursorKeys();

    scoreText = game.add.text(45, 8, 'Score: '+a, { fontSize: '18px', fill: '#FFF' });
    bestscore = game.add.text(45,25,'High Score: '+retrieveBest(),{ fontSize: '18px', fill: 'White' });

    players = game.add.group();
    players.enableBody = true;

   
    player = new Player(game, 300, 10);
    players.add(player);
   	// titlepage = game.add.sprite(0,0, "title");
    // startButton = game.add.button(260,280,"button",actionOnClick,this,2, 1, 0);


},
update:function() {
	 button = 0;
    
    game.physics.arcade.overlap(players, slimes,killplayer);
    game.physics.arcade.overlap(bullet, slimes,killslime);

     if (left && !duck) {
       
        player.body.velocity.x = -150;
        player.animations.play('left');
     //    bullets = bullet.create(player.position.x,player.position.y,'bullet');
     // bullets.body.gravity.x=-800;
        player.direction = -1;

    }
    else if (right && !duck) {
        
      player.body.velocity.x = 150;
        player.animations.play('right');
     //     bullets = bullet.create(player.position.x,player.position.y,'bullet');
     // bullets.body.gravity.x=800;
        player.direction = 1;
    
   
    }
   else
    {
        
        player.animations.stop();
        player.body.velocity.x = 0;


       
    }
     if (cursors.up.isDown && player.body.touching.down) {
        player.body.velocity.y = -350;
    }
        // update timer every frame
        this._timeCounter += this.time.elapsed;
        // if spawn timer reach one second (1000 miliseconds)
        if(this._timeCounter > 1000) {
            // reset it
            this._timeCounter = 0;
            this._leftTime --;
            this._leftTimeText.text = 'Time: ' + this._leftTime;
        }
        
        if(this._leftTime <= 0) {      
            // this.quitGame();

        gameover = game.add.button(0,0, 'tgameover',gameOver1);

       }
    },

}

   function render () {
    
        this.game.debug.text(this.game.time.fps + ' FPS', 16, 70, "#00ff00", "32px Courier");       
 
    }
      function quitGame(pointer) {
        // this._timesup_title = this.add.sprite((this.world.width - 400) / 2, (this.world.height - 100) / 2, 'timesup');
        
        this.game.paused = true;
        var pausedText = this.add.text(160, 360, "Tap anywhere to Menu.", { fontSize: '28px', fill: '#FFF' });
        this.input.onDown.add(function(){
            pausedText.destroy();
            this.game.paused = false;
            this.state.start('MainMenu');
        }, this);
    }
function retrieveBest(){
    return((localStorage.getItem("gameStorage")!=null) || (localStorage.getItem("gameStorage")!=""))?localStorage.getItem("gameStorage"):0;
}
function retrieveBest(){
    return((localStorage.getItem("gameStorage")!=null) || (localStorage.getItem("gameStorage")!=""))?localStorage.getItem("gameStorage"):0;
}
function wintitle(){
       window.location.href=window.location.href;

}
function win(){
        win.visible =! startButton.visible;
    startButton.destroy();

}
function createBullets(){
        setInterval(function(){
    },1500)
}
function buttonUp(){
        button.frame = 1;
        player.body.velocity.y = -400;
    setTimeout(function(){
        button.frame=0;
    },300)
}
function btngunl(){
       
         bullets = bullet.create(player.position.x,player.position.y,'bullet');
     bullets.body.gravity.x=800;

}
function btngunr(){
     
         bullets = bullet.create(player.position.x,player.position.y,'bullet');
     bullets.body.gravity.x=-800;

}
    

function loopAudio(time){
    setInterval(function(){
        bgMusic.play();
    },time);
}

function killplayer(player,slimes){

   player.kill();
        game.paused = true;

    gameover = game.add.button(0,0, 'gameover1',gameOver2);

    // timesup_title = game.add.sprite((this.world.width - 400) / 2, (this.world.height - 300) / 2, 'timesup');
    // gameover = game.add.spri(180,230, "GAME OVER!!!",{ fontSize: '42px', fill: '#FFF' });

}
function gameOver(){
       window.location.href=window.location.href;

}
function gameOver1(){
       window.location.href=window.location.href;

}
function gameOver2(){
       window.location.href=window.location.href;

}

var a=0;
function killslime(bullets,slimes){
    boomusic.play();
    bullets.kill();
    if(retrieveBest()<=a){
        localStorage.setItem("gameStorage",a);
    }
    if(slimes.kill()){
    a = a+1;
    scoreText.text ="Score :"+a;
    if(a==20){
    // youwin.play();
    game.paused = true;
    gameover = game.add.button(0,0, 'youwin1',gameOver);   
       }

}
 
}
Platform = function (game, x, y, length, height, sprite) {
    Phaser.TileSprite.call(this, game, x, y, length, height, sprite);
}

Platform.prototype = Object.create(Phaser.TileSprite.prototype);
Platform.prototype.constructor = Platform;

Player = function (game, x, y) {
    Phaser.Sprite.call(this, game, x, y, "player");
    game.physics.enable(this, Phaser.Physics.ARCADE);
    this.direction = 1;
    this.body.bounce.y = 0.2;
    this.body.gravity.y = 1000;
    this.body.collideWorldBounds = true;
    this.animations.add('left', [5, 6, 7, 8, 9], 10, true);
    this.animations.add('right', [0, 1, 2, 3, 4], 10, true);

}

Player.prototype = Object.create(Phaser.Sprite.prototype);
Player.prototype.constructor = Player;

Player.prototype.update = function () {
    game.physics.arcade.collide(this, platforms);

   
};


Player.prototype.attack = function () {
    if (bullets.length < 1500) {
        var bullet = new Bullet(game, this.x + 10, this.y + 10, this.direction, bulletXSpeed);
        bullets.add(bullet);
    }

}

Bullet = function (game, x, y, direction, speed) {
    Phaser.Sprite.call(this, game, x, y, "bullet");
    game.physics.enable(this, Phaser.Physics.ARCADE);
    this.xSpeed = direction * speed;
};



Slime = function (game, x, y) {
    Phaser.Sprite.call(this, game, x, y, "slime");
    game.physics.enable(this, Phaser.Physics.ARCADE);
    this.collideWorldBounds = true;
    this.enableBody = true;
    this.animations.add('right', [0, 1, 2, 3, 4], 5, true);
    this.animations.add('left', [5, 6, 7, 8, 9], 5, true);
    this.body.gravity.y = 640;
    this.body.bounce.y = 0;
    this.body.bounce.x = 1;
    this.body.collideWorldBounds = true;
    this.body.velocity.x = 80;


};

Slime.prototype = Object.create(Phaser.Sprite.prototype);
Slime.prototype.constructor = Slime;

Slime.prototype.update = function () {

    var chasing = false;

    
    if (Math.round(this.y) == Math.round(player.y)) {
        if (Math.round(player.x) > Math.round(this.x)) {
            this.body.velocity.x = 200;
        } else {
            this.body.velocity.x = -200;
        }
        chasing = true;

    } else   if (Math.round(this.x) == Math.round(player.x)) {
        if (Math.round(player.y) > Math.round(this.y)) {
            this.body.velocity.y = 200;
        } else {
            this.body.velocity.y = -200;
        }
        chasing = true;
    }


    if(!chasing){

        if(this.body.velocity.x > 0){
            this.body.velocity.x = 80;
        } else if(this.body.velocity.x < 0){
            this.body.velocity.x = -80;
        }
    }
       else if(!chasing){
        if(this.body.velocity.y > 0){
            this.body.velocity.y = 80;
        } else if(this.body.velocity.y < 0){
            this.body.velocity.y = -80;
        }
    }

    game.physics.arcade.collide(this, platforms, function (slime, platform) {
        if (slime.body.velocity.x > 0 && slime.x > platform.x + (platform.width - slime.width) ||
                slime.body.velocity.x < 0 && slime.x < platform.x) {
            if (chasing) {
                slime.body.velocity.x = 0;
            } else {
                slime.body.velocity.x *= -1;
            }
        }
    });

    game.physics.arcade.collide(this, slimes, function (slime, slimes) {
        slime.body.velocity.x *= -1;

    });

    if (this.body.velocity.x > 0) {
        this.animations.play('right');
    } else {
        this.animations.play('left');
    }
     }
	