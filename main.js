let btn = document.querySelector('.btn');
let piece = document.querySelector('.piece');



btn.addEventListener('click', () => {
    const alea = Math.round(Math.random(0,1));
    if (alea === 1) {
      /*console.log('pile');*/
      piece.classList.add("pile");
    } else {
      /*console.log('face');*/
      piece.classList.remove("pile");
    }
  }) 