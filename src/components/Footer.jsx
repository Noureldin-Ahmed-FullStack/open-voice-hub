import React from 'react'
import "../css/Footer.css";
import { Box } from '@mui/material';

export default function Footer() {
  return (
    <div className='cont text-light'>
        <Box sx={{textAlign:{ xs: 'center', md: 'left' }}}>
            <div className="container pt-5">
            <div className="row">
                <div className="col-md-3 col-sm-6">
                    <h5 className='FooterHeader'>Payment Methods</h5>
                    <h6>We Accept</h6>
                    <ul className='d-flex myList p-0' style={{listStyle: 'none'}}>
                        <li className='me-1'><a style={{color:"white"}} href=""><i className="fa-brands fa-cc-visa"></i></a></li>
                        <li className='mx-1'><a style={{color:"white"}} href=""><i className="fa-regular fa-money-bill-1"></i></a></li>
                        <li className='mx-1'><a style={{color:"white"}} href=""><i className="fa-brands fa-cc-mastercard"></i></a></li>
                        <li className='mx-1'><a style={{color:"white"}} href=""><i className="fa-brands fa-cc-paypal"></i></a></li>
                    </ul>
                </div>
                <div className="col-md-3 col-sm-6">
                    <h5 className='FooterHeader'>Locations</h5>
                    <ul className='p-0  dm-sans' style={{listStyle: 'none'}}>
                        <li className='my-1'><a style={{color:"white",textDecoration:'none'}} href="">Dubai</a></li>
                        <li className='my-1'><a style={{color:"white",textDecoration:'none'}} href="">Sharjah</a></li>
                        <li className='my-1'><a style={{color:"white",textDecoration:'none'}} href="">Hattah</a></li>
                        <li className='my-1'><a style={{color:"white",textDecoration:'none'}} href="">Ras-Al-Khaima</a></li>
                        <li className='my-1'><a style={{color:"white",textDecoration:'none'}} href="">Ajman</a></li>
                        <li className='my-1'><a style={{color:"white",textDecoration:'none'}} href="">Abu Dhabi</a></li>
                    </ul>
                </div>
                <div className="col-md-3 col-sm-6">
                    <h5 className='FooterHeader'>Our Partners</h5>
                    <ul className='p-0 dm-sans' style={{listStyle: 'none'}}>
                        <li className='my-1'><a style={{color:"white",textDecoration:'none'}} href="">Desert Cargo Couriers</a></li>
                        <li className='my-1'><a style={{color:"white",textDecoration:'none'}} href="">AL-FADRAN EXCHANGE</a></li>
                        <li className='my-1'><a style={{color:"white",textDecoration:'none'}} href="">Fahd Travel Agency</a></li>
                        <li className='my-1'><a style={{color:"white",textDecoration:'none'}} href="">Dubai Travel Consultants</a></li>
                    </ul>
                </div>
                <div className="col-md-3 col-sm-6">
                    <h5 className='FooterHeader'>Contact us</h5>
                    <ul className='p-0  dm-sans' style={{listStyle: 'none'}}>
                        <li className='my-3 mt-1'><a style={{color:"white",textDecoration:'none'}} href="mailto:OpenVoiceHub@gmail.com">OpenVoiceHub@gmail.com</a></li>
                        <li className='my-3'><a style={{color:"white",textDecoration:'none'}} href='https://wa.me/+971 1234567890'>+971 1234567890</a></li>
                    </ul>
                    <h6>Follow us on</h6>
                    <ul className='d-flex myList p-0' style={{listStyle: 'none'}}>
                        <li className='me-1'><a style={{color:"white",textDecoration:'none'}} href=""><i className="fa-brands fa-facebook"></i></a></li>
                        <li className='mx-1'><a style={{color:"white",textDecoration:'none'}} href=""><i className="fa-brands fa-pinterest"></i></a></li>
                        <li className='mx-1'><a style={{color:"white",textDecoration:'none'}} href=""><i className="fa-brands fa-twitter"></i></a></li>
                        <li className='mx-1'><a style={{color:"white",textDecoration:'none'}} href=""><i className="fa-brands fa-instagram"></i></a></li>
                    </ul>
                </div>
            </div>
        </div>
        </Box>
        
    </div>
  )
}
