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


//NAV BAR
gsap.to("#header-laptop",{
    scrollTrigger:{
        trigger: "body",
        start: "top top",
        end: "100vh top",
        scrub: 2,
        duration:1
    },
    backgroundColor: "#0E0001",
    //opacity: 0,
})

//underline page title for current page on laptop
const activePage = window.location.pathname
const navLinks = document.querySelectorAll("#header-laptop #top #nav a").forEach(link => {
    if(link.href.includes(`${activePage}`)){
        link.classList.add("active");
    }
})

//underline page title for current page on mobile
const activePageMobile = window.location.pathname
const navLinksMobile = document.querySelectorAll("#header-mobile #container #bottom a").forEach(link => {
    if(link.href.includes(`${activePage}`)){
        link.classList.add("active");
    }
})
