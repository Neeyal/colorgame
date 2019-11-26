var numberOfSquares=6;
var colors =generateRandomColors(numberOfSquares);
var squares=document.querySelectorAll(".square");
var pickedColor = pickcolor();
var colorDisplay=document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var easyBtn = document.querySelector("#easyBtn");
var hardBtn = document.querySelector("#hardBtn");

easyBtn.addEventListener("click" , function(){
easyBtn.classList.add("selected");
hardBtn.classList.remove("selected");
numberOfSquares=3;
colors = generateRandomColors(numberOfSquares);
//pick a new random color from array
pickedColor = pickcolor();
//change color display to match picked color
colorDisplay.textContent = pickedColor;
for(var i=0;i<squares.length; i++){
  if(colors[i]){
    squares[i].style.background=colors[i];
  }
  else{
    squares[i].style.display="none";
  }} 
});
hardBtn.addEventListener("click" , function(){
  easyBtn.classList.remove("selected");
  hardBtn.classList.add("selected");
  numberOfSquares=6;
  colors = generateRandomColors(numberOfSquares);
//pick a new random color from array
pickedColor = pickcolor();
//change color display to match picked color
colorDisplay.textContent = pickedColor;
for(var i=0;i<squares.length; i++){
squares[i].style.background=colors[i];
    squares[i].style.display="block";
  } 
});
resetButton.addEventListener("click", function(){
 // generate all new colors 
 colors = generateRandomColors(numberOfSquares);
 //pick a new random color from array
 pickedColor = pickcolor();
 //change color display to match picked color
 colorDisplay.textContent = pickedColor;
//change colors of squares  
for(var i=0;i<squares.length; i++){
 squares[i].style.background=colors[i];
} 
h1.style.background="#232323";
})

colorDisplay.textContent = pickedColor;
for(var i=0; i<squares.length; i++)
{
  //add initial colors to squares 
  squares[i].style.background=colors[i];
//add click listeners to squares
squares[i].addEventListener("click",function(){
  //grab color of clicked squares
  var clickedColor = this.style.background;
  // compare color to picked color
  if(clickedColor === pickedColor){
  messageDisplay.textContent="Correct!";
  changeColors(clickedColor);
  resetButton.textContent="Play Again!"
  h1.style.background=clickedColor;
  }
  else{
this.style.background="#232323";
messageDisplay.textContent="Try Again"
  }
  });
}
function changeColors(color){
  for(var i=0; i<squares.length; i++){
    squares[i].style.background=color;
  }
}
function pickcolor(){
  var random=Math.floor(Math.random() * colors.length);
  return colors[random];
}
function generateRandomColors(num){
  //make an array
  var arr=[];
//add num random colors repeat
  for(var i=0; i<num; i++){
    // get random colors ad to the array
    arr.push(randomColor());
  }
  //return that array
return arr; 
}
function randomColor(){
 
  var r =Math.floor(Math.random()*256);
  var g =Math.floor(Math.random()*256);
  var b =Math.floor(Math.random()*256);
  
  return "rgb("+ r +", "+ g +", "+ b +")";

}