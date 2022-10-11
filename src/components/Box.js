
import { useEffect, useState } from "react";
const Box = ({ color, sound, next, userClick }) => {
    const bg = {
        "red": "bg-[#ff0000]",
        "green": "bg-[#008000]",
        "blue": "bg-[#0000ff]",
        "yellow": "bg-[#ffff00]",
    }

    const [isClicked, setIsClicked] = useState(false)
    const [isNext, setIsNext] = useState(null)

    const handleClick = () => {
        setIsClicked(true);
        sound.play()
        userClick(color)
        setTimeout(() => {
            setIsClicked(false)
        }, 100);

    }
    useEffect(() => {
        if (next === color) {
            setIsNext(color)
            sound.play()
            setTimeout(() => {
                setIsNext(null)
            }, 200);
        }
    }, [next, sound, color])

    return (
        <>
            <button  className={`${isClicked ? "bg-[#808080] shadow-[0px_0px_20px_rgb(255,255,255)]" : bg[color]} ${isNext === color && "transition ease-linear bg-gray-400 scale-110"} inline-block m-[1.4vw] h-[18vw] w-[18vw] max-h-[10rem] max-w-[10rem] border-4 md:border-8  border-black rounded-[20%] `} onClick={handleClick} ></button>
        </>
    );
};

export default Box;