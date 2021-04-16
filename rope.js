class rope {

 constructor(bodyA,bodyB,offsetX,offsetXY){

    this.offsetX = offsetX;
    this.offsetXY = offsetXY;
    
    var options={
        
     bodyA:bodyA,
	   bodyB:bodyB,

    }
    this.rope = Constraint.create(options)
    World.add(world,this.rope)
 }
 display()
 {
   var posA = this.rope.bodyA.position;
   var posB = this.rope.bodyB.position;   
 }
}
