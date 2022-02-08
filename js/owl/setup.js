$('.owl-carousel').owlCarousel({
  autoplay:true,
  autoplayTimeout:2000, //2s
  autoplayHoverPause:true,
  loop:true,    //giro contínuo
  margin:10,    //espaço entre as img
  nav:false,     //btb de navegação
  responsive:{
      0:{       //pixel = 0 -> mostra 1 img (item)
          items:1
      },
      600:{     //pixel 600 -> mostra 3 img (item)
          items:3
      },
      1000:{    //pixel 1000 -> mostra 5 img (item)
          items:5
      }
  }
})