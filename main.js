var lips_x = 0
var lips_y = 0

function preload(){
    mustache = loadImage("Mustache.png.png")
}

function setup(){
    canvas = createCanvas(400 , 400)
    canvas.center()
    Video = createCapture(VIDEO)
    Video.hide()
    Video.size(400 , 400)
    Posenet = ml5.poseNet(Video , modelLoaded)
    Posenet.on("pose" , GotPoses)
}

function draw(){
    image(Video, 0 , 0 , 400 , 400)
    image(mustache , lips_x-25 , lips_y+5, 50 , 30)
}

function modelLoaded(){
    console.log("poseNet Intialized")
}

function GotPoses(results){
    if(results.length > 0){
        console.log(results)
        lips_x = results[0].pose.nose.x
        lips_y = results[0].pose.nose.y
        console.log(lips_x)
        console.log(lips_y)
    }
}