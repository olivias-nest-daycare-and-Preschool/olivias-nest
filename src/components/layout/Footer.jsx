import { Link } from 'react-router-dom';
import './../styles/Footer.css'
import { RiMapPin2Fill } from "react-icons/ri";
import Logo from './../../Images/nest.png'
import { IoLogoWhatsapp } from "react-icons/io";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { BsFillSendFill } from "react-icons/bs";

export const Footer = () => {
    return (
        <>
            <div className="Footer">
                <div className="Top-container">
                    <div className="Data1">
                        <div className="icon">
                            <RiMapPin2Fill />
                        </div>
                        <div className="info">
                            <h2>Find us</h2>
                            <p>001100, Kenya 777778</p>
                        </div>
                    </div>
                    <div className="Data1">
                        <div className="icon">
                            <RiMapPin2Fill />
                        </div>
                        <div className="info">
                            <h2>Call us</h2>
                            <p>+25484768468</p>
                        </div>
                    </div>
                    <div className="Data1">
                        <div className="icon">
                            <RiMapPin2Fill />
                        </div>
                        <div className="info">
                            <h2>Mail us</h2>
                            <p>Olivia@gmail.com</p>
                        </div>
                    </div>
                </div>
                <hr className='HR' />
                <div className="Bottom-container">
                    <div className="Data1">
                        <div className="Top">
                            <div className="Logo">
                                <img src={Logo} alt="Logo" />
                            </div>
                            <div className="info">
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa vitae unde facere repellendus inventore fugit ipsa ratione, consequuntur ex ducimus sapiente asperiores quaerat vel sequi, maxime provident deserunt tenetur beatae.</p>
                            </div>
                        </div>
                        <div className="socials">
                            <h2>Follow us</h2>
                            <div className="wrap">
                                <div className="icon1">
                                    <IoLogoWhatsapp />
                                </div>
                                <div className="icon2">
                                    <FaFacebookF />
                                </div>
                                <div className="icon3">
                                    <FaInstagram />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="Data1">
                        <h2>Useful Links</h2>
                        <hr className='HR2' />
                        <div className="wrap">
                            <div className="Links">
                                <Link className='LinksData'>Home</Link>
                                <Link className='LinksData'>Services</Link>
                                <Link className='LinksData'>Contact</Link>
                                <Link className='LinksData'>Our Service</Link>
                                <Link className='LinksData'>Contact Us</Link>
                            </div>
                            <div className="Links">
                                <Link className='LinksData'>About</Link>
                                <Link className='LinksData'>Portfolio</Link>
                                <Link className='LinksData'>About Us</Link>
                                <Link className='LinksData'>Expert Team</Link>
                                <Link className='LinksData'>Latest News </Link>
                            </div>
                        </div>
                    </div>
                    <div className="Data1">
                        <h2>Useful Links</h2>
                        <hr className='HR2' />
                        <div className="info">
                            Don’t miss to subscribe to our new feeds, kindly fill the form below.
                        </div>
                        <div className="form">
                            <input type="email" placeholder="Email Address" />
                            <button className='send'><BsFillSendFill /></button>
                        </div>
                    </div>
                </div>

                <div className="copy">
                    <p>Copyright © 2024 <a href="www.ameda,com">Olivia</a>. All rights reserved.</p>
                </div>
            </div>
        </>
    );
};


// orange:"rgba(255,151,0,1.000)",
//       white:"rgba(240,247,255,1)",
//       green:"rgba(152,219,5,1.000)",
//       navyBlue:"rgba(2,12,27,1)",
//       lightNavyBlue:"rgba(4,22,48,1)",
//       purple:"rgba(58,17,1,1.000)",
//       black: "rgba(0,0,0,1.000)",