class Room{
    constructor(name, length, width, capacity = 15){
        this.name = name;
        this.length = length;
        this.width = width;
        this.capacity = capacity;
    }
    getArea(){
        return this.length * this.width;
    }
    getPerimeter(){
        return 2* (this.length + this.width)
    }
    available = true;
}

const room1 = new Room("Sun", 30, 20);
console.log(room1.name, room1.length, room1.width, room1.getArea(), room1.getPerimeter());
let room2 = new Room("Green", 15, 20,18);
console.log(room2.name, room2.length, room2.width, room2.getArea(), room2.getPerimeter());
room2.available = false;
console.log(room1.available);
console.log(room2.available);

console.log(room1.capacity);
console.log(room2.capacity);





