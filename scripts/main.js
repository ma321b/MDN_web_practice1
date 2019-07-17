let myHeading = document.querySelector('h1');
myHeading.textContent = 'Hello world!';               // Changed heading to "Hello World!"

document.querySelector('html').onclick = function() 
{
    alert('Ouch! Stop poking me!');
}

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