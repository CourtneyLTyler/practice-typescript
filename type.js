function area(shape, width, height) {
    var area = width * height;
    return "I'm a " + shape + " with an area of " + area + " cm squared.";
}
document.body.innerHTML = area("rectangle", 30, 15);
// // attempt to run in CLI with the below code instead of the DOM code above - unsuccessful
// area("rectangle", 30, 15)
