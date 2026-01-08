gsap.registerPlugin(ScrollTrigger);

/* LOGO 3D ROTATION */
gsap.to(".logo-3d", {
    rotationY: 360,
    duration: 20,
    repeat: -1,
    ease: "linear"
});

/* HERO TEXT ANIMATION */
gsap.from(".hero h1", { opacity:0, y:50, duration:1.2 });
gsap.from(".hero p", { opacity:0, y:30, duration:1, delay:0.3 });
gsap.fromTo(".btn-scroll", {opacity:0, y:20}, {opacity:1, y:0, duration:1, delay:0.6});

/* SECTIONS SCROLL ANIMATION */
gsap.utils.toArray(".section").forEach(section => {
    gsap.from(section, {
        scrollTrigger: {
            trigger: section,
            start: "top 80%"
        },
        opacity:0,
        y:50,
        duration:1
    });
});

/* COLLAB CARDS ANIMATION */
gsap.from(".collab-card", {
    scrollTrigger: {
        trigger: ".collaborators",
        start: "top 75%"
    },
    opacity:0,
    y:80,
    stagger:0.2,
    duration:1
});

/* MOBILE TILT LOGO */
const logo = document.querySelector(".logo-3d");
window.addEventListener("deviceorientation", e => {
    if(e.beta && e.gamma){
        logo.style.transform = `rotateX(${e.beta/10}deg) rotateY(${e.gamma/10}deg)`;
    }
});

/* SCROLL TO SECTION */
document.querySelectorAll(".nav-btn, .btn-scroll").forEach(btn => {
    btn.addEventListener("click", () => {
        const target = btn.dataset.target;
        document.getElementById(target).scrollIntoView({ behavior: "smooth" });
    });
});




