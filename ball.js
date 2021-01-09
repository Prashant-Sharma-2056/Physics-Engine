class Ball{
    constructor(x,y,radius){
        var options={
            restitution: 1.0
        }
        this.radius=50;
        this.x=x;
        this.y=y;
        this.body=Bodies.circle(x,y,50, options);
        World.add(world, this.body);
    }
    display(){
        ellipseMode(CENTER);
        ellipse(this.body.position.x,this.body.position.y,this.radius, this.radius);
        fill("red");
    }
}