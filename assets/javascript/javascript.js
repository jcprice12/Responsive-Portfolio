// $(document).ready(function(){

// 	//$("tr:odd").css("background-color", "#ddd");

// 	//This is janky and I feel like there's a better way to do this with pure css
// 	/*createBanners();
// 	document.getElementById("myImageBanner0").innerHTML = "Hangman";
// 	document.getElementById("myImageBanner1").innerHTML = "RPG Game";
// 	document.getElementById("myImageBanner2").innerHTML = "Trivia Game";
// 	document.getElementById("myImageBanner3").innerHTML = "Info Widget";*/
// });

// function createBanners(){
// 	var images = document.getElementsByClassName("cardImage");
// 	for(i = 0; i < images.length; i++){
// 		var image = images[i];
// 		var parent = image.parentElement;
// 		var parentHeight = $(parent).height();
// 		var imageHeight = $(image).height();
// 		var imageWidth = $(image).width();
// 		createBanner(parent, parentHeight, imageWidth, imageHeight, i);
// 	}
// }

// function createBanner(parent, parentHeight, imageWidth, imageHeight, index){

// 	var myBottom = ((parentHeight - imageHeight) / 2) + 15; 

// 	var myDiv = document.createElement("div");
// 	myDiv.style.width = imageWidth + "px";
// 	myDiv.style.paddingTop = "15px";
// 	myDiv.style.paddingBottom = "15px";
// 	myDiv.style.textAlign = "center";
// 	myDiv.style.background = "#4aaaa5";
// 	myDiv.style.position = "absolute";
// 	myDiv.style.bottom = myBottom + "px";
// 	myDiv.style.left = "0px";
// 	myDiv.style.right = "0px";
// 	myDiv.style.margin = "auto";
// 	myDiv.style.color = "#fff";
// 	var myId = "myImageBanner" + index;
// 	myDiv.setAttribute("id", myId);
// 	myDiv.innerHTML = myId;
// 	parent.appendChild(myDiv);
// }

