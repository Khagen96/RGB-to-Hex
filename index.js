const readLineSync = require('readline-sync')
console.clear();
const utilityOption = parseInt(readLineSync.question('Welcome to RGB to Hex converter. \nWhich utility function would you like to use?\n1. RGB to Hex\n2. Hex to RGB\nYour option: '));



function hexToRGB(hex)
{
  hexInput=hex.match(/.{1,2}/g)
  let red = parseInt(hexInput[0],16);
  let blue = parseInt(hexInput[1],16);
  let green = parseInt(hexInput[2],16);
  const rgb = [red,blue,green];
  return rgb;
}

var rgbToHex = function (rgbInput) { 
  var hex = Number(rgbInput).toString(16);
  return hex;
};
var fullColorHex = function(r,g,b) {   
  var red = rgbToHex(r);
  var green = rgbToHex(g);
  var blue = rgbToHex(b);
  return red+green+blue;
};


switch(utilityOption)
{
  case 1:{
   console.log('Please enter the RGB values one by one\n');

   const red = parseInt(readLineSync.question('Enter Red value(0-255): \n'));
  
   const blue = parseInt(readLineSync.question('Enter Green value(0-255): \n'));
  
   const green = parseInt(readLineSync.question('Enter Blue value(0-255): \n'));

   console.log("Output: #"+fullColorHex(red,blue,green));
   break;
  }
  case 2:
  {
   const hex = readLineSync.question('Enter Hex value:#');
   console.log("Output(R,G,B): "+hexToRGB(hex));
   break;
  }
  default:
   console.log('Invalid Option');
   break;
}