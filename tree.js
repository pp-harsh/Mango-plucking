class Tree {
    constructor(x,y,w,h){
        this.image = loadImage("Plucking+mangoes/Plucking mangoes/tree.png");
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
    }

    display(){
        imageMode(CENTER);
        image(this.image,this.x,this.y,this.w,this.h);
    }
}