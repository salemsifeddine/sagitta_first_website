
$(window).on("scroll",function(e){
    var valueS = $(this).scrollTop() 
    
    length=document.querySelectorAll(".gtt").length
    // switch (Math.ceil(valueS/360)) {
        
    //     case 1:
    //         $(".img1").fadeIn(200)
    //         // document.querySelector(".img1").previousElementSibling.style.display="none"
    //         break;
    //     case 2:
    //         $(".img2").fadeIn(200)
    //         document.querySelector(".img2").previousElementSibling.style.display="none"
    //         break;
    //     case 3:
    //         $(".img3").fadeIn(200)
    //         document.querySelector(".img3").previousElementSibling.style.display="none"
    //         break;
    //     case 4:
    //         $(".img4").fadeIn(200)
    //         document.querySelector(".img4").previousElementSibling.style.display="none"
    //         break;
    //     case 5:
    //         $(".img5").fadeIn(200)
    //         document.querySelector(".img5").previousElementSibling.style.display="none"
    //         break;
    //     case 6:
    //         $(".img6 ").fadeIn(200)
    //         document.querySelector(".img6").previousElementSibling.style.display="none"
    //         break;
    //     case 7:
    //         $(".img7 ").fadeIn(200)
    //         document.querySelector(".img7").previousElementSibling.style.display="none"
    //         break;
    //     case 8:
    //         $(".img8 ").fadeIn(200)
    //         document.querySelector(".img8").previousElementSibling.style.display="none"
    //         break;
    //     case 9:
    //         $(".img9 ").fadeIn(200)
    //         document.querySelector(".img9").previousElementSibling.style.display="none"
            
    //         break;
    //     case 10:
    //         $(".img10").fadeIn(200)
    //         document.querySelector(".img10").previousElementSibling.style.display="none"
    //         break;
    //     case 11:
    //         $(".img11").fadeIn(200)
    //         document.querySelector(".img11").previousElementSibling.style.display="none"
    //         break;
    //     case 12:
    //         $(".img12").fadeIn(200)
    //         document.querySelector(".img12").previousElementSibling.style.display="none"
    //         break;
       

    
        
    // }
   

    //  document.querySelector(".seconds-hand").style.transform="rotate(" + valueS + "deg)"
    //  document.querySelector(".hours-hand").style.transform="rotate(" + valueS/13 + "deg)"
    //  document.querySelector(".minutes-hand").style.transform="rotate(" + valueS/5 + "deg)"

    

    if($(this).scrollTop() >= 1600 ){
        document.querySelector(".cont").style.position="absolute"
        document.querySelector(".leaves").style.position="absolute"
        document.querySelector(".header__top").style.background="#5161ce"
        document.querySelectorAll(".cookie-small").forEach(ele=>{
            ele.style.position="absolute"
           
        })
    }

    if($(this).scrollTop() < 1600 ){
        document.querySelector(".cont").style.position="fixed"
        document.querySelector(".leaves").style.position="fixed"
        document.querySelector(".header__top").style.background="transparent"
        document.querySelectorAll(".cookie-small").forEach(ele=>{
            ele.style.position="fixed"
            
        })
    }
    
    
    

    if( valueS/20 <= 31.2){
        document.querySelector(".top").style.transform ="rotate(-"+ valueS/20 + "deg)"
        if( valueS/5 >=42){
            document.querySelector(".top").style.left ="-" + valueS/5
        }
        
       
       
    }else{
        document.querySelectorAll(".gtt").forEach((ele,id)=>{
            ele.style.zIndex ="2"
            
        })
        document.querySelectorAll(".gtt").forEach((ele,id)=>{
            idd=id+1
            element=document.querySelector('.gtt[data-id="'+idd+'"]')
            
            
            element.style.top = "-"+(valueS)/(10*id)+ "px"
        })
        // [Math.floor(Math.random()*length)].style.top = "-"+(valueS)/30+ "px"

        
    }
    
   
    
})

document.querySelectorAll(".gtt").forEach(ele=>{
    ele.style.left = Math.random()*100 + "px"
    ele.style.top = Math.random()*(200-15) + 15 + "px"
})

