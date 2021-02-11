class paper{
    constructor(x,y,r)
    {
    var paper_options={
        isStatic:false,
        density:2.3,
        restitution:.5,
        friction:0.5
    }

    this.body = Bodies.circle(x,y,r/2,paper_options);
        
    this.radius = r;
        
        World.add(world,this.body)
        this.image=loadImage("sprites/paperimg.png")
        
    }
    display(){
        var position= this.body.position
        push();
        fill("red")
        imageMode(CENTER)
        image(this.image,position.x,position.y,this.radius,this.radius)
        
        pop();
       
    }
}    
