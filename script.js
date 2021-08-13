var textarea = document.getElementById("input");
var delete_btn = document.getElementById("del");
var reset_btn = document.getElementById("reset");
textarea.addEventListener("input", function (e) {
    console.log(e);
});
reset_btn.addEventListener("click", function () {
    textarea.value = "0";
});
