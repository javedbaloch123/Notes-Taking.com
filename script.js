document.addEventListener("DOMContentLoaded" , function(){
  
    const  menubar = document.querySelector(".fa-bars");
    const hidebar = document.querySelector(".fa-xmark");
    const sidemenu = document.querySelector(".sidebar");

    menubar.addEventListener("click", () =>{
        sidemenu.style.left = "0";
    })

    hidebar.addEventListener("click", function(){
        sidemenu.style.left = "-410px";
    })


})



