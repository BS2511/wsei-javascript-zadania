const childrens  = Array.from(document.querySelectorAll(".childrem"));

childrens.forEach(el =>{
    el.parentNode.addEventListener("mouseover",function(){
        el.style = "display: block";
    });
    el.parentNode.addEventListener("mouseleave", function(){
        el.style = "";
    });
});