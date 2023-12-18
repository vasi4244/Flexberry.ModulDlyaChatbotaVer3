import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType
});

Router.map(function () {
  this.route('i-i-s-modul-dlya-chatbota-ver3-анкетирование-l');
  this.route('i-i-s-modul-dlya-chatbota-ver3-анкетирование-e',
  { path: 'i-i-s-modul-dlya-chatbota-ver3-анкетирование-e/:id' });
  this.route('i-i-s-modul-dlya-chatbota-ver3-анкетирование-e.new',
  { path: 'i-i-s-modul-dlya-chatbota-ver3-анкетирование-e/new' });
  this.route('i-i-s-modul-dlya-chatbota-ver3-должности-l');
  this.route('i-i-s-modul-dlya-chatbota-ver3-должности-e',
  { path: 'i-i-s-modul-dlya-chatbota-ver3-должности-e/:id' });
  this.route('i-i-s-modul-dlya-chatbota-ver3-должности-e.new',
  { path: 'i-i-s-modul-dlya-chatbota-ver3-должности-e/new' });
  this.route('i-i-s-modul-dlya-chatbota-ver3-настройки-опр-l');
  this.route('i-i-s-modul-dlya-chatbota-ver3-настройки-опр-e',
  { path: 'i-i-s-modul-dlya-chatbota-ver3-настройки-опр-e/:id' });
  this.route('i-i-s-modul-dlya-chatbota-ver3-настройки-опр-e.new',
  { path: 'i-i-s-modul-dlya-chatbota-ver3-настройки-опр-e/new' });
  this.route('i-i-s-modul-dlya-chatbota-ver3-опрос-l');
  this.route('i-i-s-modul-dlya-chatbota-ver3-опрос-e',
  { path: 'i-i-s-modul-dlya-chatbota-ver3-опрос-e/:id' });
  this.route('i-i-s-modul-dlya-chatbota-ver3-опрос-e.new',
  { path: 'i-i-s-modul-dlya-chatbota-ver3-опрос-e/new' });
  this.route('i-i-s-modul-dlya-chatbota-ver3-отделы-l');
  this.route('i-i-s-modul-dlya-chatbota-ver3-отделы-e',
  { path: 'i-i-s-modul-dlya-chatbota-ver3-отделы-e/:id' });
  this.route('i-i-s-modul-dlya-chatbota-ver3-отделы-e.new',
  { path: 'i-i-s-modul-dlya-chatbota-ver3-отделы-e/new' });
  this.route('i-i-s-modul-dlya-chatbota-ver3-сотрудники-l');
  this.route('i-i-s-modul-dlya-chatbota-ver3-сотрудники-e',
  { path: 'i-i-s-modul-dlya-chatbota-ver3-сотрудники-e/:id' });
  this.route('i-i-s-modul-dlya-chatbota-ver3-сотрудники-e.new',
  { path: 'i-i-s-modul-dlya-chatbota-ver3-сотрудники-e/new' });
});

export default Router;
