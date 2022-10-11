import React from 'react'

import red from "../sounds/red.mp3";
import green from "../sounds/green.mp3";
import blue from "../sounds/blue.mp3";
import yellow from "../sounds/yellow.mp3";
import Box from './Box';

const BoxContainer = ({ randomChosenColour, userClick }) => {
const redSound=new Audio(red)
const greenSound=new Audio(green)
const blueSound=new Audio(blue)
const yellowSound=new Audio(yellow)
    return (
        <>
            <div className=" block w-fit mx-auto pt-48 ">
                <div className="flex">
                    <Box
                        color="red"
                        next={randomChosenColour}
                        userClick={userClick}
                        sound={redSound}
                    />
                    <Box
                        color="blue"
                        next={randomChosenColour}
                        userClick={userClick}
                        sound={blueSound}
                    />
                </div>

                <div className="flex">
                    <Box
                        color="yellow"
                        next={randomChosenColour}
                        userClick={userClick}
                        sound={yellowSound}
                    />
                    <Box
                        color="green"
                        sound={greenSound}
                        next={randomChosenColour}
                        userClick={userClick}
                    />
                </div>
            </div>
        </>
    )
}

export default BoxContainer