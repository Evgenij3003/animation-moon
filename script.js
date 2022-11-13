let animation = anime.timeline({
    autoplay: false,
});


let buttonAnimation = document.querySelector("._button-animate").onclick = animation.play;
animation
    .add({
        targets: "._button-animate",
        opacity: "0",
        duration: 300,
        easing: "easeInOutSine",
    })
    .add({
        targets: "._stars",
        top: "0px",
        duration: 600,
        easing: "easeInOutSine",
    })
    .add({
        targets: "._moon",
        top: "0px",
        duration: 800,
        easing: "easeInOutBack",
    }, "-=300")
    .add({
        targets: "._mountains-behind",
        bottom: "0px",
        duration: 800,
        easing: "easeInOutSine",
    })
    .add({
        targets: "._mountains-front",
        bottom: "0px",
        duration: 800,
        easing: "easeInOutSine",
    }, "-=200")
    .add({
        targets: "._text-animate",
        left: "50%",
        duration: 700,
        easing: "easeInOutBack",
    })
    .add({
        targets: "._button-animate",
        opacity: "1",
        duration: 1000,
        easing: "easeInOutBack",
    });