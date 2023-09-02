import 'bootstrap/dist/css/bootstrap.min.css'
import './index.css';

// exuses variables
let who = ['The dog', 'My grandma', 'His turtle', 'My bird'];
let action = ['ate', 'peed', 'crushed', 'broke'];
let what = ['my homework', 'the keys', 'the car'];
let when = ['before the class', 'right on time', 'when I finished', 'during my lunch', 'while I was praying'];


const button = document.getElementById('button'); 
const element = document.getElementById('excuse');

function generateExcuse () {

      let randomExcuse = []

      //who 
      var a = Math.floor(Math.random()*who.length);
      var whoItem = who[a];

      //action
      var b = Math.floor(Math.random()*action.length);
      var actionItem = action[b];

      //what
      var c = Math.floor(Math.random()*what.length);
      var whatItem = what[c];

      //when
      var d = Math.floor(Math.random()*when.length);
      var whenItem = when[d];
      
      randomExcuse.push(whoItem, actionItem, whatItem, whenItem);
      
      //insert randomExcuse to element
      element.innerHTML = randomExcuse.join(' ');

      console.log(randomExcuse)
  
}

button.addEventListener('click', generateExcuse);

 