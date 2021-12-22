var moredetbtn = document.querySelector(".moredet")
var divmoreDet = document.querySelector(".moredetDiv")

moredetbtn.addEventListener('click',function(){
    this.classList.toggle("showmore");
    if(this.classList.contains("showmore")){
        // divmoreDet.style.display="block"
        $(".moredetDiv").fadeIn(400)
    }else{
        // divmoreDet.style.display="none"
        // $(".moredetDiv").fadeOut(200)
        // $(".moredetDiv").animate({"height":0+'%'},500)
        $(".moredetDiv").fadeOut(300)
    }
    
})