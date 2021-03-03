const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

const BALLZ = [];

let LEFT, UP, RIGHT, DOWN;

class Ball {
    constructor(x, y, r) {
        this.x = x;
        this.y = y;
        this.r = r;
        this.player = false;
        BALLZ.push(this);
    }

drawBall() { // function to draw circles
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.r, 0, 2*Math.PI);
    ctx.strokeStyle = "black"; // colour of the circle
    ctx.stroke();
    ctx.fillStyle = "white";
    ctx.fill();
    }
}

function keyControl(b) {
    canvas.addEventListener('keydown', function(e){
        if(e.keyCode === 37){ // ASCII code of up arrow key is 37
            LEFT = true;
        }
        if(e.keyCode === 38){
            UP = true;
        }
        if(e.keyCode === 39){
            RIGHT = true;
        }
        if(e.keyCode === 40){
            DOWN = true;
        }
    });

    canvas.addEventListener('keyup', function(e){
        if(e.keyCode === 37){ // ASCII code of up arrow key is 37
            LEFT = false;
        }
        if(e.keyCode === 38){
            UP = false;
        }
        if(e.keyCode === 39){
            RIGHT = false;
        }
        if(e.keyCode === 40){
            DOWN = false;
        }
    });

    if(LEFT){
            b.x -= 12;
    }
    if(UP){
            b.y -= 12;
    }
    if(RIGHT){
            b.x += 12;
    }
    if(DOWN){
            b.y += 12;
    }

}

function mainLoop() { // draws the circle per time
    ctx.clearRect(0, 0, canvas.clientWidth, canvas.clientHeight);
    BALLZ.forEach((b) => {
        b.drawBall();
        if (b.player){
            keyControl(b);
        }
    })
    requestAnimationFrame(mainLoop);
}

let Ball1 = new Ball(200, 200, 30)
Ball1.player = true;

requestAnimationFrame(mainLoop);