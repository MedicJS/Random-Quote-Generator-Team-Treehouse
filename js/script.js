/******************************************
Treehouse Techdegree:
FSJS project 1 - A Random Quote Generator
******************************************/

// Study guide for this project - https://drive.google.com/file/d/1s5grutGuQFwJcQP8bFwEI69Q8FCkGdDk/view?usp=sharing


//Everything was done from scratch except the colorRandonize() which I found how to do it on StackOverFlow

//  **ARRAY OF QUOTE OBJECTS**

var quotes = [
	{quote: 'One day Michael complained about a speed bump on the highway.', source: 'Jim Halbert', tag: 'Advice'},
	{quote: 'The worst thing about prison was the dementors.', source: 'Micheal Scott', tag: 'PrisonTime'},
	{quote: 'Occasionally, I’ll hit somebody with my car. So sue me.', source: 'Micheal Scott', tag: 'Confession'},
	{quote: 'I DECLARE BANCRUPCY!', source: 'Micheal Scott', tag: 'Financial'},
	{quote: ' "You miss 100% of the shots you don’t take."\' - Wayne Gretsky’', source: 'Micheal Scott', tag: 'Advice'},
	{quote: 'No one steals from Creed Bratton and gets away with it.', source: 'Creed Bratton', tag: 'Threat'},
]


/* *GET RANDOM QUOTE FUNCION()** Takes in the 'quotes array' 
then randomly picks a object in the array then returns it */

var getRandomQuote = function (array) {
    //gets random array number
    var random = Math.floor(Math.random() * (quotes.length));
    var randomQuote = quotes[random];

    return randomQuote; // Return the value of the function
}


// **printQuote() function** Prints out the properties provided from getRandomQuote()
function printQuote() {
   var randomQuote = getRandomQuote();
   // used DOM to print the property of the random quote provided - used . notation to access each property
   document.getElementById('quote-box').innerHTML = randomQuote.quote;
   document.getElementById('citation').innerHTML = randomQuote.source;
   document.getElementById('tag').innerHTML = randomQuote.tag;
   document.getElementById('quote-box');

}

//Random Background Color Function for the "OnClick"


//stuck and sought help for this function on StackOverflow
function randomize() {
  var rgbcolor;
  red = Math.floor(Math.random() * 250 + 0);
  green = Math.floor(Math.random() * 250 + 0);
  blue = Math.floor(Math.random() * 250 + 0);

  rgbColor = 'rgb(' + red + ',' + green + ',' + blue + ')';
  document.body.style.background = rgbColor;

  red = ("0" + red.toString(16)).substr(-2).toUpperCase();
  green = ("0" + green.toString(16)).substr(-2).toUpperCase();
  blue = ("0" + blue.toString(16)).substr(-2).toUpperCase();
} 


//Set Time Interval for auto refresh

setInterval(function() {
  var rgbcolor;
  red = Math.floor(Math.random() * 250 + 0);
  green = Math.floor(Math.random() * 250 + 0);
  blue = Math.floor(Math.random() * 250 + 0);

  rgbColor = 'rgb(' + red + ',' + green + ',' + blue + ')';
  document.body.style.background = rgbColor;

  red = ("0" + red.toString(16)).substr(-2).toUpperCase();
  green = ("0" + green.toString(16)).substr(-2).toUpperCase();
  blue = ("0" + blue.toString(16)).substr(-2).toUpperCase();
} 
, 3000);

setInterval(function() {
   var randomQuote = getRandomQuote();
   // used DOM to print the property of the random quote provided - used . notation to access each property
   document.getElementById('quote-box').innerHTML = randomQuote.quote;
   document.getElementById('citation').innerHTML = randomQuote.source;
   document.getElementById('tag').innerHTML = randomQuote.tag;
   document.getElementById('quote-box');

}, 3000)


/***
  When the "Show another quote" button is clicked, the event listener 
  below will be triggered, and it will call, or "invoke", the `printQuote` 
  function. So do not make any changes to the line of code below this 
  comment.
***/

document.getElementById('loadQuote').addEventListener("click", printQuote, false);


// Remember to delete the comments that came with this file, and replace them with your own code comments.