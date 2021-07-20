noseX=0;
noseY=0;

function preload(){
    nose=loadImage("https://i.postimg.cc/NM6g6yqS/pixilart-drawing-16.png");
}

function setup(){
    canvas=createCanvas(300,300);
    canvas.center();
    video=createCapture(VIDEO);
    video.hide();

    poseNet=ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function draw(){
    image(video, 0, 0, 300, 300);
    image(nose, noseX, noseY, 30, 30);
}

function modelLoaded(){
    console.log("PoseNet is ready!");
}

function gotPoses(result){
    if(result.length > 0){
        console.log(result);
        noseX=result[0].pose.nose.x-215;
        noseY=result[0].pose.nose.y-110;
        console.log("NoseX = "+ noseX);
        console.log("NoseY = "+ noseY);
    }
}

function take(){
    save("Nose Face.jpeg")
}