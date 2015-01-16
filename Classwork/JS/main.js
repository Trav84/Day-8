// min must be >= max
// min and max must also be numbers
function randomRange (min , max) {

	if(typeof min !== 'number') {
		throw 'Min must be a number';
	}

	if(typeof max !== 'number') {
		throw 'Max must be a number';
	}

	if(min > max) {
		throw 'Max must be greater than or equal to min';
	}

	var random = Math.random();

	return Math.ceil(random * (max-min) + min);

}

var a = 5;
var b = 10;

console.log(randomRange(a,b));

var first_name = function (name) {
  return name;
}
console.log(first_name("bob"));

function square (x) { return(x * x) };
function cube (x) {
  return(x * square(x));
}
console.log(cube(2));

var what = function () { return "HI!!!!" };
console.log(typeof(what));

function doctor_name (last_name) {
  return "Dr. " + last_name
}

var dog = "Brown"
console.log(doctor_name(dog));

function add(x, y) {
  return(x + y);
}
console.log(add(1, 2, 3, 4, 10, 20));

function lamp() {
  var my_special_variable = "I am special";
}
lamp();
console.log(lamp());

var result;
if (undefined) {
  result = function () { return "blah blah blah"; }();
} else {
  result = function () { return "meow meow meow"; }();
}
console.log(result);


console.log(typeof("cat"));


add_numbers(5, 10);

var x = prompt("Enter a number");
var y = prompt("Enter another number");

console.log(add_numbers(x,y));

function reverse(number) {
	if (type of number !== "number") {
		throw "Not a number":
	}

	
}
