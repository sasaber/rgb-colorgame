var numSquares = 6;
var colors = [];
var pickedColor;
var squares = document.querySelectorAll(".square");
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetBtn = document.querySelector("#reset");
var modeButtons = document.querySelectorAll(".mode");


init();

// sets up listeners and color picking
function init(){
	setupModeButtons();
	setupSquares();
	reset(); 
}

// sets up mode buttons' event listeners
function setupModeButtons(){
	for (var i = 0; i < modeButtons.length; i++){
		modeButtons[i].addEventListener("click", function(){
			modeButtons[0].classList.remove("selected");
			modeButtons[1].classList.remove("selected");
			this.classList.add("selected");
			// update number of squares based on mode
			this.textContent === "Easy" ? numSquares = 3: numSquares = 6;
			reset();
		});
	}
}

// sets up squares' event listeners
function setupSquares(){
	for (var i = 0; i < squares.length; i++){
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
}

function reset(){
	// generate all new colors
	colors = generateRandomColors(numSquares);
	// pick a new random 
	pickedColor = pickColor();
	// change colorDisplay to match picked color
	colorDisplay.textContent = pickedColor;
	resetBtn.textContent = "New Colors";
	messageDisplay.textContent = "";
	// change the colors of the squares
	for (var i = 0; i < squares.length; i++){
		if (colors[i]){
			squares[i].style.display = "block";
			squares[i].style.backgroundColor = colors[i];
		} else {
			squares[i].style.display = "none";
		}
	}
	h1.style.backgroundColor = "steelBlue";
}

// add event listener to reset btn
resetBtn.addEventListener("click", function(){
	reset();
});

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
