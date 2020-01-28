function onSubmitNameClick(){

    let Name = document.querySelector("#Name").value;

    document.querySelector("#fullName").innerHTML = `Hello there ${Name}!`;
}

class Hero {
   #name = "";
   #addTotalPoint = 0;

   constructor() {
       this.this.addTotalPoint = new Point;
   }
}

var hero = prompt("Please enter your name!");

if (hero == null || hero == "") {
  txt = "Game cancelled!";
} else {
  txt = "Hello " + hero + "! Are you redy to play?";
}

var map = [
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 2, 2, 2, 2, 1, 1, 1, 2, 2, 2, 5],
    [1, 1, 1, 1, 2, 2, 2, 2, 2, 1, 1, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 2, 1, 1, 1],
    [1, 1, 2, 2, 2, 2, 2, 2, 2, 1, 1, 1],
    [1, 1, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 4],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]

]

var hero = {
    x: 11,
    y:6
}

function drawWorld() {
    document.getElementById('world').innerHTML = "";
    for (var y = 0; y < map.length; y = y + 1) {
        for (var x = 0; x < map[y].length; x = x + 1) {
            //console.log(map[y][x])
            if (map[y][x] === 1) {
                document.getElementById('world').innerHTML += "<div class='wall'></div>";
            }
            else if (map[y][x] === 2) {
                document.getElementById('world').innerHTML += "<div class='stone'></div>";
            }
            else if (map[y][x] === 3) {
                document.getElementById('world').innerHTML += "<div class='ground'></div>";
            }
            else if (map[y][x] === 4) {
                document.getElementById('world').innerHTML += "<div class='hero'></div>";
            }
            else if (map[y][x] === 5) {
                document.getElementById('world').innerHTML += "<div class='spaceship'></div>";
            }
        }
        document.getElementById('world').innerHTML += "<br>";
    }
}
drawWorld();


document.onkeyup = function(event)

{
    
    //move left
    if (event.keyCode === 37){
    if ( map[hero.y][hero.x-1] !== 1){
            map[hero.y][hero.x] = 3;
    hero.x = hero.x - 1;
            map[hero.y][hero.x] = 4;
            drawWorld();
        }
    }
    //move up
    else if (event.keyCode === 38){
        if ( map[hero.y-1][hero.x] !== 1){
            map[hero.y][hero.x] = 3;
    hero.y = hero.y - 1;
            map[hero.y][hero.x] = 4;
            drawWorld();
        }
    }
    //move right
    else if (event.keyCode === 39){ 
        
        if ( map[hero.y][hero.x+1] !== 1 && hero.x < map[0].length - 2){
            console.log(map[0].length, map.length);

            map[hero.y][hero.x] = 3;
             hero.x= hero.x + 1;
            map[hero.y][hero.x] = 4;
            drawWorld();
        }
    }
    //move down
    else if (event.keyCode === 40){
        if ( map[hero.y+1][hero.x] !== 1){
            map[hero.y][hero.x] = 3;
    hero.y = hero.y + 1;
            map[hero.y][hero.x] = 4;
            drawWorld();
        }
    }


    console.log(map)
}