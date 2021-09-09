import Ball from "./models/Ball.js";
import Bar from "./models/Bar.js";
import Board from "./models/Board.js";
import BoardView from "./views/BoardView.js";

export let sounds = {
    hit: new Audio('https://s3.amazonaws.com/freecodecamp/simonSound1.mp3')
}

let canvas = document.getElementById("canvas");
let board = new Board(800,400);

let positionMiddleY = board.getHeight/2 - 60;

let barLeft = new Bar(10,positionMiddleY,20,100,"red",board)
let barRight = new Bar(770,positionMiddleY,20,100,"red",board)

let boardView = new BoardView(canvas, board);
let ball = new Ball(board.getWidth/2,board.getHeight/2,10, board);

boardView.draw();






//Evento para escuchar cuando una tecla es presionada.
document.addEventListener('keydown',(event)=>{

    event.preventDefault();

    if(event.key=="w"){
        barLeft.up();
    }else if(event.key=="s"){
        barLeft.down();
    }else if(event.key=="ArrowUp"){
        barRight.up();
    }else if(event.key=="ArrowDown"){
        barRight.down();
    }else if(event.keyCode==32){
        event.preventDefault();
        board.playing = !board.playing;
    }
})




export function winner(userWin){

    if(userWin=="user1"){
        alert("HA GANADO EL USUARIO 1, FELICIDADES")
    }
    if(userWin=="user2"){
        alert("HA GANADO EL USARIO 2, FELICIDADES")
    }

    resetPositions();
}

function resetPositions(){
    //reset bars
    barLeft.x = 10;
    barLeft.y = positionMiddleY;
    barRight.x = 770;
    barRight.y = positionMiddleY;

    //reset ball
    ball.x = board.getWidth/2;
    ball.y = board.getHeight/2;
    ball.speed = 8;
    ball.speedY = 0;
    ball.speedX = 5;
    ball.bounce_angle = 0;
    ball.max_bounce_angle = Math.PI/12;

    //pause
    setTimeout(() => {
        board.playing = !board.playing;
    }, 50);

}

window.requestAnimationFrame(controller);

function controller(){

    boardView.play();
    window.requestAnimationFrame(controller)
}

