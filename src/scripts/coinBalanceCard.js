
var modal = document.getElementById("myModal");

var btn = document.getElementById("redeemBtn");

var span1 = document.getElementsByClassName("close")[0];

// window.onload = function () {
console.log(btn, 'btn')
btn.onclick = function () {
    modal.style.display = "block";
}

span1.onclick = function () {
    modal.style.display = "none";
}
// }


window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}


