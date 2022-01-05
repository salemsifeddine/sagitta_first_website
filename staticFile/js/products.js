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
})