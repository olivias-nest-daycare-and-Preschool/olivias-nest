import React from 'react'
import { AnimatedText } from '../layout/SparklingTextStyled'

const SparklingText = ({text}) => {
  return (
    <span>
        {text.split(' ').map((word,index)=>
    <AnimatedText key={index}>{word}&nbsp;</AnimatedText>
    )}
    </span>
  )
}

export default SparklingText