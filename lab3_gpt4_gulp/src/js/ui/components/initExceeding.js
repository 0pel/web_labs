import { exceedingData } from "../../mockData/exceedingData.js";
import { exceedingTemplate } from "../templates/exceedingTemplate.js";

const initExceeding = (exceeding_all_expectationsNode) => {
  exceeding_all_expectationsNode.insertAdjacentHTML("beforeend", exceedingTemplate(exceedingData));
};

export default initExceeding;
