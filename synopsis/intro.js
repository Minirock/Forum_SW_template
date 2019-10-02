// Sets the number of stars we wish to display
const numStars = 100;

function drawStars() {
  // For every star we want to display
for (let i = 0; i < numStars; i++) {
  let star = document.createElement("div");  
  star.className = "star";
  var xy = getRandomPosition();
  star.style.top = xy[0] + 'px';
  star.style.left = xy[1] + 'px';
  document.body.append(star);
}
}


// Gets random x, y values based on the size of the container
function getRandomPosition() {  
  var y = window.innerWidth;
  var x = window.innerHeight;
  var randomX = Math.floor(Math.random()*x);
  var randomY = Math.floor(Math.random()*y);
  return [randomX,randomY];
}



 var audio=document.createElement('audio');
 var play=true;


function turn(){
  if(play){
      document.getElementsByClassName('soundOn')[0].innerHTML = "Musique Off";
      document.getElementsByClassName('soundOn')[0].style.backgroundColor="red";
      audio.src="opening.mp3";
      audio.play();
    }else{
      document.getElementsByClassName('soundOn')[0].innerHTML = "Musique On";
      document.getElementsByClassName('soundOn')[0].style.backgroundColor="#4CAF50";
      audio.pause();
    }
    play = !play;

}