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
                { "type": "sawblade", "x": 1200, "y": groundY / 8 },
                { "type": "sawblade", "x": 1400, "y": groundY / 8  },
                { "type": "sawblade", "x": 1600, "y": groundY / 8  },
                { "type": "reward", "x": 1500, "y": groundY / 8 },
                { "type": "enemy", "x": 1250, "y": groundY / 8 },
                { "type": "clean", "x": 1000, "y": groundY / 8 },
            ]
        };
        

        for (i = 0; i < levelData.gameItems.length; i++) {
            var obj = levelData.gameItems[i];
            var objX = obj.x;
            var objY = obj.y;
            var objType = obj.type;
            
            if (objType === "sawblade") {
                createSawBlade(objX, objY);
            } else if (objType === "reward") {
                createReward(objX, objY);
            } else if (objType === "enemy") {
                createEnemy(objX, objY);
            } else {
                createGroo(objX, objY);  
            }
        }
        
        window.levelData = levelData;
        // set this to true or false depending on if you want to see hitzones
        game.setDebugMode(true);

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

        function createclean (x, y) {
            var hitZoneSize = 25;
            var damageFromObstacle = 10;
            var cleanHitZone = game.createObstacle(hitZoneSize, damageFromObstacle);
            cleanHitZone.x = x;
            cleanHitZone.y = y;
            game.addGameItem(cleanHitZone);    
            var obstacleImage = draw.bitmap('img/clean.png');
            obstacleImage.x = -25;
            obstacleImage.y = -25;
            cleanHitZone.addChild(obstacleImage);
        }

        function createEnemy (x, y) {
            var hitZoneSize = 25;
            var damageFromObstacle = 10;
            var enemyHitZone = game.createObstacle(hitZoneSize, damageFromObstacle);
            enemyHitZone.x = x;
            enemyHitZone.y = y;
            game.addGameItem(enemyHitZone);    
            var obstacleImage = draw.bitmap('img/batman.png');
            obstacleImage.x = -25;
            obstacleImage.y = -25;
            enemyHitZone.addChild(obstacleImage);

            /*enemyHitZone.onPlayerCollision = function() {
                game.changeIntegrity(-10);
            };
            enemyHitZone.onProjectileCollision = function() {
                enemyHitZone.fadeOut();
            game.increaseScore(100);
            }*/
        }

        function createReward (x, y) {
            var reward = game.createGameItem('reward',25);
            var bg = draw.bitmap('img/bg.gif');
            smile.x = -25;
            smile.y = -25;
            reward.addChild(bg);
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

        // DO NOT EDIT CODE BELOW HERE
    }
};

// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports = level01;
}
