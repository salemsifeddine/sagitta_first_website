var gridItems= document.querySelectorAll('.grid-item--product');


// $(".overlay").on("click",function(){
//     $(".overlay").hide(100)
// })

gridItems.forEach(gridItem => {
    gridItem.addEventListener("mouseenter",function(){
        
        
        if(this.children[0].classList.contains("responsive")){
            this.children[0].classList.add("animateproduct");
        }
        
    });
    gridItem.addEventListener("click",function(){
        
        this.classList.toggle("show")

        if(this.classList.contains("show")){
            $(".overlay").fadeIn(500);

          
            


        }else{
            $(".overlay").fadeOut(500);
        }
        
       
       
        
    });

    gridItem.addEventListener("mouseleave",function(){
        
      
        if(this.children[0].classList.contains("responsive")){
            this.children[0].classList.remove("animateproduct");
        }
        
        
    })
    
});


// document.querySelector(".overlay").style.display == "none"
document.querySelector(".product-description--block-close").addEventListener("click",function(){
    $(".overlay").hide(200)
    console.log("close")
});


var productsClickable=document.querySelectorAll(".with-click")

productsClickable.forEach(ele=>{
    colorrandom=["rgba(205, 178, 142, 0.93)","rgba(90, 76, 129, 0.93)",
    "rgba(163, 130, 255, 0.93)","rgba(240, 234, 255, 0.93)","rgba(54, 195, 149, 0.93)",
    "rgba(220, 133, 119, 0.93)","rgba(193, 45, 114, 0.93)"]
    ele.addEventListener("click",function(){
        var srcimgtarget=ele.children[1].children[0].src
        var productName= ele.children[1].children[1].textContent
        document.querySelector(".overlay").style.backgroundColor=colorrandom[Math.floor(Math.random()*colorrandom.length)];

        document.querySelector(".image1").src = srcimgtarget
        document.querySelector(".image2").src = srcimgtarget
        document.querySelector(".product-title").textContent = productName
    })
})


