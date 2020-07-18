class Obstacle{
    constructor(x,y){
        var options = {
            'restitution':0.8,
            'friction':1.0,
            'density':1.0
        }
        this.body = Bodies.rectangle(x,y,40,40,options);
        this.width = 40;
        this.height = 40;
        this.image = loadImage("./images/meteoroid.png");
        World.add(world,this.body);
    }
    display(){
        var pos = this.body.position;
        
        imageMode(CENTER);
        image(this.image,this.x,this.y,this.width,this.height);
       
        
        
    }
};