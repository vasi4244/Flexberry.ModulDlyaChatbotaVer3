import { moduleForModel, test } from 'ember-qunit';

moduleForModel('i-i-s-modul-dlya-chatbota-ver3-список', 'Unit | Serializer | i-i-s-modul-dlya-chatbota-ver3-список', {
  // Specify the other units that are required for this test.
  needs: [
    'serializer:i-i-s-modul-dlya-chatbota-ver3-список',
    'service:syncer',
    'transform:file',
    'transform:decimal',
    'transform:guid',

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
  ],
});

// Replace this with your real tests.
test('it serializes records', function(assert) {
  let record = this.subject();

  let serializedRecord = record.serialize();

  assert.ok(serializedRecord);
});
