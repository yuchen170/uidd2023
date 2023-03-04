
gsap.config({
    nullTargetWarn: false
});

document.addEventListener("DOMContentLoaded",function(){
    
    var loading=new TimelineMax();
    loading.fromTo("#main",1.5,{
        autoAlpha: 0,
        y:0
    },{
        autoAlpha: 1,
        y:20
    })
    .fromTo("#first",1.5,{
        autoAlpha: 0,
        y:0
    },{
        autoAlpha: 1,
        y:20
    })
    .fromTo("#second",1.5,{
        autoAlpha: 0,
        y:0
    },{
        autoAlpha: 1,
        y:20
    })
    .fromTo("#third",1.5,{
        autoAlpha: 0,
        y:0
    },{
        autoAlpha: 1,
        y:20
    })
    .fromTo("#main",1.5,{
        autoAlpha: 1,
        y:20
    },{
        autoAlpha: 0,
        y:40
    })
});

let tl = gsap.timeline({})
.to(".first", { y: 100 })
.to(".second", { y: 100 })
.to(".third", { y: 100 });