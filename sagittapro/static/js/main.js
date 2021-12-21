var leftBely = document.querySelector(".left-bely")
var rightBely = document.querySelector(".right-bely")


$(window).on("scroll",function(e){

    valueS = $(this).scrollTop() 
 
   
    if(valueS <= 420){
        leftBely.style.top='-'+ valueS / 3
        rightBely.style.top='+'+ valueS / 3
    }

})


document.querySelector(".hovercursor").addEventListener('mouseenter',function(){
    $(".cursor__inner--circle").animate({'width':25 +'px','height':25+ 'px'},300);
    $(".cursor__inner--dot").animate({'width':11 +'px','height':11+ 'px'},300);
})
document.querySelector(".hovercursor").addEventListener('mouseleave',function(){
    $(".cursor__inner--circle").animate({'width':20 +'px','height':20+ 'px'},300);
    $(".cursor__inner--dot").animate({'width':6 +'px','height':6+ 'px'},300);
})