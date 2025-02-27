/* Var Alert Prompt Conditionals */
// make a variable for pet type, prompt user for it 
var petType = prompt("What type of pets do you like? ");
// make a variable for pet name, prompt user for it
var petName = prompt("How do you call your pet?");
// alert "You have a pet type named pet name 
alert("You have " + petType + " named " + petName);
// if pet is a dog, say "I like dogs, too!"
if ( petType=="dog") alert("I like dogs too!");
// if it is a cat, say "I'm allergic to cats"
else if (petType=="cat") alert("I'm allergic to cats!");
// If it is not a dog or a cat, say "what an interesting pet!"
else alert("what an interesting pet!");