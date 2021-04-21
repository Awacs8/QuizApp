import { useEffect, useState } from "react";
import QuizContainer from "./QuizContainer";
import { getQuestions } from "./services/api_service";
import { Container, Title, Button, Card } from "./utils/styled";

function App() {
  const [start, setStart] = useState(false);
  const [questions, setQuestions] = useState([]);
  useEffect(() => {
    getQuestions().then((response) => {
      //console.log(response.data.results);
      setQuestions(response.data.results);
    });
  }, []);
  return (
    <Container>
      <Title size="large">Quiz</Title>
      {start ? (
        <QuizContainer questions={questions} />
      ) : (
        <Card>
          <Button onClick={() => setStart(true)}>start</Button>
        </Card>
      )}
    </Container>
  );
}

export default App;
