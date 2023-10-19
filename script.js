var outerDiv = document.getElementById('outer');
var buttons = document.getElementsByTagName('button');
var curr = "square";
var color = ["red", "orange", "green", "maroon", "pink", "violet", "darkyellow", "gold", "black", "blue", "cyan"];
var shape = ["square", "rectangle", "circle", "oval", "triangle-up", "triangle-down", 
                "triangle-topleft", "triangle-bottomleft", "triangle-bottomright", "triangle-topright"];

function randomIndex(arr) {
    var randomIndex = Math.floor(Math.random() * arr.length);
    return randomIndex;
}

buttons[0].onclick = function() {
    outerDiv.style.backgroundColor = color[randomIndex(color)];
};


buttons[1].onclick = function() {
    var currShape = shape[randomIndex(shape)];
    document.getElementById(curr).setAttribute("id", currShape);
    curr = currShape;
}