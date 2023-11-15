import { closeWidgetLogin } from './modules/destroyers/closeWidgetLogin';
import { showWidgetLogin } from './modules/starters/showWidgetLogin';

window.addEventListener('DOMContentLoaded', () => {
  // все скрипты должны быть в обработчике 'DOMContentLoaded', но не все в 'load'
  // в load следует добавить скрипты, не участвующие в работе первого экрана
  // window.addEventListener('load', () => {});

  // Modules
  // ---------------------------------
  window.showWidgetLogin = showWidgetLogin;
  window.closeWidgetLogin = closeWidgetLogin;
});
