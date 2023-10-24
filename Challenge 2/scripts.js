// script.js

/*	Arrow Functions:
	1. Removed the word 'function'   
	2. Added parentheses to the parameters
	3. Removed curly brackets - You need to remove the brackets if you do not specifically use the return keyword and we are able to do this because arrow functions support implicit returns
*/
add = (a, b) => a + b;

multiply = (a, b) => a * b; // Changed to * (multiply)

/*	Traditional function:
	1. Changed this.add to just add
	2. Changed this.a to this.internal.a and so on otherwise it wouldn't really know where to look
	3. Created addedMultiplied const variable so that the results can be stored somewhere
	4. Called multiply function (also removing this from this.multiply) and pass it the parameters: results from added function and the value of internal.c
	5. Return addedMultiplied
	*/

function internal() {
  const added = add(this.internal.a, this.internal.b); // Need to use the this method because otherwise you cannot have one function that looks inside of example1 and example2
  const addedMultiplied = multiply(added, this.internal.c);
  return console.log(addedMultiplied); // Why can you not just say return addedMultiplied? Where do things appear when they get returned?
}

// Not allowed to change below this

const example1 = {
  internal: {
    a: 2,
    b: 4,
    c: 8,
  },
  add,
  multiply,
  calculate: internal,
};

const example2 = {
  internal: {
    a: 2,
    b: 2,
    c: 3,
  },
  add,
  multiply,
  calculate: internal,
};

example1.calculate();
example2.calculate();
