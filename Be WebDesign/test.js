document.addEventListener('DOMContentLoaded',function(){
    var nut = document.querySelectorAll('.thanhnut ul li');
    var cacslide = document.querySelectorAll('.cacslide ul li');
    // Autoslide
        var chuyenslide = setInterval(() => {
        var slideHienTai = document.querySelector('.cacslide ul .hienthi');
        var vitrislide = 0;
        for(vitrislide = 0 ; slideHienTai = slideHienTai.previousElementSibling ; vitrislide++){}            
        if(vitrislide < (cacslide.length -1)){
            for(var i = 0 ; i < cacslide.length ; i++){
                cacslide[i].classList.remove('hienthi')
                nut[i].classList.remove('kichhoat')
            }
            cacslide[vitrislide].nextElementSibling.classList.add('hienthi');
            nut[vitrislide].nextElementSibling.classList.add('kichhoat');
        }
        else{
            for(var i = 0 ; i < cacslide.length ; i++){
            cacslide[i].classList.remove('hienthi');
            nut[i].classList.remove('kichhoat');
            }
            cacslide[0].classList.add('hienthi');
            nut[0].classList.add('kichhoat');
        }
        }, 5000);


        //Chuyển slide bằng click
    for( var i = 0 ; i < nut.length ; i++){
      nut[i].addEventListener('click',function(){
          clearInterval(chuyenslide);
          for(var i = 0 ; i < nut.length ; i++){
              nut[i].classList.remove('kichhoat');
          }
          this.classList.add('kichhoat');

          var nutkichhoat = this;
          var vitri = 0;
          for(vitri = 0; nutkichhoat = nutkichhoat.previousElementSibling ; vitri++){
          }
             // console.log('Slide số : '+ vitri);
        for(var i =0 ; i < cacslide.length ; i++){
            cacslide[i].classList.remove('hienthi');
            cacslide[vitri].classList.add('hienthi');
        }   
          
      })
    }
    // Viết hàm click cho thanh mục lục

    var nutmucluc1 = document.querySelector('.khoimucluc .nutmucluc1');
    var nutmucluc2 = document.querySelector('.khoimucluc .nutmucluc2');
    var khoimauden = document.querySelector('.khoimucluc .khoimauden');
    var khoitext = document.querySelector('.khoimucluc .khoitext');
    nutmucluc1.addEventListener('click',function(){
        nutmucluc1.classList.add('xoanut1');
        nutmucluc2.classList.add('hienlennut2');
        khoimauden.classList.add('hienlenkhoiden')
        khoitext.classList.add('hienlenkhoitext')
    })
    nutmucluc2.addEventListener('click',function(){
        nutmucluc1.classList.remove('xoanut1');
        nutmucluc2.classList.remove('hienlennut2');
        khoimauden.classList.remove('hienlenkhoiden')
        khoitext.classList.remove('hienlenkhoitext')
    })
    
    var nhapnhay = setInterval(() => {
        var nutnhapnhay = document.querySelector('.khoi380 .the380tren');
        nutnhapnhay.classList.toggle('nhapnhay')
    }, 800);


    //Viet cho khoi cua so
    var nut380 = document.querySelector('.khoi380');
    var khoicuaso = document.querySelector('.khoicuaso');

    nut380.addEventListener('click',function(){
        nut380.classList.toggle('khoi380dira');
        khoicuaso.classList.toggle('cuasodira');
    })
   
},false)