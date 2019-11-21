let images = [
  {
    path: './1.jpg',
    text: 'Image 1'
  },

  {
    path: './2.jpg',
    text: 'Image 2'
  },

  {
    path: './3.jpg',
    text: 'Image 3'
  }
];

let index = 0;

let theImage = document.getElementById('imageId');
let num = document.getElementsByClassName('numbertext')[0];
let text = document.getElementsByClassName('text')[0];

theImage.src = `./img/${images[0].path}`;
text.innerHTML = images[0].text;

function showImage (direction) {

  if (direction == 'left') {
    index--;  
    index < 0 ? index = images.length - 1 : null;
    theImage.src = `./img/${images[index].path}`;
    num.innerHTML = index+1 + " / 3";
    text.innerHTML = images[index].text;

  } else {
    index++;
    index %= images.length;
    theImage.src = `./img/${images[index].path}`;;
    num.innerHTML = index+1 + " / 3";
    text.innerHTML = images[index].text;
  }

}