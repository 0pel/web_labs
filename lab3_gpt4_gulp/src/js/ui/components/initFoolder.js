import foolderData from "../../mockData/foolderData.js";
import { foolderTemplate } from "../templates/foolderTemplate.js";

const initFoolder = (foolderNode) => {
  foolderNode.insertAdjacentHTML(
    "beforeend",
    foolderTemplate(foolderData)
  );
};

export default initFoolder;
