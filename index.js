const dogs = [{ name: 'Snickers', age: 2 }, { name: 'hugo', age: 8 }];

function makeGreen() {
  const p = document.querySelector('p');
  p.style.color = '#BADA55';
  p.style.fontSize = '50px';
}

// Regular
console.log("hello");
// Interpolated
console.log(`Hello I am an %s.`,`🍊`);

// Styled
console.log(`%c I AM A BIG BOY`,`font-size: 50px; color: gray;`)

// warning!
console.warn("NO!");
// Error :|
console.error("Stop it!");
// Info
console.info("there is not much to know. carry on architect");
// Testing
console.assert(1>2,"wrong")
// clearing
console.clear();
// Viewing DOM Elements
let p = document.querySelector("p");
console.log(p.classList);
p.classList.add("hahah");
console.dir(p);
console.log(p.classList);
console.clear();
// Grouping together
dogs.forEach(dog =>{
    console.group(`${dog.age}`);
    console.log(`This is ${dog.name}.`);
    console.log(`${dog.name} is ${dog.age} years old.`);
    console.log(`${dog.name} is ${dog.age * 7} dog years old.`);
    console.groupEnd(`${dog.age}`);
})

// counting

// timing
