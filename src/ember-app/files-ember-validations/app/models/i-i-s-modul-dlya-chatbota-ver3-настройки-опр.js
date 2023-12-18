import {
  defineNamespace,
  defineProjections,
  Model as НастройкиОпрMixin
} from '../mixins/regenerated/models/i-i-s-modul-dlya-chatbota-ver3-настройки-опр';

import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

let Model = EmberFlexberryDataModel.extend(НастройкиОпрMixin, {
});

defineNamespace(Model);
defineProjections(Model);

export default Model;
