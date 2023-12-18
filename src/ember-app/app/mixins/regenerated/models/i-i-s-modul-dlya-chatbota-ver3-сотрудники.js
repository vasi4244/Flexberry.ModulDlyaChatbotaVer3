import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  имя: DS.attr('string'),
  номерПас: DS.attr('number'),
  отчество: DS.attr('string'),
  серияПас: DS.attr('number'),
  табНомер: DS.attr('number'),
  фамилия: DS.attr('string'),
  должности: DS.belongsTo('i-i-s-modul-dlya-chatbota-ver3-должности', { inverse: null, async: false }),
  отделы: DS.belongsTo('i-i-s-modul-dlya-chatbota-ver3-отделы', { inverse: null, async: false })
});

export let ValidationRules = {
  имя: {
    descriptionKey: 'models.i-i-s-modul-dlya-chatbota-ver3-сотрудники.validations.имя.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  номерПас: {
    descriptionKey: 'models.i-i-s-modul-dlya-chatbota-ver3-сотрудники.validations.номерПас.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  отчество: {
    descriptionKey: 'models.i-i-s-modul-dlya-chatbota-ver3-сотрудники.validations.отчество.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  серияПас: {
    descriptionKey: 'models.i-i-s-modul-dlya-chatbota-ver3-сотрудники.validations.серияПас.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  табНомер: {
    descriptionKey: 'models.i-i-s-modul-dlya-chatbota-ver3-сотрудники.validations.табНомер.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  фамилия: {
    descriptionKey: 'models.i-i-s-modul-dlya-chatbota-ver3-сотрудники.validations.фамилия.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  должности: {
    descriptionKey: 'models.i-i-s-modul-dlya-chatbota-ver3-сотрудники.validations.должности.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  отделы: {
    descriptionKey: 'models.i-i-s-modul-dlya-chatbota-ver3-сотрудники.validations.отделы.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('СотрудникиE', 'i-i-s-modul-dlya-chatbota-ver3-сотрудники', {
    табНомер: attr('Табельный номер', { index: 0 }),
    фамилия: attr('Фамилия', { index: 1 }),
    имя: attr('Имя', { index: 2 }),
    отчество: attr('Отчество', { index: 3 }),
    номерПас: attr('Номер паспорта', { index: 4 }),
    серияПас: attr('Серия паспорта', { index: 5 }),
    отделы: belongsTo('i-i-s-modul-dlya-chatbota-ver3-отделы', 'Отделы', {
      наименование: attr('Отдел', { index: 7, hidden: true })
    }, { index: 6, displayMemberPath: 'наименование' }),
    должности: belongsTo('i-i-s-modul-dlya-chatbota-ver3-должности', 'Должности', {
      наименование: attr('Должность', { index: 9, hidden: true })
    }, { index: 8, displayMemberPath: 'наименование' })
  });

  modelClass.defineProjection('СотрудникиL', 'i-i-s-modul-dlya-chatbota-ver3-сотрудники', {
    табНомер: attr('Табельный номер', { index: 0 }),
    фамилия: attr('Фамилия', { index: 1 }),
    имя: attr('Имя', { index: 2 }),
    отчество: attr('Отчество', { index: 3 }),
    номерПас: attr('Номер паспорта', { index: 4 }),
    серияПас: attr('Серия паспорта', { index: 5 }),
    отделы: belongsTo('i-i-s-modul-dlya-chatbota-ver3-отделы', 'Отдел', {
      наименование: attr('Отдел', { index: 6 })
    }, { index: -1, hidden: true }),
    должности: belongsTo('i-i-s-modul-dlya-chatbota-ver3-должности', 'Должность', {
      наименование: attr('Должность', { index: 7 })
    }, { index: -1, hidden: true })
  });
};
