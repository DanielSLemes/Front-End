import React, { useState } from 'react';
import Lottie from 'react-lottie';
import animationData from "../AnimationJson/animationBack.json";


export  function AnimationBack  (props)  {
    const [animationState] = useState({ isStopped: false, isPaused: false, direction:1 })

    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animationData,
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice'
        }
    };
    const animation = <Lottie options={defaultOptions}
        height={40}
        width={60}
        color= {"red"}
        direction={animationState.direction}
        isStopped={animationState.isStopped}
        isPaused={animationState.isPaused} />

        return(
            <div>
                {animation}
            </div>
        )
}


  