import { Injectable } from '@angular/core';
import { EquipmentFilter } from '@app/catalog/models';
import { Select, Store } from '@ngxs/store';
import { map, Observable } from 'rxjs';
import { CatalogApi } from '..';
import { Equipment } from '../../models/equipment';
import { CatalogState, GetCatalog } from '../../store';

@Injectable()
export class ControllerService {
  @Select(CatalogState.catalog) catalog$!: Observable<Equipment[]>;

  constructor(private api: CatalogApi, private store: Store) {}

  getCatalog() {
    this.api.getCatalog().subscribe((res) => {
      this.store.dispatch(new GetCatalog(res.items));
    });
  }

  getEquipmentItemInfo(id: number): Observable<Equipment> {
    return this.api.info(id);
  }

  searchEquipment(term: string): Observable<Equipment[]> {
    const parametersEquipment: Partial<Equipment> = {
      name_substring: term,
    };

    return this.api.searchEquipment(parametersEquipment).pipe(map((res) => res.items));
  }

  getPhotoById(photoId: string): Observable<Blob> {
    return this.api.getPhotoById(photoId).pipe(map((res) => new Blob([res], { type: 'image/jpeg' })));
  }

  filterEquipmentByCategory(categoryId: number) {
    const equipmentFilter: EquipmentFilter = { category: categoryId };

    this.api.filterEquipmentByCategory(equipmentFilter).subscribe((res) => {
      this.store.dispatch(new GetCatalog(res.items));
    });
  }
}
