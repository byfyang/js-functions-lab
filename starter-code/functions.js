// Question 1
function maxOfTwoNumbers(x,y) {
	if (x > y){
		return x;
	}
	else if (y > x){
		return y;
	}
}

// Question 2
function maxOfThree(x,y,z) {
	if (x >y && x>z){
		return x;
	}
	if (y> x && y> z){
		return y;
	}

	if (z > x && z> y){
		return z;
	}
}

// Question 3
function isCharacterAVowel(x) {
	if (x==='a' || x==="e" || x==="i" || x==="o" || x==="u"){
		return true;
	}
	else 
		return false;
}

// Question 4
function sumArray(x) {
 var sum =0;
 for (var i = 0; i<x.length; i++){
 	sum += x[i];
 }
 return sum;
}


// Question 4
function multiplyArray(x) {
var product = 1;
for (var i=1; i<x.length; i++){
	product *= x[i];
}
return product;
}


// Question 5
var numberOfArguments = function(){
  return arguments.length;
}



// Question 6
var reverseString = function (x){
  var arr = x.split('');
  var newString = [];
  for (var i = x.length; i>=-1; i-- ){
  	newString.push(arr[i]);
  }
  return newString.join('');
};


// Question 7
function findLongestWord (x) {
  max = 0;
  for (var i = 0; i<x.length; i++){
  	if (x[i].length > max){
  		max = x[i].length;
  	}
  }
  return max;
}


// Question 8
function filterLongWords (x, num) {
  Cup = [];
  for (var i=0; i<x.length; i++){
  	if(x[i].length>num){
  		cup.push(x[i]);
  	}
  }
  return Cup;
}


// Bonus 1
// (hint: `prototype`)


// Bonus 2
function charactersOccurencesCount() {
  
}

