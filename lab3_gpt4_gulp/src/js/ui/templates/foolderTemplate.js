export const creatcopyrightTemplate = ({header}) => {
    const template = `
         <h6 class="copyright_text">
            ${header}
        </h6>
    `;
    return template;
};


export const foolderTemplate = ({
    copyrightData,}) => {
    const copyrightTemplate = 
    creatcopyrightTemplate(copyrightData);
    
    const resultTemplate = `
    <div class="copyright">
        ${copyrightTemplate}
    </div>
    `;
    return resultTemplate;

};

