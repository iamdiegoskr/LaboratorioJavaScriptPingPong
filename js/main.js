import Bar from "./models/Bar.js";
import Board from "./models/Board.js";
import BoardView from "./views/BoardView.js";


let canvas = document.getElementById("canvas");

let board = new Board(800,500);

let positionMiddleY = board.getHeight/2 - 60;

let barLeft = new Bar(10,positionMiddleY,20,100,"red",board)
let barRight = new Bar(770,positionMiddleY,20,100,"red",board)

let boardView = new BoardView(canvas, board);

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
    }
})



window.requestAnimationFrame(controller);

function controller(){
    //init play
    boardView.play();
    window.requestAnimationFrame(controller)
}

