class roof
{
	constructor(x,y,w,h)
	{
		var options={
			isStatic:true,
            //restitution:1,
            //friction:0,
            //density:1.2		
			}
		this.x=x;
		this.y=y;
		//this.r=r;

        
		
		this.body=Bodies.rectangle(x,y.this.w,this.h, options);
 		World.add(world, this.body);

	}
	display()
	{
			
			var bobPos=this.body.position;		

			push()
			translate(bobPos.x, bobPos.y);
			imageMode(CENTER)
			//strokeWeight(4);
			fill(255,255,0,all128);
			rect(0.0.this.w,this.h)
			pop()
			
	}

}