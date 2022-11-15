const block = document.getElementById("block");
const x = document.getElementById("x")
const y = document.getElementById("y")
function showCoordination(){
    x.innerText = event.clientX;
    y.innerText = event.clienty;
}
block.addEventListener("mousemove", showCoordination)