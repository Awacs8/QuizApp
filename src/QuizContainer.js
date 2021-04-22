import React, { useState } from "react";
import { CardContainer } from "./utils/styled";
import QuizCard from "./QuizCard";
import GameOver from "./GameOver";
import SideBar from "./SideBar";

const QuizContainer = ({ questions }) => {
  const [selected, setSelected] = useState(0);
  const [points, setPoints] = useState(0);
  const questionData = questions[selected];

  const question = questionData && questionData.question;
  const answers =
    questionData &&
    [questionData.correct_answer, ...questionData.incorrect_answers].sort();

  const handleClick = (el) => {
    if (el === questionData.correct_answer) {
      setPoints(points + 1);
    }
    setSelected(selected + 1);
  };

  return (
    <>
      {selected < 10 && <SideBar selected={selected} points={points} />}

      <CardContainer>
        {questionData ? (
          <QuizCard
            question={question}
            answers={answers}
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
