let arrowLeft = document.getElementsByClassName('v-slider_buttons--left')[0];
let arrowRight = document.getElementsByClassName('v-slider_buttons--right')[0];

let vSliderInnerMove = document.getElementsByClassName('v-slider_inner')[0];

let setOfPhotos = document.getElementById('v-slider_mini');


let transitionMove = 800;
let positionMove = 0;

arrowLeft.onclick = () => {
    positionMove -= transitionMove;
    console.log(positionMove);
    vSliderInnerMove.style.transform = `translate(${positionMove}px)`;
}
arrowRight.onclick = () => {
    positionMove += transitionMove;
    console.log(positionMove)
    vSliderInnerMove.style.transform = `translateX(${positionMove}px)`;
}

let vSliderLi = vSliderInnerMove.cloneNode(true);
vSliderLi.classList.remove('v-slider_inner');
vSliderLi.className += "v-slider_mini";
console.log(vSliderLi);
setOfPhotos.appendChild(vSliderLi)

