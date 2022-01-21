var swiper = new Swiper(".mySwiper", {
    navigation: {
      nextEl: ".swiper-next-button",
      prevEl: ".swiper-prev-button" },
  
    effect: "fade",
    loop: "infinite",
    pagination: {
      el: ".swiper-pagination",
      type: "fraction" } });
  
  var datastl={
    "0":"#b6d6c8",
    "1":"#e9bf8b",
    "2":"#b6d6c8",
    "3":"#e86357",
    
  }
  
  swiper.on('slideChange', function (sld) {
    document.body.setAttribute('data-sld', sld.realIndex);
  

    document.head.children[document.head.childElementCount - 1].remove()
    var stl=  document.createElement("style")
    var textstl=document.createTextNode(`[data-sld="${sld.realIndex}"] .container, body {
      background-color: ${datastl[sld.realIndex]} ;
    }`)
    stl.append(textstl)
    document.head.appendChild(stl)
    
  });


 
  
  