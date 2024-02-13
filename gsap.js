gsap.registerPlugin(ScrollTrigger);

TweenMax.from(".img", 4, {
    opacity: 0,
    delay: 1.0,
    y: 500,
    ease: Expo.easeInOut
})

TweenMax.from(".title", 5, {
    opacity: 0,
    delay: 2.9,
    x: -900,
    ease: Expo.easeInOut
})

TweenMax.from(".subtitle", 5, {
    opacity: 0,
    delay: 3.2,
    x: -750,
    ease: Expo.easeInOut
})

 gsap.to(".box", {
  x: 500,
});

gsap.to(".box", 1, {
	y: -750,
	duration: 1.2,
	delay: 0.3,
    scrollTrigger: {
		trigger: ".box",
		start: "80px 50px",
		end: "bottom bottom",
		toggleActions: "restart none reverse none",
		duration: 1.5,
}, 
});


gsap.to(".body", 1, {
	y: 0,
	duration: 1.2,
	delay: 0.3,
    scrollTrigger: {
		trigger: ".body",
		start: "50px 50px",
		end: "bottom bottom",
		toggleActions: "restart none reverse none",
		duration: 0.5,
}, 
});


gsap.from(".logitechII", 1, {
	x: 1100,
	duration: 4,
	delay: 0.8,
    scrollTrigger: {
		trigger: "second_image",
		start: "180px 50px",
		end: "bottom bottom",
		toggleActions: "restart none reverse none",
		duration: 2.5,
}, 
});

gsap.from(".subtitle_second_image", 1, {
	x:-900,
	opacity: 0,
	duration: 5,
	delay: 0.7,	
    scrollTrigger: {
		trigger: "second_image",
		start: "180px 50px",
		end: "bottom bottom",
		toggleActions: "restart none reverse none",
		duration: 2.5,
}, 
});

gsap.from(".subtitle_second", 1, {
	x:-1300,
	opacity: 0,
	duration: 3.4,
	delay: 0.9,	
    scrollTrigger: {
		trigger: "second_image",
		start: "180px 50px",
		end: "bottom bottom",
		toggleActions: "restart none reverse none",
		duration: 3.5,
}, 
});

gsap.from(".subtitle_third", 1, {
	x:-1300,
	opacity: 1,
	duration: 1.4,
	delay: 0.9,	
    scrollTrigger: {
		trigger: "second_image",
		start: "180px 50px",
		end: "bottom bottom",
		toggleActions: "restart none reverse none",
		duration: 3.5,
}, 
});

gsap.to(".body", 1, {
	y: 0,
	duration: 1.2,
	delay: 0.3,
    scrollTrigger: {
		trigger: ".body",
		start: "170px 150px",
		end: "bottom bottom",
		toggleActions: "restart none reverse none",
		duration: 0.5,
}, 
  background: "#000", // Cambié a negro
  color: "white",
});