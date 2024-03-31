gsap.registerPlugin(ScrollTrigger);


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
                duration: 500,
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
                duration: 500,
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
            opacity: .7   
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




//BURGER PARRADOX
gsap.to("#burger",{
    scrollTrigger:{
        trigger: "#second",
        start: "top bottom",
        scrub: 2,
        duration:1,
    },
    y: -1000,
    //opacity: 0,
})
gsap.to("#green_onion1",{
    scrollTrigger:{
        trigger: "#second",
        start: "top bottom",
        scrub: 2,
        duration:1,
    },
    y: -2500,
    //opacity: 0,
})
gsap.to("#green_onion2",{
    scrollTrigger:{
        trigger: "#second",
        start: "top bottom",
        scrub: 2,
        duration:1,
    },
    y: -2000,
    //opacity: 0,
})
gsap.to("#red_onion1",{
    scrollTrigger:{
        trigger: "#second",
        start: "top bottom",
        scrub: 2,
        duration:1,
    },
    y: -2000,
    //opacity: 0,
})
gsap.to("#red_onion4",{
    scrollTrigger:{
        trigger: "#second",
        start: "top bottom",
        scrub: 2,
        duration:1,
    },
    y: -2500,
    //opacity: 0,
})
gsap.to("#red_onion2",{
    scrollTrigger:{
        trigger: "#second",
        start: "top bottom",
        scrub: 2,
        duration:1,
    },
    y: -2000,
    //opacity: 0,
})
gsap.to("#red_onion3",{
    scrollTrigger:{
        trigger: "#second",
        start: "top bottom",
        scrub: 2,
        duration:1,
    },
    y: -2000,
    //opacity: 0,
})
gsap.to("#tomato1",{
    scrollTrigger:{
        trigger: "#second",
        start: "top bottom",
        scrub: 2,
        duration:1,
    },
    y: -2500,
    //opacity: 0,
})
gsap.to("#tomato2",{
    scrollTrigger:{
        trigger: "#second",
        start: "top bottom",
        scrub: 2,
        duration:1,
    },
    y: -2000,
    //opacity: 0,
})
gsap.to("#tomato3",{
    scrollTrigger:{
        trigger: "#second",
        start: "top bottom",
        scrub: 2,
        duration:1,
    },
    y: -2000,
    //opacity: 0,
})
gsap.to("#tomato4",{
    scrollTrigger:{
        trigger: "#second",
        start: "top bottom",
        scrub: 2,
        duration:1,
    },
    y: -2500,
    //opacity: 0,
})




//ROTATE DISHES
gsap.to("#salmon",{
    scrollTrigger:{
        trigger: "#salmon",
        start: "top center",
        scrub: 2,
        duration:2,
    },
    rotation: 90,
    //opacity: 0,
})
gsap.to("#beef",{
    scrollTrigger:{
        trigger: "#beef",
        start: "top center",
        scrub: 2,
        duration:2
    },
    rotation: -90,
    //opacity: 0,
})
gsap.to("#chicken",{
    scrollTrigger:{
        trigger: "#chicken",
        start: "top center",
        scrub: 2,
        duration:2
    },
    rotation: 90,
    //opacity: 0,
})
gsap.to("#fish",{
    scrollTrigger:{
        trigger: "#fish",
        start: "top center",
        scrub: 2,
        duration:2
    },
    rotation: -90,
    //opacity: 0,
})

//SPLIT TEXT
const split = document.querySelectorAll('.split');
split.forEach((char,i) =>{

    const text = new SplitType(char, {types: 'char'})

    gsap.from(text.chars, {
        scrollTrigger: {
            trigger: char,
            start: 'top bottom',
            end: 'top 80%',
            scrub: 2,
            duration: 0
        },
        scaleY: 0,
        y: -20,
        opacity: 0.2,
        stagger: 0.1,
    })
}
)


//MEMBER VIDEO
gsap.to("#fish",{
    scrollTrigger:{
        trigger: "#fish",
        start: "top center",
        scrub: 2,
        duration:2
    },
    rotation: -90,
    //opacity: 0,
})
