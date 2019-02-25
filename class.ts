class Shape {
 
    area: number;
    // private declaration added
    private color: string;
 
    // public added for 'name'
    constructor ( public name: string, width: number, height: number ) {
        this.area = width * height;
        this.color = "pink";
    };
 
    shoutout() {
        return "I'm " + this.color + " " + this.name +  " with an area of " + this.area + " cm squared.";
    }
}
 

let square = new Shape("square", 30, 30);
 
// this logs w/all params
console.log( square.shoutout() );
console.log( 'Area of Shape: ' + square.area );

// this logs - due to 'public' declaration above
console.log( 'Name of Shape: ' + square.name );

// this logs with warning - due to 'private' declaration above -  Property 'color' is private and only accessible within class 'Shape'.
console.log( 'Color of Shape: ' + square.color );

// this logs as 'undefined' due to no public/private declaration, with an error: Property 'width' does not exist on type 'Shape'
console.log( 'Width of Shape: ' + square.width );

// this logs as 'undefined' due to no public/private declaration, with an error: Property 'height' does not exist on type 'Shape'
console.log( 'Height of Shape: ' + square.height );


// below is example of inheritance
class Shape3D extends Shape {
 
    volume: number;
 
    constructor ( public name: string, width: number, height: number, length: number ) {
        super( name, width, height );
        this.volume = length * this.area;
    };
 
    shoutout() {
        return "I'm " + this.name +  " with a volume of " + this.volume + " cm cube.";
    }
 
    superShout() {
        return super.shoutout();
    }
}
 
var cube = new Shape3D("cube", 30, 30, 30);
console.log( cube.shoutout() );
console.log( cube.superShout() );