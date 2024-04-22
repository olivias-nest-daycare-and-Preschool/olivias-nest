import React , {useState} from 'react'
import styled ,{keyframes} from 'styled-components'

// keyframes for sparkling
export const sparklingAnimation = keyframes`
0%{
    opacity: 1;
    transform: translateY(0);
    color: #ff0000;
    font-size: 16px;
    font-weight: normal;
    letter-spacing: 2px;
}
50%{
    opacity: 0.5;
    transform: translateY(-5px);
    color: #00ff00;
    font-size: 20px;
    font-weight: bold;
    letter-spacing: 4px;
}
100%{
    opacity: 1;
    transform: translateY(0);
    color: #0000ff;
    font-size: 24px;
    font-weight: bolder;
    letter-spacing: 6px
}
`;
export const AnimatedText = styled.span`
display: inline-block;
animation: ${sparklingAnimation} 1s ease-in-out infinite;
`;