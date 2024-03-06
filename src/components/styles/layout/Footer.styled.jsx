import styled from "styled-components";

export const StyledFooter = styled.footer`
  width: 100%;
  height: 40vh;
  padding: 2.5rem;
  color: #1d2022;
  text-align: center;
  font-size: 20px;
  display: block;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  background-color: #1d2022;
  @media (min-width: 768px) {
    flex-direction: row;
    align-items: flex-start;
  }
`;

export const FooterLogo = styled.div`
  margin-right: 0rem;
  font-weight: bold;
  img {
    height: 10rem;
    width: auto;
    border-radius: 50%;
    display: block;
    margin: 1.5rem 0;
  }
   @media (min-width: 768px) {
    flex-direction: row;
    align-items: center;
    justify-content: center;
    img{
      height: 10rem;
      width: auto;
      border-radius: 50%;
      display: block;
      margin: 1.5rem 0;
    }
  }
`;

export const ContactInfo = styled.div`
margin-right: 0rem;
font-weight: bold;
a{
  height: 9rem;
  width: auto;
  display: block;
  margin: 1.5rem 0;
}
@media (min-width: 768px) {
  flex-direction: row;
  align-items: center;
  justify-content: center;
  a{
    height: 9rem;
  width: auto;
  display: block;
  margin: 1.5rem 0; 
  }
  div{

  }
}
`;

export const FooterNav = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center; 
  a {
    margin-right: 1.5rem;
    margin-bottom: 0.5rem;
    text-decoration: none;
    color: white;
    font-weight: bold;
  }

  &:last-child {
    margin: 0;
  }

  @media (min-width: 768px) {
    flex-direction: row;
    align-items: center;

    a {
      margin-right: 1rem;
      margin-bottom: 0;
    }
  }
`;

export const DeveloperInfo = styled.div`
  margin-top: 0.7rem;
  font-size: 1.9rem;
  color: white;
`;

export const FooterContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  @media (min-width: 768px) {
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    width: 100%;
  }
`;

export const CopyRightInfo = styled.div`
  margin-top: 0.7rem;
  font-size: 1.9rem;
  color: white;
`;

//Footer social icons

export const FooterSocialIcons = styled.div`
display: flex;

@media(max-width: ${({ theme })=>theme.mobile}){
    width: 150px;
    display: flex;
    align-items: center;
    justify-content: space-between;

    a{
        margin: 0 0.5rem;
        font-size: 2rem;
        
    }
}

`;

export const FooterNavLink = styled.a`
text-transform: uppercase;
color: ${({theme})=> theme.colors.white};
letter-spacing: 1.5px;

&::after{
    content:"";
    display: block;
    height: 3px;
    width: 0%;
    background: ${({theme})=> theme.colors.orange};
    transition: all ease-in-out 300ms;
}

&:hover{
    &::after{
        width: 100%;
    }
}
`;
