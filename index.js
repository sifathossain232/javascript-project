console.log('first file');

const allLi = document.getElementsByTagName('li');
console.log(allLi);

const alltitels = document.getElementsByClassName('section-titel');
console.log(alltitels);

const secendSection = document.getElementById('secend-section');
console.log(secendSection);
secendSection.style.color = 'violet'
secendSection.style.backgroundColor = 'pink'

const secendList = document.getElementById('secend-list');
console.log(secendList);

const li = document.createElement('li')
li.innerText = 'My daynamic item'
secendList.appendChild(li);


const main = document.getElementById('main-container');
const section = document.createElement('section');
section.innerHTML = `
   <h1>My daynamic section</h1>
   <p>Extra text added inside paragarph</p>
   <ul>
      <li>first item</li>
      <li>first item</li>
      <li>first item</li>
      <li>first item</li>
   </ul>

`
main.appendChild(section);