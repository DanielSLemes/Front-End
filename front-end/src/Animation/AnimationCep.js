import React, { useState } from 'react';
import Lottie from 'react-lottie';
import animationData from "../animationCep.json";


export function AnimationCep (props)  {
    const [animationState] = useState({ isStopped: false, isPaused: false, direction:1, name:true})

    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animationData,
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice'
        }
    };
    const animation = <Lottie options={defaultOptions}
        height={90}
        width={130}
        name= {"FoodCorps"}
        direction={animationState.direction}
        isStopped={animationState.isStopped}
        isPaused={animationState.isPaused} />

        return(
            <div>
                {animation}
            </div>
        )
   
}




