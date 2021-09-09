import { winner } from "../main.js";
import {resetBall} from "../utils/reset.js";

let scoreUserText = document.getElementById("userScore");
let scoreUser2Text = document.getElementById("computerScore");
let scoreUser = 0;
let scoreUser2 = 0

export default class Ball{

    constructor(x,y,radius,board){
        this.x = x;
        this.y = y;
        this.radius = radius;
        this.board = board;
        this.speed = 8;
        this.speedY = 0;
        this.speedX = 5;
        this.kind = "circle";
        this.direction = 1; // Direccion hacia la derecha.
        this.bounce_angle = 0;
        this.max_bounce_angle = Math.PI/12;

        board.ball = this;
    }

    collision(bar){
        //Reacciona a la colision con una barra.

        //calcular en angulo con el que se va a mover cuando colisione.
        let relative_intersect_y = ( bar.y + (bar.height / 2) ) - this.y;

        let normalized_intersect_y = relative_intersect_y / (bar.height / 2);

        this.bounce_angle = normalized_intersect_y * this.max_bounce_angle;

        this.speedY = this.speed * -Math.sin(this.bounce_angle);
        this.speedX = this.speed * Math.cos(this.bounce_angle);

        if (this.x > (this.board.width / 2)){
            this.direction = -1;
        }else{
            this.direction = 1;
        }

    }

    move(){
        this.x += this.speedX * this.direction;
        this.y += this.speedY;

        //Validamos la posicion en y para hacer rebotar la pelota, cambiando la direccion.
        if(this.y + this.radius > this.board.getHeight ||
            this.y + this.radius <= 20 ){

            this.speedY = -this.speedY;
        }

        if(this.x + this.radius < 0){

            scoreUser2Text.innerHTML = ++scoreUser2;

            if(scoreUser2==3){
                resetGameScore()
                winner("user2")
            }
            resetBall(this);

        }else if(this.x + this.radius > this.board.getWidth){

            scoreUserText.innerHTML = ++scoreUser;

            if(scoreUser==3){
                resetGameScore()
                winner("user1")
            }
            resetBall(this);
        }
    }


    get width(){
        return this.radius*2;
    }

    get height(){
        return this.radius*2;
    }

}

function resetGameScore(){
    scoreUserText.innerHTML = 0
    scoreUser2Text.innerHTML = 0;
    scoreUser = 0;
    scoreUser2 = 0
}