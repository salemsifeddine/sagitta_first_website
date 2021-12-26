
var txtload2=document.querySelector(".loaderanimatedtxt");

var loaderanimatedtxtsplitted= txtload2.textContent.split('');

var txtloadi=0;
txtload2.textContent=''
setInterval(() => {
    


   
    if(txtloadi < loaderanimatedtxtsplitted.length){
        txtload2.textContent += loaderanimatedtxtsplitted[txtloadi]
        txtloadi =txtloadi+1;
        
    }else{
        txtload2.textContent=''
        txtloadi=0;
    }
}, 150);