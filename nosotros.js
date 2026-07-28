const cards = document.getElementById("cards");

window.addEventListener("load",()=>{

    const cards=document.querySelectorAll(".card");

    setTimeout(()=>{

        cards[0].classList.add("left");

        cards[1].classList.add("center");

        cards[2].classList.add("right");

    },300);

});