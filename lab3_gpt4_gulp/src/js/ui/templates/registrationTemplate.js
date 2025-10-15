export const createRegistrationTopTemplate = ({ header, content }) => {
    const template = `
    <div class="registration_panel_left">
      <b href="#" class="left__cta">
        ${content}
      </b>
      <h4 class="top__header">
        ${header}
      </h4>
    </div>
  `;

    return template;
};

export const createButtonTemplate = ({ title }) => {
    const template = `
    <button class="cta_buttons__signin btn black-btn">
      ${title}
    </button>
  `;

    return template;
};

export const registrationTemplate = ({
                                         registrationTopData,
                                         registrationCtaButton
                                     }) => {
    const registrationTopTemplate = createRegistrationTopTemplate(registrationTopData);
    const registrationCtaButtonTemplate = createButtonTemplate(registrationCtaButton);

    const resultTemplate = `
    <div class="registration_panel_container">
      ${registrationTopTemplate}
      <div class="registration_panel_right">
        ${registrationCtaButtonTemplate}
      </div>
    </div>
  `;

    return resultTemplate;
};