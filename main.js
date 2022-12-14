function preload() {
	world_start = loadSound("world_start.wav");
	setSprites();
	MarioAnimation();
}

function setup() {
	canvas = createCanvas(1240,336);
	canvas.parent("canvas");
	instializeInSetup(mario);
	video= createCapture(VIDEO);
	video.size(600, 400);
	video.parent("gameconsole");
	posenet= ml5.poseNet(video, modlod);
	posenet.on("pose", gotpose);
}

function modlod() {
	console.log("model loaded :)");
}

function gotpose(results) {
	if(results.length > 0) {
		console.log(results);
		noseX= results[0].pose.nose.x;
		noseY= results[0].pose.nose.y;
	}
}

function draw() {
	game();
}