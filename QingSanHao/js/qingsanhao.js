gsap.config({
    nullTargetWarn: false
});

document.addEventListener("DOMContentLoaded",function(){
    
    var loading=new TimelineMax();
    loading.fromTo("#goodthing1",1.5,{
        autoAlpha: 0,
        y: -20
    },{
        autoAlpha: 0.5,
        y: 0,
        stagger: 0.9
    })
    .fromTo("#goodthing2",1.5,{
        autoAlpha: 0,
        y: -20
    },{
        autoAlpha: 0.5,
        y: 0
    },"=-1.5")
    .fromTo("#goodthing3",1.5,{
        autoAlpha: 0,
        y: -20
    },{
        autoAlpha: 0.5,
        y: 0
    },"=-1.5")
    .fromTo("#first",1.5,{
        autoAlpha: 0,
        y:0
    },{
        autoAlpha: 1,
        y:20,
        ease: "bounce"
    })
    .fromTo("#goodthing1",0.5,{

    },{
        opacity: 1,
    },"=-1.5")
    .fromTo("#second",1.5,{
        autoAlpha: 0,
        y:0
    },{
        autoAlpha: 1,
        y:20,
        ease: 'bounce'
    })
    .fromTo("#goodthing2",0.5,{

    },{
        autoAlpha: 1
    },"=-1.5")
    .fromTo("#third",1.5,{
        autoAlpha: 0,
        y:0
    },{
        autoAlpha: 1,
        y:20,
        ease: 'bounce'
    })
    .fromTo("#goodthing3",0.5,{

    },{
        autoAlpha: 1
    },"=-1.5")

    .fromTo("#landing",1.5,{
        autoAlpha: 1,
        y:20
    },{
        autoAlpha: 0,
        y:40
    })
    
    .fromTo("#first",1,{
        x:0
    },{
        autoAlpha:0,
        x:100
    })
    .fromTo("#second",1,{

    },{
        autoAlpha:0,
    },"-=1")
    .fromTo("#third",1,{
        x:0
    },{
        autoAlpha:0,
        x:-100
    },"-=1")
    .fromTo("#outer",1.5,{
        autoAlpha:0,
        scale:0.1
    },{
        autoAlpha:1,
        scale:3.3
    })
    .fromTo("#inner",1.5,{
        autoAlpha:0,
        scale:0.1
    },{
        autoAlpha:1,
        scale:3
    },"=-1")
    .fromTo("#finger",1.5,{
        autoAlpha:0,
        scale:0.1
    },{
        autoAlpha:1,
        scale:3
    },"=-1")
    .fromTo("#outer",0.5,{

    },{
        autoAlpha:0
    })
    .fromTo("#inner",0.5,{

    },{
        autoAlpha:0
    },"=-0.5")
    .fromTo("#finger",0.5,{

    },{
        autoAlpha:0
    },"=-0.5")
    .fromTo("#logoBig",3,{
        autoAlpha:0,
    },{
        autoAlpha:1,
    },"=0.5")
    .fromTo("#logoBig",2,{
        
    },{
        scale: 0.5
    })
    .fromTo("#arrow_down",1,{
        y:0,
        autoAlpha:0
    },{
        y:20,
        autoAlpha:1,
    },"=0.5")
});
