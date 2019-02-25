interface Shape {
    name: string;
    width: number;
    height: number;
    color?: string;
}

// js file does not have the code above, and states only 'function area(shape)', drawing the info from this file
function area(shape : Shape) {
    let area = shape.width * shape.height;
    return "I'm " + shape.name + " with area " + area + " cm squared";
}
 
// when converting the file, any type errors here will produce an error message
console.log( area( {name: "rectangle", width: 30, height: 15} ) );
console.log( area( {name: "square", width: 30, height: 30, color: "blue"} ) );