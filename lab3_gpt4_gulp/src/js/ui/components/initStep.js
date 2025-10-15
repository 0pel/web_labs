import  { step_into_the_futureData }  from "../../mockData/step_into_the_futureData.js";
import { step_into_the_futureTemplate } from "../templates/step_into_the_futureTemplate.js";

const initStep = (step_into_the_futureNode) => {
  step_into_the_futureNode.insertAdjacentHTML(
    "beforeend",
    step_into_the_futureTemplate(step_into_the_futureData)
  );
};

export default initStep;
