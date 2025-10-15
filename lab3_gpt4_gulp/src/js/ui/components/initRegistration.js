import { registrationData } from "../../mockData/registrationData.js";
import { registrationTemplate } from "../templates/registrationTemplate.js";

const initRegistration = (registration_panelNode) => {
  registration_panelNode.insertAdjacentHTML("beforeend", registrationTemplate(registrationData));
};

export default initRegistration;
