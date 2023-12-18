import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  сотрудники: DS.belongsTo('i-i-s-modul-dlya-chatbota-ver3-сотрудники', { inverse: null, async: false }),
  анкетирование: DS.belongsTo('i-i-s-modul-dlya-chatbota-ver3-анкетирование', { inverse: 'список', async: false })
});

export let ValidationRules = {
  сотрудники: {
    descriptionKey: 'models.i-i-s-modul-dlya-chatbota-ver3-список.validations.сотрудники.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  анкетирование: {
    descriptionKey: 'models.i-i-s-modul-dlya-chatbota-ver3-список.validations.анкетирование.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('СписокE', 'i-i-s-modul-dlya-chatbota-ver3-список', {
    сотрудники: belongsTo('i-i-s-modul-dlya-chatbota-ver3-сотрудники', 'Сотрудники', {
      фамилия: attr('Фамилия', { index: 1, hidden: true }),
      имя: attr('Имя', { index: 2 }),
      отчество: attr('Отчество', { index: 3 })
    }, { index: 0, displayMemberPath: 'фамилия' })
  });
};
