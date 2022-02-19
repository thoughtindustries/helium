import CatalogDriverBase from './catalog-driver-base';
import { CatalogDriverConfig } from './types';
import * as actions from './actions';

/**
 * The CatalogDriver is a framework agnostic catalog state manager
 */
export default class CatalogDriver extends CatalogDriverBase {
  private readonly _actions;
  constructor(config: CatalogDriverConfig) {
    super(config);

    this._actions = Object.entries(actions).reduce(
      (acc, [actionName, action]) => ({
        ...acc,
        [actionName]: action.bind(this)
      }),
      {}
    ) as actions.CatalogDriverActions;
  }

  getActions() {
    return this._actions;
  }
}
