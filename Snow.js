 class Snow {
    constructor(x,y,width,height){
        this.width = width;
        this.height = height;
        this.image = loadImage("snow4.webp");
        var options = {
            restitution: 0.5,
            friction: 1,
            density: 0.1
        }
        this.body = Bodies.rectangle(x,y,this.width,this.height,options);
        World.add(world,this.body);
    }

    display(){
        var pos = this.body.position;
        var angle = this.body.angle;
        imageMode(CENTER);
        angleMode(RADIANS);
        push();
        translate(pos.x,pos.y);
        rotate(angle);
        image(this.image,0,0,this.width,this.height);
        pop();
    }
 }