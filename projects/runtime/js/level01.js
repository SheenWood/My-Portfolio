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
                { "type": "sawblade", "x": 400, "y": groundY },
                { "type": "sawblade", "x": 600, "y": groundY },
                { "type": "sawblade", "x": 900, "y": groundY },
            ]
        };
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

        
        
        
        
         function createtaco (x, y) {
        var hitZoneSize = 25;
        var damageFromObstacle = 100000;
        var sawBladeHitZone = game.createObstacle(hitZoneSize, damageFromObstacle);
        sawBladeHitZone.x = x;
        sawBladeHitZone.y = y;
        game.addGameItem(sawBladeHitZone);    
        var obstacleImage = draw.bitmap('img/taco.png');
        obstacleImage.x = -25;
        obstacleImage.y = -25;
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
        createSawBlade(2000, 200);
        createSawBlade(500, 300);
        createSawBlade(3000, 300); 
 createSawBlade(500, 150);
         createSawBlade(2000, 300); 
        createSawBlade(600, 300);
         createSawBlade(6560, 300); 
        createSawBlade(1650, 300); 
        createSawBlade(2690, 300);
        createSawBlade(3700, 300); 
        createSawBlade(4711, 400); 
        createSawBlade(5755, 300);
    

        createEnemy(700, 300);
        createEnemy(701, 300);
        createEnemy(702, 300);
        createEnemy(703, 300);
        createEnemy(704, 300);
        createEnemy(705, 300);
        createEnemy(706, 300);
        createEnemy(707, 300);
        createEnemy(708, 300);
        createEnemy(709, 300);
        createEnemy(710, 300);
        createEnemy(711, 300);
        createEnemy(712, 300);
        createEnemy(713, 300);
        createEnemy(714, 300);
        createEnemy(715, 300);
        createEnemy(716, 300);
        createEnemy(717, 300);
        createEnemy(718, 300);
        createEnemy(719, 300);
        createEnemy(720, 300);
        createEnemy(721, 300);
        createEnemy(722, 300);
        createEnemy(723, 300);
        createEnemy(724, 300);
        createEnemy(725, 300);
        createEnemy(726, 300);
        createEnemy(727, 300);
        createEnemy(728, 300);
        createEnemy(729, 300);
        createEnemy(730, 300);
        createEnemy(731, 300);
        createEnemy(732, 300);
        createEnemy(733, 300);
        createEnemy(734, 300);
        createEnemy(735, 300);
        createEnemy(736, 300);
        createEnemy(737, 300);
        createEnemy(738, 300);
        createEnemy(739, 300);
        createEnemy(740, 300);
        createEnemy(741, 300);
        createEnemy(742, 300);
        createEnemy(743, 300);
        createEnemy(744, 300);
        createEnemy(745, 300);
        createEnemy(746, 300);
        createEnemy(747, 300);
        createEnemy(748, 300);
        createEnemy(749, 300);
        createEnemy(750, 300);
        createEnemy(751, 300);
        createEnemy(752, 300);
        createEnemy(753, 300);
        createEnemy(754, 300);
        
        createReward(770, 300);
        createReward(3000, 300);
        createtaco(900, 170);
        // DO NOT EDIT CODE BELOW HERE
    }
};

// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports = level01;
}
