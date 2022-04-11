$(".h").on("keyup",function(){
    $(".f").children().remove();
    hello = setTimeout(()=>{
    return $(".h").val() ? ehab($(".h").val()) :$(".f").children().remove();
    },500)
})

ehab = (y)=>{
$.getJSON("http://collage-site.local/wp-json/wp/v2/posts",
    function (data) {
        console.log("ehab")
        data.map((x,a) =>  x["title"]["rendered"].includes(y) ? $(".f").append(`<li style="list-style:none;">${x["title"]["rendered"]}</li>`) 
        : "there is no result" )
        
    }
);
}