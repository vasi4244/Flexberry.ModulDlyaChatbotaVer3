import Controller from '@ember/controller';
import { computed } from '@ember/object';

export default Controller.extend({
  sitemap: computed('i18n.locale', function () {
    let i18n = this.get('i18n');

    return {
      nodes: [
        {
          link: 'index',
          icon: 'home',
          caption: i18n.t('forms.application.sitemap.index.caption'),
          title: i18n.t('forms.application.sitemap.index.title'),
          children: null
        }, {
          link: null,
          icon: 'list',
          caption: i18n.t('forms.application.sitemap.кадры.caption'),
          title: i18n.t('forms.application.sitemap.кадры.title'),
          children: [{
            link: 'i-i-s-modul-dlya-chatbota-ver3-должности-l',
            caption: i18n.t('forms.application.sitemap.кадры.i-i-s-modul-dlya-chatbota-ver3-должности-l.caption'),
            title: i18n.t('forms.application.sitemap.кадры.i-i-s-modul-dlya-chatbota-ver3-должности-l.title'),
            icon: 'table',
            children: null
          }, {
            link: 'i-i-s-modul-dlya-chatbota-ver3-сотрудники-l',
            caption: i18n.t('forms.application.sitemap.кадры.i-i-s-modul-dlya-chatbota-ver3-сотрудники-l.caption'),
            title: i18n.t('forms.application.sitemap.кадры.i-i-s-modul-dlya-chatbota-ver3-сотрудники-l.title'),
            icon: 'chart bar',
            children: null
          }, {
            link: 'i-i-s-modul-dlya-chatbota-ver3-отделы-l',
            caption: i18n.t('forms.application.sitemap.кадры.i-i-s-modul-dlya-chatbota-ver3-отделы-l.caption'),
            title: i18n.t('forms.application.sitemap.кадры.i-i-s-modul-dlya-chatbota-ver3-отделы-l.title'),
            icon: 'archive',
            children: null
          }]
        }, {
          link: null,
          icon: 'list',
          caption: i18n.t('forms.application.sitemap.работа-с-чат-ботом.caption'),
          title: i18n.t('forms.application.sitemap.работа-с-чат-ботом.title'),
          children: [{
            link: 'i-i-s-modul-dlya-chatbota-ver3-опрос-l',
            caption: i18n.t('forms.application.sitemap.работа-с-чат-ботом.i-i-s-modul-dlya-chatbota-ver3-опрос-l.caption'),
            title: i18n.t('forms.application.sitemap.работа-с-чат-ботом.i-i-s-modul-dlya-chatbota-ver3-опрос-l.title'),
            icon: 'folder open',
            children: null
          }, {
            link: 'i-i-s-modul-dlya-chatbota-ver3-настройки-опр-l',
            caption: i18n.t('forms.application.sitemap.работа-с-чат-ботом.i-i-s-modul-dlya-chatbota-ver3-настройки-опр-l.caption'),
            title: i18n.t('forms.application.sitemap.работа-с-чат-ботом.i-i-s-modul-dlya-chatbota-ver3-настройки-опр-l.title'),
            icon: 'calendar',
            children: null
          }, {
            link: 'i-i-s-modul-dlya-chatbota-ver3-анкетирование-l',
            caption: i18n.t('forms.application.sitemap.работа-с-чат-ботом.i-i-s-modul-dlya-chatbota-ver3-анкетирование-l.caption'),
            title: i18n.t('forms.application.sitemap.работа-с-чат-ботом.i-i-s-modul-dlya-chatbota-ver3-анкетирование-l.title'),
            icon: 'tags',
            children: null
          }]
        }
      ]
    };
  }),
})