var gamePattern = [];
var userClickedPattern = [];
const buttonColours = ["red", "blue", "green", "yellow"];
var start = false;
var level = 0;

$('body').on('keypress', function() {
    if(!start) {
        newSequence();
        $('h1').html(`level ${level}`);
        start = true;
    }
});


$('.btn').on('click', function() {
    var userChosenColour = this.getAttribute('id');

    makeSound(userChosenColour);
    $(`#${userChosenColour}`).fadeIn(100).fadeOut(100).fadeIn(100);

    userClickedPattern.push(userChosenColour);
    console.log(userClickedPattern);

    var index = userClickedPattern.length - 1;

    if(gamePattern[index] == userClickedPattern[index]){
        if(gamePattern.length == userClickedPattern.length) {
            console.log(gamePattern.length);
            console.log(userClickedPattern.length);
    
            userClickedPattern = [];
    
            setTimeout(()=>{
                newSequence();
            }, 1000);
        }
    }else {
        gameOver();
    }

    
    // console.log(`gamePattern : ${gamePattern}, userPattern : ${userClickedPattern}`);
    // if(true){
    //     console.log("same");
    //     newSequence();
    // }
});

function newSequence () {
    level++;
    var randomNumber = Math.floor(Math.random()*4);
    var randomChosenColour = buttonColours[randomNumber];

    gamePattern.push(randomChosenColour);
    console.log(gamePattern);

    $(`#${randomChosenColour}`).fadeIn(100).fadeOut(100).fadeIn(100);
    makeSound(randomChosenColour);
};

function makeSound(sound) {
    var audio = new Audio(`sounds/${sound}.mp3`);
    audio.play();
};

function gameOver() {
    console.log("game over");
    userClickedPattern = [];
    $('h1').html("Game Over, Press Any Key to Restart");
    $('body').addClass("game-over");
    makeSound("wrong");

    setTimeout(()=>{
        $('body').removeClass("game-over");
    }, 200);
    startOver();
}

function startOver() {
    start = false;
    gamePattern = [];
    level = 0;
}