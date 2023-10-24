// SIMPLE ANSWER

// Initialized the variables as const
const firstName = "John";
const age = 35;
const hobby = "Coding";

/*  1. Changed hobby function declaration into the below arrow function (the hoisting was causing a bug)
    2. Changed from name to firstName to call it correctly (inside the interpolation)
    3. Moved it to the top. Logically you create the sentence first and then log it so you know what you are logging
     */
const logSentence = () => {
  console.log(`Hello, ${firstName} (${age}). I love ${hobby}!`); //
};

const logSentenceTwice = () => {
  logSentence();
  logSentence();
}; // Simply calls logSentence twice. Why does something like logSentence() * 2 not work?

logSentenceTwice(); // Calls logTwice()

//////////////////////////////////////////////////////////////////////////////////////

// MORE ADVANCED ANSWER USING PARAMETERS

// Initialized the variables as const
const firstName = "John";
const age = 35;
const hobby = "Coding";

// Fixed console.log syntax and gave the function a parameter
const logTwice = (thisIsAParameter) => {
  console.log(thisIsAParameter);
  console.log(thisIsAParameter);
};

// Left this as a traditional function but changed the name so that the hoisting wouldn't cause a bug
function logHobby() {
  logTwice(`Hello, ${firstName} (${age}). I love ${hobby}!`); // Changed name to firstName
}

logHobby(); // Logs the desired result
