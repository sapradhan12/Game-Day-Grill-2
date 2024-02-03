gsap.registerPlugin(ScrollTrigger);

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
    y: -2000,
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
    y: -2000,
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
    y: -2000,
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
    y: -2000,
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