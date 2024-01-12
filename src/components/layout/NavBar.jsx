import { LineOne, LineThree, LineTwo, Logo, MenuIcon, Nav, NavList } from "../styles/layout/Nav.styled"


export const NavBar = () =>{
    return(
        <>
        <Nav>
            <div>
                <a href="#hero-section">
                    <Logo src="./images/logo.png" />
                </a>
            </div> 
            <MenuIcon>
                <LineOne/>
                <LineTwo/>
                <LineThree/>
            </MenuIcon>
            <NavList>
                <li>Home</li>
                <li>About us</li>
                <li>contact us</li>
                <li>Gallery</li>
            </NavList>
        </Nav>
        </>
    );
};