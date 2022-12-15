let titleE1 = document.querySelector('h1');
const body = document.querySelector('body');
// body.style.backgroundColor = 'blue';
body.classList.add('blackout', 'large');
body.classList.remove('large');

titleE1.style.color = 'green';
titleE1.style.fontSize = '40px';
titleE1.style.textAlign = 'center';

console.log(titleE1);

const p = document.querySelector('#first-para');
p.style.color = 'red';
p.innerText = 'Hello, world!';
p.innerHTML = 'Hello, <strong>world!</strong>';
p.setAttribute('fontWeight', 'bold');



let a = document.createElement('a');

a.setAttribute('href', 'http:///www.google.com');
a.textContent = 'Google!';
a.style.color = 'white';
body.appendChild(a);

const li = document.querySelectorAll('li');

for(let i of li){
    i.style.color = 'red';
    i.innerText = 'Hello world!';
}
