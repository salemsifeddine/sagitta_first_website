
$(window).on("scroll",function(e){
    
   
    if($(this).scrollTop() >= 1900 ){
        document.querySelectorAll(".cookie-small").forEach(ele=>{
            ele.style.position="absolute"
        })
    }

    if($(this).scrollTop() < 1900 ){
        document.querySelectorAll(".cookie-small").forEach(ele=>{
            ele.style.position="fixed"
        })
    }
    
    
    valueS = $(this).scrollTop() 

    if( valueS/20 <= 31.2){
        document.querySelector(".top").style.transform ="rotate("+ valueS/20 + "deg)"
       
    }else{
        document.querySelectorAll(".gtt").forEach(ele=>{
            ele.style.zIndex ="2"
        })
        
    }
    
    length=document.querySelectorAll(".gtt").length
    document.querySelectorAll(".gtt")[Math.floor(Math.random()*length)].style.top = "-"+(valueS)/30+ "px"
    
})

document.querySelectorAll(".gtt").forEach(ele=>{
    ele.style.left = Math.random()*150 + "px"
    ele.style.top = Math.random()*(200-35) + 35 + "px"
})

