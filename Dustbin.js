class Dustbin {
    constructor(x, y, width, height) {
      var options = {
          isStatic:true
      }
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;

      this.dustbin = loadImage("sprites/Dustbin.png")
      
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      var angle = this.body.angle;
      push();
      
      if(this.height===20){
      imageMode(CENTER);
      strokeWeight(4);
      stroke("green");
      fill(255);
      image(this.dustbin,pos.x,pos.y-50, this.width+50, this.height*5);
      pop();
      }
    }
  };