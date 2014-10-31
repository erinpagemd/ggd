//this is a comment

var colors = ["blue", 'green', "yellow"];
console.log('array of colors', colors);
var first = colors[0];
console.log("first is ", first);
var last = colors[2];
console.log('last is ', last);

for(var index = 0; index < colors.length; index++){
  console.log('looping index', index);
  console.log('corresponding color', colors[index]);
}

var numbers = [];
for(var count = 0; count < 3; count++){
  var number = prompt('putting in a number');
  number = parseInt(number);
  numbers.push(number);
}

var sum = 0;
for(var i = 0; i < numbers.length; i++){
  sum = sum + numbers[i];
}

console.log('sum of the values is ', sum);
