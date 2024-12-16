let tl = gsap.timeline({scrollTrigger:{
    trigger: "#two",
    start: "0% 95%",
    end: "40% 50%",
    scrub: 2
}})

tl.to("#fantaImg", {
    top: "113%",
    left: "3%"
}, 'first')
tl.to("#leaf", {
    top: "100%",
    left: "82%",
    rotate: "405deg"
}, 'first')
tl.to("#leaf2", {
    top: "100%",
    right: "82%",
    rotate: "280deg"
}, 'first')
tl.to("#orange", {
    top: "170%",
    right: "10%",
    width: "15vw"
}, 'first')
tl.to("#orange2", {
    top: "160%",
    left: "22%",
}, 'first')

let tl2 = gsap.timeline({scrollTrigger:{
    trigger: "#three",
    start: "20% 95%",
    end: "70% 80%",
    scrub: 2
}})
tl2.from(".lemon",{
    y:"100%"
}, "second")
tl2.from("#cocacola",{
    rotate: "-90deg",
    x:"-100%",
    y: "100%"
}, "second")
tl2.from("#pepsi",{
    rotate: "90deg",
    x:"100%",
    y: "100%"
}, "second")
tl2.to("#fantaImg",{
    x:"79%",
    y: "165%",
    width: "36vw"
}, "second")
tl2.to("#orange2",{
    width: "20vw",
    x:"90%",
    y: "85%",
}, "second")