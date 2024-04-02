//THANKS POP UP
function submit(x){
    document.getElementById("thank").style.display = "block";
}
function cancel(){
    document.getElementById("thank").style.display = "none";
}


//NAV BAR
let nav_icon = document.querySelector('#nav-icon');
let nav_count = 0;
const nav_ham = document.querySelector('#nav-ham');
let nav_content = document.querySelector('#content');
let body = document.querySelector('body');
function navBar(){
    nav_count++;
    nav_ham.checked = nav_count % 2;
    if(nav_ham.checked == 1){
        nav_content.style.display = "block";
        nav_content.animate(
            {
                opacity: 1,  
        },
            {
                duration: 200,
                fill: 'forwards',
                easing: 'ease-in-out',
            }
    
        ); 
    }
    else{
        nav_content.animate(
            {
                opacity: 0,  
        },
            {
                duration: 200,
                fill: 'forwards',
                easing: 'ease-in-out',
            }
    
        ); 
        setTimeout(() =>{
            nav_content.style.display = "none"
        }
        ,500);
    }
}
//ACTIVE FLAME FOR NAV
function flameActive(x){
    let img = x.parentElement.firstElementChild;
    img.animate(
        {
            opacity: .4   
    },
        {
            duration: 500,
            fill: 'forwards',
            easing: 'ease-in-out',
        }

    ); 
}
function flameUnactive(x){
    let img = x.parentElement.firstElementChild;
    img.animate(
        {
            opacity: 0   
    },
        {
            duration: 500,
            fill: 'forwards',
            easing: 'ease-in-out',
        }

    ); 
}

//




function alertSimple(){
  window.alert("Thank you!");
}




function dropDown(){
    document.getElementById("before").style.display = "none";
    document.getElementById("after").style.display = "block";
    document.getElementById("container").style.display = "block";
}
function goUp(){
    document.getElementById("before").style.display = "block";
    document.getElementById("after").style.display = "none";
    document.getElementById("container").style.display = "none";
}




//LENIS SMOOTH SCROLLING

const lenis = new Lenis()

lenis.on('scroll', (e) => {
  console.log(e)
})

lenis.on('scroll', ScrollTrigger.update)

gsap.ticker.add((time)=>{
  lenis.raf(time * 1000)
})

gsap.ticker.lagSmoothing(0)


gsap.registerPlugin(ScrollTrigger);



