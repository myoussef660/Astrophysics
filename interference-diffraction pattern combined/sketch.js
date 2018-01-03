var d = 0.0;
var a=0.0;
var l=0.0;
var y;
var theta=0.0;
var dx = 1;
var int0 = 0.0;
var x = 0.0 ;
var slider;
var radio;
var N = 0;
var h,k,f;
var greeting;



function setup() {
  //greeting = createElement ('h2',"REFRESH your browser everytime you change your option");
  //greeting.position(20,2)
createCanvas(800, 800);
//text('REFRESH your browser everytime you change your option' ,width/2, height/2 );
radio = createRadio();
  oneslit = radio.option('One Slit');
  radio.position(100,5);
//radio2 = createRadio();
  twoslits = radio.option('two Slits');
  radio.position(120,5);
//radio3 = createRadio();
  N_slits = radio.option('N Slits');
  radio.position(220,5)
  //radio.style('width', '60px');
  textAlign(CENTER);
  fill(255, 0, 0);


LightWavelength = createElement('z2', 'Wavelength');
LightWavelength.position(20, 30);
slider1 = createSlider();
slider1.value(12);
slider1.position(140, 30);

DistanceBTNSlits = createElement('z2', 'Distance between slits');
DistanceBTNSlits.position(20,55);
slider2 = createSlider();
slider2.position(200,55 );
slider2.value(59);

SlitWidth = createElement('z2', 'Slit Width');
SlitWidth.position(20,80);
slider3 = createSlider();
slider3.position(140, 80);
slider3.value(12);

CentralMaximum = createElement('z2', 'Central Maximum');
CentralMaximum.position(20, 105);
slider4 = createSlider(0,255,100)
slider4.position(160, 105);
slider4.value(140);

NSlits = createElement('z2','N-slits');
NSlits.position(20,130);
slider5 = createSlider();
slider5.position(180,130);
slider5.value(3);

 textAlign(CENTER);

 y = new Array(700);
}

function draw() {

background(255);
noFill();
var value = radio.value();

l = slider1.value();
d = slider2.value();
a = slider3.value();
int0 = slider4.value();
N = slider5.value();

calcPlot();
renderFunction();
}

function calcPlot(){
    for (var x= 0 ; x< y.length; x+=1){
        if (radio.value()=='two Slits'){
        theta = map(x,0,y.length,-PI/2,PI/2)
        y[x] = int0 * Math.pow(Math.cos(PI*d*Math.sin(theta)/l),2)*Math.pow(Math.sin(PI*a*Math.sin(theta)/l)/(PI*a*Math.sin(theta)/l),2)
        }

        else if (radio.value() == 'One Slit') {
          theta = map(x,0,y.length,-PI/2,PI/2)
          y[x] = int0*Math.pow(Math.sin(PI*a*Math.sin(theta)/l)/(PI*a*Math.sin(theta)/l),2)
          }
        else if(radio.value()=='N Slits') {
          theta = map(x,0,y.length,-PI/2,PI/2)
          y[x] = int0*Math.pow(Math.sin(N*PI*d*Math.sin(theta)/l),2)/(Math.pow(Math.sin(PI*d*Math.sin(theta)/l),2))
          }
    else {

        }
}
}
function renderFunction() {
//x = 0.0;
push();
noFill();
stroke(80);

beginShape();
for (var j = 0; j< y.length; j++){
  curveVertex(j,height/2-y[j])
}
endShape();
pop();

}
