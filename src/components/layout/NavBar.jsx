import { NavItems } from "../../data/NavItems";
import useScrollDirection from "../../hooks/useScrollDirection";
import { CTAButton } from "../styles/common/CTAButton.styled";
import { LineOne, LineThree, LineTwo, Logo, MenuIcon, Nav, NavItem, NavLink, NavList, Profile, SocialIcons } from "../styles/layout/Nav.styled"
import { useState } from "react";
import {FaFacebook, FaInstagram, FaTiktok} from "react-icons/fa";


export const NavBar = () =>{
 const [menuopen,setMenuopen] = useState(false);
const scrollDirection = useScrollDirection("down");

    return(
        <div>
        <Nav scrollDirection={scrollDirection}>
            <div>
                <a href="#Home">
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
                            <NavLink href="#home">
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
                                    <NavLink href="#" target="_blank">
                                        <FaInstagram/>
                                    </NavLink>
                                    <NavLink href="#" target="_blank">
                                        <FaTiktok/>
                                    </NavLink>
                                </SocialIcons>
                            ): null
                         }
                         {
                            navItem.hasCTA ? (
                                <CTAButton href="#admissions">
                                    Admissions
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