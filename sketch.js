var boat , boatimg, obstacles ,  ocean , oceanImg
function preload ()
{
    boatimg = loadImage("Images/images.jpg")
    oceanImg   = loadImage("Images/oceanbackground.jpg")
}
function setup() 
{
createCanvas(400 , 400)
ocean = createSprite( 150 , 180 , 400 , 400)
ocean.addImage("ocean" , oceanImg)
ocean.velocityX = -4

 boat = createSprite(320 , 200) 
 boat.addImage("boat" , boatimg)
 boat.scale = 0.5

 
}

function draw()
{ 
   if (ocean.x < 0 ) 
   {
      ocean.x = width/2   
   }
  drawSprites();
}