import { Link } from 'react-router-dom';
import './../styles/Footer.css'
import { RiMapPin2Fill, RiPhoneLine,RiMailLine } from "react-icons/ri";
import Logo from './../../Images/nest.png'
import { IoLogoWhatsapp } from "react-icons/io";
import { FaFacebookF,FaInstagram } from "react-icons/fa";
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
                            <p>25 othaya road in Kileleshwa/ Lavington, Nairobi.</p>
                        </div>
                    </div>
                    <div className="Data1">
                        <div className="icon">
                            < RiPhoneLine />
                        </div>
                        <div className="info">
                            <h2>Call us</h2>
                            <p>0743794650 or / 0114 592463</p>
                        </div>
                    </div>
                    <div className="Data1">
                        <div className="icon">
                            <RiMailLine />
                        </div>
                        <div className="info">
                            <h2>Mail us</h2>
                            <p>oliviasnest1@gmail.com</p>
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
                                <p>
                                    We have admissions with inclusion of:  
                                    <ul>
                                        <li>- Daycare (1-2 years).</li>
                                        <li>- Internation Preschool (3-6 years).</li>
                                        <li>- Extra Curricular activities.</li>
                                        <li>- Transport available.</li>
                                    </ul>
                                </p>
                            </div>
                        </div>
                        <div className="socials">
                            <h2>Follow us</h2>
                            <div className="wrap">
                                <div className="icon1">
                                <a href="https://l.facebook.com/l.php?u=https%3A%2F%2Fapi.whatsapp.com%2Fsend%3Fphone%3D%252B254114592463%26context%3DARAv37ri3dGdLBTDhKq0GAc7il6evk4InBbyWaOjqsoSJ2c3yNKz7GYEgM3-Yvsx0nBWxiFETUr-iYpZZavHIoYRLiqNDRMCqUL94NynvCYa-blxwTYsOz82iUaOV2veXEtXU3olQQZWyxph8abTai-iLw%26source%3DFB_Page%26app%3Dfacebook%26entry_point%3Dpage_cta%26fbclid%3DIwZXh0bgNhZW0CMTAAAR3JlXPF1rhScsGbC_LaLAH60rpuplPhtjFCSV9ds5rKAYm0YKNADNIdQoU_aem_1B69idGnGUUvw_nTa9ZBFg&h=AT3SV7l0fHV6Ukj8PkQ9leBBPn_3JoJ4Lo2qlocOnqPNALtzHSjClZhpnNUtyI6Qoq5CVpUCjsqCe97eBJ4cIJ_iuwIgNhQ-YLD-5WjP-ScxKF2qKo2PMdFh5iHCfCrYuKIydQ" 
                                target="_blank" rel="noopener noreferrer">
                                <IoLogoWhatsapp />
                                </a>
                                </div>
                                <div className="icon2">
                                    <a href="https://www.facebook.com/oliviasnest" 
                                    target="_blank" rel="noopener noreferrer">
                                    <FaFacebookF />
                                    </a>
                                </div>
                                <div className="icon3">
                                <a href="https://www.instagram.com/YOUR_INSTAGRAM_HANDLE" target="_blank" rel="noopener noreferrer">
                                    <FaInstagram />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="Data1">
                        <h2 className="menu">Menu</h2>
                        <hr className='HR2' id="menu_hr"/>
                        <div className="wrap">
                            <div className="Links">
                                <Link to="/" className='LinksData'>Home</Link>
                                <Link to="/AboutUs" className='LinksData'>About Us</Link>
                                <Link to="/Facilities" className='LinksData'>Facilities</Link>
                                <Link to="/Co-curricular" className='LinksData'>Co-curricular</Link>
                            </div>
                            <div className="Links">
                                <Link to="/Transport" className='LinksData'>Transport</Link>
                                <Link to="/Gallery" className='LinksData'>Gallery</Link>
                                <Link to="/News" className='LinksData'>News</Link>
                                <Link to="/ContactUs" className='LinksData'>Contact Us</Link>
                            </div>
                        </div>
                    </div>
                    <div className="Data1">
                        <h2>News Letter</h2>
                        <hr className='HR2' />
                        <div className="info">
                            Don’t miss to subscribe to our new feeds, fill the form below.
                        </div>
                        <div className="form">
                            <input type="email" placeholder="Email Address" />
                            <button className='send'><BsFillSendFill /></button>
                        </div>
                    </div>
                </div>

                <div className="copy">
                <p>Copyright © <script>document.write(new Date().getFullYear());</script>
                 <a href="mailto:oliviasnest1@gmail.com">Olivia's Nest 2024</a>. All rights reserved.</p>
                </div>
            </div>
            <div></div>
        </>
    );
};
