class CannonBall{
    constructor(x,y){
    var options={
        isStatic:true
    }
    this.body=Bodies.circle(x,y,30,options);
    this.image=loadImage("assets/cannonball.png")
    World.add(world,this.body);
    }
    display(){
        push();
        imageMode(CENTER);
        image(this.image,this.body.position.x,this.body.position.y,30,30)
        pop();
    }
    shoot(){
        Matter.Body.setStatic(this.body,false);
        Matter.Body.setVelocity(this.body,{x:30,y:20});
    }
}