import { Injectable } from '@angular/core';
import { Action, Selector, State, StateContext } from '@ngxs/store';
import { GetCatalog } from './actions';
import { Catalog } from '../models';

@State<Catalog>({
  name: 'catalog',
  defaults: {
    equipments: [],
  },
})
@Injectable()
export class CatalogState {
  @Selector()
  static catalog(state: Catalog) {
    return state.equipments;
  }

  @Action(GetCatalog)
  getCatalogAction(ctx: StateContext<Catalog>, action: GetCatalog) {
    ctx.setState({ equipments: action.catalog });
  }
}
