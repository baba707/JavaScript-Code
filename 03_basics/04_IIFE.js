/** Immediately Invoked Function Expressions (IIFE) */

//Normal Function Systax
// function Chai (){
//     console.log("Chal Shahab Chai Pite hai");
    
// }
// Chai();

//IIFE Syntax
(function Chai (){
        console.log("Chal Shahab Chai Pite hai");
})();

(function Chai(name){
        console.log(`Chal ${name} Chai Pite hai`);
})("Umair");
