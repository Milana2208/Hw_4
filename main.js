// const block = document.getElementById("block");
// const x = document.getElementById("x")
// const y = document.getElementById("y")
// function showCoordination(){
//     x.innerText = event.clientX;
//     y.innerText = event.clienty;
// }
// block.addEventListener("mousemove", showCoordination)
//

// const mainus = document.getElementById('mainus')
// const plus = document.getElementById('plus')
// const number = document.getElementById('number')
// let o = 0;
// mainus.addEventListener("click", function (){
//     if (o > 0){
//         o--;
//         number.style.color = 'red';
//         number.innerHTML = o
//
//     }
// })
// plus.addEventListener('click', function (){
//     o++;
//     number.style.color = "green";
//     number.innerHTML = o
// })


const y = document.getElementById('y_y')
const x = document.getElementById('x_x')
const box = document.getElementById("box")
let yy;
let xx;
box.addEventListener('mousemove', e => {
    yy = e.screenY
    xx = e.screenX
    y.innerHTML = yy
    x.innerHTML = xx
})