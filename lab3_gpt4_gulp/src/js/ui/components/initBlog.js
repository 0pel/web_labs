import blogData from "../../mockData/blogData.js";
import { blogTemplate } from "../templates/blogTemplate.js";

const initBlog = (blog_of_newsNode) => {
  blog_of_newsNode.insertAdjacentHTML(
    "beforeend",
    blogTemplate(blogData)
  );
};

export default initBlog;
