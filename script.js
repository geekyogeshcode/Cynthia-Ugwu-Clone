const scroll = new LocomotiveScroll({
    el: document.querySelector('main'),
    smooth: true
});

let circle=document.querySelector('.circle');

function circleMove(xscale1,yscale1){
    window.addEventListener('mousemove',function(dets){
        // console.log(dets)
        circle.style.left=dets.x+5+"px"
        circle.style.top=dets.y+5+"px"
        // circle.style.transform=`scaleX(${xscale1})`
        // circle.style.transform=`scaleY(${yscale1})`
        circle.style.scaleY=yscale1
        circle.style.transition="all ease-out 0.2s"

    })
}
circleMove()

function firstPageNav(){
    let tl=gsap.timeline()

    tl.from("nav",{
        y:"-80",
        opacity:0,
        ease:Expo,
        duration:1
    })
}
firstPageNav()

function firstPageMain(){ 

let bound=document.querySelector('.bounding');
let boundin=document.querySelector('.boundin');
let boundin1=document.querySelector('.boundin1');

gsap.to(".bounding .boundin",{
    // transform:`translateY(0%)`,
    y:0,
    duration:0.6,
    stagger:0.1
})
gsap.to(".bounding .boundin1",{
    // transform:`translateY(0%)`,
    y:0,
    duration:1,
    delay:0.5
    // stagger:1
})
}
firstPageMain()

// function onImage(){    

// document.querySelectorAll('.elem').forEach(function (elem){
//     elem.addEventListener('mouseenter',function(dets){
//         // circle.style.backgroundColor="red"
//         // circle.style.height="300px"
//         // circle.style.width="400px"
//         // circle.style.borderRadius="0"
//         // circle.style.backgroundImage=`url(./assets/Cynthia1.png)`
//         // circle.style.backgroundSize="cover"
//         // circle.style.transition="all ease-out 0s"
//         var diff=dets.x - elem.getBoundingClientRect().top;
//         gsap.to(elem.querySelector('img'),{
//             opacity:1,
//             ease:Power1,
//             top:diff,
//             left:dets.x
//         })
        
//     })

//     // elem.addEventListener('mouseleave',function(dets){
//     //     circle.style.height="20px"
//     //     circle.style.width="20px"
//     //     circle.style.backgroundImage="none"
//     //     circle.style.borderRadius="50%"
//     //     circle.style.backgroundColor="gray"

//     // })
// });
// }

// onImage()

document.querySelectorAll(".elem").forEach(function(elem){
    let rotate=0
    let diffRot=0

    elem.addEventListener("mouseleave",function(dets){
        gsap.to(elem.querySelector("img"),{
            opacity:0,
            ease:Power3,
            display:"none"
        })
    });
    elem.addEventListener("mousemove",function(dets){
        var  diff=dets.y - elem.getBoundingClientRect().top;
        diffRot=dets.x-rotate;
        rotate=dets.x;
        
        gsap.to(elem.querySelector("img"),{
            opacity:1,
            display:"block",
            ease:Power3,
            top:diff,
            left:dets.x,
            rotate:gsap.utils.clamp(-20,20,diffRot)
        })
    })
})