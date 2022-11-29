var polySynth;

function setup() {
    var canvas = createCanvas(500, 500);
    canvas.parent("p5container");

    polySynth = new p5.PolySynth();
}

function playSynth1(){
    userStartAudio();

    var dur = 1.5;
    var time = 0;
    var vel = 0.1;
    
    polySynth.play('G2', vel, 0, dur);
    polySynth.play('C3', vel, time += 1/3, dur);
    polySynth.play('G3', vel, time += 1/3, dur);

}

function playSynth2(){
    userStartAudio();

    var dur = 1.5;
    var time = 0;
    var vel = 0.1;
    
    polySynth.play('G3', vel, 0, dur);
    polySynth.play('C3', vel, time += 1/3, dur);
    polySynth.play('G2', vel, time += 1/3, dur);

}

function keyPressed() {
    if (keyCode === LEFT_ARROW){
        playSynth1();
        fill(255, 255, 0);
    } else if(keyCode === RIGHT_ARROW){
        playSynth2();
        fill(255, 0, 255);
    }
}


function draw() {
    background(220);
    ellipse(width/2, height/2, 200);
}