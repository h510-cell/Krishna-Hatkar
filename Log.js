class Log extends BaseClass{
   constructor(x,y,height,angle){
     super(x,y,20,height,angle);
     this.image=LoadImage("sprites/wood2.png");
      Matter.Body.setangle(this.body,angle);
}
}