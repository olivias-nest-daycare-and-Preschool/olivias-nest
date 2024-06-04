import styled from 'styled-components';

export const FancyList = styled.ol`
    list-style-type: none;
    padding: 0;
    margin: 0;
`;

export const FancyListItem = styled.li`
    padding: 10px 20px;
    background-color: black;
    margin-bottom: 5px;
    border-left: 5px solid #333;
    font-family: Arial, sans-serif;
    position: relative;
    color: white;

    &::before {
        content: '✔'; /* Custom tick mark */
        display: inline-block;
        width: 20px;
        color: white;
        position: absolute;
        left: -25px; /* Position the tick mark to the left of the list item */
    }

    &:hover {
        background-color: black;
    }

    @media (max-width: ${({ theme }) => theme.mobile}) {
        padding: 5px 10px; /* Adjust the padding for mobile view */
        font-size: 14px; /* Adjust the font size for mobile view */
        &::before {
            width: 15px; /* Adjust the tick mark size for mobile view */
            left: -20px; /* Adjust the position of the tick mark for mobile view */
        }
    }
`;