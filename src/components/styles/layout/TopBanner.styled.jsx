import {styled} from "styled-components";



export const StyledTopBanner = styled.div`
position: fixed;
top:0;
width: 100%;
height: 140px;
background: ${({theme})=> theme.colors.white};
color: ${({theme})=> theme.colors.navyBlue};
display: flex;
align-items: center;
justify-content: space-between;
padding: 9px 20px;
z-index: 99;
    @media(max-width: ${({ theme })=> theme.mobile}){
        justify-content: center;
    }
`;


export const StyledBannerSection = styled.div`
font-family: "Poppins",sans-serif;
font-size: 20px;
font-weight: 400;
    @media(max-width: ${({ theme })=> theme.mobile}){
            display: ${({showOnMobile})=> showOnMobile? "inline-block":"none"};
        }
        a{
            color: ${({ theme })=> theme.colors.black};
        }
        position: 80px;
        width: 100%;
`;