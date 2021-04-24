import React from "react";
import { Button, Title, Card, Icon } from "./utils/styled";
import right from "./utils/img/right.png";

const QuizCard = ({ quizData, handleClick, checked }) => {
  const question = quizData && quizData.question;
  const answers =
    quizData && [quizData.correct_answer, ...quizData.incorrect_answers].sort();
  return (
    <Card>
      <Title>{question}</Title>
      {answers.map((answer) => {
        return (
          <Button onClick={() => handleClick(answer)} key={answer}>
            {answer}
            {checked && answer === quizData.correct_answer && (
              <Icon src={right} alt={"icon"} />
            )}
          </Button>
        );
      })}
    </Card>
  );
};

export default QuizCard;
