// exercise 1
const f1=function(a, b, c){

	return a+b+c;
}
const goal=f1(32, 45, 64);
console.log(goal);

// exercise 2
const f2=function(){
	return 78;
} 
const set=f2();
console.log(set)

// exercise3






const f3=function(a, b){
	const e= a-b;
}
const cool=f3(23, 27);
console.log(cool);

// exercise 4
const f4=function( string1, string2, string3){
    
    
    if(string1.length > string2.length && string1.length > string3.length){
      
      return string1;
    
    }else if(string2.length > string1.length && string2.length > string3.length){
      
      return string2;
    
    }else {
    
      return string3;
    };
  
  };
  console.log(f4())

    // exercise 1
const f1=function(a, b, c){

	return a+b+c;
}
const goal=f1(32, 45, 64);
console.log(goal);

// exercise 2
const f2=function(){
	return 78;
} 
const set=f2();
console.log(set)

// exercise3
const f3=function(a, b){
	cnost e= a-b;
}
const cool=f3(23, 27);
console.log(cool);

// exercise 4
const f4= function( number1, number2, number3){
  if ( (number1.length > number2.length) && (number1.length > number3.length) ){
	return  number1;
}
    else if ((number2.length > number1.length) && (number2.length > number3.length)){
    	return number2;
    }
    else {
    	return number3;
    } 
}
    console.log(f4( "Joy", "Michael", "Robert"));

  
  //exercise 5
  const f5 = function (number1, number2){

  	if (number1 === number2){
  		return 0;
  	}
  	else if(number1 > number2){
  		return 1;
  	}
  	else{
  		return -1;
  	}
};
  console.log(f5(3, 6));

  //exercise 6
  function f6(a, b) {	
 		return a*b;

  };
  console.log(f6(32, 45))

//exercise 7
function f7(a, b){
	return a/b;
};
  console.log(f7(65,5))

 //exercise 8
function triangleArea(base, height){

	return f7 (f6(base,height),2);
   
};
console.log(triangleArea(4, 7));

//exercise 9
  
numLength=function (b){
	 
	return (b+'').length
}
console.log(numLength(234567));

//exercise10  
function f10(a, b, c){
	
	if((a.length + b.length ) > c){
		return 1;
	}else{
		return -1;
	};
};	
  console.log(f10("Joy", "Bob", 9));

   //exercise11
const runStuff=function(a, b, c){
	
	if(c === "rectangle"){
		return a*b;
	}
else if(c === "triangle" ){
	
 return f8(a, b);
}
};
  console.log(runStuff(24, 45, "rectangle"))
		









    	


