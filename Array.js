// const heroes = [];
// heroes[0] = 'Batman';
// heroes[1] = 'Wonder Wom';
// heroes[2] = 'Flash';
// console.log(heroes);

// pop push shift unshift
const avengers = ['Captain America', 'Iron Man', 'Thor', 'Hulk',
'Hawkeye', 'Black Widow'];
// avengers.length = 6;
//  console.log(avengers);

//  console.log(avengers.pop()); // pop la xoa gia tri cuoi cua mang
//  console.log(avengers);

//  console.log(avengers.shift()); // shift la xoa gia tri dau trong mang
//  console.log(avengers);

// avengers.push('Thor'); // push la them vao mang mot gia tri o cuoi mang
// console.log(avengers);

// avengers.unshift('Captain America'); // unshift la them vao mang mot gia tri o dau mang
// console.log(avengers);

/* Merging Arrays */

//console.log(avengers.concat(['Hulk','Hawkeye', 'Black Widows']));
//noi vao mang

// Join method
// console.log(avengers.join(' & '))

//Sclicing and Splicing
// console.log(avengers.slice(2,4)); // lay ra phan tu 3 va 4
// console.log(avengers.splice(3,2,' duc','chau')); // loai bo phan tu da chon va thay vao do mot phan tu khac 
// console.log(avengers);

//Reverse
//avengers.reverse(); //dung de dao nguoc lai cac phan tu trong array

//Sort
//console.log(avengers.sort()); //dung de sap theo theo thu tu A->Z

//find value in array
//console.log(avengers.indexOf('Thor')); // tim vi tri trong mang
//console.log(avengers.includes('Iron Man'));// xác định trong mảng có phần tử đó không

//multidimensional Array
// const coordinates = [[1,3],[4,2]];
// console.log(coordinates[0][0]);
// console.log(coordinates[1][0]);  //vi tri 0 cua mang thu 2

// const summer = ['Jun', 'Jul', 'Aug'];
// const winter = ['Dec', 'Jan', 'Feb'];
// const nested = [ summer, winter ];
// //console.log(nested[1]);

// const flat = [...summer, ...winter];
// console.log(flat);

// Sets
 //const jla = new Set().add('Superman').add('Batman').add('Wonder Woman');
// console.log(jla); // xac dinh co bao nhieu phan tu torng mang

//console.log(jla.size());
//console.log(jla.has('Superman')); // cũng tương tự như includes với indexOf nhưng mạnh mẽ hơn

//remove set
//jla.delete('Superman');
//jla.clear();

//coverting set to Array
const shoppingSet = new Set().add('Apples').add('Bananas').add('Beans');
console.log(shoppingSet);

// const shoppingArray = [...shoppingSet]  //c1
// const shoppingArray = Array.from(shoppingSet);  //2
// console.log(shoppingArray);

// const duplicate = [3, 1, 4, 1, 5, 9, 2, 6 ,5,3,5,9];
// const nonDuplicate = [...new Set(repeatedArray)];






















 
 
 
 
 