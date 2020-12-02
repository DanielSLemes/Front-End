import React, { useState } from 'react';
import Lottie from 'react-lottie';
import animationData from "../AnimationJson/animationLoginPage.json";


export  function AnimationLoginPage  (props)  {
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
 

        height={250}
        width={250}
 main
        name= {"FoodDelivery"}
        direction={animationState.direction}
        isStopped={animationState.isStopped}
        isPaused={animationState.isPaused} />

        return(
            <div>
                {animation}
            </div>
        )
   
}





