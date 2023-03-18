var menu = document.querySelector("#menu");
menu.addEventListener("click", function () {
  document.querySelector("#fullnav").style.left = "0";
});

document.querySelector("#close").addEventListener("click", function () {
  document.querySelector("#fullnav").style.left = "-100%";
});
///////////////////////////////////////////////////////////
gsap.registerPlugin(ScrollTrigger);

const locoScroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true,
});
locoScroll.on("scroll", ScrollTrigger.update);

ScrollTrigger.scrollerProxy("#main", {
  scrollTop(value) {
    return arguments.length
      ? locoScroll.scrollTo(value, 0, 0)
      : locoScroll.scroll.instance.scroll.y;
  },
  getBoundingClientRect() {
    return {
      top: 0,
      left: 0,
      width: window.innerWidth,
      height: window.innerHeight,
    };
  },
  pinType: document.querySelector("#main").style.transform
    ? "transform"
    : "fixed",
});

///////////////////////////////////////////////////////
var tl = gsap.timeline({
  scrollTrigger: {
    trigger: "#todots",
    scroller: "#main",
    // markers: true,
    stagger: 0.9,
    start: "top 60%",
  },
});

tl.to(".ani", {
  opacity: 1,
  onStart: function () {
    $(".ani").textillate({ in: { effect: "fadeInUp" } });
  },
});

ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
ScrollTrigger.refresh();

///////////////////////////////////

var tl2 = gsap.timeline({
  scrollTrigger: {
    trigger: "#mgtext",
    scroller: "#main",
    // markers: true,
    start: "top 60%",
  },
});

tl2.to(".ani2", {
  opacity: 1,
  onStart: function () {
    $(".ani2").textillate({ in: { effect: "fadeIn" } });
  },
});

////////////////////////////////////////////////////

var row = document.querySelector("#row");
var slide = document.querySelectorAll(".slide");

row.style.width =
  slide[0].getBoundingClientRect().width * [slide.length + 1] +
  slide[0].getBoundingClientRect().left * [slide.length - 15] +
  "px";

var crr = document.querySelector("#row").getBoundingClientRect().left;

document.querySelector("#mainper").addEventListener("scroll", function () {
  var newps = document.querySelector("#row").getBoundingClientRect().left;
  var dff = crr - newps;
  var speed = Math.floor(dff * 0.3);
  crr = newps;
  slide.forEach(function (slm) {
    slm.style.transform = `skewx(${speed}deg)`;
  });
});

/////////////////////////////////////////////////////

var links = document.querySelectorAll(".links");
links.forEach(function (elm) {
  elm.addEventListener("mousemove", function (dets) {
    elm.children[1].style.opacity = "1";
    elm.children[1].style.transform = `translate(${dets.clientX - 220}px , ${
      dets.clientY / 2 - 200
    }px`;
  });

  elm.addEventListener("mouseout", function (dets) {
    elm.children[1].style.opacity = "0";
  });
});

// var canvas = document.getElementById("canvas");
// var ctx = canvas.getContext("2d");
// var width = window.innerWidth;
// var height = window.innerHeight;
// var x = window.innerWidth / 2;
// var y = window.innerHeight / 2;
// var ballX = x;
// var ballY = y;
// resize();

// function drawBall() {
//   ctx.beginPath();
//   // instead of updating the ball position to the mouse position we will lerp 10% of the distance between the balls current position and the mouse position.
//   ballX += (x - ballX) * 0.1;
//   ballY += (y - ballY) * 0.1;
//   ctx.arc(ballX, ballY, 40, 0, 2 * Math.PI);
//   ctx.fillStyle = "#9e356a";
//   ctx.fill();
//   //   ballX = 30;
//   //   ballY = 30;
// }

// function loop() {
//   ctx.clearRect(0, 0, width, height);
//   drawBall();
//   requestAnimationFrame(loop);
// }

// loop();

// function touch(e) {
//   x = e.originalEvent.touches[0].pageX;
//   y = e.originalEvent.touches[0].pageY;
// }

// function mousemove(e) {
//   x = e.pageX;
//   y = e.pageY;
// }

// function resize() {
//   width = canvas.width = window.innerWidth;
//   height = canvas.height = window.innerHeight;
// }

// window.addEventListener("resize", resize);
// window.addEventListener("touchstart", touch);
// window.addEventListener("touchmove", touch);
// window.addEventListener("mousemove", mousemove);
