var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");

var button = document.createElement("button");
var t = document.createTextNode("random colors");

// add text and button:
button.appendChild(t);
body.appendChild(button);



function setGradient(){
	body.style.background = "linear-gradient(to right, " + color1.value + ", " + color2.value + ")";

	css.textContent = body.style.background + ";";
}

// get random number:
function getRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

// set random number:
function setGradientSeed() {
body.style.background = 
"linear-gradient(to right, "
+ getRandomColor()
+ ", " 
+ getRandomColor()
+ ")";

}






// button event:
button.addEventListener ("click", setGradientSeed);



color1.addEventListener("input", setGradient)

color2.addEventListener("input", setGradient)



window.addEventListener("load", setGradientSeed);

