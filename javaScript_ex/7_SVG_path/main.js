let path=`M 10 200 Q 600 200 1190 200`
let finalpath=`M 10 200 Q 600 200 1190 200`
let svg=document.querySelector(".svgWrap svg");

svg.addEventListener("mousemove",function(e){
console.log(e.y)
path=`M 10 200 Q ${e.x - 350} ${e.y} 1190 200`

gsap.to(".svgWrap svg path",{
    attr:{d:path},//attr : 속성 속성중에 d라는 속성 index의 path에 d가 속성값이다.
    duration:0.3,
    ease: "power3.out",
})


})

svg.addEventListener("mouseleave",function(){

    gsap.to(".svgWrap svg path",{
        attr:{d:finalpath},
        duration:1.5,
       ease: "elastic.out(1,0.2)",
    })
})
