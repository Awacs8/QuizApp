import styled from "styled-components";
import background from "./img/background.jpg";

export const Container = styled.div`
  background-image: url(${background});
  background-size: cover;
  display: flex;
  flex-direction: column;
  align-items: center;
  //justify-content: center;
  min-height: 100vh;
`;

export const Title = styled.h4`
  ${(props) => {
    if (props.size === "small") {
      return "font-size: 18px;";
    } else if (props.size === "large") {
      return "font-size: 50px;";
    } else {
      return "font-size: 23px;";
    }
  }}
  color: lightgrey;
  text-align: center;
  padding: 8px;
`;

export const CardContainer = styled(Container)`
  flex-direction: row;
  margin: auto;
  min-height: fit-content;
`;

export const Card = styled.article`
  background-color: rgba(51, 47, 60, 0.5);
  color: white;
  border: 3px solid black;
  border-radius: 10px;
  width: 350px;
  height: 400px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: auto;
`;

export const Button = styled.button`
  background-color: rgb(42, 42, 42);
  color: white;
  font-size: 20px;
  font-weight: 700;
  border: 3px solid black;
  border-radius: 10px;
  width: 200px;
  height: 50px;
  padding: 1px 4px;
  :hover {
    background-color: rgba(42, 42, 42, 0.5);
    color: black;
  }
`;

export const Aside = styled.aside`
  background-color: rgba(51, 47, 60, 0.5);
  margin-left: auto;
  padding: 20px;
  border: 3px solid black;
  border-radius: 10px;
`;
