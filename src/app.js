/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  console.log("Hello Rigo from the console!");
};
document.getElementById("texto").innerHTML;
 
let who = ['The dog', 'My grandma', 'The mailman', 'My bird'];
let action = ['ate', 'peed', 'crushed', 'broke'];
let what = ['my homework', 'my phone', 'the car'];
let when = ['before the class', 'when I was sleeping', 'while I was exercising', 'during my lunch', 'while I was praying'];

let whoindex = Math.floor(Math.random() * who.lenght);
let actionindex = Math.floor(Math.random() * action.lenght);
let whatindex = Math.floor(Math.random() * what.lenght);
let whenindex = Math.floor(Math.random() * when.lenght);

return (
  who[whoindex] +`npm install`.
  ""+
  action[actionindex] +
  ""+
  what[whatindex] +
  ""+
  when[whenindex] +
  ""+
)
