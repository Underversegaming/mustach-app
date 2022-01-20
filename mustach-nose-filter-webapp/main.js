function perload(){

}
function setup(){
    canvas=createCanvas(500,400);
    canvas.center();
    video=createCapture(VIDEO);
    video.size(300,300);
    video.hide();
    poseNet=ml5.poseNet(video,modelLoaded);
    poseNet.on('pose',gotPoses);
}
function gotPoses(results){
    if(results.length>0){
      console.log(results);
      console.log("nose x="+results[0].pose.nose.x);
      console.log("nose y="+results[0].pose.nose.y);
    }
}
function modelLoaded(){
    console.log("poseNet is successfuly initialized");
}
function draw(){
image(video,0,0,500,400);
}
function take_snapshot(){
save(mymustachimage.jpg)
}