class Drop{
    constructor(x,y){
        this.xPos=x
        this.yPos=y
        this.radiusX=4
        this.radiusY=random(10,20)
    }
    display(){
        fill(random(0,255),random(0,255),random(180,255))
        ellipse(this.xPos,this.yPos,this.radiusX,this.radiusY)
    }
    fall(){
        this.yPos=this.yPos+random(3,8)
        if(this.yPos>height){
            this.yPos=0
        }
    }
}