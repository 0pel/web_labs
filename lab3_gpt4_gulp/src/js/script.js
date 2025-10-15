import { appData, fetchExternalData, updateData } from './data/api.js';
import { createMainTemplate } from './templates/components.js';

class App {
  constructor() {
    this.root = document.getElementById('root');
    this.data = appData;
    this.init();
  }

  init() {
    this.render();
    this.setupEventListeners();
  }

  render() {
    if (!this.root) return;

    this.root.innerHTML = createMainTemplate(this.data);
  }

  setupEventListeners() {
    // Можно добавить обработчики событий для динамического обновления
    document.addEventListener('dataUpdated', () => {
      this.render();
    });
  }

  // Метод для обновления данных извне
  async loadExternalData(apiUrl) {
    const externalData = await fetchExternalData(apiUrl);
    if (externalData) {
      this.data = updateData(externalData);
      this.render();

      // Отправляем кастомное событие
      document.dispatchEvent(new CustomEvent('dataUpdated'));
    }
  }

  // Метод для ручного обновления данных
  updateDataManually(newData) {
    this.data = updateData(newData);
    this.render();
    document.dispatchEvent(new CustomEvent('dataUpdated'));
  }
}

// Инициализация приложения
const app = new App();

// Экспорт для доступа извне (например, из консоли браузера)
window.app = app;

// Пример использования с внешним API
// app.loadExternalData('https://api.example.com/gpt4-data');