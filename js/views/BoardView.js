import draw from "../utils/draw.js";

export default class BoardView{ //Vista del tablero

    constructor(canvas, board){
        this.canvas = canvas;
        this.board = board;
        this.canvas.width = board.width;
        this.canvas.height = board.height;
        this.ctx = canvas.getContext("2d");
    }

    clean(){
        this.ctx.clearRect(0,0,this.board.width, this.board.height);
    }

    draw(){
        //print element
        for(let i =  this.board.elements.length -1 ; i >= 0; i--) {
            let elementOfBoard = this.board.elements[i];
            draw(this.ctx, elementOfBoard);
        }
    }

    play(){
        this.clean();
        this.draw();
        this.board.ball.move();
    }

}
