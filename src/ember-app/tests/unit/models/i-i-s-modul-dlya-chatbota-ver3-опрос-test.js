import { moduleForModel, test } from 'ember-qunit';

moduleForModel('i-i-s-modul-dlya-chatbota-ver3-опрос', 'Unit | Model | i-i-s-modul-dlya-chatbota-ver3-опрос', {
  // Specify the other units that are required for this test.
  needs: [
    'model:i-i-s-modul-dlya-chatbota-ver3-анкетирование',
    'model:i-i-s-modul-dlya-chatbota-ver3-должности',
    'model:i-i-s-modul-dlya-chatbota-ver3-настройки-опр',
    'model:i-i-s-modul-dlya-chatbota-ver3-опрос',
    'model:i-i-s-modul-dlya-chatbota-ver3-отделы',
    'model:i-i-s-modul-dlya-chatbota-ver3-содержание',
    'model:i-i-s-modul-dlya-chatbota-ver3-сотрудники',
    'model:i-i-s-modul-dlya-chatbota-ver3-список',
    'validator:ds-error',
    'validator:presence',
    'validator:number',
    'validator:date',
    'validator:belongs-to',
    'validator:has-many',
    'service:syncer',
  ],
});

test('it exists', function(assert) {
  let model = this.subject();

  // let store = this.store();
  assert.ok(!!model);
});
