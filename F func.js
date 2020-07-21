// function hello() {
//     return `hello,my name is ${this.name}`
// }

// function hello(chao='hello'){
//     return `${chao}, my name is ${this.name}`
// }

// const say = { name: 'Duc' }

// console.log(hello.call(say));

// console.log(hello.call(say,'How do you do')); 
// //duoc thay the boi chao,con say chi la lay ten ra

//memoization
// function square(x){
//     square.cache = square.cache || {};
//     if(!square.cache[x]){
//         square.cache[x] = x*x
//     }
//     return square.cache[x]
// }

// console.log(square(3));

// (function(){
//     const temp = 'Duc'
//     console.log(`hello,my name is ${temp}`);
    
// }())

(function() {
    const name = 'Duc'; 
    const days = ['Sunday','Monday','Tuesday','Wednesday','Thursday',
 'Friday','Saturday'];
    const date = new Date()
    const today = days[date.getDay()];
    console.log(`Welcome back ${name}. Today is ${today}`);
    })()



