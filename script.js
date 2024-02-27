score = 0;
shoot = true;

audioGOver = new Audio('music/gameover.mp3');
audioshoot = new Audio('music/shoot.mp3');
audio = new Audio('music/zombie.mp3');


document.onkeydown = function(e) {
  console.log("Key Code is: ", e.keyCode);
  if (e.keyCode == 13 || e.keyCode == 32) {
    audioshoot.play();
    audio.play();
    zombie = document.querySelector('.zombie');
    zombie.classList.add('killZombie');
    setTimeout(() => {
      zombie.classList.remove('killZombie');
    }, 700);
    score += 1;
  }
  if (e.keyCode == 39) {
    girl = document.querySelector('.girl');
    girlX = parseInt(window.getComputedStyle(girl, null).getPropertyValue('left'));
    girl.style.left = girlX + 112 + "px";
  }
  if (e.keyCode == 37) {
    girl = document.querySelector('.girl');
    girlX = parseInt(window.getComputedStyle(girl, null).getPropertyValue('left'));
    girl.style.left = (girlX - 112) + "px";
  }
};

setInterval(() => {
  girl = document.querySelector('.girl');
  gameOver = document.querySelector('.gameOver');
  zombie = document.querySelector('.zombie');
  girlX = parseInt(window.getComputedStyle(girl, null).getPropertyValue('left'));
  zombieX = parseInt(window.getComputedStyle(zombie, null).getPropertyValue('left'));
  offsetX = Math.abs(girlX - zombieX);
  if (offsetX < 170) {
    gameOver.innerHTML = 'Game Over - Reload to Play Again';
    zombie.classList.remove('zombie');
    audioGOver.play();
  } else if (shoot) {
    updateScore(score);
    shoot = false;
    setTimeout(() => {
      shoot = true;
    }, 1000);
    setTimeout(() => {
        aniDuration = parseFloat(window.getComputedStyle(zombie, null).getPropertyValue('animation-duration'));
        newDuration = aniDuration - 0.3;
        zombie.style.animationDuration = newDuration + 's';
      }, 500);
  }
}, 10);
function hideDiv(){
    document.getElementById("instructions").style.visibility="hidden";
}
setTimeout("hideDiv()",7000);

function updateScore(score) {
  scoreCount.innerHTML = "Your score: " + score;
}
