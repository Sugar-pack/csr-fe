import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CatalogRoutingModule } from './catalog-routing.module';
import { CatalogApi } from './services';
import { SharedModule } from "../shared/shared.module";
import { CatalogComponent } from "./containers";
import { MatButtonModule } from "@angular/material/button";
import { MatInputModule } from "@angular/material/input";
import { MatIconModule } from "@angular/material/icon";
import { PreviewEquipmentCardComponent } from './components/preview-equipment-card/preview-equipment-card.component';


@NgModule({
  declarations: [CatalogComponent, PreviewEquipmentCardComponent],
  imports: [
    CommonModule,
    CatalogRoutingModule,
    SharedModule,
    MatButtonModule,
    MatInputModule,
    MatIconModule,
  ],
  providers: [
    CatalogApi
  ]
})
export class CatalogModule { }
