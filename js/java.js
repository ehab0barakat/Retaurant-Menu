$(".memo").after().on("click",(e)=>{
    $(".memo").removeClass("actov");
    $(e.target).addClass("actov");
})








$("#btnGroupDrop1 ").on("click", (e)=>{
    
    $(".ss").removeClass("frame"); 
    
    $(e.target).parent().parent().parent().find(".ss").addClass("frame");
    
});






$(".nextt").on("click", ()=>{
    var style = window.getComputedStyle(document.querySelector('.bottom'));
    var matrix = new WebKitCSSMatrix(style.transform);
    var left   = matrix.m41 ;
    
    
    var card = Number.parseInt($(".memo").css("width"));
    var bottom = Number.parseInt($(".bottom").css("width"));
    var father = Number.parseInt($(".father").css("width"));
    


    var w = left + card + 15
    

    console.log(w)

    if( left >= 0 && left < bottom - father ){
        $(".nextt").addClass("actv")
        $(".bottom").css("transform", `translateX(${  w }px)`) ;
        $(".food").css("transform", `translateX(${  -w }px)`) ;
        $(".grid .father .bottom").css("transform", `translateX(${  0 }px)`) ;
        $(".prevv").addClass("actv")
        
    }
    
    else{
        $(".nextt").removeClass("actv")
        
        
    }
    
    

})



$(".prevv").on("click", ()=>{
    var style = window.getComputedStyle(document.querySelector('.bottom'));
    var matrix = new WebKitCSSMatrix(style.transform);
    var left   = matrix.m41 ;
    var card = Number.parseInt($(".memo").css("width"));
    var bottom = Number.parseInt($(".bottom").css("width"));
    var father = Number.parseInt($(".father").css("width"));



    
    var w = left - card - 15
    
    
    if ( left <= 0  ){
        $(".prevv").removeClass("actv")
        $(".bottom").css("transform", `translateX(${0}px)`) ;
    }
    
    
    if( left > 0 ){
        
        $(".nextt").addClass("actv")
        $(".bottom").css("transform", `translateX(${  w }px)`) ;
        $(".grid .father .bottom").css("transform", `translateX(${  0 }px)`) ;
        $(".food").css("transform", `translateX(${  -w }px)`) ;

    }



})