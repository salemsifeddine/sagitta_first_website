var moredetbtn = document.querySelector(".moredet")
var divmoreDet = document.querySelector(".moredetDiv")

moredetbtn.addEventListener('click',function(){
    this.classList.toggle("showmore");
    if(this.classList.contains("showmore")){
        divmoreDet.style.display="block"
    }else{
        divmoreDet.style.display="none"
    }
    
})