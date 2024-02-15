import styled,{keyframes} from "styled-components";

const typing  = keyframes`
75%{
    width: 0ch;
};
100%{
    width: 56ch;
}
`;


const blink = keyframes`
0%{
    border-right: 4px solid rgba(255,255,255,0);
};
100%{
    border-right: 4px solid rgba(255,255,255,1);
}
`;


export const StyledHomeSection = styled.section`
width: 100%;
height: 90vh;
/* background:url("./images/landing.jpg") center no-repeat; */
background-size: auto;
position: relative;
display: flex;
align-items: center;
justify-content: center;
text-align: center;
margin-top: 40px;
`;
export const StyledHomeContent = styled.div`
width: 100%;
max-width: 58rem;
color: ${({ theme })=> theme.colors.green};
text-transform: uppercase;
/* font-size: 22px;
font-weight: 700; */
  h1{
    letter-spacing: 1.2rem;
    font-size: 2rem;
    font-weight: 900;
    overflow: hidden;
    white-space: nowrap;
    width: 56ch;
    margin: auto;
    animation: ${typing} 5s steps(56), ${blink} 1s ease-in-out 8s infinite;
    border-right: 4px solid rgba(255,255,255,1);
  }
  h3{
    font-size: 4rem;
    margin: 1.5rem 0;
    background: linear-gradient(
        to right,
        ${({theme})=> theme.colors.green} 0%,
        ${({theme})=> theme.colors.purple} 100%
    );
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
  p{
    font-size: 1.7rem;
    font-weight: 400;
    text-transform: none;
    color: ${({theme})=>theme.colors.green};
  }
  div{
    margin: 2.5rem 0;
  }
    @media(max-width: ${({theme})=> theme.mobile}){
        h1{
            letter-spacing: 1rem;
            font-size: 1.5rem;
            width: 58ch;
        }
        h3{
            font-size: 2.2rem;
        }
        p{
            font-size: 1.3rem;
        }
    }

`;
 
export const WordingsHomeContent = styled.div`

`;