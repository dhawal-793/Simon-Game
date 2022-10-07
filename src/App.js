import { useState, useEffect } from "react";
import Heading from "./components/Heading";
import Box from "./components/Box";

import red from "./sounds/red.mp3";
import green from "./sounds/green.mp3";
import blue from "./sounds/blue.mp3";
import yellow from "./sounds/yellow.mp3";
import wrong from "./sounds/wrong.mp3";
import StartButton from "./components/StartButton";

function App() {
  const [gamePattern, setGamePattern] = useState([]);
  const [userClickedPattern, setUserClickedPattern] = useState([]);
  const [level, setLevel] = useState(0);
  const [heading, setHeading] = useState(`Press Start to start the Game`);
  const [randomChosenColour, setRandomChosenColour] = useState(null)
  const [wrongAnswer, setWrongAnswer] = useState(false);
  const buttonColour = ["red", "blue", "green", "yellow"];
  const [isStarted, setIsStarted] = useState(false)
  const playSound = (url) => {
    const audio = new Audio(url);
    audio.play();
  };

  const nextSequence = () => {
    setHeading(null);
    setLevel(level + 1); 
    setUserClickedPattern([]);
    setRandomChosenColour(buttonColour[Math.floor(Math.random() * 4)]);
  };

  const checkAnswer = (i) => {
    if (userClickedPattern[i] !== gamePattern[i]) {
      setWrongAnswer(true);
      setIsStarted(false)
      setHeading("Game-Over Start Again");
      playSound(wrong);
      setTimeout(() => {
        setWrongAnswer(false);
      }, 200);
      setGamePattern([]);
      setLevel(0);
    } else if (i + 1 === gamePattern.length) {
      setTimeout(() => {
        nextSequence();
      }, 700);
    }
  };

  const userClick = (color) => {
    setUserClickedPattern([...userClickedPattern, color]);
  };

  useEffect(() => {
    if (userClickedPattern.length !== 0) {
      checkAnswer(userClickedPattern.length - 1);
    }
  }, [userClickedPattern]);

  useEffect(() => {
    if (randomChosenColour) {
      setGamePattern((gamepattern) => [...gamepattern, randomChosenColour]);
      setRandomChosenColour(null)
    }
  }, [randomChosenColour]);

  useEffect(() => {

  }, [wrongAnswer, level,gamePattern])
  useEffect(() => {
    if (isStarted) {
  setHeading("Starting...")
}
  }, [isStarted])

  return (
    <div
      className={`w-full min-w-[80vw] h-[100vh] ${wrongAnswer ? "bg-[#ff0000] opacity-80" : "bg-[#011F3F]"
        } text-center `}
    >
      <Heading level={level} heading={heading} />
      <div className=" block w-fit mx-auto pt-48 ">
        <div className="flex">
          <Box
            color="red"
            url={red}
            next={randomChosenColour}
            userClick={userClick}
            playSound={playSound}
          />
          <Box
            color="blue"
            url={blue}
            next={randomChosenColour}
            userClick={userClick}
            playSound={playSound}
          />
        </div>

        <div className="flex">
          <Box
            color="yellow"
            url={yellow}
            next={randomChosenColour}
            userClick={userClick}
            playSound={playSound}
          />
          <Box
            color="green"
            url={green}
            next={randomChosenColour}
            userClick={userClick}
            playSound={playSound}
          />
        </div>

        <StartButton level={level} nextSequence={nextSequence} isStarted={isStarted} setIsStarted={setIsStarted} />
      </div>
    </div>
  );
}

export default App;

