var leftBely = document.querySelector(".left-bely")
var rightBely = document.querySelector(".right-bely")


$(window).on("scroll",function(e){

    valueS = $(this).scrollTop() 
 
   
    if(valueS <= 420){
        leftBely.style.top='-'+ valueS / 3
        rightBely.style.top='+'+ valueS / 3
    }

})