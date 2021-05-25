function preload()
{}

function setup()
{
    Canvas = createCanvas(400,400);
    Canvas.center();
    Video = createCapture(VIDEO);
    Video.hide();
}

function draw()
{
    image(Video,0,0,400,400);
}