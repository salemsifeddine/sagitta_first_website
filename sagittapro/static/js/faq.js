
$(window).on("scroll",function(){
    var scrolledval=$(this).scrollTop();
    if(scrolledval > 910){
        document.querySelector(".leaves").style.opacity = 0;
    }else{
        document.querySelector(".leaves").style.opacity = 1;
    }
})