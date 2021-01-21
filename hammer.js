class Hammer{
    constructor(){
        var options= {
            'density': 1.7,
            'friction': 1.3,
            'restitution':0.2
        }
        this.body = Bodies.rectangle(280, 400, 100, 50, options);
        this.width= 100;
        this.height= 50;

        World.add(world, this.body);
    }

    display(){
        var pos= this.body.position
        var angle = this.body.angle
        push();
        pos.y = mouseY;
        pos.x = mouseX;
        translate(pos.x, pos.y);
        rotate(angle);
        rectMode(CENTER);
        stroke("white");
        strokeWeight(2);
        fill("yellow")
        rect(0, 0, this.width, this.height);
        pop();
    }
}