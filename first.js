
var hitnum=0;
var score=0;
function increasescore(){
 
  score+=10;
  

  document.querySelector("#scoreval").textContent=score;

}






function getnewHit(){
 hitnum=Math.floor(Math.random()*10)
 document.querySelector("#hitval").textContent=hitnum

}




function makebubble(){
  var clutter ="";

for(var i=1; i<=377; i++){
  var num=Math.floor(Math.random()*10)
 clutter +=`<div class="bubble">${num}</div>`;

}

document.querySelector("#btm").innerHTML= clutter;
}


var timer=60;
function runtimer(){
  var timeInt=setInterval(function(){
   if(timer>0){
    timer--;
    document.querySelector('#setTimer').innerHTML=timer
   }
   else{
    
    clearTimeout(timer);
   document.querySelector("#btm").innerHTML=`<h1>Game Over</h1>`;

   }
 },1000)

}
document.querySelector("#btm").addEventListener("click",function(d){
      var clickednum=Number(d.target.textContent)
      if(clickednum===hitnum){
        increasescore();
        makebubble();
        getnewHit();

      }

});



runtimer()
makebubble()
getnewHit()
