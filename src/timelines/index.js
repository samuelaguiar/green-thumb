import { Power1, TimelineMax as Timeline } from "gsap";

import { getFoward } from "../selector";
import store from "../store";

const getTimeline = (node, home, results, foward) => {
  const timeline = new Timeline({ paused: true });
  if (node === null) {
    return timeline;
  }
  const containerInside = home
    ? node.querySelector(".container-home")
    : node.querySelector(".container-inside");

  timeline.from(containerInside, 0.25, {
    autoAlpha: 0,
    ease: Power1.easeIn,
    x: results ? 0 : foward ? 25 : -25
  });

  return timeline;
};

export const play = (pathname, node) => {
  console.log("i got here");

  const home = pathname === "/" ? true : false,
    results = pathname === "/Picks" || pathname === "/Purchase" ? true : false,
    foward = getFoward(store.getState()),
    timeline = getTimeline(node, home, results, foward);

  timeline.play();
};

export const playError = (node, enter) => {
  const timeline = new Timeline({ paused: true });

  enter
    ? timeline.from(node, 0.1, {
        autoAlpha: 0,
        ease: Power1.easeIn,
        y: -5
      })
    : timeline.to(node, 0.1, {
        autoAlpha: 0,
        ease: Power1.easeIn,
        y: -5
      });

  timeline.play();
};

export const playVertical = node => {
  const timeline = new Timeline({ paused: true });

  timeline.from(node, 0.25, {
    autoAlpha: 0,
    ease: Power1.easeIn,
    y: 5
  });

  timeline.play();
};
