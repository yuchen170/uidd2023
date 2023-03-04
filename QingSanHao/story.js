import { gsap } from "gsap";
let tl = gsap.timeline({})

.to(".first", { y: 100 })
.to(".second", { y: 100 })
.to(".third", { y: 100 });