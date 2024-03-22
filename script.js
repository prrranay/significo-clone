function homepage(){
    gsap.set(".marquee",{scale:5});
    var tl = gsap.timeline({
        scrollTrigger:{
            trigger:".home",
            start:"top top",
            end:"bottom bottom",
            scrub: 2
        }
    })
    tl.to(".vidodiv",{
        '--clip':"0%",
        ease:Power2,
    },"a")
    tl.to(".marquee",{
        scale:1,
        ease:Power2
    },"a")
    
    tl.to(".lft",{
        xPercent:-10,
        stagger:.03,
        ease:Power4
    },"b")
    tl.to(".rgt",{
        xPercent:10,
        stagger:.03,
        ease:Power4
    },"b")
}

function realpage(){
    gsap.to(".slide",{
        scrollTrigger:{
            trigger:".real",
            start:"top top",
            end:"bottom bottom",
            marker:true,
            scrub:1
        },
        xPercent:-200,
        ease:Power4
    })
}

function teampage(){
    document.querySelectorAll(".listelem").forEach(function(e) {
        e.addEventListener("mousemove",function(elem){
            gsap.to(this.querySelector(".picture"),{opacity:1,x:gsap.utils.mapRange(0, window.innerWidth,-200,200,elem.clientX) ,ease:Power4, duration:.5});
            gsap.to(this.querySelector(".bluelayer"),{opacity:1,ease:Power4});
            e.setAttribute("class","text-white listelem border-b-2 border-black w-full py-[3rem] relative");
        })
        e.addEventListener("mouseout",function(elem){
            gsap.to(this.querySelector(".picture"),{opacity:0, ease:Power4, duration:.5})
            gsap.to(this.querySelector(".bluelayer"),{opacity:0,ease:Power2, });
            e.setAttribute("class","text-black listelem border-b-2 border-black w-full py-[3rem] relative");
        })
    });
}

function paraAnima(tag,parent){
    let clutter="";
    document.querySelector(tag).textContent.split("").forEach(function(e){
        if(e === " "){
            clutter += `<span>&nbsp;</span>`;
        }
        clutter += `<span>${e}</span>`;
    })
    document.querySelector(tag).innerHTML=clutter;
    
    gsap.set(`${tag} span`, {opacity:.1});
    gsap.to(`${tag} span`,{
        scrollTrigger:{
            trigger:parent,
            start:"top 60%",
            end:"bottom 90%",
            scrub:1
        },
        opacity:1,
        stagger:.03,
        ease:Power4
    })
}

function loco(){
    (function () {
        const locomotiveScroll = new LocomotiveScroll();
    })();
}

function capsulepage(){
    gsap.to(".capsule:nth-child(2)",{
        scrollTrigger:{
            trigger:".capsules",
            start:"top 70%",
            end:"bottom bottom",
            scrub:1
        },
        y:0,
        ease:Power4
    })
}

function bodytheme(){
    document.querySelectorAll(".section").forEach(function(e){
        ScrollTrigger.create({
            trigger:e,
            start:"top 50%",
            end:"bottom 50%",
            ease:Power4,
            onEnter:function(){
                document.body.setAttribute("theme",e.dataset.color);
            },
            onEnterBack:function(){
                document.body.setAttribute("theme",e.dataset.color);
            }
        })
    })
}


homepage();
realpage();
teampage();
paraAnima(".textpara",".para");
paraAnima(".cards",".craft");
loco();
capsulepage();
bodytheme();