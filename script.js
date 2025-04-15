 let menu = document.querySelector(".ri-menu-3-line");
 let close = document.querySelector(".ri-close-large-fill")
let tl = gsap.timeline();
tl.to("#overlay",{
    right:"-5%",
    display:"block",
    duration:0.5,
})
tl.from("#links i",{
    opacity:0,
    x:150,
    stagger:0.3,
    duration:1,
})
tl.pause();
menu.addEventListener("click",function(){
    tl.play();
})
close.addEventListener("click",function(){
    tl.reverse();
})
let tle = gsap.timeline();
tle.from("#first",{
    opacity: 0,
    duration:1,
    x:-100,
    
})
tle.from("#second",{
    opacity:0,
    y:-40,
    duration:0.8,
})
tle.from("#second h1",{
    opacity:0,
    y:-100,
    duration:0.8,
})
tle.from("#second p",{
    opacity:0,
    y:-0,
    duration:0.8,
})
tle.from("#third",{
    opacity:0,
    y:-40,
    duration:0.8,
})

tle.from("#four",{
    opacity:0,
    y:40,
    duration:0.4,
})

tle.from("#five",{
    opacity:0,
    y:-40,
    duration:0.4,
})


tle.from("#six",{
    opacity:0,
    y:40,
    duration:0.4,
})


