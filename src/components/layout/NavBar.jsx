import { LineOne, LineThree, LineTwo, Logo, MenuIcon, Nav, NavList } from "../styles/layout/Nav.styled"
import { useState } from "react";

export const NavBar = () =>{
 const [menuopen,setMenuopen] = useState(false);

    return(
        <>
        <Nav>
            <div>
                <a href="#hero-section">
                    <Logo src="./images/logo.png" />
                </a>
            </div> 
            <MenuIcon onClick={()=> setMenuopen(!menuopen)}>
                <LineOne menuopen={menuopen}/>
                <LineTwo menuopen={menuopen}/>
                <LineThree menuopen={menuopen}/>
            </MenuIcon>
            <NavList menuopen={menuopen}>
                <li>Home</li>
                <li>About us</li>
                <li>contact us</li>
                <li>Gallery</li>
            </NavList>
        </Nav>
        </>
    );
};