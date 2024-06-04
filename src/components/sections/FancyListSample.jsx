import React from 'react';
import { FancyList, FancyListItem } from '../styles/sections/FancyListSample.styled';


const FancyListSample = () => {
    return (
        <>
        <FancyList>
            <FancyListItem>Discipline</FancyListItem>
            <FancyListItem>Clean</FancyListItem>
            <FancyListItem>Punctual</FancyListItem>
        </FancyList>
        <div></div>
        </>

    );
}

export default FancyListSample;
