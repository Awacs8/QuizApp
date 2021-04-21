import React, { useState } from "react";
import QuizCard from "./QuizCard";
import { CardContainer, Button } from "./utils/styled";
import SideBar from "./SideBar";

const QuizContainer = ({ questions }) => {
  const [selected, setSelected] = useState(0);
  const [points, setPoints] = useState(0);
  const questionData = questions[selected];

  const question = questionData.question;
  const answers = [
    questionData.correct_answer,
    ...questionData.incorrect_answers,
  ].sort();

  const handleClick = (el) => {
    if (el === questionData.correct_answer) {
      setPoints(points + 1);
    }
    setSelected(selected + 1);
  };

  return (
    <>
      <SideBar selected={selected} points={points} />
      <CardContainer>
        <QuizCard
          question={question}
          answers={answers}
          handleClick={handleClick}
          setPoints={setPoints}
        />

        {selected === 10 && <Button>TryAgain</Button>}
      </CardContainer>
    </>
  );
};

export default QuizContainer;
