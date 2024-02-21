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

    // First movement
    tl.set(circleLeft, { x: "0%", transformOrigin: "0% 50%" });
    tl.set(circleRight, { x: "100%", transformOrigin: "100% 0%", right: "0" });

    tl.to(circleLeft, { duration: 1, x: "47vw", ease: "power2.out" }, 0);
    tl.to(circleRight, { duration: 1, x: "-46vw", ease: "power2.out" }, 0);

    // Second expand
    tl.to([circleLeft], {
      duration: 1,
      width: "3000px",
      height: "3000px",
      ease: "power2.out",
    });

    tl.to(
      [circleRight],
      {
        duration: 1,
        width: "3000px",
        height: "3000px",
        ease: "power2.out",
        right: null,
        left: "0vh",
        x: "100%%",
      },
      "-=1"
    );

    //  Third Image
    tl.to(
      heycoachLogoWhite,
      { opacity: 1, duration: 0.5, ease: "power2.out" },
      "=0.5"
    );

    // Fourth Collapse
    tl.to([circleLeft], {
      duration: 1,
      width: 0,
      height: 0,
      ease: "power2.out",
    });

    tl.to(
      [circleRight],
      {
        duration: 1,
        width: 0,
        height: 0,
        ease: "power2.out",
        right: null,
        left: "-10vh",
      },
      "-=1"
    );

    // Hiding white heycoach image
    tl.to(
      heycoachLogoWhite,
      { opacity: 0, duration: 0.5, ease: "power2.out" },
      "-=0.02"
    );

    // // fifth image heycoach original logo
    tl.to(
      heycoachLogoOriginal,
      {
        opacity: 1,
        duration: 0.5,
        ease: "power2.out",
      }
      // "-=0.1"
    );

    // Sixth gradient
    const gradientCircle = document.getElementById("gradientCircle");
    tl.to(
      gradientCircle,
      {
        duration: 1,
        opacity: 1,
        ease: "power2.out",
        width: "3000px",
        height: "3000px",
        borderRadius: "50%",
      },
      "-=0.2"
    );
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
  };

  const gradientCircleStyle = {
    position: "fixed",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "0",
    height: "0",
    opacity: 0,
    background: "linear-gradient(to top right, #81d4fa, #ffb74d)",
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
        style={{ ...centerImageStyle, width: "200px", height: "50px" }}
      />

      <img
        id="heycoachLogoOriginal"
        src={HeycoachLogoOriginal}
        alt="Center Image"
        style={{ ...centerImageStyle, width: "200px", height: "50px" }}
      />
    </>
  );
};

export default HCLPAnimation;
