var wiggles = [];

for(var food = 0; food < 4; food++){
  var ate = prompt('what did wiggles eat?');
  wiggles.push(ate);
  console.log('wiggles has eaten', wiggles);
}

console.log("wiggles is fat because she ate ", wiggles);

console.log("first wiggles ate", wiggles[0]);
console.log("next wiggles ate", wiggles[1]);
console.log("wiggles ate this third thing", wiggles[2]);
console.log("last wiggles ate", wiggles [3]);
