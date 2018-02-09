var bgthumb = document.getElementById("ch1").style.backgroundImage;
var zoomWidth = 100;
var zoomHeight = 70;
var currentImg = 1;

document.getElementById("bg1").addEventListener("click", function(){
	document.getElementById("ch1").style.backgroundImage = "url(imgs/i1.jpg)";
	document.getElementById("ch2").style.backgroundImage = "url(imgs/i2.jpg)";
	document.getElementById("ch3").style.backgroundImage = "url(imgs/i3.jpg)";
	currentImg = 1;
});

document.getElementById("bg2").addEventListener("click", function(){
	document.getElementById("ch1").style.backgroundImage = "url(imgs/i4.jpg)";
	document.getElementById("ch2").style.backgroundImage = "url(imgs/i5.jpg)";
	document.getElementById("ch3").style.backgroundImage = "url(imgs/i6.jpg)";
	currentImg = 2;
});

document.getElementById("bg3").addEventListener("click", function(){
	document.getElementById("ch1").style.backgroundImage = "url(imgs/i7.jpg)";
	document.getElementById("ch2").style.backgroundImage = "url(imgs/i8.jpg)";
	document.getElementById("ch3").style.backgroundImage = "url(imgs/i9.jpg)";
	currentImg = 3;
});

document.getElementById("bg4").addEventListener("click", function(){
	document.getElementById("ch1").style.backgroundImage = "url(imgs/i10.jpg)";
	document.getElementById("ch2").style.backgroundImage = "url(imgs/i11.jpg)";
	document.getElementById("ch3").style.backgroundImage = "url(imgs/i12.jpg)";
	currentImg = 4;
});

document.getElementById("ch1").addEventListener("mouseenter", function(){
	bgthumb = document.getElementById("ch1").style.backgroundImage;
	document.getElementById("zoom").style.backgroundImage = bgthumb;
});

document.getElementById("ch2").addEventListener("mouseenter", function(){
	bgthumb = document.getElementById("ch2").style.backgroundImage;
	document.getElementById("zoom").style.backgroundImage = bgthumb;
});

document.getElementById("ch3").addEventListener("mouseenter", function(){
	bgthumb = document.getElementById("ch3").style.backgroundImage;
	document.getElementById("zoom").style.backgroundImage = bgthumb;
});

document.getElementById("zoom").addEventListener("click", function(){
	document.getElementById("zoomcontrols").style.display = "block";
});

document.getElementById("plus").addEventListener("click", function(){
	zoomWidth = zoomWidth + 10;
	document.getElementById("zoom").style.width = zoomWidth + "%";
	zoomHeight = zoomHeight + 7;
	document.getElementById("zoom").style.height = zoomHeight + "%";
});

document.getElementById("minus").addEventListener("click", function(){
	zoomWidth = zoomWidth - 10;
	document.getElementById("zoom").style.width = zoomWidth + "%";
	zoomHeight = zoomHeight - 7;
	document.getElementById("zoom").style.height = zoomHeight + "%";
});

document.getElementById("next").addEventListener("click", function(){
	if (currentImg == 1){
		document.getElementById("ch1").style.backgroundImage = "url(imgs/i4.jpg)";
		document.getElementById("ch2").style.backgroundImage = "url(imgs/i5.jpg)";
		document.getElementById("ch3").style.backgroundImage = "url(imgs/i6.jpg)";
		currentImg = 2;
	}else if (currentImg == 2){
		document.getElementById("ch1").style.backgroundImage = "url(imgs/i7.jpg)";
		document.getElementById("ch2").style.backgroundImage = "url(imgs/i8.jpg)";
		document.getElementById("ch3").style.backgroundImage = "url(imgs/i9.jpg)";
		currentImg = 3;
	}else if (currentImg == 3){
		document.getElementById("ch1").style.backgroundImage = "url(imgs/i10.jpg)";
		document.getElementById("ch2").style.backgroundImage = "url(imgs/i11.jpg)";
		document.getElementById("ch3").style.backgroundImage = "url(imgs/i12.jpg)";
		currentImg = 4;
	}else if (currentImg == 4){
		document.getElementById("ch1").style.backgroundImage = "url(imgs/i1.jpg)";
		document.getElementById("ch2").style.backgroundImage = "url(imgs/i2.jpg)";
		document.getElementById("ch3").style.backgroundImage = "url(imgs/i3.jpg)";
		currentImg = 1;
	}
});

document.getElementById("previous").addEventListener("click", function(){
	if (currentImg == 3){
		document.getElementById("ch1").style.backgroundImage = "url(imgs/i4.jpg)";
		document.getElementById("ch2").style.backgroundImage = "url(imgs/i5.jpg)";
		document.getElementById("ch3").style.backgroundImage = "url(imgs/i6.jpg)";
		currentImg = 2;
	}else if (currentImg == 4){
		document.getElementById("ch1").style.backgroundImage = "url(imgs/i7.jpg)";
		document.getElementById("ch2").style.backgroundImage = "url(imgs/i8.jpg)";
		document.getElementById("ch3").style.backgroundImage = "url(imgs/i9.jpg)";
		currentImg = 3;
	}else if (currentImg == 1){
		document.getElementById("ch1").style.backgroundImage = "url(imgs/i10.jpg)";
		document.getElementById("ch2").style.backgroundImage = "url(imgs/i11.jpg)";
		document.getElementById("ch3").style.backgroundImage = "url(imgs/i12.jpg)";
		currentImg = 4;
	}else if (currentImg == 2){
		document.getElementById("ch1").style.backgroundImage = "url(imgs/i1.jpg)";
		document.getElementById("ch2").style.backgroundImage = "url(imgs/i2.jpg)";
		document.getElementById("ch3").style.backgroundImage = "url(imgs/i3.jpg)";
		currentImg = 1;
	}
});