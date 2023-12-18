import { buildValidations } from 'ember-cp-validations';
import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

import {
  defineProjections,
  ValidationRules,
  Model as НастройкиОпрMixin
} from '../mixins/regenerated/models/i-i-s-modul-dlya-chatbota-ver3-настройки-опр';

const Validations = buildValidations(ValidationRules, {
  dependentKeys: ['model.i18n.locale'],
});

let Model = EmberFlexberryDataModel.extend(НастройкиОпрMixin, Validations, {
});

defineProjections(Model);

export default Model;
