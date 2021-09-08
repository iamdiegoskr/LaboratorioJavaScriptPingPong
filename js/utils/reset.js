export default function resetBall(ball){

    ball.x = ball.board.getWidth/2;
    ball.y = ball.board.getHeight/2;
    ball.speed = 5;
    ball.speedX = -ball.speedX;

}