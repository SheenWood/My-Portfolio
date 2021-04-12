var level01 = function (window) {

    window.opspark = window.opspark || {};

    var draw = window.opspark.draw;
    var createjs = window.createjs;

    window.opspark.runLevelInGame = function(game) {
        // some useful constants 
        var groundY = game.groundY;

        // this data will allow us to define all of the
        // behavior of our game
        var levelData = {
            "name": "Robot Romp",
            "number": 1, 
            "speed": -3,
            "gameItems": [
                { "type": "sawblade", "x": 1000, "y": 300 },
               { "type": "sawblade", "x": 500, "y": 200 },

            ]
        };
        
        
        for (i = 0; i < levelData.gameItems.length; i++) {
            var firstGameItemObject = levelData.gameItems[i];
            var firstX = firstGameItemObject.x;
            var firstY = firstGameItemObject.y;
            var firstType = firstGameItemObject.type;
            
            if (firstType === "sawblade") {
           createSawBlade(firstX, firstY);
         /*   } else if (firstType === "reward") {
                createReward(firstX, firstY);
            } else if (firstType === "enemy") {
                createEnemy(firstX, firstY);
            }  else if (firstType === "taco") {
                createtaco(firstX, firstY);
            } else {
                createclean(firstX, firstY);  */
            }
        }
        window.levelData = levelData;
        // set this to true or false depending on if you want to see hitzones
        game.setDebugMode(false);

        // TODO 6 and on go here
        // BEGIN EDITING YOUR CODE HERE
        //Obstacle creation
        function createSawBlade (x, y) {
        var hitZoneSize = 25;
        var damageFromObstacle = 10;
        var sawBladeHitZone = game.createObstacle(hitZoneSize, damageFromObstacle);
        sawBladeHitZone.x = x;
        sawBladeHitZone.y = y;
        game.addGameItem(sawBladeHitZone);    
        var obstacleImage = draw.bitmap('img/sawblade.png');
        obstacleImage.x = -25;
        obstacleImage.y = -25;
        sawBladeHitZone.addChild(obstacleImage);
        }

        
        
        
         function createtaco2 (x, y) {
        var hitZoneSize = 25;
        var damageFromObstacle = 10;
        var sawBladeHitZone = game.createObstacle(hitZoneSize, damageFromObstacle);
        sawBladeHitZone.x = x;
        sawBladeHitZone.y = y;
        game.addGameItem(sawBladeHitZone);    
        var obstacleImage = draw.bitmap('img/taco.png');
        obstacleImage.x = -25;
        obstacleImage.y = -25;
        sawBladeHitZone.addChild(obstacleImage);
        }
        
        
        
        
       
        
        function createclean2 (x, y) {
        var hitZoneSize = 25;
        var damageFromObstacle = 10;
        var sawBladeHitZone = game.createObstacle(hitZoneSize, damageFromObstacle);
        sawBladeHitZone.x = x;
        sawBladeHitZone.y = y;
        game.addGameItem(sawBladeHitZone);    
        var obstacleImage = draw.bitmap('img/clean.png');
        obstacleImage.x = -25;
        obstacleImage.y = -25;
             obstacleImage.z = 25;
        sawBladeHitZone.addChild(obstacleImage);
        }

        
        
        function createEnemy (x, y) {
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



function createbat (x, y) {
        var hitZoneSize = 40;
        var damageFromObstacle = 100000;
        var sawBladeHitZone = game.createObstacle(hitZoneSize, damageFromObstacle);
        sawBladeHitZone.x = x;
        sawBladeHitZone.y = y;
        game.addGameItem(sawBladeHitZone);    
        var obstacleImage = draw.bitmap('img/batman.png');
        obstacleImage.x = 25;
        obstacleImage.y = -25;
             obstacleImage.z = 25;
        sawBladeHitZone.addChild(obstacleImage);
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
                game.changeIntegrity(100);
                game.increaseScore(100);
                reward.fadeOut();
            }
        }
        //functions calls
        createSawBlade(500, 200);
       
         createSawBlade(1000, 300); 
        
        
    createSawBlade(2550, 120); 
    


    createclean2(2000, 120);
        
            createclean2(2500, 120);
            createclean2(3000, 120);
            createclean2(3500, 120);

 createtaco2(690, 200);

         createtaco2(900, 200);
         createtaco2(2000, 200);
        createReward(630, 200);
        
        createbat(3535, 250);
         createbat(234234, 250);
         createbat(342, 250);
         createbat(5545, 250);
         createbat(54344, 250);
         createbat(867678, 250);
         createbat(323, 250);
          createbat(4324, 250);
          createbat(432234, 250);
          createbat(1132, 250);
          createbat(13233333, 250);
          createbat(1231, 250);
        // DO NOT EDIT CODE BELOW HERE
    }
};

// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports = level01;
}
