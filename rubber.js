class rubber{
    constructor(x, y, r){
        this.body = Bodies.circle(x, y, r)
        this.radius=r;

        World.add(world, this.body)
    }
    display(){
        var pos = this.body.position
        var angle = this.body.angle

        ellipseMode(RADIUS)
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        stroke("black");
        strokeWeight(2);
        fill("blue")
        ellipse(0, 0, this.radius);
        pop();
    }
}