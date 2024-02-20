import styled, {keyframes}from "styled-components";


const slideAnimation = keyframes`
0%{
    transform: translateX(0);
}
100%{
    transform: translateX(-100% * 8);
}
`;

export const AnimatedCardContainer = styled.div`
width: 100%;
overflow: hidden;
`;

export const AnimatedCardSlider = styled.div`
display: flex;
transition: transform 0.5s ease;
animation: ${slideAnimation} 16s infinite linear;
width: 800%; 
`;

export const AnimatedCard = styled.div`
width: 12.5%;
border-radius: 10px;
overflow: hidden;
`;

export const AnimatedCardImage = styled.img`
width: 100%;
height: auto;
`;

export const AnimatedControlsContainer = styled.div`
display: flex;
justify-content: center;
margin-top: 1rem;
`;

export const AnimatedControlButton = styled.button`
background-color: #007bff;
color:white;
border: none;
padding: 0.5rem 1rem;
margin:0 0.5rem;
border-radius: 5px;
cursor: pointer;
`;