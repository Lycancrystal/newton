class bob
{
	constructor(x,y,r)
	{
		var options={
			isStatic:false,
            restitution:1,
            friction:0,
            density:1.2		
			}
		this.x=x;
		this.y=y;
		this.r=r;

        
		
		this.body=Bodies.circle(this.x, this.y,(this.r)/2, options);
 		World.add(world, this.body);

	}
	display()
	{
			
			var bobPos=this.body.position;		

			push()
			translate(bobPos.x, bobPos.y);
			imageMode(CENTER)
			//strokeWeight(4);
			fill(255,255,0,255);
			image(this.image,0,0,this.r,this.r);
			pop()
			
	}

}