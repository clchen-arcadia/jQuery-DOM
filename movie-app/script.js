"use strict";
let currentId = 0;
let moviesList = [];
$("#submitButton").on('click', addReview);

function addReview(evt) {
  console.log("form submitted");
  evt.preventDefault();
  const movieInput = $('form input')[0].value;
  const ratingInput = $('form input')[1].value;
  const $movieList = $('#reviewsList');
  const $movieItem = $("<li></li>");
  let movieData = { movieInput, ratingInput, currentId };
  moviesList.push(movieData);
  console.log(moviesList);
  const $removeButton = $("<button>Remove</button>");
  $movieList.append($movieItem.text(`${movieInput}: ${ratingInput}`));
  $movieItem.append($removeButton);
  $('form input')[0].value = "";
  $('form input')[1].value = "";
  currentId++;
}

const $movieList = $('#reviewsList');
$movieList.on('click', "button", removeReview);


function removeReview(evt) {
  const button = evt.target;
  const li = evt.target.parentElement;
  li.remove();
  let indexToRemoveAt = moviesList.findIndex(movie => (
    movie.currentId === +$(evt.target).attr("data-delete-id")
  ));
  moviesList.splice();
}

const abcSort = $("#abcSort");
const ratingSort = $("#ratingSort");

abcSort.on('click', handleABCSort);
// ratingSort.on('click', handleRatingSort);

function handleABCSort(evt) {
  evt.preventDefault();
  const listArr = [];
  const $list = $("ul li").text();
  // console.log($list.text());
  // listArr.push($list.text());
  // console.log(listArr);
  console.log($list);

}