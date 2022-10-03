$("article img").addClass('image-center');

// Our first try, more naive and verbose

// let $articlePara = $('article p');
// let $lastPara = $articlePara[$articlePara.length - 1];

// $lastPara.remove();

$('article p:last').remove();

const MIN_FONT = 0;
const MAX_FONT = 100;
let randomFontSize = Math.floor(Math.random() * (MAX_FONT - MIN_FONT) + MIN_FONT);
// this gives a random integers over the range inclusively

$('#title').css('font-size', randomFontSize);

$('ol').append($('<li>Anything we want, something super random</li>'));

$('aside').empty().append($('<p>We apologize for the goofy aside</p>'));

$(".row-mb-5").on('change', changeBackgroundColor);

function changeBackgroundColor(){
  console.log('function changeBackgroundColor invoked');

  const red = $('.form-control')[0].value;
  const green = $('.form-control')[1].value;
  const blue = $('.form-control')[2].value;

  $('body').css('background-color', `rgb(${red}, ${green}, ${blue})`);
}

$('img').on('click', (event) => {
  console.log('Click arrow function invoked');
  console.log(event);
  event.target.remove();
});
