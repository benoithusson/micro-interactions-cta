"use strict";

const bg = document.getElementById("bg");
const moutainLeft = document.getElementById("moutain_left");
const moutainRight = document.getElementById("moutain_right");
const text = document.getElementById("text");

gsap.to(bg, {
    scrollTrigger: {
        scrub: 1,
    },
    scale: 1.5
})
gsap.from(text, {
    scrollTrigger: {
        scrub: 1,
    },
    scale: 0.5
})

gsap.to(moutainLeft, {
    scrollTrigger: {
        trigger: bg,
        scrub: 1,
    },
    x: '-200px'
})

gsap.to(moutainRight, {
    scrollTrigger: {
        trigger: bg,
        scrub: 1,
    },
    x: '200px'
})