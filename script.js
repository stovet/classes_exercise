class Room{
    constructor(name, length, width){
        this.name = name;
        this.length = length;
        this.width = width;
    }
    getArea(){
        return this.length * this.width;
    }
    getPerimeter(){
        return 2* (this.length + this.width)
    }
    
}

const room1 = new Room("Sun", 30, 20);
const room2 = new Room("Green", 15, 20);
