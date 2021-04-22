import React from "react";
import { Button, Title, Card } from "./utils/styled";

const QuizCard = ({ question, answers, handleClick }) => {
  return (
    <Card>
      <Title>{question}</Title>
      {answers.map((el) => (
        <Button onClick={() => handleClick(el)} key={el}>
          {el}
        </Button>
      ))}
    </Card>
  );
};

export default QuizCard;
