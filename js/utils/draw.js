export default function draw(ctx, element){ //Element can be rectangle or circle

        switch(element.kind){
            case "rectangle":
                ctx.fillStyle = "black";
                ctx.fillRect(element.x, element.y, element.width, element.height);
                break;
            case "circle":
                ctx.fillStyle = "red"
                ctx.beginPath();
                ctx.arc(element.x,element.y,element.radius,0,7, Math.PI*2,false);
                // x and y positions, radius, start angle, end angle, direction
                ctx.fill();
                ctx.closePath();
                break;
        }

}