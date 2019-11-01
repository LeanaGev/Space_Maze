var points = 0;

document.write("Wellcome 'name'!  ");
document.write("Your points are: " + points);

var map = [
    [1,1,1,1,1,1,1,1,1,1,1,1]
    [1,2,2,2,2,1,1,1,2,2,2,2]
    [1,1,1,1,2,2,2,2,2,1,1,1]
    [1,1,1,1,1,1,1,1,2,1,1,1]
    [1,1,2,2,2,2,2,2,2,1,1,1]
    [1,1,2,1,1,1,1,1,1,1,1,1]
    [1,1,2,2,2,2,2,2,2,2,2,4]
    [1,1,1,1,1,1,1,1,1,1,1,1]

]
var hero = {
    x: 11;
    y: 6;
}

function drawWorld() {
    for(var y = 0; y < map.length; y = y + 1){
        for(var x = 0; x < map[y].length; x = x + 1){
            console.log(map[y][x])
            if (map[y][x] === 1){
                document.getElementById('maze').innerHTML += "<div class='wall'></div>";
            }
            else if (map[y][x] === 2){
                document.getElementById('maze').innerHTML += "<div class='stone'></div>";
            }
            else if (map[y][x] === 3){
                document.getElementById('maze').innerHTML += "<div class='ground'></div>";
            }
            else if (map[y][x] === 4){
                document.getElementById('maze').innerHTML += "<div class='hero'></div>";
            }
        }
        document.getElementById('maze').innerHTML +="<br>";
    }
}
drawWorld;





