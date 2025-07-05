let val;

const list = document.querySelector('ul.list-group');
const listItem = document.querySelector('li.list-group-item:first-child');

console.log('list', list);
console.log('listItem', listItem);

val = list.childNodes; //Nodelist 반환
val = list.childNodes[0];
val = list.childNodes[0].nodeName;


val = list.children; //HTMLCollection 반환
val = list.children[1];
list.children[1].textContent = 'Hi';

val = list.firstChild; //첫번째 노드
val = list.firstElementChild; //첫번째 엘리먼트

val = list.lastChild; //마지막 노드
val = list.lastElementChild; //마지막 엘리먼트

val = list.childElementCount; //자식 엘리먼트 개수
val = listItem.parentNode; //부모 노드
val = listItem.parentElement; //부모 엘리먼트

val = listItem.nextSibling; //다음 노드
val = listItem.nextElementSibling; //다음 엘리먼트

val = listItem.previousSibling; //이전 노드
val = listItem.previousElementSibling; //이전 엘리먼트
console.log('val', val);

for ( let node of list.childNodes) {
    console.log(node);
}