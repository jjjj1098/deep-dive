// let val;

// val = document;

// val = document.baseURI;
// val = document.head;
// val = document.body;

// val = document.forms;
// val = document.forms[0];
// val = document.forms[0].id;
// val = document.forms[0].classList;
// val = document.forms[0].className;

// val = document.scripts[0].getAttribute('src');


const headerContainer = document.getElementById('header-container');
// headerContainer.style.display = 'none';

// console.log(headerContainer);

headerContainer.textContent = 'Text Content';
headerContainer.innerText = 'Inner Text';
headerContainer.innerHTML = '<h1>Inner HTML</h1>';


const items = document.getElementsByClassName('list-group-item');


items[0].style.color = 'blue';
items[3].textContent = 'Hi';

let lists = document.getElementsByTagName('li');
console.log(lists);

lists=Array.from(lists);
console.log(lists);

lists.forEach((list, index) => {
    list.textContent = `${index}.list`
})

const liOdd = document.querySelectorAll('li:nth-child(odd)');

liOdd.forEach((li) => {
    li.style.backgroundColor = 'gray';
})