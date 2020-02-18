let burgerMenu = document.querySelector(".burgerMenu");
let Menu = document.querySelector(".navigation")
let monLieu = document.querySelectorAll(".lieu")
let coeur = document.querySelectorAll(".fa-heart")
let loupe = document.querySelector(".fa-search")
let recherche = document.querySelector(".input_search")

burgerMenu.addEventListener("click", function(e){
    //alert('test');
    event.preventDefault();
    if (Menu.classList.contains("navOpen")) {
        Menu.classList.remove("navOpen")
    } else {
        Menu.classList.add("navOpen")
    }

});

monLieu[0].classList.add("close")


monLieu.forEach(tab => {
    
    tab.addEventListener("click",function(a) {
        a.preventDefault();
        if (this.classList.contains("close")) {
            this.classList.remove("close")
        }else{
            this.classList.add("close")
        }
    })
})

coeur.forEach(Cr =>{
    Cr.addEventListener("click", function(c){
        c.preventDefault();
        if (this.classList.contains("far")) {
            this.classList.remove("far")
            this.classList.add("fa")
        }else{
            this.classList.remove("fa")
            this.classList.add("far")
        }
    })
})

loupe.addEventListener("click", function(d){
    //alert('test');
    event.preventDefault();
    if (recherche.classList.contains("large")) {
        recherche.classList.remove("large")
    } else {
        recherche.classList.add("large")
    }

});

