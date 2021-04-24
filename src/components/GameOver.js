import React from "react";
import { Button, Title, Card } from "../utils/styled";

const GameOver = ({ points }) => {
  const refresh = () => window.location.reload();
  return (
    <Card>
      <Title>Total points:{points}/10</Title>
      <Button onClick={refresh}>TryAgain</Button>
    </Card>
  );
};

export default GameOver;
