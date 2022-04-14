$('.owl-carousel').owlCarousel({
rtl:true,
// loop:true,
margin:10,
nav:true,
dots:false,
responsive:{
    0:{
        items:4
    },
    467:{
        items:5
    },
    576:{
        items:6
    },
    768:{
        items:5
    },
    992:{
        items:6
    },
    1100:{
        items:8
    },
    1550:{
        items:10
    },

}
})

// --------------------------------------------------------------

$(".memo").after().on("click",(e)=>{
    
    var data = $(e.target).parent()[0].classList[0] ;
    $(".memo").removeClass("actov");
    $(e.target).addClass("actov")
    $(".q").removeClass("act")
    $(`.${data}`).addClass("act")
})

$(".lang").on("click",(e)=>{
$(".dropdown-menu").toggleClass("act");

})

$(document).ready(()=>{
    var height = Number.parseInt( $(".memo").css("height"));
    var width = Number.parseInt( $(".memo").css("width")) / 2.5 ;
    $(".owl-next").css("height" , `${height}px`);
    $(".owl-prev").css("height" , `${height}px`);
    $(".owl-next").css("width" , `${width}px`);
    $(".owl-prev").css("width" , `${width}px`);

})
$(window).on("resize load " , ()=>{
    var height = Number.parseInt( $(".memo").css("height"));
    var width = Number.parseInt( $(".memo").css("width")) / 2.5 ;
    $(".owl-next").css("height" , `${height}px`);
    $(".owl-prev").css("height" , `${height}px`);
    $(".owl-next").css("width" , `${width}px`);
    $(".owl-prev").css("width" , `${width}px`);
})



