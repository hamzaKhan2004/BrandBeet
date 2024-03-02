let lenisfun = () => {
  const lenis = new Lenis();

  lenis.on("scroll", (e) => {});

  lenis.on("scroll", ScrollTrigger.update);

  gsap.ticker.add((time) => {
    lenis.raf(time * 1000);
  });

  gsap.ticker.lagSmoothing(0);
};
lenisfun();

let page1 = () => {
  let tl = gsap.timeline({
    scrollTrigger: {
      trigger: ".img-container",
      start: "50% 46%",
      end: "100% 50%",
      scrub: true,
      pin: true,
    },
  });
  tl.to(
    ".content-part1",
    {
      delay: 0.06,
      rotate: -8,
      scale: 0.9,
      duration: 1.1,
    },
    "same"
  )
    .to(
      "#row1,row4",
      {
        marginTop: "-10%",
      },
      "same"
    )
    .to(
      "#row2",
      {
        marginTop: "-22%",
      },
      "same"
    )
    .to(
      "row3,row5",
      {
        marginTop: "8%",
      },
      "same"
    )
    .to(
      ".overlay",
      {
        delay: 0.32,
        duration: 0.65,
        opacity: 1,
      },
      "same"
    )
    .to(
      ".overlay",
      {
        backgroundColor: "#00000099",
      },
      "same"
    )
    .to(
      ".scroll_line",
      {
        delay: 0.4,
        duration: 2.2,
        width: "100%",
        backgroundColor: "#ffffff",
      },
      "same"
    );
};
page1();

let page2 = () => {
  let tl = gsap.timeline({
    scrollTrigger: {
      trigger: ".center",
      start: "0% 45%",
      scrub: true,
    },
  });
  tl.to(".text2 h1,.text2 h2", {
    duration: 3,
    width: "100%",
    stagger: 0.5,
  });
  let t2 = gsap.timeline({
    scrollTrigger: {
      trigger: "#page2",
      start: "0% 90%",
      end: "100% 50%",
      scrub: true,
    },
  });
  t2.to(".curve", {
    height: 0,
    marginTop: 0,
  });
};
page2();

let page3 = () => {
  let tl = gsap.timeline({
    scrollTrigger: {
      trigger: "#page3",
      start: "66% 50%",
      end: "250% 20%",
      scrub: true,
      pin: true,
    },
  });
  tl.to(
    ".scroll-text",
    {
      y: "-2700px",
      opacity: 1,
      duration: 2,
    },
    "same"
  ).to(
    ".lft-div .circle img",
    {
      rotate: 720,
      duration: 1.4,
    },
    "same"
  );
  tl.to(".lft-div .circle", {
    rotate: 400,
    x: "650px",
  });
};
page3();

let page4 = () => {
  let tl = gsap.timeline({
    scrollTrigger: {
      trigger: "#page4",
      start: "30% 45%",
      end: "55% 40%",
      scrub: true,
    },
  });
  tl.to(".center2>.text4 h2", {
    width: "100%",
    duration: 3,
  });
};
page4();

let page6 = () => {
  let tl = gsap.timeline({
    scrollTrigger: {
      trigger: "#page6",
      start: "0% 0%",
      end: "250% 20%",
      scrub: true,
      duration: 0.4,
      pin: true,
    },
  });
  tl.to("#work", {
    height: "400px",
    display: "block",
    duration: 3,
  });
  tl.to(".img-elem", {
    y: "-2426px",
    duration: 10,
  });
};
page6();
