var x = 0;
var y = 0;

var red = "#dd2222";
var orange = "#dd6611";
var yellow = "#ddbb11";
var clear = false;
var color = "#dd2222";

window.addEventListener("load", () => {
	const canvas = document.querySelector("#canvas");
	const ctx = canvas.getContext("2d");
	
	canvas.height = window.innerHeight/1.5;
	canvas.width = window.innerWidth/1.5;

	function canvas_size() {
		canvas.height = window.innerHeight/1.5;
		canvas.width = window.innerWidth/1.5;
	}

	window.addEventListener("resize", canvas_size)

	let painting = false;

	function clearTrue() {
		if (clear == false) {
			return;
		} else {
			ctx.clearRect(0, 0, canvas.width, canvas.height);
			clear = false;
		}
	}
	
	function startPosition(c) {
		x = c.clientX;
		y = c.clientY;
		painting = true;
	}

	function finishedPosition() {
		ctx.lineTo(x - 164, y - 119);
		ctx.stroke();
		ctx.closePath();
		painting = false;
		ctx.beginPath();
	}

	function draw(e) {
		if (!painting) {
			ctx.closePath();
			return;
		}

		function color_fun(d) {
			ctx.strokeStyle = color
		}
		
		window.addEventListener("mousemove", color_fun)
		ctx.lineWidth = 7;
		ctx.lineCap = "round";

		ctx.lineTo(e.clientX - 164, e.clientY - 119);
		ctx.stroke();
		ctx.beginPath();		
		ctx.moveTo(e.clientX - 164, e.clientY - 119);
	}

	canvas.addEventListener("mousedown", startPosition);
	canvas.addEventListener("mouseup", finishedPosition);
	canvas.addEventListener("mousemove", draw);	
	canvas.addEventListener("mousemove", clearTrue);
})

var severe_button = document.getElementById("severe");
var moderate_button = document.getElementById("moderate");
var mild_button = document.getElementById("mild");
var clear_button = document.getElementById("clear");
var flip_button = document.getElementById("switch");

severe_button.onclick = function(){
	color = red;
};
moderate_button.onclick = function(){
	color = orange;
};
mild_button.onclick = function(){
	color = yellow;
};
clear_button.onclick = function(){
	clear = true;
};
flip_button.onclick = function(){
	if (document.getElementById("switch").innerHTML == "Canvas") {
		document.getElementById("switch").innerHTML = "Map";
	} else {
		document.getElementById("switch").innerHTML = "Canvas";
	}
	if (document.getElementById("canvas").style.zIndex == 4) {
		document.getElementById("canvas").style.zIndex = -10;
	} else {
		document.getElementById("canvas").style.zIndex = 4;
	}
};
