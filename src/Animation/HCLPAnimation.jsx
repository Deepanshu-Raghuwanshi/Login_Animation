import React, { useEffect } from "react";
import { gsap } from "gsap";
import HeyCoachLogoWhite from "./HEYCOACH WHITE.png";
import HeycoachLogoOriginal from "./heycoach-logo.cadaeb82.png";
const HCLPAnimation = () => {
  useEffect(() => {
    const tl = gsap.timeline();

    const circleLeft = document.getElementById("circleLeft");
    const circleRight = document.getElementById("circleRight");
    const heycoachLogoWhite = document.getElementById("heycoachLogoWhite");
    const heycoachLogoOriginal = document.getElementById(
      "heycoachLogoOriginal"
    );

    // First movement of circles
    tl.set(circleLeft, { x: "0%", transformOrigin: "0% 50%" });
    tl.set(circleRight, { x: "100%", transformOrigin: "100% 0%", right: "0" });

    tl.to(circleLeft, { duration: 0.3, x: "47vw", ease: "linear" }, 0);
    tl.to(circleRight, { duration: 0.3, x: "-46vw", ease: "linear" }, 0);

    // Second expanding of circle
    tl.to([circleLeft], {
      duration: 0.2,
      width: "3000px",
      height: "3000px",
      ease: "linear",
    });

    tl.to(
      [circleRight],
      {
        duration: 0.2,
        width: "3000px",
        height: "3000px",
        ease: "linear",
        right: null,
        left: "-10vh",
        x: "100%%",
      },
      "-=0.2"
    );

    //  Third Image white heycoach  logo
    tl.to(
      heycoachLogoWhite,
      { opacity: 1, duration: 0.2, ease: "linear" },
      "=0.2"
    );

    // Fourth Collapsing of both circle
    tl.to([circleLeft], {
      duration: 0.3,
      width: 0,
      height: 0,
      ease: "linear",
    });

    tl.to(
      [circleRight],
      {
        duration: 0.3,
        width: 0,
        height: 0,
        ease: "linear",
        right: null,
        left: "-10vh",
      },
      "-=0.3"
    );

    // Hiding white heycoach image
    tl.to(
      heycoachLogoWhite,
      { opacity: 0, duration: 0.2, ease: "linear" },
      "+=0.7"
    );

    // fifth image heycoach original logo
    tl.to(
      heycoachLogoOriginal,
      {
        opacity: 1,
        duration: 0.2,
        ease: "linear",
      },
      "-=0.2"
    );

    // Sixth gradient
    const gradientCircle = document.getElementById("gradientCircle");
    tl.to(gradientCircle, {
      duration: 0.3,
      opacity: 1,
      ease: "linear",
      width: "3000px",
      height: "3000px",
      borderRadius: "50%",
    });
  }, []);

  const circleRightStyle = {
    width: "30px",
    height: "30px",
    backgroundColor: "#3498db",
    borderRadius: "50%",
    position: "absolute",
    top: "50%",
    transform: "translate(-50%, -50%)",
    transition: "width 1s, height 1s, background-color 1s",
  };

  const circleLeftStyle = {
    width: "30px",
    height: "30px",
    backgroundColor: "#3498db",
    borderRadius: "50%",
    position: "absolute",
    top: "50%",
    transform: "translate(-50%, -50%)",
    transition: "width 1s, height 1s, background-color 1s",
  };

  const centerImageStyle = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    opacity: 0,
    marginLeft: "-10px",
  };

  const gradientCircleStyle = {
    position: "fixed",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "0",
    height: "0",
    opacity: 0,
    background: "linear-gradient(45deg, #99ccff, #ffffcc, #ffffff)",
    borderRadius: "50%",
    pointerEvents: "none",
    transition: "width 1s, height 1s, opacity 1s",
  };
  return (
    <>
      <div
        style={{
          position: "relative",
          width: "100%",
          height: "100vh",
          overflow: "hidden",
          display: "flex",
          flexDirection: "row",
        }}
      >
        <div id="gradientCircle" style={gradientCircleStyle}></div>
        <div
          style={{
            position: "relative",
            width: "50%",
            height: "100vh",
            overflow: "hidden",
          }}
        >
          <div
            id="circleLeft"
            style={{
              ...circleLeftStyle,
              left: "0",
              backgroundColor: "#0277bd",
            }}
          ></div>
        </div>
        <div
          style={{
            position: "relative",
            width: "50%",
            height: "100vh",
            overflow: "hidden",
          }}
        >
          <div
            id="circleRight"
            style={{
              ...circleRightStyle,
              right: "0",
              backgroundColor: "#ffb300",
            }}
          ></div>
        </div>
      </div>
      <img
        id="heycoachLogoWhite"
        src={HeyCoachLogoWhite}
        alt="Center Image"
        style={{ ...centerImageStyle, width: "300px", height: "75px" }}
      />

      <img
        id="heycoachLogoOriginal"
        src={HeycoachLogoOriginal}
        alt="Center Image"
        style={{ ...centerImageStyle, width: "300px", height: "75px" }}
      />
    </>
  );
};

export default HCLPAnimation;
