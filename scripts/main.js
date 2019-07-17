let myHeading = document.querySelector('h1');
myHeading.textContent = 'Hello world!';               // Changed heading to "Hello World!"

/*
document.querySelector('html').onclick = function() 
{
    alert('Ouch! Stop poking me!');   //Pop up whenever user clicks on webapp
}
*/

let myImage = document.querySelector('img');

myImage.onclick = function()
{
  mySrc = myImage.getAttribute('src')
  if(mySrc === 'images/index.jpeg')
  {
    myImage.setAttribute('src','images/index2.jpeg')
  }
  else
  {
    myImage.setAttribute('src','images/index.jpeg')
  }
}


let myButton = document.querySelector('button');

function setUserName()
{
  let myName = prompt('Please enter your name (press OK to continue) ');
  localStorage.setItem('name', myName);
  myHeading.textContent = 'Ruby on Rails is awesome, ' + myName;
}

if(!localStorage.getItem('name'))
{
  setUserName();
}
else
{
  let storedName = localStorage.getItem('name');
  myHeading.textContent = 'Ruby on Rails is awesome, ' + storedName;
}

myButton.onclick = function()
{
  setUserName();
}