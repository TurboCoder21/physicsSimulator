class Human {
    constructor() {
        this.mass=5;
        this.gravity=2;
        this.weight;
        this.jumpForce = 0;
        this.velocity;
        this.x = 450;
        this.y = height - 50;
        this.size = 80;
        this.xspeed = 10;
    }

    move() {
        this.y += this.jumpForce;
        this.jumpForce += this.gravity;
        this.y = constrain(this.y, 0, height - this.size);
        this.x = constrain(this.x, 0, width - this.size)
        if (left == true) {
            this.x -= this.xspeed;
        }
        if (right == true) {
            this.x += this.xspeed;
        }
    }

    show() {
        image(humanI, this.x, this.y, this.size, this.size)
    }

    jump() {
        if (this.y >= height - (this.size + 5)) {
            this.jumpForce = -35;
        }
    }
}