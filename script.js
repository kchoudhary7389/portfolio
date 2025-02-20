function loco() {
  (function () {
    const locomotiveScroll = new LocomotiveScroll();
    document.querySelector(".toppage").addEventListener("click", function () {
      locomotiveScroll.scrollTo(0);
    });
    window.addEventListener("load", function () {
      locomotiveScroll.scrollTo(0, { duration: 0, disableLerp: true });
    });
  })();
}

function svganimation() {
  var path = "M 50 90 Q 700 90 1070 90";
  var finalpath = "M 50 90 Q 700 90 1070 90";

  let svgcon = document.querySelector(".svg");

  svgcon.addEventListener("mousemove", function (dets) {
    path = `M 50 90 Q ${dets.x - svgcon.getBoundingClientRect().x - 70} ${
      dets.y - svgcon.getBoundingClientRect().y - 45
    } 1070 90`;

    gsap.to("svg path", {
      attr: { d: path },
      duration: 0.3,
    });
  });

  svgcon.addEventListener("mouseleave", function () {
    gsap.to("svg path", {
      attr: { d: finalpath },
      duration: 0.8,
      ease: "elastic.out(.35,0.1)",
    });
  });
}

function navbar() {
  let lastScrollTop = 0;
  const navbar = document.querySelector("nav");
  const navbar2 = document.querySelector(".navbar");
  window.addEventListener("scroll", function () {
    let currentScrollTop =
      window.pageYOffset || document.documentElement.scrollTop;
    if (currentScrollTop > lastScrollTop) {
      navbar.style.top = "-100px";
      navbar2.style.top = "-100px";
    } else {
      navbar.style.top = "0";
      navbar2.style.top = "0";
    }

    lastScrollTop = currentScrollTop;
  });
}

function hamburger() {
  let hamburgur = document.querySelector(".hamburger");
  let navlinks = document.querySelector(".navlinks");
  let navlink = document.querySelectorAll(".navlinks a");
  let flag = 0;

  hamburgur.addEventListener("click", function () {
    if (flag == 0) {
      gsap.to(navlinks, {
        height: "70vh",
        padding: 20,
        duration: 0.8,
        ease: "expo.out",
      });
      flag = 1;
    } else {
      gsap.to(navlinks, {
        height: "0vh",
        padding: 0,
        duration: 0.8,
        ease: "expo.in",
      });
      flag = 0;
    }
  });
  navlink.forEach(function (elem) {
    elem.addEventListener("click", function () {
      gsap.to(navlinks, {
        height: "0vh",
        padding: 0,
        duration: 0.8,
        ease: "expo.in",
      });
    });
  });
}

function loader() {
  let loader = document.querySelector(".loader");
  let loaderText = document.querySelector(".loader-text");
  let loaderComing = document.querySelector(".loader-coming");
  let percentage = 0;
  function updateLoader() {
    loaderText.textContent = `${percentage}%`;
    if (percentage < 100) {
      percentage++;
      let random = Math.random() * 30;
      setTimeout(updateLoader, random);
    } else {
      let tl = gsap.timeline();

      tl.to(loaderText, {
        opacity: 0,
      })
        .to(loaderComing, {
          opacity: 1,
        })
        .to(loaderComing, {
          opacity: 0,
          delay: 1,
          scale: 5,
          color: "white",
        })
        .to(loader, {
          transform: "scaleX(.7) scaleY(0)",
          delay: 1,
        })
        .to(loader, {
          display: "none",
        })
        .from(".logo", {
          opacity: 0,
          y: "-50%",
          delay: -0.3,
          duration: 0.5,
          clearProps: "all",
        })
        .from(".navlink", {
          opacity: 0,
          x: "-50%",
          y: "-50%",
          duration: 0.5,
          stagger: 0.1,
          clearProps: "all",
        })
        .from(
          ".user-img",
          {
            opacity: 0,
            repeat: 8,
            duration: 0.2,
            clearProps: "all",
          },
          "a"
        )
        .fromTo(
          ".anime",
          {
            y: "120%",
          },
          {
            y: "0%",
            duration: 1,
            stagger: 0.2,
            ease: "power4.out",
          },
          "a"
        )
        .from(".random-text", {
          x: -500,
          duration: 2,
          ease: "power4",
          clearProps: "all",
        });
    }
  }
  updateLoader();
}

function pageanime() {
  gsap.registerPlugin(ScrollTrigger);

  gsap.fromTo(
    ".left-about",
    {
      x: 50,
      y: 50,
      opacity: 0,
      duration: 0.2,
    },
    {
      x: 0,
      y: 0,
      opacity: 1,
      duration: 0.2,
      scrollTrigger: {
        trigger: ".about",
        start: "top 30%",
        end: "bottom 100%",
        scrub: 3,
      },
    }
  );
  gsap.fromTo(
    ".right-about",
    {
      opacity: 0,
      duration: 0.2,
    },
    {
      opacity: 1,
      duration: 0.2,
      scrollTrigger: {
        trigger: ".about",
        start: "top 30%",
        end: "bottom 100%",
        scrub: 1,
      },
    }
  );
}
function project() {
  gsap.registerPlugin(ScrollTrigger);

  gsap.fromTo(
    ".img-1",
    {
      x: "100%",
      opacity: 0,
      duration: 1,
    },
    {
      x: 0,
      opacity: 1,
      duration: 1,
      scrollTrigger: {
        trigger: ".first-project",
        start: "top 120%",
        end: "bottom 10%",
        scrub: 1,
      },
    }
  );
  gsap.fromTo(
    ".img-2",
    {
      x: "-100%",
      opacity: 0,
      duration: 1,
    },
    {
      x: 0,
      opacity: 1,
      duration: 1,
      scrollTrigger: {
        trigger: ".second-project",
        start: "top 120%",
        end: "bottom 10%",
        scrub: 1,
      },
    }
  );
  gsap.fromTo(
    ".img-3",
    {
      x: "100%",
      opacity: 0,
      duration: 1,
    },
    {
      x: 0,
      opacity: 1,
      duration: 1,
      scrollTrigger: {
        trigger: ".third-project",
        start: "top 120%",
        end: "bottom 50%",
        scrub: 1,
      },
    }
  );
  gsap.fromTo(
    ".img-4",
    {
      x: "-100%",
      opacity: 0,
      duration: 1,
    },
    {
      x: 0,
      opacity: 1,
      duration: 1,
      scrollTrigger: {
        trigger: ".fourth-project",
        start: "top 120%",
        end: "bottom 50%",
        scrub: 1,
      },
    }
  );
  // gsap.fromTo(
  //   ".right-about",
  //   {
  //     opacity: 0,
  //     duration: 0.2,
  //   },
  //   {
  //     opacity: 1,
  //     duration: 0.2,
  //     scrollTrigger: {
  //       trigger: ".about",
  //       start: "top 30%",
  //       end: "bottom 100%",
  //       scrub: 1,
  //     },
  //   }
  // );
}

function serviceanime() {
  window.addEventListener("scroll", function () {
    var boxes = document.querySelectorAll(".box");
    var windowHeight = window.innerHeight;
    var windowCenter = windowHeight / 2;

    boxes.forEach(function (box) {
      var rect = box.getBoundingClientRect();
      var boxTop = rect.top;
      var boxBottom = rect.bottom;
      var boxCenter = (boxTop + boxBottom) / 2;

      if (boxCenter >= windowCenter - 100 && boxCenter <= windowCenter + 100) {
        box.classList.add("active");
      } else {
        box.classList.remove("active");
      }
    });
  });
}

function skill() {
  gsap.to(".keyline", {
    width: "66%",
    // clearProps:"all",
    scrollTrigger: {
      trigger: ".skill-set",
      start: "top 50%",
      end: "bottom 70%",
      scrub: 2,
    },
  });
}

function getintouch() {
  let contact = document.querySelector(".getintouch");
  let contact2 = document.querySelector(".touch");
  let touch = document.querySelectorAll(".contact-link");
  let close = document.querySelector(".close");

  touch.forEach(function (elem) {
    elem.addEventListener("click", function () {
      let tl = gsap.timeline();
      tl.to(contact, {
        display: "flex",
      });
      tl.fromTo(
        contact2,
        {
          scaleY: 0,
          scaleX: 0.7,
        },
        {
          scaleY: 1,
          scaleX: 1,
        }
      );
    });
  });
  close.addEventListener("click", function () {
    let tl = gsap.timeline();
    tl.to(contact2, {
      scaleY: 0,
      scaleX: 0.7,
    });
    tl.to(contact, {
      display: "none",
    });
  });
}

svganimation();
navbar();
loco();
hamburger();
loader();
pageanime();
project();
serviceanime();
skill();
getintouch();
