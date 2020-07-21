// object literals
const superman = {
    name: 'Superman','real name': 'Clark Kent',
    height: 75,
    weight: 235,
    hero: true,
    villain: false,
    allies: ['Batman','Supergirl','Superboy'],
    fly() {
    return 'Up, up and away!';
    }
    };

// const hulk = { name: 'Hulk', ['catch' + 'Phrase']: 'Hulk Smash!' }
// console.log(hulk);

//call method
//console.log(superman.fly());

//check method
// console.log(superman.hasOwnProperty('name'));

//find a property
// for(const key in superman){
//     console.log(key + ":" + superman[key]); 
// }

//check implement
// for(const key in superman){
//     if(superman.hasOwnProperty(key)){
//         console.log(key + ":" + superman[key]);
        
//     }
// }

//Object.keys()
// for(const key of Object.keys(superman)) {
//     console.log(key);
//     }

//Object.value()
// for(const value of Object.values(superman)) {
//     console.log(value);
//     }

//Object.entries()
// for(const [key,value] of Object.entries(superman)) {
//     console.log(`${key}: ${value}`);
//     } // co ban giong find property 

//add property
// console.log(superman.city = 'Metropolis');
// console.log(superman);

//change property
// console.log(superman['real name'] = 'Kal-El');
// console.log(superman);

//delete property
//  console.log(delete superman.fly);
//  console.log(superman);

//nested Object
// const jla = {
//     superman: { realName: 'Clark Kent' },
//     batman: { realName: 'Bruce Wayne' },
//     wonderWoman: { realName: 'Diana Prince' }, 
//     flash: { realName: 'Barry Allen' },
//     aquaman: { realName: 'Arthur Curry' },
//     }
// console.log(jla.wonderWoman.realName);
// console.log(jla['flash']['realName']);

// Objects as Parameters to Functions 
// function greet({greeting,name,age}) {
//     return `${greeting}! My name is ${name} 
//             and I am ${age} years old.`;
// }

// console.log(greet({ greeting: `What's up dude`, age: 10, name: `Bart`
//  }))

 // Namespacing
//  const myMaths = {
//     square(x) {
//     return x * x;
//     },
//     mean(array,callback) {
//     if (callback) {
//     array.map( callback );
//     }
//     const total = array.reduce((a, b) => a + b);
//     return total/array.length;
//     }
//     };
// console.log(myMaths.square(3));

//JSON
// const batman = `{
//     "name": "Batman","real name": "Bruce Wayne","height": 74,
//     "weight": 210, "hero": true, "villain":false,
//     "allies": ["Robin","Batgirl","Superman"]
// }`
// parse
// console.log(JSON.parse(batman)); // show method
//stringfly
// const wonderWoman = {
//     name: 'Wonder Woman',
//     'real name': 'Diana Prince',
//     height: 72,
//     weight: 165,
//     hero: true,
//     villain: false,
//     allies: ['Wonder Girl','Donna Troy','Superman'],
//     lasso: function(){
//     //console.log('You will tell the truth!');
//     } 
// }
// console.log(JSON.stringify(wonderWoman));

//date object
const day = new Date();
console.log(day.toString());





