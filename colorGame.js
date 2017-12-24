var numSquares = 6;

var colors = generateRandomColors(numSquares);

var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetBtn = document.querySelector("#reset");
var easyBtn = document.querySelector("#easy");
var hardBtn = document.querySelector("#hard");
// add event listener to easy btn
easyBtn.addEventListener("click", function(){
	hardBtn.classList.remove("selected");
	easyBtn.classList.add("selected");
	numSquares = 3;
	colors = generateRandomColors(numSquares);
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;
	for (var i = 0; i < squares.length; i++){
		// if there is a color at this index
		if (colors[i]){
			squares[i].style.backgroundColor = colors[i];
		} else {
			squares[i].style.display = "none";
		}
	}
});

// add event listener to hard btn
hardBtn.addEventListener("click", function(){
	easyBtn.classList.remove("selected");
	hardBtn.classList.add("selected");
	numSquares = 6;
	colors = generateRandomColors(numSquares);
	colorDisplay.textContent = pickedColor;
	for (var i = 0; i < squares.length; i++){
		// if there is a color at this index
		squares[i].style.backgroundColor = colors[i];
		squares[i].style.display = "block";
	}
});

// add event listener to reset btn
resetBtn.addEventListener("click", function(){
	// generate all new colors
	colors = generateRandomColors(numSquares);
	// pick a new random 
	pickedColor = pickColor();
	// change colorDisplay to match picked color
	colorDisplay.textContent = pickedColor;
	// change the colors of the squares
	for (var i = 0; i < squares.length; i++){
		squares[i].style.backgroundColor = colors[i];
	}
	h1.style.backgroundColor = "#232323";
});

colorDisplay.textContent = pickedColor;

for (var i = 0; i < squares.length; i++){
	// add initial colors to squares
	squares[i].style.backgroundColor = colors[i];
	// add click listeners to squares
	squares[i].addEventListener("click", function(){
		// grab color of clicked square 
		var clickedColor = this.style.backgroundColor;
		// compare color to picked color
		if (clickedColor === pickedColor){
			messageDisplay.textContent = "Correct!";
			resetBtn.textContent = "Play Again?";
			changeColors(clickedColor);
			h1.style.backgroundColor = clickedColor;
		} else {
			this.style.backgroundColor = "#232323";
			messageDisplay.textContent = "Try again";
		}
	});
} 

// changes the color of all squares into the correct one
function changeColors(color){
	// loop through all squares
	for (var i = 0; i < squares.length; i++){
		// change each color to the given one
		squares[i].style.backgroundColor = color;	
	}
}

// picks a random color as the target
function pickColor(){
	var random = Math.floor(Math.random() * colors.length);
	return colors[random];
}

function generateRandomColors(size){
	// make an array
	var arr = [];
	// add num random colors to array
	for (var i = 0; i < size; i++){
		// get random color and add to array
		arr.push(randomColor());
	}
	// return that array
	return arr;
}

function randomColor(){
	// pick a "red" from 0 - 255
	var red = Math.floor(Math.random() * 256);
	// pick a "green" from 0 - 255
	var green = Math.floor(Math.random() * 256);
	// pick a "blue" from 9 - 255
	var blue = Math.floor(Math.random() * 256);

	return "rgb(" + red + ", " + green + ", " + blue + ")";
}
