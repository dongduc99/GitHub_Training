// function hello(){
//     console.log('Hello World!');
//     }
// hello();
// console.log(hello);

// function square(x){
//     return x*x;
//     }
//     console.log(square(4.5)); 

// function arguments(){
//     return arguments;
//     }
//     console.log(arguments('hello', NaN));
//    console.log(arguments(1,2,3,4,5));

// function rest(...args){
//     for(arg of args){
//     console.log(arg);
//     } }
//     console.log(rest(2,4,6,8));

//improve mean function
// function mean (...values) {
//     let total =0;
//     for(const value of values) {
//         total += value;
//     }
//     return total/values.length;
// }
// console.log(mean(2,8,13,11,4,2));
    
// arrow function
//const square = x => x*x;

// const tax = (salary) => {
//     const taxable = salary - 8000;
//     const lowerRate = 0.25 * taxable;
//     taxable = taxable - 20000;
//     const higherRate = 0.4 * taxable;
//     return lowerRate + higherRate;
// }

//callback
// function sing(song) {
//     console.log(`\I'm singing to ${song}`);
    
// }
// sing("faded");

// function sing(song,callback) {
//     console.log(`I'm singing to ${song}.`);
//     callback();
// }

//sort array with callback
function number(a,b){
    if (a < b) {
        return -1;
        } else if (a> b) {
        return 1;
        } else {
        return 0;
        }
}
 console.log([1,3,12,5,13,18,7].sort(number));
 
//array Iterator
//forEach()

//map()
// x => x*x

//reduce()
//console.log([1,2,3,4,5].reduce((acc,val)=>acc + val,10));// dem bat dau tu 10

//filter()
// const numbers = [ 2, 7, 6, 5, 11, 23, 12 ]
// console.log(numbers.filter(x => x%2 === 0 ))

//ket hop 
//console.log([1,2,3].map( x => x*x ).reduce((acc,x) => acc + x ));


//improve mean() function
// function mean(array){
//     const total=array.reduce((a,b)=> a+b);
//     console.log(total/array.length)
// }
// mean([2,10]);
    
// function mean(array,callback) {
//     if (callback) {
//     array.map( callback );
//     }
//     const total = array.reduce((a, b) => a + b);
//     console.log(total/array.length);
//     }
//     //mean([2,10])
//     mean([2,10],x => x*x);

// //quiz
// const quiz = [
//     ["What is Superman's real name?","Clark Kent"],
//     ["What is Wonder Woman's real name?","Diana Prince"],
//     ["What is Batman's real name?","Bruce Wayne"]
//     ];
//     function start(quiz){
//     let score = 0;
//     // main game loop
//     for(const [question,answer] of quiz){
//     const response = ask(question);
//     check(response,answer);
//     }
//     // end of main game loop
//     gameOver();
//     // function declarations
//     function ask(question){
//     return prompt(question);
//     }
//     function check(response,answer){
//     if(response === answer){
//     alert('Correct!');
//     score++;
//     } else {
//     alert(`Wrong! The correct answer was ${answer}`);
//     }
//     }
//     function gameOver(){
//     alert(`Game Over, you scored ${score} point${score !== 1 ?
//      's' : ''}`);
//     } }
//     start(quiz);