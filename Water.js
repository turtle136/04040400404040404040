/*class Water{
    constructor( x, y, width, height){
         var options = {
             'isStatic' : true,
             'friction' :0.0
            
          }

     this.body = Bodies.rectangle(x, y, width, height, options);
     this.width = width;
     this.height = height;
     //this.image = loadImage();
     World.add(world, this.body);    

    }
    display(){
       // var position = this.body.position;
        push();
        var pos= this.body.position;
        //imageMOde(CENTER);
        fill("blue");
        rectMode(CENTER);
        rect( pos.x, pos.y, this.width, this.height);
        pop();
    }


}*/