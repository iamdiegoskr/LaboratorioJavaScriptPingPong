export default class Ball{

    constructor(x,y,radius,board){
        this.x = x;
        this.y = y;
        this.radius = radius;
        this.board = board;
        this.speedY = 5;
        this.speedX = 5;
        this.kind = "circle";

        board.ball = this;
    }

}