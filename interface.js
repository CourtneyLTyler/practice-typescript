// the interface created in the .ts file does not show up here, but the information is used in this file

function area(shape) {
    var area = shape.width * shape.height;
    return "I'm " + shape.name + " with area " + area + " cm squared";
}

// renders without errors, due to the ? in front of 'color' in the interface
console.log(area({ name: "rectangle", width: 30, height: 15 }));


console.log(area({ name: "square", width: 30, height: 30, color: "blue" }));

// the below outputs as 'I'm undefined with area 450 cm squared', because the name is not defined
console.log( area( {width: 30, height: 15} ) );