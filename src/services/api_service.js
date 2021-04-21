import axios from "axios";
const url = "https://opentdb.com/api.php?amount=10&category=22";

export const getQuestions = async () => {
  return await axios.get(`${url}`);
};
