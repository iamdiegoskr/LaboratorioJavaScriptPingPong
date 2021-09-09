import { sounds } from "../main.js";
import draw from "../utils/draw.js";
import hit from "../utils/hit.js";

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
        for(let i =  this.board.elements.length -1 ; i >= 0; i--) {
            let elementOfBoard = this.board.elements[i];
            draw(this.ctx, elementOfBoard);
        }
    }

    checkCollision(){
        for (let i = this.board.bars.length - 1; i >= 0 ; i--) {

            let bar = this.board.bars[i];

            if(hit(bar,this.board.ball)){ //Validar colisison entre elementos
                sounds.hit.play();
                this.board.ball.collision(bar);
            }
        }
    }

    play(){

        if(this.board.playing){
            this.clean();
            this.draw();
            this.checkCollision();
            this.board.ball.move();
        }
    }

}
