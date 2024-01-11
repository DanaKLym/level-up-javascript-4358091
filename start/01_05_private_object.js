// Write your code here

const username = Symbol("username");
const password = Symbol("password");

const user = {
  [username]: "Dana Klym",
  [password]: 1234568,
  age: 28
};

console.log(user.username);
console.log(user.password);

//NOTE: if we created Symbol() before and would get the object properties in [] and run "console.log" with square-bracketed props, this would return "undefined";
