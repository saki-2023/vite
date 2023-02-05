'use strict';

import $ from 'jquery'

$(function(){
  console.log('Hello Wrold');
});

// animation
import {gsap} from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

fadeInFlash('.js-animation-01', 0.3);
fadeIn('.js-animation-02', 0.8);

function fadeIn(e, d){
  gsap.from(e, {
    y: '20',
    alpha: 0,
    duration: 0.8,
    delay: d,
    scrollTrigger: {
      trigger: e+'_trigger',
      start: "top 90%",
    }

  });
}

function fadeInFlash(e,d){
  gsap.from(e, {
    y: '20',
    alpha: 0,
    duration: 0.8,
    delay: d,
    scrollTrigger: {
      trigger: e+'_trigger',
      start: "top 90%",
    }

  });
}