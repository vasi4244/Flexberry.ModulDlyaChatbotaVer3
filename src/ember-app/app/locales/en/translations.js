import $ from 'jquery';
import EmberFlexberryTranslations from 'ember-flexberry/locales/en/translations';

import IISModul_dlya_chatbota_ver3АнкетированиеLForm from './forms/i-i-s-modul-dlya-chatbota-ver3-анкетирование-l';
import IISModul_dlya_chatbota_ver3ДолжностиLForm from './forms/i-i-s-modul-dlya-chatbota-ver3-должности-l';
import IISModul_dlya_chatbota_ver3НастройкиОпрLForm from './forms/i-i-s-modul-dlya-chatbota-ver3-настройки-опр-l';
import IISModul_dlya_chatbota_ver3ОпросLForm from './forms/i-i-s-modul-dlya-chatbota-ver3-опрос-l';
import IISModul_dlya_chatbota_ver3ОтделыLForm from './forms/i-i-s-modul-dlya-chatbota-ver3-отделы-l';
import IISModul_dlya_chatbota_ver3СотрудникиLForm from './forms/i-i-s-modul-dlya-chatbota-ver3-сотрудники-l';
import IISModul_dlya_chatbota_ver3АнкетированиеEForm from './forms/i-i-s-modul-dlya-chatbota-ver3-анкетирование-e';
import IISModul_dlya_chatbota_ver3ДолжностиEForm from './forms/i-i-s-modul-dlya-chatbota-ver3-должности-e';
import IISModul_dlya_chatbota_ver3НастройкиОпрEForm from './forms/i-i-s-modul-dlya-chatbota-ver3-настройки-опр-e';
import IISModul_dlya_chatbota_ver3ОпросEForm from './forms/i-i-s-modul-dlya-chatbota-ver3-опрос-e';
import IISModul_dlya_chatbota_ver3ОтделыEForm from './forms/i-i-s-modul-dlya-chatbota-ver3-отделы-e';
import IISModul_dlya_chatbota_ver3СотрудникиEForm from './forms/i-i-s-modul-dlya-chatbota-ver3-сотрудники-e';
import IISModul_dlya_chatbota_ver3АнкетированиеModel from './models/i-i-s-modul-dlya-chatbota-ver3-анкетирование';
import IISModul_dlya_chatbota_ver3ДолжностиModel from './models/i-i-s-modul-dlya-chatbota-ver3-должности';
import IISModul_dlya_chatbota_ver3НастройкиОпрModel from './models/i-i-s-modul-dlya-chatbota-ver3-настройки-опр';
import IISModul_dlya_chatbota_ver3ОпросModel from './models/i-i-s-modul-dlya-chatbota-ver3-опрос';
import IISModul_dlya_chatbota_ver3ОтделыModel from './models/i-i-s-modul-dlya-chatbota-ver3-отделы';
import IISModul_dlya_chatbota_ver3СодержаниеModel from './models/i-i-s-modul-dlya-chatbota-ver3-содержание';
import IISModul_dlya_chatbota_ver3СотрудникиModel from './models/i-i-s-modul-dlya-chatbota-ver3-сотрудники';
import IISModul_dlya_chatbota_ver3СписокModel from './models/i-i-s-modul-dlya-chatbota-ver3-список';

const translations = {};
$.extend(true, translations, EmberFlexberryTranslations);

$.extend(true, translations, {
  models: {
    'i-i-s-modul-dlya-chatbota-ver3-анкетирование': IISModul_dlya_chatbota_ver3АнкетированиеModel,
    'i-i-s-modul-dlya-chatbota-ver3-должности': IISModul_dlya_chatbota_ver3ДолжностиModel,
    'i-i-s-modul-dlya-chatbota-ver3-настройки-опр': IISModul_dlya_chatbota_ver3НастройкиОпрModel,
    'i-i-s-modul-dlya-chatbota-ver3-опрос': IISModul_dlya_chatbota_ver3ОпросModel,
    'i-i-s-modul-dlya-chatbota-ver3-отделы': IISModul_dlya_chatbota_ver3ОтделыModel,
    'i-i-s-modul-dlya-chatbota-ver3-содержание': IISModul_dlya_chatbota_ver3СодержаниеModel,
    'i-i-s-modul-dlya-chatbota-ver3-сотрудники': IISModul_dlya_chatbota_ver3СотрудникиModel,
    'i-i-s-modul-dlya-chatbota-ver3-список': IISModul_dlya_chatbota_ver3СписокModel
  },

  'application-name': 'Modul_dlya_chatbota_ver3',

  forms: {
    loading: {
      'spinner-caption': 'Loading stuff, please wait for a moment...'
    },
    index: {
      greeting: 'Welcome to ember-flexberry test stand!'
    },

    application: {
      header: {
        menu: {
          'sitemap-button': {
            title: 'Menu'
          },
          'user-settings-service-checkbox': {
            caption: 'Use service to save user settings'
          },
          'show-menu': {
            caption: 'Show menu'
          },
          'hide-menu': {
            caption: 'Hide menu'
          },
          'language-dropdown': {
            caption: 'Application language',
            placeholder: 'Choose language'
          }
        },
        login: {
          caption: 'Login'
        },
        logout: {
          caption: 'Logout'
        }
      },

      footer: {
        'application-name': 'Modul_dlya_chatbota_ver3',
        'application-version': {
          caption: 'Addon version {{version}}',
          title: 'It is version of ember-flexberry addon, which uses in this dummy application ' +
          '(npm version + commit sha). ' +
          'Click to open commit on GitHub.'
        }
      },

      sitemap: {
        'application-name': {
          caption: 'Modul_dlya_chatbota_ver3',
          title: 'Modul_dlya_chatbota_ver3'
        },
        'application-version': {
          caption: 'Addon version {{version}}',
          title: 'It is version of ember-flexberry addon, which uses in this dummy application ' +
          '(npm version + commit sha). ' +
          'Click to open commit on GitHub.'
        },
        index: {
          caption: 'Home',
          title: ''
        },
        кадры: {
          caption: 'Кадры',
          title: 'Кадры',
          'i-i-s-modul-dlya-chatbota-ver3-должности-l': {
            caption: 'Должности',
            title: ''
          },
          'i-i-s-modul-dlya-chatbota-ver3-сотрудники-l': {
            caption: 'Сотрудники',
            title: ''
          },
          'i-i-s-modul-dlya-chatbota-ver3-отделы-l': {
            caption: 'Отделы',
            title: ''
          }
        },
        'работа-с-чат-ботом': {
          caption: 'Работа с чат-ботом',
          title: 'Работа с чат-ботом',
          'i-i-s-modul-dlya-chatbota-ver3-опрос-l': {
            caption: 'Опрос',
            title: ''
          },
          'i-i-s-modul-dlya-chatbota-ver3-настройки-опр-l': {
            caption: 'Настройки опр',
            title: ''
          },
          'i-i-s-modul-dlya-chatbota-ver3-анкетирование-l': {
            caption: 'Анкетирование',
            title: ''
          }
        }
      }
    },

    'edit-form': {
      'save-success-message-caption': 'Save operation succeed',
      'save-success-message': 'Object saved',
      'save-error-message-caption': 'Save operation failed',
      'delete-success-message-caption': 'Delete operation succeed',
      'delete-success-message': 'Object deleted',
      'delete-error-message-caption': 'Delete operation failed'
    },
    'i-i-s-modul-dlya-chatbota-ver3-анкетирование-l': IISModul_dlya_chatbota_ver3АнкетированиеLForm,
    'i-i-s-modul-dlya-chatbota-ver3-должности-l': IISModul_dlya_chatbota_ver3ДолжностиLForm,
    'i-i-s-modul-dlya-chatbota-ver3-настройки-опр-l': IISModul_dlya_chatbota_ver3НастройкиОпрLForm,
    'i-i-s-modul-dlya-chatbota-ver3-опрос-l': IISModul_dlya_chatbota_ver3ОпросLForm,
    'i-i-s-modul-dlya-chatbota-ver3-отделы-l': IISModul_dlya_chatbota_ver3ОтделыLForm,
    'i-i-s-modul-dlya-chatbota-ver3-сотрудники-l': IISModul_dlya_chatbota_ver3СотрудникиLForm,
    'i-i-s-modul-dlya-chatbota-ver3-анкетирование-e': IISModul_dlya_chatbota_ver3АнкетированиеEForm,
    'i-i-s-modul-dlya-chatbota-ver3-должности-e': IISModul_dlya_chatbota_ver3ДолжностиEForm,
    'i-i-s-modul-dlya-chatbota-ver3-настройки-опр-e': IISModul_dlya_chatbota_ver3НастройкиОпрEForm,
    'i-i-s-modul-dlya-chatbota-ver3-опрос-e': IISModul_dlya_chatbota_ver3ОпросEForm,
    'i-i-s-modul-dlya-chatbota-ver3-отделы-e': IISModul_dlya_chatbota_ver3ОтделыEForm,
    'i-i-s-modul-dlya-chatbota-ver3-сотрудники-e': IISModul_dlya_chatbota_ver3СотрудникиEForm
  },

});

export default translations;
