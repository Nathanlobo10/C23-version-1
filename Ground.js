class Ground {
   
    constructor(x,y,width,height){
   
       var ground_options = {
       isStatic:true 
          
       }
   
   
       //this refers to the current box object which you are creating
        this.body = Bodies.rectangle(x,y,width,height,ground_options);
        this.width = width;
        this.height = height;
        World.add(myworld,this.body);
   
    }
   
    display() {
       
       var pos = this.body.position;
       rectMode(CENTER);
       rect(pos.x, pos.y,this.width,this.height);
   
    }
   
   
   
   
   
   
   
   
   }















