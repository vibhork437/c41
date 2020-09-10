class drop{
    constructor(x,y){
        var options={
            friction:0.1
        }
        this.body = Bodies.rectangle(x,y,30,50,options)
        this.width = 30
       this.height = 50
       this.visibility = 0
       this.image = loadImage("drop.png");
        World.add(world,this.body);  
    }
    display(){
        

        var pos = this.body.position
        var angle = this.body.angle
        push()
        translate(pos.x,pos.y);
        rotate(angle);
        rectMode(CENTER)
       fill("yellow");
        imageMode(CENTER);
        image(this.image,0,0,5,5)
        pop()
        
        
    }

    update(){
        if(this.body.position.y>800){
           Matter.Body.setPosition(this.body,{x: random(0,1200),
           y: random(0,20)
           });
         }
      }
}