"use strict";
import './scss/main.scss';
import { initNavigation } from './js/navigation';
import { initPageHandler } from './js/page-handler.js';

document.addEventListener('DOMContentLoaded', () => {
  initNavigation();
  initPageHandler();
});