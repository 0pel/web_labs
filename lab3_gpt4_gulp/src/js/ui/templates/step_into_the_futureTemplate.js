export const createstep_into_the_future__heading__middleTemplate = ({header}) => {
    const template = `
        <h1 class="heading__middle">
            ${header}
        </h1> 
    `;
    return template;
}

export const createstep_into_the_futur__button__middleTemplate = ({title}) => {
    const template =`
    <button class="step_into_the_futur btn_itf">
        ${title}
    </button>
    `;
    return template;
}

export const createstep_into_the_future__logoTemplate = ({src,alt,href,content_1, content_2}) => {
    const template=`
    <a href="${href}" class="logo__link">
        <img class="link__name" src="${src}" alt="${alt}"/>
    </a>
    <h5 class="step_into_the_future_address">
        ${content_1}
    </h5>
    <h5 class="step_into_the_future_rights">
        ${content_2}
    </h5>
    `;
    return template;
}

export const createstep_into_the_future_linkstTemplate = ({header,content_1,content_2,content_3,content_4}) => {
    const template=`
    <h6 class="links">
        ${header}
    </h6>
    <div class="indoor_unit_links">
        <h5 class="overons">
            ${content_1}
        </h5>
        <h5 class="social_networks">
            ${content_2}
        </h5>
        <h5 class="counters">
            ${content_3}
        </h5>
        <h5 class="contacts">
            ${content_4}
        </h5>
    </div>
    `;
    return template;
}

export const createstep_into_the_future_companyTemplate = ({header, content_1, content_2, content_3}) => {
    const template=`
    <h6 class="company">
        ${header}
    </h6>
    <div class="indoor_unit_company">
        <h5 class="use">
        ${content_1}
        </h5>
        <h5 class="persian_data">
        ${content_2}
        </h5>
        <h5 class="contacts">
        ${content_3}
        </h5>
    </div>
    `;
    return template;
}

export const creatstep_into_the_future_contactsTemplate = ({header,content_1,content_2,content_3,content_4}) =>{
    const template =`
    <h6 class="contacts">
        ${header}
    </h6>
    <div class="indoor_unit_contacts">
        <h5 class="address">
            ${content_1}
        </h5>
        <h5 class="telephone">
            ${content_2}
        </h5>
        <h5 class="mail">
            ${content_3}
        </h5>
    `;
    return template;
}



export const step_into_the_futureTemplate = ({
    step_into_the_future__heading__middleData,
    step_into_the_futur__button__middleData,
    step_into_the_future__logoData,
    step_into_the_future_linksData,
    step_into_the_future_companyData,
    step_into_the_future_contactsData}) => {
    const step_into_the_future__heading__middleTemplate = 
    createstep_into_the_future__heading__middleTemplate(step_into_the_future__heading__middleData);
    const step_into_the_futur__button__middleTemplate = 
    createstep_into_the_futur__button__middleTemplate(step_into_the_futur__button__middleData);
    const step_into_the_future__logoTemplate = 
    createstep_into_the_future__logoTemplate(step_into_the_future__logoData);
    const step_into_the_future_linksTemplate = 
    createstep_into_the_future_linkstTemplate(step_into_the_future_linksData);
    const step_into_the_future_companyTemplate = 
    createstep_into_the_future_companyTemplate(step_into_the_future_companyData);
    const step_into_the_future_contactsTemplate = 
    creatstep_into_the_future_contactsTemplate(step_into_the_future_contactsData);

    const resultTemplate = `
        <div class="step_into_the_futur__heading__middle">
           ${step_into_the_future__heading__middleTemplate}
        </div>
        <div class="step_into_the_futur__button__middle">
           ${step_into_the_futur__button__middleTemplate}
        </div>
        <div class="step_into_the_future__basement">
            <div class="step_into_the_future__logo">
            ${step_into_the_future__logoTemplate}
            </div>
            <div class="step_into_the_future_links">
            ${step_into_the_future_linksTemplate} 
            </div>
            <div class="step_into_the_future_company">
            ${step_into_the_future_companyTemplate}
            </div>
            <div class="step_into_the_future_contacts">
            ${step_into_the_future_contactsTemplate}
            </div>
        </div>
   
    `;

    return resultTemplate;

};

