export default function draw(ctx, element){ //Element can be rectangle or circle

        switch(element.kind){
            case "rectangle":
                ctx.fillStyle = "red";
                ctx.fillRect(element.x, element.y, element.width, element.height);
                break;
            case "circle":
                ctx.fillStyle = "white"
                ctx.beginPath();
                ctx.arc(element.x,element.y,element.radius,0,7);
                // x and y positions, radius, start angle, end angle, direction
                ctx.fill();
                ctx.closePath();
                break;
        }

}