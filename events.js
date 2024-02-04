let first = document.getElementById("first");
let last = document.getElementById("last"); 
let text = document.getElementById("text"); 


window.addEventListener('scroll', function(){
    var value = window.scrollY; 

    first.style.top = value * 0.7 + 'px'; 
    last.style.bottom = value * 0.5 + 'px';
    text.style.top = value * 1 + 'px';
})