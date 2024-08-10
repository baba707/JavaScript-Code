//  function chai() {
//     let username = shahab;
//     console.log(this.username);
    
//  }
//  chai();

/** Arrow Function is the form of function 
 * syntax is given below
 */
/** this function is used in the object and we can use it also in arrow function */
//  const chai = () => {
//     let username = "shahab";
//     console.log(this.username);
    
//  }
//  chai();

const addTwoNums = (num1, num2) =>{
    return num1 + num2; //explicit return means use return keyword
}
console.log(addTwoNums(4, 6));

/**Implicit return */
const addTwonums = (num1, num2) => (num1 + num2)
const addObject = (num1, num2) => ({username : "SHAHAB KHAN"}) //for object
console.log(addTwonums(3, 4));
console.log(addObject(3, 4));