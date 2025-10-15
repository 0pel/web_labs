import initHeader from "./../components/initHeader.js";
import initHero from "./../components/initHero.js";
import initBrands from "./../components/initBrands.js";
import initWhatIsGpt from "./../components/initWhatIsGpt.js";
import initFutureHere from "./../components/initFutureHere.js";

import initExceeding from "./../components/initExceeding.js";
import initRegistration from "./../components/initRegistration.js";
import initBlog from "./../components/initBlog.js";
import initStep from "./../components/initStep.js";
import initFoolder from "./../components/initFoolder.js";

import initBurger from "./../components/initBurger.js";

const createHomePageTemplate = (rootNode) => {
  // формируем шаблон базовых секций для дальнейшего монтирования в них
  // соответствующих разделов
  const template = `
    <section class="section header"></section>
    <section class="section hero_section"></section>
    <section class="section brands_section"></section>
    <section class="section what_is_chatgpt_section"></section>
    <section class="section future_here"></section>

    <section class="section exceeding_all_expectations"></section>
    <section class="section registration_panel buttom_header"></section>
    <section class="section blog_of_news"></section>
    <section class="section step_into_the_future"></section>
    <section class="section foolder"></section>
  `;

  rootNode.insertAdjacentHTML("beforeend", template);
};

const homePage = () => {
  // инициализация элементов страницы
  const rootNode = document.querySelector("#root");
  createHomePageTemplate(rootNode);

  // инициализация шапки страницы с мок датой
  const headerNode = rootNode.querySelector(".header");
  initHeader(headerNode);

  // инициализация хиро раздела
  const heroNode = rootNode.querySelector(".hero_section");
  initHero(heroNode);

  // инициализация раздела брендов
  const brandsNode = rootNode.querySelector(".brands_section");
  initBrands(brandsNode);

  // инициализация раздела "Что такое chatGPT"
  const whatIsGptNode = rootNode.querySelector(".what_is_chatgpt_section");
  initWhatIsGpt(whatIsGptNode);

  // инициализация раздела "Будущее наступило" с мок датой
  const futureHereNode = rootNode.querySelector(".future_here");
  initFutureHere(futureHereNode);


  // инициализация раздела "Превышение всех ожиданий" с мок датой
  const exceeding_all_expectationsNode = rootNode.querySelector(".exceeding_all_expectations");
  initExceeding(exceeding_all_expectationsNode);

  // инициализация раздела "Панель регистрации" с мок датой
  const registration_panelNode = rootNode.querySelector(".registration_panel");
  initRegistration(registration_panelNode);

  // инициализация раздела "Новостной блог" с мок датой
  const blog_of_newsNode = rootNode.querySelector(".blog_of_news");
  initBlog(blog_of_newsNode);

  // инициализация раздела "Шаг в будущее" с мок датой
  const step_into_the_futureNode = rootNode.querySelector(".step_into_the_future");
  initStep(step_into_the_futureNode);

  // инициализация раздела "Футер"
  const foolderNode = rootNode.querySelector(".foolder");
  initFoolder(foolderNode);

  // инициализация бургера для адаптивного меню
  initBurger(headerNode);
};

export default homePage;
