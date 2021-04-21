import React from "react";
import { Aside, Title } from "./utils/styled";
//import Counter from "./Counter";

const SideBar = ({ selected, points }) => {
  return (
    <Aside>
      <Title size="small">Points: {points}</Title>
      <Title size="small">Question: {selected + 1}/10</Title>
      <Title size="small">Remaining time: 20</Title>
    </Aside>
  );
};

export default SideBar;
