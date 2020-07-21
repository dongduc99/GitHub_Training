// const form = document.forms[0];

// const form = document.getElementsByTagName('form')[0];

//  const form = document.forms.search;

// // const form = document.forms['search'];

//  const [input,button] = form.elements;

// // // const input = form.searchInput;

// // const input = form['searchInput'];


// const input = form.elements.searchInput;
// input.addEventListener('focus', () => alert('focused'),
//  false);

const form = document.forms['search'];
form.addEventListener('submit', search, false);
function search() {
alert(' Form Submitted');
}

