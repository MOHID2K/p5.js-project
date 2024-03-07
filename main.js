function preload(){
}

function setup()
{
    canvas = createCanvas(640, 480);
    canvas.position(380, 250);
    video = createCapture(VIDEO);
    video.hide();

    tint_color = "";
}

function draw()
{
    image(video, 180, 180, 300, 200);
    fill(0, 255, 0);
    rect(35, 50, 30, 400);
    rect(575, 50, 30, 400);
    rect(35, 40, 550, 30);
    rect(35, 420, 550, 30);
    
    
    fill(255, 0, 0);
    circle(50, 50, 70);
    circle(590, 50, 70);
    circle(50, 430, 70);
    circle(590, 430, 70);
    
}

function take_snapshot()
{
    save('student_name.png');
}

function filter_tint()
{
    tint_color = document.getElementById("color_name").value;
}