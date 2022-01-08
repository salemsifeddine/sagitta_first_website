
$(window).on("scroll",function(e){
    
   
    console.log(document.querySelectorAll(".gtt")[Math.floor(Math.random()*document.querySelectorAll(".gtt").length)].style.top)
    
    
    valueS = $(this).scrollTop() 

    if( valueS/20 <= 31.2){
        document.querySelector(".top").style.transform ="rotate("+ valueS/20 + "deg)"
       
    }else{
        document.querySelectorAll(".gtt").forEach(ele=>{
            ele.style.zIndex ="2"
        })
        length=document.querySelectorAll(".gtt").length
        document.querySelectorAll(".gtt")[Math.floor(Math.random()*length)].style.top = "-"+(valueS)/30+ "px"
    }
    
   
    
})

document.querySelectorAll(".gtt").forEach(ele=>{
    ele.style.left = Math.random()*250 + "px"
    ele.style.top = Math.random()*300 + "px"
})

