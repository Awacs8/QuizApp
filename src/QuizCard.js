import React from "react";
import { Button, Title } from "./utils/styled";
import { Card } from "./utils/styled";

const QuizCard = ({ question, answers, handleClick }) => {
  // const { question, correct_answer, incorrect_answers } = questionData;
  // const answers = [correct_answer, ...incorrect_answers].sort();

  return (
    <Card>
      <Title>{question}</Title>
      {answers.map((el) => (
        <Button onClick={() => handleClick(el)} key={el}>
          {el}
        </Button>
      ))}
      {/* {question && answers ? (
        <>
          <Title>{question}</Title>
          {answers.map((el) => (
            <Button onClick={() => handleClick(el)} key={el}>
              {el}
            </Button>
          ))}
        </>
      ) : (
        <Button>TryAgain</Button>
      )} */}
    </Card>
  );
};

export default QuizCard;
