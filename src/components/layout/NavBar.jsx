import { NavItems } from "../../data/NavItems";
import { LineOne, LineThree, LineTwo, Logo, MenuIcon, Nav, NavItem, NavLink, NavList } from "../styles/layout/Nav.styled"
import { useState } from "react";

export const NavBar = () =>{
 const [menuopen,setMenuopen] = useState(false);

    return(
        <div>
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
                {NavItems && NavItems.map((navItem,index)=>(
                    <NavItem key={index}>
                        <NavLink>Home</NavLink>
                    </NavItem>
                ))} 
                
            </NavList>
        </Nav>
        </div>
    );
};