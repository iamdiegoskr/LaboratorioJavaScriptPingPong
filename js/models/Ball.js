export default class Ball{

    constructor(x,y,radius,board){
        this.x = x;
        this.y = y;
        this.radius = radius;
        this.board = board;
        this.speedY = 0;
        this.speedX = 3;
        this.kind = "circle";
        this.direction = 1;

        board.ball = this;
    }

    move(){

        //this.x += this.speedX * this.direction;
        this.y += this.speedY;

        if(this.y + this.radius > this.board.getHeight ||
            this.y + this.radius < 0 ){

            this.speedY -= this.speedY;

        }

    }

}