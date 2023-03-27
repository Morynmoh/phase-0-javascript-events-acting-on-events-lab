// Your code here
document.addEventListener('keydown', function(event) {
    if (event.code === 'ArrowRight') {
      moveDodgerRight();
    }
  });
  
  function moveDodgerRight() {
    const dodger = document.getElementById("dodger");
    const gameWidth = document.getElementById("game").offsetWidth;
    const dodgerRightEdge = parseInt(dodger.style.left) + dodger.offsetWidth;
    
    if (dodgerRightEdge < gameWidth) {
      dodger.style.left = parseInt(dodger.style.left) + 10 + "px";
    }
  }


document.addEventListener('keydown', function(event) {
    if (event.code === 'ArrowLeft') {
      moveDodgerLeft();
    }
  });
  
  function moveDodgerLeft() {
    const dodger = document.getElementById("dodger");
    
    const dodgerLeftEdge = parseInt(dodger.style.left);
    
    if (dodgerLeftEdge > 0) {
      dodger.style.left = parseInt(dodger.style.left) - 10 + "px";
    }
  }
  
  
