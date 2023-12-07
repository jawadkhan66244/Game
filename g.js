// Game constants & variables
let inputDir = {x: 0,y:0};
const khS = new Audio('f.mp3');
const gameO = new Audio('go.mp3');
const gameM = new Audio('mu.mp3');
let speed = 4;
let score = 0;
let lPt = 0; 
let snakeArr = [
    {x: 13, y: 15}
]
food = {x: 6, y: 7};
// Game functions
function main(ctime) {
    window.requestAnimationFrame(main);
    
    if((ctime - lPt )/1000 < 1/speed){
        return;
    }
    lPt = ctime;
    gameEngine();  
}

function isCollide(snake) {
    //if you bump yourself
    for (let i = 1; i < snakeArr.length; i++) {
        if(snake[i].x === snake[0].x  &&  snake[i].y === snake[0].y){
            return true;
        }

    }
    // if you bomp in the wall
        if (snake[0].x >= 18 || snake[0].x <= 0  ||  snake[0].y >= 18 || snake[0].y <= 0) {
            return true;
        }
}

function gameEngine() {
    // part 1: Updating the snake array & food
    if(isCollide(snakeArr)){
        gameO.play();
        gameM.pause();
        inputDir = {x: 0, y: 0};
        alert("Game Over.");
        snakeArr[{x: 13, y: 15}];
        // gameM.play();
        score = 0;
    }

    // if you have eaten the food, increment the score & rg the food
    if(snakeArr[0].y === food.y && snakeArr[0].x === food.x){
        khS.play()
        score += 1;
        scoreBox.innerHTML = "Score: " + score;
        snakeArr.unshift({x: snakeArr[0].x + inputDir.x, y: snakeArr[0].y + inputDir.y});
        let a = 2;
        let b = 16;
        food = {x: Math.round(a + (b -a) * Math.random()),y: Math.round(a + (b -a) *  Math.random())}
    }

    // moving the snake
    for (let i = snakeArr.length -2; i >=0; i--) {

        snakeArr[i+1] = {...snakeArr[i]}; 
    };

    snakeArr[0].x += inputDir.x;
    snakeArr[0].y += inputDir.y;


    // part 1: Display the snake
    board.innerHTML = "";
    snakeArr.forEach((e, index)=>{
    snakeElement = document.createElement('div');
    snakeElement.style.gridRowStart = e.y;
    snakeElement.style.gridColumnStart = e.x;
    
    if(index === 0){
        snakeElement.classList.add('head')
    }
    else{
        snakeElement.classList.add('snake')
    }
    board.appendChild(snakeElement);
    });
    // Display the food
    foodElement = document.createElement('div');
    foodElement.style.gridRowStart = food.y;
    foodElement.style.gridColumnStart = food.x;
    foodElement.classList.add('food')
    board.appendChild(foodElement);

}
 









// Main logic starts here 
window.requestAnimationFrame(main);
window.addEventListener('keydown', e  =>{
    inputDir = {x: 0, y: 1} // Start the game
    
switch (e.key) {
    case "ArrowUp":
        inputDir.x = 0;
        inputDir.y = -1;
        break;
    case "ArrowDown":
        inputDir.x = 0;
        inputDir.y = 1;
        break; 
    case "ArrowLeft":
        inputDir.x = -1;
        inputDir.y = 0;
        break;
    case "ArrowRight":
        inputDir.x = 1;
        inputDir.y = 0;
        break;
    default:
        break;
}
});