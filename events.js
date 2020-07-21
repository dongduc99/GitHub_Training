// function doSomething(event){
//     // console.log(event.type);// neu click se tu dong tang so lan dem
//     //console.log(event.target);// cho biet vi tri vua click
//     // console.log(
//     // `screen:(${event.screenX},${event.screenY}),
//     // page:   (${event.pageX},${event.pageY}),
//     // client: (${event.screenX},${event.screenY})`)
//     // the hien chinh xac vi tri click trên screen
// }
//     addEventListener('click', doSomething);

 const clickParagraph = document.getElementById('click');
// clickParagraph.addEventListener('click',() =>
// console.log('click') );
// clickParagraph.addEventListener('mousedown',() =>
// console.log('down') );
// clickParagraph.addEventListener('mouseup',() =>
// console.log('up') );

// const dblclickParagraph =
//  document.getElementById('click');
// dblclickParagraph.addEventListener('click', highlight);
// function highlight(event){
// event.target.classList.toggle('highlight');
// }
// const mouseParagraph = document.getElementById('mouse');
// mouseParagraph.addEventListener('mouseover', highlight);
// mouseParagraph.addEventListener('mouseout', highlight);
// mouseParagraph.addEventListener('mousemove', () =>
//  console.log('You Moved!') );

// addEventListener('keydown',highlight);
// addEventListener('keyup', (event) => console.log(`You stopped pressing the key on ${new Date}`));
// addEventListener('keypress', (event) => console.log(`You pressed the ${event.key} character`));

// addEventListener('keydown', (event) => {
//     if (event.key === 'c' && event.ctrlKey) {
//     console.log('Action canceled!');
//     }
//     });

//     addEventListener('click', (event) => {
//         if (event.shiftKey) {
//         console.log('A Shifty Click!');
//         }
//     });

// const onceParagraph = document.getElementById('once');
// onceParagraph.addEventListener('click', remove);
// function remove(event) {
// // console.log('Enjoy this while it lasts!');
// onceParagraph.style.backgroundColor = 'pink';
// onceParagraph.removeEventListener('click',remove); 
// chuyen san mau hong neu click vao
// }
//  const brokenLink = document.getElementById('broken');
//  brokenLink.addEventListener('click',(event) => {
//      event.preventDefault();
//      console.log('Broken Link');
// là một phương thức của đối tượng sự kiện có thể được sử dụng bên trong
//chức năng gọi lại để ngăn chặn hành vi mặc định xảy ra(vi du la chan truy cap vao duong link)
//  });

// ulElement = document.getElementById('list');
// liElement = document.querySelector('#list li');
//truy cap vao id=list va vao li
// ulElement.addEventListener('click', (event) =>
// console.log('Clicked on ul') );
// liElement.addEventListener('click', (event) =>
// console.log('Clicked on li') );
// click vao li cua tung phan se cho biet chung ta vua click vao phan nao

// ulElement.addEventListener('click', (event) =>
// console.log('Clicked on ul'),true);
// liElement.addEventListener('click', (event) =>
// console.log('Clicked on li'),true);

// liElement.addEventListener('click', (event) => {
//     console.log('clicked on li');
//     event.stopPropagation(); }, false);
//  ngan chan su kien tiep theo,ngan khong lan truyen

//  const ulElement = document.getElementById('list');
//  liElement = document.querySelector('#list li');
// ulElement.addEventListener('click', hightlight());

