import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Equipment } from '../../models/equipment';
import { BaseItemsResponse } from "@shared/types";

@Injectable()
export class ApiService {

  constructor(
     private httpClient: HttpClient
  ) { }

 info(id: number): Observable<Equipment>{
   return this.httpClient.get<Equipment>(`/api/equipment/${id}`);
 }

 getCatalog(): Observable<BaseItemsResponse<Equipment>> {
    return this.httpClient.get<BaseItemsResponse<Equipment>>("/api/equipment");
 }

  searchEquipment(params: Partial<Equipment>): Observable<BaseItemsResponse<Equipment>> {
    return this.httpClient.post<BaseItemsResponse<Equipment>>("/api/equipment/search", params);
  }

  getPhotoById(photoId: string): Observable<ArrayBuffer> {
    return this.httpClient.get(
      `api/equipment/photos/${photoId}`,
      {
        responseType: 'arraybuffer',
      }
    );
  }
}
