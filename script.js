

var canvas = document.getElementById('myCanvas');
var ctx = canvas.getContext('2d');


var png = new Image();

png.src = 'data:image/png;base64,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';

png.onload = drawScene;


var particles = [];
var checkScene = [];



function drawScene(){
	
canvas.width = canvas.clientWidth;
canvas.height = canvas.clientHeight;

	
	ctx.drawImage(png, canvas.width / 2, canvas.height / 2, png.width, png.height);
	var imgData = ctx.getImageData(200, 100, canvas.width, canvas.height);
	ctx.clearRect(0,0,canvas.width,canvas.height);

  		for(var x = 0; x < imgData.width; x++){
  			for(var y = 0; y < imgData.height; y++){
	  			var p = (x + y * imgData.width) * 4;

	  			if(imgData.data[p + 3] > 128){
	  					var particle = {
	  					x0: x,
	  					y0: y,
	  					pixelColor: 'rgba(' + imgData.data[p] + ', ' + imgData.data[p + 1] + ', ' + imgData.data[p + 2] + ', ' + imgData.data[p + 2] / 255 + ')'
	  				}
	  				particles.push(particle);
	  			}
  			}
  		}
 	
  
  	sortParticles();
	createParticles();
	changeCoordinate();
	createCoordinate();
		
}



function sortParticles(){
	particles.sort(function(a, b){
  		return a.y0 - b.y0 || a.x0 - b.x0
  	});
}




var listParticles = [];
var newParticles = [];

function rectangles(x1, y1, speed, colorType, origX, origY, wheelStatus){
	this.x1 = x1;
	this.y1 = y1;
	this.speed = speed;
	this.colorType = colorType;
	this.origX = origX;
	this.origY = origY;
	this.wheelStatus = wheelStatus;
}

function createParticles(){

	for(var i = 0; i < particles.length; i++){
		var colorList = ['#FF0000', 'orange', '#377EF8', '#00FF00', '#A800BB', '#A800BB'];
		var randomNum = (Math.floor(Math.random() * 4) + 1);

		if (i % 2){
			 randomY = (Math.floor(Math.random() * canvas.height) + 1);
			 randomX = -100;
		} else{
			 randomY = (Math.floor(Math.random() * canvas.height) + 1);
			 randomX = canvas.width + 100;
		}
		speed = (Math.floor(Math.random() * 20) + 1);
		wheelStatus = 0;

		var create = new rectangles(randomX, randomY, speed, colorList[randomNum - 1], randomX, randomY, wheelStatus);
		listParticles.push(create);
	}

}



function drawParticles(){

	if (animate4 == true){
		
		for(var i = 0; i < listParticles.length; i++){
			
			if (listParticles[i].y1 < 200){
				
				ctx.fillStyle = listParticles[i].colorType;
				ctx.fillRect(listParticles[i].x1, listParticles[i].y1, 2, 2);
			} else{

				ctx.fillStyle = 'blue';
				ctx.fillRect(listParticles[i].x1, listParticles[i].y1, 1, 1);
			}
			
		}
	} else if (animate2 == true || animate3 == true){

		for(var i = 0; i < listParticles.length; i++){
			ctx.fillStyle = '#00FF00';
			ctx.fillRect(listParticles[i].x1, listParticles[i].y1, 2, 2);
		}

	} else {
		
		for(var i = 0; i < listParticles.length; i++){
			ctx.fillStyle = particles[i].pixelColor;
			ctx.fillRect(listParticles[i].x1, listParticles[i].y1, 1, 1);
		}
	}
	
	
}


var animate1 = true;
var animate2 = false;
var animate3 = false;
var animate4 = false;
var animate5 = false;
var animate6 = false;
var changelastParticlesPointed = false;

function animate(){

	
	if(animate1 == true){
		animateScene1();
		if (changelastParticlesPointed == true){
			lastParticlesPointed = 0;
			changelastParticlesPointed = false;
		}
		drawParticles();
	} else if(animate2 == true){
		animateScene2();
		drawParticles();
	} else if(animate3 == true){
		animateScene3();
		drawParticles();
	} else if (animate4 == true){
		drawParticles();
		animateScene4();
	} else if (animate5 == true){
		animateScene5();
		drawParticles();
	} else{
		if (changelastParticlesPointed == true){
			lastParticlesPointed = 0;
			changelastParticlesPointed = false;
		}
		animateScene6();
		drawParticles();
	}
	
	
	requestAnimationFrame(animate);
	
}

requestAnimationFrame(animate);


var lastParticlesPointed = 0;

function animateScene1(){
	ctx.fillStyle = 'rgba(0,0,0,0.05)';
	ctx.fillRect(0,0,canvas.width, canvas.height);

	checkScene.length = 0;
	for(var i = 0; i < particles.length;i++){

		if ((lastParticlesPointed + 25) >= i){
			listParticles[i].x1 -= ((listParticles[i].x1 - particles[i].x0) / listParticles[i].speed);
			listParticles[i].y1 -= ((listParticles[i].y1 - particles[i].y0) / listParticles[i].speed);	
		}		
		if (Math.round(listParticles[i].x1) == particles[i].x0){
			lastParticlesPointed = i;
		}
		if (Math.round(listParticles[i].x1) !== particles[i].x0){
			checkScene.push(i);
		}

	}
	if (checkScene.length == 0){
		changelastParticlesPointed = true;
		animate1 = false;
		animate2 = true;
		animate3 = false;
		animate4 = false;
	}


}


function changeCoordinate(){
	var randomX = (Math.floor(Math.random() * canvas.width) + 1);
	var randomY = (Math.floor(Math.random() * canvas.height) + 1);

	for(var i = 0; i < particles.length; i++){
		var randomX = (Math.floor(Math.random() * canvas.width) + 1);
		var randomY = (Math.floor(Math.random() * canvas.height) + 1);

		var create = new newCoordinate(randomX, randomY);
		newParticles.push(create);
	}
	
}



function animateScene2(){
	ctx.fillStyle = 'rgba(0,0,0,0.05)';
	ctx.fillRect(0,0,canvas.width, canvas.height);

	checkScene.length = 0;
	for(var i = 0; i < particles.length; i++){
		listParticles[i].x1 -= ((listParticles[i].x1 - newParticles[i].x) / listParticles[i].speed);
		listParticles[i].y1 -= ((listParticles[i].y1 - newParticles[i].y) / listParticles[i].speed);

		if (Math.round(listParticles[i].x1) !== newParticles[i].x){
			checkScene.push(i);
		}
	}

	if (checkScene.length == 0){
		changelastParticlesPointed = true;
		animate1 = false;
		animate2 = false;
		animate3 = true;
		animate4 = false;
	}
}


function animateScene3(){

	ctx.clearRect(0,0,canvas.width, canvas.height);

	checkScene.length = 0;
	for(var i = 0; i < particles.length; i++){
		
		if(listParticles[i].x1 !== listParticles[i].origX){
			listParticles[i].y1 += listParticles[i].speed;
			checkScene.push(i);
		}
		

		if (listParticles[i].y1 > canvas.height){
			listParticles[i].x1 = listParticles[i].origX;
			listParticles[i].y1 = listParticles[i].origY;
		}

	}
	if(checkScene.length == 0){
		changelastParticlesPointed = true;
		animate1 = false;
		animate2 = false;
		animate3 = false;
		animate4 = true;
	}

}


var counter = 0;
var particlesWheel = [];
var particlesWheel2 = [];
var particlesLimit = 200;

function animateScene4(){
	ctx.fillStyle = 'rgba(0,0,0,0.05)';
	ctx.fillRect(0,0,canvas.width, canvas.height);

	
	var getIndex = 0;

	checkScene.length = 0;
	for(var i = 0; i < particles.length; i++){

		getIndex += 1;
	
		if ((lastParticlesPointed + particlesLimit) >= i && listParticles[i].x1 < canvas.width || listParticles[i].x1 > canvas.width){

			if (particlesWheel.length !== particlesLimit){
				particlesWheel.push(i);
				lastParticlesPointed = i;
			}
			if (particlesWheel.length == particlesLimit){
				if ((lastParticlesPointed + particlesLimit) >= i){
					if (Math.round(listParticles[i].x1) !== wheelCoordinate1[getIndex].x && listParticles[i].wheelStatus == 0){
						
						listParticles[i].x1 -= ((listParticles[i].x1 - (wheelCoordinate1[getIndex].x)) / listParticles[i].speed);
						listParticles[i].y1 -= ((listParticles[i].y1 - (wheelCoordinate1[getIndex].y)) / listParticles[i].speed);

						if (Math.round(listParticles[i].x1) == wheelCoordinate1[getIndex].x){
							listParticles[i].wheelStatus = 1;
						}

					} else {
								if (listParticles[i].y1 < 400){
									lastParticlesPointed = i;
								}
								if (listParticles[i].y1 < 200){
									listParticles[i].x1 -=  (listParticles[i].x1 - (wheelCoordinate2[getIndex].x)) / 100;
									listParticles[i].y1 -= 	(listParticles[i].y1 - (wheelCoordinate2[getIndex].y)) / 100;

								}else{
									listParticles[i].y1 -= 2;
								}
					}
				}
			}
		}


		if (Math.round(listParticles[i].x1) !== wheelCoordinate2[getIndex].x){
			checkScene.push(i);
		}

		if (getIndex == particlesLimit){
			getIndex = 0;
		}

	}


	if (checkScene.length == 0){
		changelastParticlesPointed = true;
		animate1 = false;
		animate2 = false;
		animate3 = false;
		animate4 = false;
		animate5 = true;
		animate6 = false;
	}

}



var wheelCoordinate1 = [];
var wheelCoordinate2 = [];

function createCoordinate(){
	
	var getCenterwidth = (canvas.width / 2);
	var getCenterheight = canvas.height / 1.2;
	for(var i = 0; i <= particlesLimit; i++){
		var delay = (Math.floor(Math.random() * 10) + 1);
		var wheel = {
	  		x: getCenterwidth,
	  		y: getCenterheight,
	  		delay: delay
		}
		wheelCoordinate1.push(wheel);
	}



	for(var i = 0; i <= particlesLimit; i++){
		var x = (Math.floor(Math.random() * canvas.width) + 1);
		var y = -50;
		var wheel = {
	  		x: x,
	  		y: y
		}
		wheelCoordinate2.push(wheel);
	}

}




function animateScene5(){
	ctx.clearRect(0,0,canvas.width,canvas.height);

	checkScene.length = 0;
	for(var i = 0; i < particles.length;i++){


			listParticles[i].x1 -= ((listParticles[i].x1 - particles[i].x0) / listParticles[i].speed);
			listParticles[i].y1 -= ((listParticles[i].y1 - particles[i].y0) / listParticles[i].speed);	
	
		if (Math.round(listParticles[i].x1) !== particles[i].x0){
			checkScene.push(i);
		}

	}
	if (checkScene.length == 0){
		changelastParticlesPointed = true;
		animate1 = false;
		animate2 = false;
		animate3 = false;
		animate4 = false;
		animate5 = false;
		animate6 = true;
	}
}

function animateScene6(){
	ctx.clearRect(0,0,canvas.width,canvas.height);

	checkScene.length = 0;
	for(var i = 0; i < particles.length;i++){

		if ((lastParticlesPointed + 100) >= i){
			listParticles[i].y1 += 10;	
		}		
		if (Math.round(listParticles[i].y1) >  canvas.height && listParticles[i].x1 !== listParticles[i].origX){
			checkScene.push(i);
			listParticles[i].x1 = listParticles[i].origX;
			listParticles[i].y1 = listParticles[i].origY;
		}
		if (listParticles[i].y1 >  canvas.height / 1.7){
			lastParticlesPointed = i;
		}
		if (Math.round(listParticles[i].x1) !== listParticles[i].origX){
			checkScene.push(i);
		}
	}

	if(checkScene.length == 0){
		backOriginalCoordinate();
		changelastParticlesPointed = true;
		animate1 = true;
		animate2 = false;
		animate3 = false;
		animate4 = false;
		animate5 = false;
		animate6 = false;
	}

}

function backOriginalCoordinate(){
	for(var i = 0; i < particles.length;i++){
		listParticles[i].x1 = listParticles[i].origX;
		listParticles[i].y1 = listParticles[i].origY;
	}
}

function newCoordinate(x, y){
	this.x = x;
	this.y = y;
}










/**
	var x = 100;
	var y = 100;
	var x2 = x * 3;
	var y2 = (y * 3 / 2) * 3;

function animate(){
	ctx.clearRect(0,0, canvas.width, canvas.height);
	move();
	drawBall();
	requestAnimationFrame(animate);
}

requestAnimationFrame(animate);


function move(){

	for(var i = 0; i < ballList.length; i++){
		ballList[1].x -= (ballList[1].x - ballList[0].oldX) / 50;
		ballList[1].y -= (ballList[1].y - ballList[0].oldY) / 50;
	}

}

var ballList = [];

function ball(x, y, speed, oldX, oldY){
	this.x = x;
	this.y = y;
	this.speed = speed;
	this.oldX = oldX;
	this.oldY = oldY;
}

function drawBall(){
	
	for(var i = 0; i < ballList.length; i++){
		ctx.beginPath();
		ctx.arc(ballList[i].x, ballList[i].y, 5, 0, Math.PI * 2);
		ctx.closePath();
		ctx.fillStyle = 'blue';
		ctx.fill();
	}
}
createBall();

function createBall(){
	var x = [500, 50];
	var y = [200, 350];
	var speed = [0.5, 0.1];

	for(var i = 0; i < 2; i++){
		var create = new ball(x[i], y[i], speed[i], x[i], y[i]);
		ballList.push(create);
	}

}


	lastMouse = {x: x, y:  y}
canvas.addEventListener('mousemove', function(e){
	const lastPoint = {x: this.x, y: this.y}

	lastMouse.x += (e.clientX - lastMouse.x) * 0.5;
	lastMouse.y += (e.clientY - lastMouse.y) * 0.5;

	x = lastMouse.x;
	y = lastMouse.y;

});



**/







