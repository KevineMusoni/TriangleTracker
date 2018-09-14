function outputname() {
var x,y,name,a,b,c,answer;
x=document.getElementById("form") ;
y=x.elements["name"].value;
if(a!=b && a!=c){

	console.log("This is an scalene triangle");
}
else if(a==b || a==c){
	document.getElementById("demo").innerHTML="This is an isosceles triangle";
	
}
else if(a==b && a==c){
	document.getElementById("demo").innerHTML="This is an equilateral triangle"
}

else{
	console.log("This is not a triangle. Try again")
}

}