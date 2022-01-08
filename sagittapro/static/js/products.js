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
    ele.addEventListener("click",function(){
        var srcimgtarget=ele.children[1].children[0].src
        document.querySelector(".image1").src = srcimgtarget
        document.querySelector(".image2").src = srcimgtarget
    })
})


document.getElementById("overlay").addEventListener("click",function(e){
    e.preventDefault();
    e.stopPropagation()
    console.log("d")
})