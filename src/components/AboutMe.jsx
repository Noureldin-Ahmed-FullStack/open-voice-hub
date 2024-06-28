import React from 'react'
import "../css/AboutMe.css";
import Reveal from './Reveal';
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import Logo from '../Img/logo.jpg';

export default function AboutMe() {

  return (

    <div id='about' className="container rounded-2 my-2 cont p-5 pt-3">
      <div className="row mt-4">
        <div className="col-sm-12">
          <div className="box-shadow-full">
            <div className="row">
              <div className="col-lg-5">
                <div className="row">
                </div>
                <div className="skill-mf">
                  <TrackVisibility once>
                    {({ isVisible }) =>
                      <div className={`${isVisible ? "animate__animated animate__fadeInLeft d-static" : "d-none"}`}>
                        <img src={Logo} className='w-100' alt="" />
                      </div>
                    }
                  </TrackVisibility>
                </div>
              </div>
              <div className="col-lg-1" />
              <div className="col-lg-6 wow BounceInRight" style={{ visibility: 'visible', animationName: 'bounceInRight' }}>
                <div className="about-me pt-4 pt-md-0">

                  <TrackVisibility once>
                    {({ isVisible }) =>
                      <div className={`${isVisible ? "animate__animated animate__fadeInRight d-static" : "d-none"}`}>
                        <h3 className="title-left lul-title ColorfulText gradient-text">
                          About Us
                        </h3>
                      </div>
                    }
                  </TrackVisibility>

                  <Reveal>
                    <p className="lead text-left">
                      Welcome to OpenVoiceHub, your hub for healthy and productive conversations! We’re building a global community for insightful discussions and debates.
                    </p>
                  </Reveal>

                  <Reveal width='full'>
                    <p className="lead">
                      Our platform brings together people with diverse viewpoints to discuss societal issues and global concerns, overcoming geographical barriers.
                    </p>

                  </Reveal>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div >

  )
}
