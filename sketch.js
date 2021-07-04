
var form,game;
var home;
var temp="home"
function setup(){
  database = firebase.database();
  console.log(database);
  createCanvas(windowWidth,windowHeight);
  game = new Game();
    game.start();

}

function draw(){

  
}

