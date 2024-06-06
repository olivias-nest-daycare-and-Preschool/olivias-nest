import {createGlobalStyle} from "styled-components";


export const GlobalStyles = createGlobalStyle`
*,
*::before,
*::after{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
body,html{
    margin: 0;
    padding: 0;
    overflow-x: hidden;
}

html{
    font-family: "Poetsen One", monospace;
    scroll-behavior: smooth;
    color: ${({ theme })=> theme.colors.white};
    background: ${({ theme })=> theme.colors.lightNavyBlue};
    /* background: grey; */
    font-size: 12px;
}

a{
    text-decoration: none;
    color: ${({ theme })=> theme.colors.green};
    transition: all 250ms ease-in-out;

    &:hover{
        color:${({ theme })=> theme.colors.orange};
    }
}

ul{
    list-style: none;
}

hr{
    background: linear-gradient(
        to right,
        ${({ theme })=>theme.colors.orange} 0%,
        ${({ theme })=> theme.colors.purple} 100%
    );
    border: 0;
    height: 2px;
}

::-webkit-scrollbar{
    width: 10px;
}

::-webkit-scrollbar-track{
    background: #7a8ba9;
}

::-webkit-scrollbar-thumb{
    background: #31435f;
    border-radius: 30px;
}
::-webkit-scrollbar-thumb:hover{
    background: #202e46;
}
select{
    option {
        font-size: 20px;
        padding: 15px;
    }
}
    @media(max-width: ${({theme})=>theme.mobile}){
        
    }
`;
