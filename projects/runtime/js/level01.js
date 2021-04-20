var level01 = function (window) {

    window.opspark = window.opspark || {};

    var draw = window.opspark.draw;
    var createjs = window.createjs;

    window.opspark.runLevelInGame = function(game) {
        // some useful constants 
        var groundY = game.groundY;

        // this data will allow us to define all of the
        // behavior of our game
        var canvasHeight = window.canvas.height;
        var levelData = {
            "name": "Robot Romp",
            "number": 1, 
            "speed": 9,
            "gameItems": [
                
                { "type": "sawblade", "x": 400, "y": 100 },
                { "type": "sawblade", "x": 600, "y": 100 },
                { "type": "sawblade", "x": 3050, "y": 100 },
                { "type": "sawblade", "x": 1900, "y": 100 },
                { "type": "spikes", "x": 1050},
                { "type": "spikes", "x": 1650},
                { "type": "spikes", "x": 2550},
                { "type": "reward", "x": 3000},
                { "type": "sawblade", "x": 3750, "y": 100 },
                { "type": "sawblade", "x": 3850, "y": 100 },
                { "type": "enmy1", "x": 4000, "y": 90},
                { "type": "spikes", "x": 4250},
                { "type": "reward", "x": 4650},
                 { "type": "E", "x": 4960, "y": 90},
               
                { "type": "sawblade", "x": 5500, "y": 100, "level": 2},
                { "type": "enmy2", "x": 5600, "y": 25, "level": 2},
                { "type": "sawblade", "x": 5650, "y": 100, "level": 2},
                { "type": "reward", "x": 5710, "y": 100, "level": 2},
                { "type": "sawblade", "x": 5700, "y": 200, "level": 2},
                { "type": "sawblade", "x": 5750,"y": 100, "level": 2},
                { "type": "reward", "x": 5760, "y": 200, "level": 2},
                { "type": "reward", "x": 5810, "y": 100, "level": 2},
                { "type": "sawblade", "x": 5800, "y": 200, "level": 2},
                { "type": "sawblade", "x": 5850, "y": 100, "level": 2},
                { "type": "spikes", "x": 6000, "level": 2},
                { "type": "enmy2", "x": 6200, "y": 25, "level": 2},
                { "type": "spikes", "x": 6300, "level": 2},
                { "type": "enmy2", "x": 6700, "y": 25, "level": 2},
                { "type": "enmy2", "x": 6750, "y": 25, "level": 2},
                { "type": "spikes", "x": 6850, "level": 2},
                { "type": "enmy2", "x": 7250, "y": 25, "level": 2},
                { "type": "enmy2", "x": 7300, "y": 25, "level": 2},
                { "type": "spikes", "x": 7500, "level": 2},
                { "type": "reward", "x": 7850, "y": 100,"level": 2},
                { "type": "sawblade", "x": 8250, "y": 100, "level": 2},
                { "type": "sawblade", "x": 8300, "y": 100, "level": 2},
                { "type": "reward", "x": 8350, "y": 100,"level": 2},
                { "type": "sawblade", "x": 8350, "y": 200, "level": 2},
                { "type": "sawblade", "x": 8400, "y": 200, "level": 2},
                { "type": "enmy2", "x": 8400, "y": 245, "level": 2},
                { "type": "enmy2", "x": 8450, "y": 245, "level": 2},
                { "type": "sawblade", "x": 8450, "y": 200, "level": 2},
                { "type": "sawblade", "x": 8500, "y": 200, "level": 2},
                { "type": "sawblade", "x": 8550, "y": 200, "level": 2},
                { "type": "sawblade", "x": 8600, "y": 200, "level": 2},
                { "type": "sawblade", "x": 8650, "y": 200, "level": 2},
                { "type": "sawblade", "x": 8700, "y": 200, "level": 2},
                { "type": "sawblade", "x": 8700, "y": 100, "level": 2},
                { "type": "reward", "x": 8750, "y": 100,"level": 2},
                { "type": "sawblade", "x": 9350, "y": 100, "level": 2},
                { "type": "sawblade", "x": 9450, "y": 100, "level": 2},
                { "type": "sawblade", "x": 9450, "y": 200, "level": 2},
                { "type": "enmy2", "x": 9450, "y": 25, "level": 2},
                { "type": "enmy3", "x": 9500, "y": 25, "level": 2},
                { "type": "sawblade", "x": 9550, "y": 100, "level": 2},
                { "type": "spikes", "x": 10050, "level": 2},
                { "type": "enmy2", "x": 10500, "y": 25, "level": 2},
                { "type": "enmy2", "x": 10550, "y": 25, "level": 2},
                { "type": "reward", "x": 11000, "y": 100,"level": 2}
            ]
        };
        window.levelData = levelData;
        // set this to true or false depending on if you want to see hitzones
        game.setDebugMode(false);

        // BEGIN EDITING YOUR CODE HERE
            var key, value;
            for (key = 0; key <= levelData.gameItems.length-1; key++) {
                var currItem = levelData.gameItems[key];
                
              if (currItem.level === 2) {
                  if (currItem.type === 'sawblade') {
                    createSawBlade(currItem.x, (groundY - currItem.y), 2);
                  }
                  if (currItem.type === 'spikes') {
                      createSpikes(currItem.x, (groundY - 25), 2);
                  }
                  if (currItem.type === 'enmy2') {
                      createEnemy1(currItem.x, currItem.y, 2);
                  }
                  if (currItem.type === 'enmy3') {
                      createEnemy1(currItem.x, currItem.y, 3);
                  }
                    
                  if (currItem.type === 'E') {
                      createEnemy1(currItem.x, currItem.y, 3);
                  }
                  if (currItem.type === 'reward') {
                      createReward(currItem.x, (groundY - currItem.y), 2);
                  }
              }
              else {
                  if (currItem.type === 'sawblade') {
                    createSawBlade(currItem.x, (groundY - currItem.y));
                  }
                  if (currItem.type === 'spikes') {
                      createSpikes(currItem.x, (groundY - 25));
                  }
                  if (currItem.type === 'enmy1') {
                      createEnemy1(currItem.x, currItem.y, 1);
                  }
                  if (currItem.type === 'reward') {
                      createReward(currItem.x, groundY - 130);
                  }
              }
              
            }
            function createSawBlade(x, y, level) {
                var hitZoneSize = 20;
                var damageFromObstacle = 6;
                var sawBladeHitZone = game.createObstacle(hitZoneSize, damageFromObstacle);
                var obstacleImage;
                sawBladeHitZone.x = x;
                sawBladeHitZone.y = y;
                game.addGameItem(sawBladeHitZone);
                if (level === 2) {
                    obstacleImage = draw.bitmap('images/sawblade.png');
                    obstacleImage.scaleX = 1;
                    obstacleImage.scaleY = 1;
                }
                else {
                    obstacleImage = draw.bitmap('img/sawblade.png');
                }
                sawBladeHitZone.addChild(obstacleImage);
                obstacleImage.x = -25;
                obstacleImage.y = -25;
            }
        
        
              
          function createE (x, y) {
        var enemy = game.createGameItem('enemy',25);
        var redSquare = draw.rect(50,50,'red');
        redSquare.x = -25;
        redSquare.y = -25;
        enemy.addChild(redSquare);
        enemy.x = x;
        enemy.y = y;
        game.addGameItem(enemy);
        enemy.velocityX = -1;
        rotationVelocity = 10;

            enemy.onPlayerCollision = function() {
                game.changeIntegrity(-10);
            };
            enemy.onProjectileCollision = function() {
                enemy.fadeOut();
            game.increaseScore(100);
            }
        }
        
        
        
            function createSpikes(x, y, level) {
                var hitZoneSize = 25;
                var damageFromObstacle = 6;
                var spikeHitZone = game.createObstacle(hitZoneSize, damageFromObstacle);
                var obstacleImage;
                spikeHitZone.x = x;
                spikeHitZone.y = y;
                game.addGameItem(spikeHitZone);
                if (level === 2) {
                    obstacleImage = draw.bitmap('img/batman.png');
                }
                else {
                    obstacleImage = draw.bitmap('img/clean.png');
                }
                spikeHitZone.addChild(obstacleImage);
                obstacleImage.x = -50;
                obstacleImage.y = -75;
                obstacleImage.scaleX = 1;
                obstacleImage.scaleY = 1;
            }
            
            function createEnemy1(x, y, level) {
                var enemy =  game.createGameItem('enemy',10);
                var enemyOver;
                if (level === 1) {
                    var hammer = draw.bitmap('img/batman.png');
                    hammer.x = 0;
                    hammer.y = 0;
                    hammer.scaleX = 1;
                    hammer.scaleY = 1;
                    enemy.rotationalVelocity = -10;
                    enemy.addChild(hammer);
                    enemyOver =  game.createGameItem('enemy',10);
                    var gnome = draw.bitmap('img/bg.gif');
                    gnome.x = 10;
                    gnome.y = -50;
                    gnome.scaleX = 0.2;
                    gnome.scaleY = 0.2;
                    enemyOver.addChild(gnome);
                    enemyOver.x = x;
                    enemyOver.y = groundY - y;
                    game.addGameItem(enemyOver);
                    enemyOver.velocityX = -2;
                }
                if (level === 2) {
                    var goomba = draw.bitmap('img/bg.gif');
                    goomba.x = -25;
                    goomba.y = -25;
                    goomba.scaleX = 0.2;
                    goomba.scaleY = 0.2;
                    enemy.addChild(goomba);
                }
                if (level === 3) {
                    var koopa = draw.bitmap('img/bg.gif');
                    koopa.x = -25;
                    koopa.y = -25;
                    koopa.scaleX = 1;
                    koopa.scaleY = 1;
                    enemy.addChild(koopa);
                }
                enemy.x = x;
                enemy.y = groundY - y;
                game.addGameItem(enemy);
                enemy.velocityX = -2;
                enemy.onPlayerCollision = function () {
                    game.changeIntegrity(-6);
                    enemy.fadeOut(1000);
                    enemyOver.fadeOut(1000);
                }
                enemy.onProjectileCollision = function() {
                    game.increaseScore(100);
                    enemy.shrink();
                    enemyOver.shrink();
                }
            }
           function createReward (x, y) {
        var reward = game.createGameItem('reward',25);
        var greenSquare = draw.rect(50,50,'green');
        greenSquare.x = -25;
        greenSquare.y = -25;
        reward.addChild(greenSquare);
        reward.x = x;
        reward.y = y;
        game.addGameItem(reward);
        reward.velocityX = -0.75;
        rotationVelocity = 10;

            reward.onPlayerCollision = function() {
                game.changeIntegrity(1000);
                game.increaseScore(100);
                reward.fadeOut();
            }
        }
        
        
        
  

        function createReward (x, y) {
        // DO NOT EDIT CODE BELOW HERE
    }
};

// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports = level01;
}
