var pedro = {
  name: "pedro",
  age: 22
};

console.log(pedro);
pedro.color = "orange";
console.log(pedro);
// pedro[hobby] = "cartwheels";     <-- gives an error because hobby is not a variable
pedro["hobby"] = "cartwheels";
console.log(pedro);
var skill = "baseball";
pedro[skill] = "8/10";
console.log(pedro);

console.log("\n\n");

function Person(name, age, colorArg, hobbyArg) {
  this.name = name;             // PUBLIC
  this.age = age;               // PUBLIC
  var color = colorArg;         // PRIVATE
  var hobby = hobbyArg;         // PRIVATE
  this.getColor = function() { return color; };         // PUBLIC
  var getHobby = function() { return hobby; };              // PRIVATE
  this.hobbyGreeting = function() { return "My fav hobby is " + getHobby(); };  // PUBLIC
  var id = function() { return Person.userNum++; }();       // PRIVATE
  this.getID = function() { return id; };                   // PUBLIC
}

Person.userNum = 0;         // Static Property
var todd = new Person('Todd', 31, 'blue', 'coding');
var deep = new Person('Deep', 20, 'red', 'video games');
var joe = new Person('Joe', 22, 'purple', 'board games');

// Person.prototype.concatName_Color = function() { return todd.name + todd.getColor(); };  <-- doesn't work because getColor() is private
Person.prototype.concatName_Age = function() { return this.name + this.age; };
Person.prototype.sport = "";

todd.sport = "Track and Field";
deep.sport = "Pool";
joe.sport = "Basketball";

console.log("names: " + todd.name + ", " + deep.name + ", " + joe.name);
console.log("todd's color: " + todd.getColor());
//console.log(todd.getHobby());   <-- doesn't work because getColor() is private
console.log("todd's concatName_Age(): " + todd.concatName_Age());
console.log("deep's concatName_Age(): " + deep.concatName_Age());
console.log("todd's sport: " + todd.sport);
console.log("deep's sport: " + deep.sport);
console.log("joe's sport: " + joe.sport);
console.log("todd's hobbyGreeting(): " + todd.hobbyGreeting());      // called object's public method which calls object's private method
console.log("Todd's ID: " + todd.getID());
console.log("Deep's ID: " + deep.getID());
console.log("Joe's ID: " + joe.getID());

todd.height = "5 11";
console.log('\n');
console.log("todd's height: " + todd.height);
console.log("joe's height: " + joe.height);     // undefined because height property was only added to todd object

joe[job] = "student";
console.log("joe's first try at a job: " + joe.job);
joe["job"] = "Intern";
console.log("joe's second try at a job: " + joe.job);
var job = "occupation";
joe.job = "web developer";
todd[job] = "teaching assistant";
console.log("joe's third try at a job: " + joe.job);
console.log("todd's job: " + todd.job);                 // undefined because job is not a property of the todd object
console.log("todd's occupation: " + todd.occupation);
console.log("joe's occupation: " + joe.occupation);     // undefined because occupation is not a property of the joe object

console.log("");
console.log(todd);
console.log(deep);
console.log("");
