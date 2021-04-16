class ball{
  
 constructor(x,y,r){

  var options = 
  {
    isStatic:false,
    restitution:1,
    friction:0,
    density:0.8
  }              

  this.x = x
  this.y = y
  this.r = r

  this.body = Bodies.circle(this.x,this.y, (this.r)/2, options)
  World.add(world,this.body)
    
}
display()
{
    var ballPos = this.body.position
    translate (ballPos.x,ballPos.y)
    rectMode(CENTER);
    ellipse(0,0,this.r,this.r)

}
        
    
}