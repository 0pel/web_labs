export const createBlogTopTemplate = ({ header }) => {
    const template = `
        <h1 class="blog_of_news_text">
            ${header}
        </h1>
    `;
    return template;
};


export const createBlog1containersTemplate = ({ src, alt }) => {
    const template = `
        <img class="blog_of_news_5containers_img1" 
        src= ${src} 
        alt= ${alt} />
    `;
    return template;
};


export const createBlog_of_news_5containers_1newstextongroundTemplate = ({ header, content, bottom }) => {
    const template = `
        <div class="blog_of_news_5containers_1newstextonground bigground">
            <h7 class="blog_of_news_5containers_1newstextonground_top">
                ${header}
            </h7>
            <h3 class="blog_of_news_5containers_1newstextonground_middle">
                ${content}
            </h3>
            <h7 class="blog_of_news_5containers_1newstextonground_bottom">
                ${bottom}
            </h7>
        </div>
    `;
    return template;
};


export const createBlog_of_news_5containers_2newscontainerTemplate = ({ src1, alt1, src2, alt2 }) => {
    const template = `
        <div class="blog_of_news_5containers_2newscontainer">
            <img class="blog_of_news_5containers_img2" src=${src1} alt=${alt1}/>
            <img class="" src=${src2} alt=${alt2} />
        </div>
    `;
    return template;
};


export const createBlog_of_news_5containers_3newscontainerTemplate = ({ src1, alt1, src2, alt2 }) => {
    const template = `
        <div class="blog_of_news_5containers_3newscontainer">
            <img class="blog_of_news_5containers_img3" src=${src1} alt=${alt1}/>
            <img class="" src=${src2} alt=${alt2} />
        </div>
    `;
    return template;
};


export const createBlog_of_news_5containers_4newscontainerTemplate = ({ src1, alt1, src2, alt2 }) => {
    const template = `
        <div class="blog_of_news_5containers_4newscontainer">
            <img class="blog_of_news_5containers_img4" src=${src1} alt=${alt1}/>
            <img class="" src=${src2} alt=${alt2} />
        </div>
    `;
    return template;
};


export const createBlog_of_news_5containers_5newscontainerTemplate = ({ src1, alt1, src2, alt2 }) => {
    const template = `
        <div class="blog_of_news_5containers_5newscontainer">
            <img class="blog_of_news_5containers_img5" src=${src1} alt=${alt1}/>
            <img class="" src=${src2} alt=${alt2} />
        </div>
    `;
    return template;
};

export const blogTemplate = ({
    blogTopData,
    blog1containersData,
    blog_of_news_5containers_1newstextongroundData,
    blog_of_news_5containers_2newscontainerData,
    blog_of_news_5containers_3newscontainerData,
    blog_of_news_5containers_4newscontainerData,
    blog_of_news_5containers_5newscontainerData,

}) => {
    const blogTopTemplate = createBlogTopTemplate(blogTopData);
    const blog1containersTemplate = createBlog1containersTemplate(blog1containersData);
    const blog_of_news_5containers_1newstextongroundTemplate = createBlog_of_news_5containers_1newstextongroundTemplate(blog_of_news_5containers_1newstextongroundData);
    const blog_of_news_5containers_2newscontainerTemplate = createBlog_of_news_5containers_2newscontainerTemplate(blog_of_news_5containers_2newscontainerData);
    const blog_of_news_5containers_3newscontainerTemplate = createBlog_of_news_5containers_3newscontainerTemplate(blog_of_news_5containers_3newscontainerData);
    const blog_of_news_5containers_4newscontainerTemplate = createBlog_of_news_5containers_4newscontainerTemplate(blog_of_news_5containers_4newscontainerData);
    const blog_of_news_5containers_5newscontainerTemplate = createBlog_of_news_5containers_5newscontainerTemplate(blog_of_news_5containers_5newscontainerData);



    const resultTemplate = `
        <div class="blog_of_news">
            ${blogTopTemplate}
            <div class="blog_of_news_5containers">
                <div class="blog_of_news_5containers_1newscontainer">
                    ${blog1containersTemplate}
                    ${blog_of_news_5containers_1newstextongroundTemplate}
                </div>
                <div class="blog_of_news_5containers_group">
                    ${blog_of_news_5containers_2newscontainerTemplate}
                    ${blog_of_news_5containers_3newscontainerTemplate}
                    ${blog_of_news_5containers_4newscontainerTemplate}
                    ${blog_of_news_5containers_5newscontainerTemplate}
                </div>
            </div>
        </div>
    `;

    return resultTemplate;
};
