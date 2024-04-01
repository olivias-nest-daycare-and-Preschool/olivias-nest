import { NavItems } from "../../data/NavItems";
import useScrollDirection from "../../hooks/useScrollDirection";
import { CTAButton } from "../styles/common/CTAButton.styled";
import { LineOne, 
    LineThree, 
    LineTwo, Logo, MenuIcon, Nav, 
    NavItem, NavLink, NavList, Profile, 
    SocialIcons } from "../styles/layout/Nav.styled"
import { useState } from "react";
import {FaFacebook,FaTiktok, FaWhatsapp} from "react-icons/fa";


export const NavBar = () =>{
 const [menuopen,setMenuopen] = useState(false);
const scrollDirection = useScrollDirection("down");

    return(
        <div>
        <Nav scrollDirection={scrollDirection}>
            <div>
                <a href="/">
                    <Logo src="./images/logo.png" />
                </a>
            </div> 
            <MenuIcon menuopen={menuopen} onClick={()=> setMenuopen(!menuopen)}>
                <LineOne menuopen={menuopen}/>
                <LineTwo menuopen={menuopen}/>
                <LineThree menuopen={menuopen}/>
            </MenuIcon>
            <NavList menuopen={menuopen}>
                {NavItems && NavItems.map((navItem,index)=>(
                    <NavItem 
                    key={index} 
                    index={index} 
                    menuopen={menuopen} 
                    onClick={() => setMenuopen(false)}
                    >
                         {navItem.isProfile ? (
                            <NavLink href="/">
                                <Profile>
                                    <img src="./images/nest.jpg" alt="Olivias Nest "/>
                                    <span>Olivia's Nest</span>
                                </Profile>
                            </NavLink>
                         ): null}
                         {navItem.text ? (
                            <NavLink href={navItem.href}>
                                {navItem.text}
                            </NavLink>
                         ):null}
                         {
                            navItem.hasSocialIcons ? (
                                <SocialIcons>
                                    <NavLink href="https://www.facebook.com/oliviasnest" target="_blank">
                                        <FaFacebook/>
                                    </NavLink>
                                    <NavLink href="https://api.whatsapp.com/send?phone=%2B254114592463&data=ARBW7i2sNRnh_SYg--pLwrcblva2Sv2XMulYjeVNdJPkAAwwQhvptz5QKOPIj7sX9zoF9WtypFACzr9TJrgt0IECJmJUGeP47zqbWdsrwyhiJmlgxumOZzuLcAa2F-cgiI2UB-ZDwc9GY64pJbAE6VPP2Q&source=FB_Page&app=facebook&entry_point=page_cta&fbclid=IwAR3yzQow8PHmNvcndOF-JWg2OZboLEZ9g5syQ6AjO5eokZ5pL1TctkPbAUM" 
                                    target="_blank">
                                        <FaWhatsapp/>
                                    </NavLink>
                                    <NavLink href="/" target="_blank">
                                        <FaTiktok/>
                                    </NavLink>
                                </SocialIcons>
                            ): null
                         }
                         {
                            navItem.hasCTA ? (
                                <CTAButton href="/ContactUs">
                                    Contact Us
                                </CTAButton>
                            ):null
                         }
                    </NavItem>
                ))} 
                
            </NavList>
        </Nav>
        </div>
    );
};