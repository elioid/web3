buttonSpin.addEventListener("click", function(){
    catImg.classList.add("spin");
    setTimeout(() => { catImg.classList.remove("spin"); }, 1000);
});