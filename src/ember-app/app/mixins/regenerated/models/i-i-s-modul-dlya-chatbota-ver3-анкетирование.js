import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  дата: DS.attr('date'),
  опрос: DS.belongsTo('i-i-s-modul-dlya-chatbota-ver3-опрос', { inverse: null, async: false }),
  список: DS.hasMany('i-i-s-modul-dlya-chatbota-ver3-список', { inverse: 'анкетирование', async: false })
});

export let ValidationRules = {
  дата: {
    descriptionKey: 'models.i-i-s-modul-dlya-chatbota-ver3-анкетирование.validations.дата.__caption__',
    validators: [
      validator('ds-error'),
      validator('date'),
    ],
  },
  опрос: {
    descriptionKey: 'models.i-i-s-modul-dlya-chatbota-ver3-анкетирование.validations.опрос.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  список: {
    descriptionKey: 'models.i-i-s-modul-dlya-chatbota-ver3-анкетирование.validations.список.__caption__',
    validators: [
      validator('ds-error'),
      validator('has-many'),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('АнкетированиеE', 'i-i-s-modul-dlya-chatbota-ver3-анкетирование', {
    дата: attr('Дата', { index: 0 }),
    опрос: belongsTo('i-i-s-modul-dlya-chatbota-ver3-опрос', 'Опрос', {
      наименование: attr('Наименование', { index: 2, hidden: true })
    }, { index: 1, displayMemberPath: 'наименование' }),
    список: hasMany('i-i-s-modul-dlya-chatbota-ver3-список', 'Список', {
      сотрудники: belongsTo('i-i-s-modul-dlya-chatbota-ver3-сотрудники', 'Сотрудники', {
        фамилия: attr('Фамилия', { index: 1, hidden: true }),
        имя: attr('Имя', { index: 2 }),
        отчество: attr('Отчество', { index: 3 })
      }, { index: 0, displayMemberPath: 'фамилия' })
    })
  });

  modelClass.defineProjection('АнкетированиеL', 'i-i-s-modul-dlya-chatbota-ver3-анкетирование', {
    дата: attr('Дата', { index: 0 }),
    опрос: belongsTo('i-i-s-modul-dlya-chatbota-ver3-опрос', 'Наименование', {
      наименование: attr('Наименование', { index: 1 })
    }, { index: -1, hidden: true })
  });
};
