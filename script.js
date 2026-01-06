function navAnimation() {
  var nav = document.querySelector("nav");

  nav.addEventListener("mouseenter", function () {
    let tl = gsap.timeline();

    tl.to("#nav-bottom", {
      height: "23vh",
      duration: 0.5,
    });
    tl.to(".nav-part2 h5", {
      display: "block",
      duration: 0.1,
    });
    tl.to(".nav-part2 h5 span", {
      y: 0,
      // duration:0.3,
      stagger: {
        amount: 0.5,
      },
    });
  });
  nav.addEventListener("mouseleave", function () {
    let tl = gsap.timeline();
    tl.to(".nav-part2 h5 span", {
      y: 25,
      stagger: {
        amount: 0.2,
      },
    });
    tl.to(".nav-part2 h5", {
      display: "none",
      duration: 0.1,
    });
    tl.to("#nav-bottom", {
      height: 0,
      duration: 0.2,
    });
  });
}

navAnimation();

function page2Animation() {
  let rightElems = document.querySelectorAll(".right-elem");

  rightElems.forEach(function (elem) {
    //console.log(elem); // div aape
    elem.addEventListener("mouseenter", function () {
      // console.log(elem.getBoundingClientRect());
      // console.log(elem.childNodes); // NodeList(5) [text, h2, text, img, text]
      //console.log(elem.childNodes[3]); // <img></img>
      // elem.childNodes[3].style.opacity = 1;
      gsap.to(elem.childNodes[3], {
        opacity: 1,
        scale: 1,
      });
    });
    elem.addEventListener("mouseleave", function () {
      // elem.childNodes[3].style.opacity = 0;
      gsap.to(elem.childNodes[3], {
        opacity: 0,
        scale: 0,
      });
    });
    elem.addEventListener("mousemove", function (dets) {
      // console.log(dets);
      // console.log(dets.x);
      gsap.to(elem.childNodes[3], {
        x: dets.x - elem.getBoundingClientRect().x - 50,
        y: dets.y - elem.getBoundingClientRect().y - 140,
      });
    });
  });
}
page2Animation();

function page3VideoAnimation() {
  let page3Center = document.querySelector(".page3-center");
  let video = document.querySelector("#page3 video");

  page3Center.addEventListener("click", function () {
    video.play();
    gsap.to(video, {
      transform: "scaleX(1) scaleY(1)",
      opacity: 1,
      borderRadius: 0,
    });
  });
  video.addEventListener("click", function () {
    video.pause();
    gsap.to(video, {
      transform: "scaleX(0.7) scaleY(0)",
      opacity: 0,
      borderRadius: "30px",
    });
  });
}
page3VideoAnimation();

function page4right() {
  let sections = document.querySelectorAll(".sec-right");

  sections.forEach(function (elem) {
    elem.addEventListener("mouseenter", function () {
      elem.childNodes[3].style.opacity = 1;
      elem.childNodes[3].play();
    });
    elem.addEventListener("mouseleave", function () {
      elem.childNodes[3].style.opacity = 0;
      // elem.childNodes[3].pause(); because jyare mouse pachu video per lai javi to video pele thi nai pan jyathi baki hoy tyathi saru thay che.
      elem.childNodes[3].load();
    });
    // Disclaimer:- jyare aa project ne run karo tyare jo aa animation(page4) no chale to right click kari inspect ma jav jethi video ni size nani thase ane video load lai lese ane chalu thay jashe jyare tame mouse enter karsho tyare, pachi tame inspect bandh kari sako cho.
  });
}
page4right();
