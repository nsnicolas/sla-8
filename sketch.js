const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var starImg, fairyImg, bgImg;
var fairy, fairyBody, fairy_options, fairyVoice;
var star, starBody;
var world, engine;
var follow = 0;

function preload()
{
	starImg = loadImage("images/star.png");
	fairyImg = loadAnimation("images/fairyImage2.png");
	bgImg = loadImage("images/starNight.png");
	fairyVoice = loadSound("sound/JoyMusic.mp3");

}

function setup() {
	createCanvas(800, 750);

	fairy = createSprite(130, 520);
	fairy.addImage("fairyflying",fairyImg);  
	fairy.scale =0.25;

	star = createSprite(650,30);
	star.addImage(starImg);
	star.scale = 0.2;

	engine = Engine.create();
	world = engine.world;

	fairy_options = {isStatic: true, friction: 1}
	fairyBody = Bodies.rectangle(500, 520, 350, 20, fairy_options);
	World.add(world, fairyBody);

	fairyVoice.play();

	starBody = Bodies.rectangle(650 , 30 , 20, 20, star_options);
	World.add(world, starBody);
	Engine.run(engine);

	if(star.y > 470 && starBody.posotion.y > 470) {
		Matter.Body.setStatic(starBody,true)
}
}

function keyPressed() {

	if (keyCode === RIGHT_ARROW) {

	fairy.x = fairy.x = 20 
		
	}

	if (keyCode === LEFT_ARROW) {

		fairy.x = fairy.x - 20
	
	}
	
	if (keyCode === DOWM_ARROW) {
	
		Matter.Body.setStatic(starBody,false); 
	
	}

}

function draw() {
	background(bgImg);
	 star.x= starBody.position.x
	  star.y= starBody.position.y
	   console.log(star.y); 
	   if(star.y > 470 && starBody.position.y > 470 ){ 
		   Matter.Body.setStatic(starBody,true); } 
		   
		   drawSprites(); }