/////////////////////////////////////////////////////////////////////////////////
//FUNCTION TAKES HEX INPUT
  //CHECKS AND IGNORES #
    //CHECKS LENGTH AND NaN (PRINTS ERROR IF INPUT IS WRONG)
      //CONVERTS TO RGB
/////////////////////////////////////////////////////////////////////////////////



//Defining variable used for onkeydown method
var hex = document.getElementById("hex");

// Funciton to convert hex in to RGB
var conColor = function() {
 
// declaring DOM objects to manipulate

  var color = document.getElementById("hex").value;
  var rgb = document.getElementById("rgb");
  var content = document.getElementById("content");
 


  color.toString();

 

// Declaring Red, Green and Blue values
  var r, g, b;

//Checks if the first character is #. If so, the # is ignored.
  if ( color.charAt(0) == "#" ) {
color = color.substr(1);
}


  r = color.substr(0, 2);
  g = color.substr(2, 4);
  b = color.substr(4, 6);

  r = parseInt(r, 16);
  g = parseInt(g, 16);
  b = parseInt(b, 16);

  g /= 257;
  g = Math.ceil(g);


//Checks if the code is too long (OR IF NaN) If so, it prints out a message informing the user
  if(color.length != 6 || r == isNaN || g == isNaN || b == isNaN){
  rgb.value = "Not a Code";
}


else{
// Output to RGB input element
  rgb.value = "(" + r + "," + g + "," + b + ")";

// Change background color, depending on the RGB color converted from Hex
  document.body.style.backgroundColor = "rgb" + rgb.value;
  
//Removing initial instructions
  content.style.display = "none";
}
};


// Declaring Enter/Return keypress to start conversion
hex.onkeydown = function(event) {
  if (event.keyCode == 13) {
    conColor();
  }
};
