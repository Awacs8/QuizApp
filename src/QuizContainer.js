import React, { useState } from "react";
import { CardContainer } from "./utils/styled";
import QuizCard from "./QuizCard";
import GameOver from "./GameOver";
import SideBar from "./SideBar";

const QuizContainer = ({ questions }) => {
  const [selected, setSelected] = useState(0);
  const [points, setPoints] = useState(0);
  const [checked, setChecked] = useState(false);
  const quizData = questions[selected];

  const handleClick = (answer) => {
    if (answer === quizData.correct_answer) {
      setPoints(points + 1);
    }
    setChecked(true);

    setTimeout(() => {
      setChecked(false);
      setSelected(selected + 1);
    }, 1000);
  };

  return (
    <>
      {selected < 10 && <SideBar selected={selected} points={points} />}

      <CardContainer>
        {quizData ? (
          <QuizCard
            quizData={quizData}
            checked={checked}
            handleClick={handleClick}
          />
        ) : (
          <GameOver points={points} />
        )}
      </CardContainer>
    </>
  );
};

export default QuizContainer;
