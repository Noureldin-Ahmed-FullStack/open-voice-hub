import React, { useState } from 'react'
import "../css/Project.css";
import { Col, Container, Nav, Row, Tab } from 'react-bootstrap';
import ProjectCard from './ProjectCard';

export default function Projects() {

    const BackEnd = [{
        title: "International hub",
        imageUrl: "https://ssniper.sirv.com/Images/portfolio%20pictures/b1.webp",
        link: "",
        describtion: "Healthy and productive conversations! At OpenVoiceHub"
    },
    {
        title: "International hub",
        imageUrl: "https://ssniper.sirv.com/Images/portfolio%20pictures/wuzzuf.jpg",
        link: "",
        describtion: "Healthy and productive conversations! At OpenVoiceHub"
    },
    {
        title: "International hub",
        imageUrl: "https://ssniper.sirv.com/Images/portfolio%20pictures/b1.webp",
        link: "",
        describtion: "Healthy and productive conversations! At OpenVoiceHub"
    }]

    const toggleVisibility = (index) => {
        setIsVisible(prevState => {
            const newState = [...prevState];
            newState[index] = !newState[index];
            return newState;
        });
    };

    return (

        <section id="services" className="mb-3  route">
            <div className="container cont">
                <div className="row">
                    <div className="col-sm-12">
                        <div className="title-box text-center">
                            <h3 className="title-a lul-title mt-4 mb-3" >
                                Services
                            </h3>

                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12">
                        <div>
                            <div className="container">
                                <div className="service-content">

                                </div>
                            </div>
                        </div>
                    </div>

                </div>


                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Nav variant='pills' className='mb-4' defaultActiveKey="/home">

                        <Nav.Item>
                            <Nav.Link eventKey={"first"}>Pricing</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey={"second"}>About</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey={"third"}>Ideals</Nav.Link>
                        </Nav.Item>
                    </Nav>
                    <Tab.Content>
                        <Tab.Pane className=' text-center' eventKey="first">
                            <h2 className="lul-title mb-3 " style={{ textDecoration: 'underline' }}>What We Offer!</h2>
                            {/* <p>Assignments given by <a className=" darkLink" target="_blank" href="https://www.facebook.com/Routelearning">Route Center</a> <em className=''>Eng: </em><a className="darkLink" target="_blank" href="https://www.facebook.com/ahmedmu3ti"><strong>Ahmed Mu3ti</strong></a>.</p> */}
                            <Container className='mt-5'>
                                <Row className='gx-3 pb-2'>
                                    <Col sm={4} xs={6}>
                                        <div className='Offers p-3'>
                                            <p style={{ textDecoration: 'underline' }}>Home</p>
                                            <h2 style={{ fontSize: '3rem' }}>1500.$</h2>
                                            <p>Install Once</p>
                                            <p className='my-1'>10% Down Payment</p>
                                            <hr className='my-1' />
                                            <p className='my-1'>Complete Installation</p>
                                            <hr className='my-1' />
                                            <p className='my-1'>Hybrid</p>
                                            <hr className='my-1' />
                                            <p className='my-1'>100% Conversion</p>
                                            <hr className='my-1' />
                                        </div>
                                    </Col>
                                    <Col sm={4} xs={6}>
                                        <div className='Offers NewOffer'>
                                            <p style={{ textDecoration: 'underline' }}>Farms</p>
                                            <h2 style={{ fontSize: '3rem' }}>4999.$</h2>
                                            <p>Install Once</p>
                                            <p className='my-1'>25% Down Payment</p>
                                            <hr className='my-1' />
                                            <p className='my-1'>Fill Coverage</p>
                                            <hr className='my-1' />
                                            <p className='my-1'>Water System</p>
                                            <hr className='my-1' />
                                            <p className='my-1'>Artificial Sunlight</p>
                                            <hr className='my-1' />
                                        </div>
                                    </Col>
                                    <Col sm={4} xs={6}>
                                        <div className='Offers p-3'>
                                            <p style={{ textDecoration: 'underline' }}>Buisnesses</p>
                                            <h2 style={{ fontSize: '3rem' }}>10,000.$</h2>
                                            <p>Install Once</p>
                                            <p className='my-1'>40% Down Payment</p>
                                            <hr className='my-1' />
                                            <p className='my-1'>Multiple Consoles</p>
                                            <hr className='my-1' />
                                            <p className='my-1'>Full Coverage</p>
                                            <hr className='my-1' />
                                            <p className='my-1'>100% Conversion</p>
                                            <hr className='my-1' />
                                        </div>
                                    </Col>
                                </Row>

                            </Container>
                        </Tab.Pane>
                        <Tab.Pane eventKey="second">
                            <h2 className="lul-title mb-3">My Back-End Projects</h2>
                            {/* <p>Assignments given by <a className=" darkLink" target="_blank" href="https://www.facebook.com/Routelearning">Route Center</a> <em className=''>Eng: </em><a className="darkLink" target="_blank" href="https://www.facebook.com/ahmedmu3ti"><strong>Ahmed Mu3ti</strong></a>.</p> */}
                            <Row className='gy-3 pb-2'>
                                {BackEnd.map((item, index) => (
                                    <ProjectCard
                                        key={index}
                                        {...BackEnd[index]}
                                    />
                                ))}
                            </Row>
                        </Tab.Pane>
                        <Tab.Pane eventKey="third">
                            <Row>
                                <div>
                                    <div className="col-md-12">
                                        <div >
                                            <div className="container">

                                            </div>
                                            <div className="service-content">
                                                <h2 className="lul-title">We aim for Unity:</h2>
                                                <p>We want to strengthen the bonds between nations as our primary goal. In order to solve the problems that today's society faces, we try to close gaps, promote understanding, and work together. Serving as a hub for people from different backgrounds, OpenVoiceHub helps to build a united global society.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </Row>
                        </Tab.Pane>
                    </Tab.Content>
                </Tab.Container>





                {/* <div className="CappedHeight">

                    <div className="row">
                        {FrontEnd.map((item, index) => (
                            <div className="col-lg-6" key={index}>
                                <div className="service-box wow bounceInLeft">
                                    <div className="service-content flex-column">
                                        <div className='d-flex justify-content-center align-items-center mb-3'>

                                            <a className='frameTitle lul-title' target="_blank" href={item.link}>{item.title}</a>
                                            <button onClick={() => toggleVisibility(index)} className="btn btn-outline-light myShow"><i className="fa-solid fa-arrow-down-wide-short" style={{ fontSize: 25 }} /></button>
                                        </div>
                                        <motion.iframe
                                            className='w-100'
                                            src={item.link}
                                            initial={{ height: 0 }}
                                            animate={{ height: isVisible[index] ? 600 : 0 }}
                                            transition={{ duration: 0.3 }} // Duration of the animation (in seconds)
                                        >
                                        </motion.iframe>

                                        <p className="s-description">
                                            {item.desc}  <a target="_blank" style={{ margin: '0 10px' }} className="btn btn-success text-light" href={item.link}>Visit site</a>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                </div> */}
            </div>
        </section>

    )
}
