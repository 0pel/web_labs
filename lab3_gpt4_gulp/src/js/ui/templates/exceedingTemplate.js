export const createHeaderTemplate = (header) => {
  return `
    <p class="container__right">
          Запросить ранний доступ
    </p>
    <h2 class="header__right">
      ${header}
    </h2>
  `;
};

export const createDescriptionTemplate = (description) => {
  return `
    <p class="container__right">
      ${description}
    </p>
    <a href="#" class="cta__right">Запросить ранний доступ</a>
  `;
};

export const createIllustrationTemplate = ({ src, alt }) => {
  return `
    <img src="${src}" alt="${alt}" />
  `;
};

export const exceedingTemplate = ({
  illustration,
  header,
  description,
}) => {
  const headerTemplate = createHeaderTemplate(header);
  const descriptionTemplate = createDescriptionTemplate(description);
  const illustrationTemplate = createIllustrationTemplate(illustration);

  // от перестановки div меняется отображение
  const resultTemplate = `
    <div class="exceeding_all_expectations__left">
        ${illustrationTemplate}
    </div>

    <div class="exceeding_all_expectations__right">
        ${headerTemplate}
        ${descriptionTemplate}   
    </div>
    `;

  return resultTemplate;
};
