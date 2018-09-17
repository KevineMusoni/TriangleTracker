function outputname() {

	var a = parseFloat(document.getElementById("side1").value);
	var b = parseFloat(document.getElementById("side2").value);
	var c = parseFloat(document.getElementById("side3").value);
	var result = document.getElementById("demo");
	if(a!=b && a!=c && b!=a && b!=c && c!=a && c!=b){
		result.textContent="This is a scalene triangle";
	} else if(a===b && a===c && b===a && b===c && c===b && c===a){
		result.textContent="This is an equilateral triangle";
	} else if(a===b || a===c || b===c || b===a || c===b || c===a){
		result.textContent="This is an isosceles triangle";
	} else{
		result.textContent = "This is not a triangle. Try again";
	}
}

// function outputname() {
// 	var x,y,a,b,c;

// 	x=document.getElementById("form") ;
// 	y=x.elements["name"].value;
// 	console.log(y)
// 	console.log()
// }