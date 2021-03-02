$(window).on("load", function () {
  //preloader
  $(".pre-loader").fadeOut("500", function () {
    $("body").removeClass("overflow");
    $(this).remove();
  });

  if ($(".pre-loader").length == 0) {
    $("body").removeClass("overflow");
  }
  
  // animate on scroll

  AOS.init({
    duration: 700,
    mirror: true,
    once: true,
    disable: function () {
      var maxWidth = 992;
      return window.innerWidth < maxWidth;
    },
    easing: "ease-in-out",
  });

  //nava toggle
  $("#nava-icon").click(function (e) {
    $("#nava").toggleClass("nava-active");
    $("html").toggleClass("overflow");
  });

  $("#nava").click(function (e) {
    if (
      e.target.id == "nava" ||
      e.target.id == "close-nava" ||
      e.target.parentNode.id == "close-nava"
    ) {
      $(this).removeClass("nava-active");
      $("html").removeClass("overflow");
    }
  });

  //search toggle
  $("#search-btn").click(function (e) {
    $("#search-form").toggleClass("search-form-active");
    $("html").toggleClass("overflow");
  });

  $("#search-form").click(function (e) {
    if (
      e.target.id == "search-form" ||
      e.target.id == "close-search" ||
      e.target.parentNode.id == "close-search"
    ) {
      $(this).removeClass("search-form-active");
      $("html").removeClass("overflow");
    }
  });

  $(".slide").on("click", function (e) {
    console.log(e.target);
    if (
      (e.target.classList.contains("drop") &&
        e.target.parentNode.classList.contains("slide")) ||
      e.target.classList.contains("slide")
    ) {
      e.stopPropagation();
      $(this).toggleClass("slide-active");
      $(this).children(".top-dropDown").slideToggle();
    }
  });

  function changeSlide() {
    if (window.innerWidth <= 992) {
      $(".sm-slide").removeClass("top-setting");
      $(".sm-slide").addClass("slide");
      $(".sm-slide .top-dropDown").css("display", "none");
    } else {
      $(".sm-slide").addClass("top-setting");
      $(".sm-slide").removeClass("slide");
      $(".sm-slide .top-dropDown").css("display", "block");
    }
  }

  changeSlide();

  window.addEventListener("resize", changeSlide);

  // add footer collabse
  function addCollapse() {
    if (window.innerWidth <= 992) {
      $(".footer-list").attr("data-toggle", "collapse");
      $(".footer-list .slide-down").addClass("collapse");
    } else {
      $(".footer-list").attr("data-toggle", "none");
      $(".footer-list .slide-down").removeClass("collapse");
      $(".footer-list .slide-down").css("height", "auto");
    }
  }

    // add footer collabse
    function addCollapse() {
      if (window.innerWidth <= 992) {
        $('.footer-list').attr("data-toggle", "collapse");
        $('.footer-list ul').addClass('collapse');
      } else {
        $('.footer-list').attr("data-toggle", "none");
        $('.footer-list ul').removeClass('collapse');
        $('.footer-list ul').css('height', 'auto');
      }
    }

    $('.footer-list a').click(function (e) { 
      e.stopPropagation();
    });
  
    addCollapse();
    window.addEventListener("resize", addCollapse);
  
  
    $(".footer-list").on("click", function (e) {
      if (window.innerWidth <= 992) {
        e.preventDefault();
        $(this).toggleClass("footer-list-active");
      }
    });


  var mySwiper = new Swiper("header .swiper-container", {
    // Optional parameters
    direction: "horizontal",
    loop: true,
    updateOnWindowResize: true,
    effect: 'fade',
    autoplay: {
      delay: 5000,
    },

    // If we need pagination
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },

    // Navigation arrows
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

  var mySwiper2 = new Swiper(".s-container", {
    // Optional parameters
    direction: "horizontal",
    loop: true,
    updateOnWindowResize: true,
    slidesPerView: 4,
    spaceBetween: 25,
    autoplay: {
      delay: 5000,
    },
    breakpoints: {
      // when window width is >= 480px
      1200: {
        slidesPerView: 4,
        spaceBetween: 25,
      },
      992: {
        slidesPerView: 3,
        spaceBetween: 30,
      },
      // when window width is >= 480px
      150: {
        slidesPerView: 2,
        spaceBetween: 15,
      },
    },

    // If we need pagination
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },

    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

  window.addEventListener("scroll", scrolled);

  function scrolled() {
    let up = document.getElementById("up");
    if (this.scrollY > 200) {
      up.classList.add("active-up");
    } else {
      up.classList.remove("active-up");
    }
  }

  //styleChange

  // get the colors from storage
  if(localStorage.getItem("--mainColor")){
    let c1 = localStorage.getItem("--mainColor");
    // let c2 = localStorage.getItem("--hoverColor");

    document.documentElement.style.setProperty("--mainColor", c1);
    // document.documentElement.style.setProperty("--hoverColor", c2);

    $('#styleChange .color').html('');
     document.querySelectorAll('#styleChange .color').forEach(el =>{
       if (el.getAttribute('data-mainColor') === c1) {
         el.innerHTML = '<i class="fas fa-check"></i>';
       }
     })
  }

  document.getElementById('styleChange').addEventListener('click',changeStyle);

  function changeStyle(e){

    //open and close style change
    if(e.target.parentNode.classList.contains('ico') || e.target.classList.contains('ico')){
      $(this).toggleClass('open');
    }

    //change the colors
    if(e.target.classList.contains('color')){

      let c1 = e.target.getAttribute('data-mainColor');
      // let c2 = e.target.getAttribute('data-hoverColor');

      document.documentElement.style.setProperty("--mainColor", c1);
      // document.documentElement.style.setProperty("--hoverColor", c2);

      $('#styleChange .color').html('');
      $(e.target).html('<i class="fas fa-check"></i>');

      localStorage.setItem("--mainColor", c1);
      // localStorage.setItem("--hoverColor", c2);

    }
  }
});
