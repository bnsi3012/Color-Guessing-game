
function enterColor(n){
	for(i=0;i<n;i++){
		colours[i]=getRandomColor();
	}
}
function getRandomColor(){
	var r=Math.floor(Math.random()*256);
	var g=Math.floor(Math.random()*256);
	var b=Math.floor(Math.random()*256);
	return( "rgb(" +r + ", " +g + ", " +b +")");

}
var colours=[];
var size=6;
var squares=document.getElementsByClassName('square');
var pickedColor;
var span=document.getElementsByTagName("span");
var button=document.getElementsByTagName("button");

enterColor(size);
pickedColor= colours[Math.floor(Math.random()*size)];
span[0].innerHTML=pickedColor;	

for(i=0;i<size;i++){
	    squares[i].style.backgroundColor=colours[i]; 

		squares[i].onclick=function(){
		   if(this.style.backgroundColor===pickedColor){
	     	document.getElementsByClassName("heading")[0].style.backgroundColor=pickedColor;
		   	changeSquaresColor(this.style.backgroundColor);
		   	span[1].textContent="Correct";
		   	button[0].textContent="PLAY AGAIN?";

		   }
		   else{
		   	this.style.backgroundColor="transparent";
		   	span[1].textContent="Try Again";



		   }
		};

}
function changeSquaresColor(color){
	for(i=0;i<size;i++){
		squares[i].style.backgroundColor=color;
	}

 }
     button[0].onclick=function(){

		enterColor(size);
		pickedColor= colours[Math.floor(Math.random()*size)];
		span[0].innerHTML=pickedColor;
		span[1].innerHTML="";
		document.getElementsByClassName("heading")[0].style.backgroundColor="skyblue";	
        button[0].textContent="NEW COLORS";
		for(i=0;i<size;i++){
			    squares[i].style.backgroundColor=colours[i]; 

				squares[i].onclick=function(){
				   if(this.style.backgroundColor===pickedColor){
			     	document.getElementsByClassName("heading")[0].style.backgroundColor=pickedColor;
				   	changeSquaresColor(this.style.backgroundColor);
				   	span[1].textContent="Correct";
				   	button[0].textContent="PLAY AGAIN?";

				   }
				   else{
				   	this.style.backgroundColor="transparent";
				   	span[1].textContent="Try Again";



				   }
				};

		}

};

button[1].onclick=function(){
	this.style.backgroundColor= "blue";
	button[2].style.backgroundColor= "transparent";
	size=3;
	for(i=3;i<6;i++){
		squares[i].style.display="none";
	}
	enterColor(size);
		pickedColor= colours[Math.floor(Math.random()*size)];
		span[0].innerHTML=pickedColor;
		span[1].innerHTML="";
		document.getElementsByClassName("heading")[0].style.backgroundColor="skyblue";	
        button[0].textContent="NEW COLORS";
		for(i=0;i<size;i++){
			    squares[i].style.backgroundColor=colours[i]; 

				squares[i].onclick=function(){
				   if(this.style.backgroundColor===pickedColor){
			     	document.getElementsByClassName("heading")[0].style.backgroundColor=pickedColor;
				   	changeSquaresColor(this.style.backgroundColor);
				   	span[1].textContent="Correct";
				   	button[0].textContent="PLAY AGAIN?";

				   }
				   else{
				   	this.style.backgroundColor="transparent";
				   	span[1].textContent="Try Again";



				   }
				};

		}
	







};
button[2].onclick=function(){
	this.style.backgroundColor= "blue";
	button[1].style.backgroundColor= "transparent";
	size=6;
	for(i=0;i<6;i++){
		squares[i].style.display="block";
	}
	button[0].textContent="NEW COLORS";
	enterColor(size);
		pickedColor= colours[Math.floor(Math.random()*size)];
		span[0].innerHTML=pickedColor;
		span[1].innerHTML="";
		document.getElementsByClassName("heading")[0].style.backgroundColor="skyblue";	

		for(i=0;i<size;i++){
			    squares[i].style.backgroundColor=colours[i]; 

				squares[i].onclick=function(){
				   if(this.style.backgroundColor===pickedColor){
			     	document.getElementsByClassName("heading")[0].style.backgroundColor=pickedColor;
				   	changeSquaresColor(this.style.backgroundColor);
				   	span[1].textContent="Correct";
				   	button[0].textContent="PLAY AGAIN?";

				   }
				   else{
				   	this.style.backgroundColor="transparent";
				   	span[1].textContent="Try Again";



				   }
				};

		}








};







