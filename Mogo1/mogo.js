document.addEventListener("DOMContentLoaded",function(){
    var menu = document.querySelector('.thanh1');
    window.addEventListener("scroll",function(){
        if(window.pageYOffset > 20){
            menu.classList.add('menunho');

        }
        else{
            menu.classList.remove('menunho');
        }
    })
},false)