import React from "react";
import video from "./Assets/video.mp4";
import arrow from "./Assets/arrow.gif";
import "./Background.css";
export default function Background() {
  window.addEventListener("scroll", () => {
    if (window.scrollY > 200) {
      document.querySelector(".back-to-top--btn").setAttribute("data-visible", true);
    } else {
      document.querySelector(".back-to-top--btn").setAttribute("data-visible", false);
    }
  });
  
  return (
    <>
      <div class="overlay"></div>
    <div>
        <video src={video} muted loop autoplay class="bg--video"></video>
    </div>
      <button class="back-to-top--btn" data-visible="false" onClick={() => {
        window.scrollTo({ top: 0, behavior: "smooth" })
    }}>
      <img src={arrow} alt="" class="arrow--gif" />
    </button>

    </>
  );
}
