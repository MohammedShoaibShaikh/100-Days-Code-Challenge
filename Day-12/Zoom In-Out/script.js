const zoomScreen = document.querySelector(".container");
let zoom = 1;
const zoomingSpeed = 0.1;

document.addEventListener("wheel", (e)=> {
    if (e.deltaY > 0) {
        zoomScreen.style.transform = `scale(${(zoom += zoomingSpeed)})`;   
    } else {
        zoomScreen.style.transform = `scale(${(zoom -= zoomingSpeed)})`;
    }
})
