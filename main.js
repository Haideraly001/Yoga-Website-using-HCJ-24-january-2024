const scrollRevealOption = {
    distance: "50px",
    origin: "bottom",
    duration: 1000,
};


// header container
ScrollReveal().reveal(".header__container h1", {
    ...scrollRevealOption,
    delay:500,
});

ScrollReveal().reveal(".header__container h2", {
    ...scrollRevealOption,
    delay:1000,
});

ScrollReveal().reveal(".header__container .btn", {
    ...scrollRevealOption,
    delay:1500,
});

ScrollReveal().reveal(".header__container img", {
    ...scrollRevealOption,
    origin: "right",
});

// why container 
ScrollReveal().reveal(".section__container .why__container",{
    ...scrollRevealOption,
    delay: 500,
});

ScrollReveal().reveal(".why__container p",{
    ...scrollRevealOption,
    delay: 500,
});

ScrollReveal().reveal(".why__container li",{
    ...scrollRevealOption,
    delay: 800,
    interval: 500,
});

ScrollReveal().reveal(".why__container img",{
    ...scrollRevealOption,
    delay: 800,
    origin: "left",
});


// hero container 

ScrollReveal().reveal(".hero__card", {
    ...scrollRevealOption,
    interval: 500,
});


//   class container 

ScrollReveal().reveal(".classes__image",{
    ...scrollRevealOption,
    interval: 500,
    duration: 1000,
});


ScrollReveal().reveal(".membership__card",{
    ...scrollRevealOption,
    interval: 500,
});