

 let person = {
  name: 'Del',
  age: 30
 };

 person.name = "Dayo";
 let selection = 'name';
 person[selection] = 'Joy'

 console.log(person.name);

 let selectedColors = ['red', 'blue']
 selectedColors[2] = '1';
 console.log(selectedColors.length);


 //Performing a task
function greet(name, lastName) {
  console.log('Hello ' + name + ' ' + lastName) ;
}

// Calculating a value

function square(number) {
  return number * number
}

let number = square(2);
console.log(square(2));

