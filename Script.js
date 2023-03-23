var form=document.querySelector('#form')
var names=document.querySelector("#username")
var password=document.querySelector("#password")
var password2=document.querySelector("#password2")
var email=document.querySelector("#email")
keyfun([names,password,email,password2])
form.addEventListener("submit",function(e){
e.preventDefault();
check([names,password,email,password2])
passmatch(password,password2)
})
function check(inputs){
inputs.forEach((input)=>{
if(input.value.trim()===""){
errorinput(input,`${getinput(input)} is required`)
}
else{
successinput(input)
}
})
}

function successinput(input){

var formgrp=input.parentElement;
formgrp.className='form-group success'
const p=formgrp.querySelector("p")
p.innerHTML="";

}
function getinput(input){
return input.getAttribute("data-name");
}
function errorinput(input, message) {
  var formgrp = input.parentElement;
  formgrp.className = 'form-group error';
  const p = formgrp.querySelector('p');
  p.innerHTML = message;
}
function passmatch(pass1,pass2){
if(pass1.value!=pass2.value)
{
errorinput(pass2,'password doesnt  match')
}
}
function keyfun(inputs){
inputs.forEach((input)=>{
input.onblur=function(){
if(input.value==""){
errorinput(input,`password feild is must fill`)
}
else{
successinput(input)
}
}
})
}
