import React, { useEffect, useState } from 'react'
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadFull } from "tsparticles";
import { loadSlim } from "tsparticles-slim";
import { TypeAnimation } from 'react-type-animation';
import Reveal from './Reveal';
import { useCallback, useMemo } from "react";
import "../css/ParticleDiv.css";
import 'animate.css';
import TrackVisibility from 'react-on-screen';
// import { loadBasic } from "@tsparticles/basic";

import particlesOptions from "../particles.json";
export default function ParticleDiv() {

  const options = useMemo(() => {
    // using an empty options object will load the default options, which are static particles with no background and 3px radius, opacity 100%, white color
    // all options can be found here: https://particles.js.org/docs/interfaces/Options_Interfaces_IOptions.IOptions.html
    return {

      fullScreen: {
        enable: false, // enabling this will make the canvas fill the entire screen, it's enabled by default
        zIndex: 0, // this is the z-index value used when the fullScreen is enabled, it's 0 by default
      },
      interactivity: {
        events: {
          onClick: {
            enable: true, // enables the click event
            mode: "push", // adds the particles on click
          },
          resize: true,
          onHover: {
            enable: true, // enables the hover event
            mode: "repulse", // make the particles run away from the cursor
          },
        },
        modes: {
          push: {
            quantity: 1, // number of particles to add on click
          },
          repulse: {
            distance: 200,
            duration: 0.4
          },
        },
      },
      particles: {
        number: {
          value: 300,
          density: {
            enable: true,
            value_area: 800
          }
        },
        links: {
          enable: true,
          distance: 110,
          color: '#fff',
          opacity: 0.5,
          width: 1
        },
        shape: {
          type: 'circle',
          stroke: {
            width: 0,
            color: '#ff0000'
          },
          polygon: {
            nb_sides: 5
          },
          image: {
            src: '',
            width: 100,
            height: 100
          }
        },
        move: {
          enable: true,
          speed: 2,
          direction: 'none',
          random: false,
          straight: false,
          out_mode: 'out',
          bounce: false,
          attract: {
            enable: false,
            rotateX: 3000,
            rotateY: 3000
          }
        },
        opacity: {
          value: { min: 0.2, max: 0.4 },
          random: true,
          anim: {
            enable: true,
            speed: 2,
            opacity_min: 0,
            sync: false
          }
        },
        size: {
          value: { min: 3, max: 5 },
          random: false,
          anim: {
            enable: false,
            speed: 20,
            size_min: 0,
            sync: false
          }
        },
      },

    };
  }, []);
  const [init, setInit] = useState(false);
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    } else {
      // scrollToTop()
    }
  };
  useEffect(() => {
    if (init) {
      return;
    }

    initParticlesEngine(async (engine) => {
      await loadFull(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  return (
    <div className="behindParticles text-left d-flex flex-column">
      {init && <Particles id="tsparticles" options={options} />}
      <div className='row w-100 justify-content-between'>
        <div className="col-md-8 ps-5 d-flex flex-column justify-content-center">
          <Reveal>
            <h1 style={{fontSize:'3rem'}}>welcome to Open Voice Hub</h1>
          </Reveal>
          <Reveal>
            <h4>
              <TypeAnimation
                className=' typer'
                sequence={[
                  // Same substring at the start will only be typed out once, initially
                  "Broadcast Media Production Community",
                  2000, // wait 1s before replacing "Mice" with "Hamsters"
                  "your international hub for productive conversations!",
                  1000,
                  "We Aim for Unity",
                  1000,
                  "We Aim for Diversity",
                  1000,
                ]}
                wrapper="span"
                speed={50}
                style={{ fontSize: '1.5em', display: 'inline-block' }}
                repeat={Infinity}
              />
            </h4>
          </Reveal>

          <p className='aboutParagraph'>
          your international hub for healthy and productive conversations!
          </p>

          {/*  */}
          <div id="container" className=' '>
            <button className="learn-more learnBTN w-100 " onClick={() => scrollToSection("ContactMe")}>
              <span className="circle" aria-hidden="true">
                <span className="icon arrow" />
              </span>
              <span className="learnBTN-text">Contact Us</span>
            </button>
          </div>

          {/*  */}

        </div>
        <div className="col-md-4 d-flex merienda flex-column justify-content-center align-items-center my-order-md-first">
          <div className='LogoImage'>
            <TrackVisibility once>
              {({ isVisible }) =>
                <div className={`${isVisible ? "animate__animated animate__rollIn d-static" : "d-none"}`}>
                  <img className='MainLogo' src={'../Img/BG Logo.png'} alt="" />
                </div>}
            </TrackVisibility>
          </div>

        </div>

      </div>

    </div>
  )
}
