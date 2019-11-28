var numberOfSquares=6;
var colors =[];
var pickedColor;
var squares=document.querySelectorAll(".square");
var colorDisplay=document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var modeButtons = document.querySelectorAll(".mode");

init();
function init(){
setupModeButtons();
setupSquares();
reset();
}
    function setupModeButtons(){
        for(var i=0;i<modeButtons.length;i++){
        modeButtons[i].addEventListener("click",function(){
        modeButtons[0].classList.remove("selected");
        modeButtons[1].classList.remove("selected");
        this.classList.add("selected");
        this.textContent==="Easy" ? numberOfSquares=3: numberOfSquares=6;
        reset();
     });
  }
}
    function setupSquares(){
       for(var i=0; i<squares.length; i++){
      //add click listeners to squares
      squares[i].addEventListener("click",function(){
      //grab color of clicked squares
      var clickedColor = this.style.background;
      // compare color to picked color
      if(clickedColor === pickedColor){
      messageDisplay.textContent="Correct!";
      changeColors(clickedColor);
      h1.style.background=clickedColor;
      resetButton.textContent="Play Again!";
      }else{
      this.style.background="#232323";
      messageDisplay.textContent="Try Again";
      }
    });
   }
 }

    function reset(){
      // generate all new colors 
      colors = generateRandomColors(numberOfSquares);
      //pick a new random color from array
      pickedColor = pickcolor();
      //change color display to match picked color
      colorDisplay.textContent = pickedColor;
      resetButton.textContent="New Colors"
      messageDisplay.textContent="";
      //change colors of squares  
      for(var i=0;i<squares.length; i++){
      if(colors[i]){
      squares[i].style.display="block";
      squares[i].style.background=colors[i];
      }
      else{
      squares[i].style.display="none";
      }
      squares[i].style.background=colors[i];
      } 
      h1.style.background="#00BFFF";
      }
      resetButton.addEventListener("click", function(){
      reset();
  })
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