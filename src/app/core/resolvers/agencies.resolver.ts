import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { map, Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { AgenciesService } from 'src/app/services/agencies.service';
import { IResponse } from 'src/app/interfaces/response.interface';
import { checkExpiration } from 'src/app/utils/functions.util';
import { IAgencie } from 'src/app/interfaces/agencies.interface';

@Injectable({
  providedIn: 'root'
})
export class AgenciesResolver implements Resolve<any> {

  constructor(private http: HttpClient, private agenciesService: AgenciesService) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<IAgencie[]> {

    const existLocalAgencies = this.agenciesService.verifyLocalStorageDataKey('agencies');

    if (!existLocalAgencies) {
      console.log('NO EXISTE AGENCIAS COMO DATA LOCAL')
      return this.agenciesService.list().pipe(
        map((response: IResponse) => {
          this.agenciesService.setStartTimeApi(Date.now());
          this.agenciesService.setAgencies(response.data as IAgencie[])
          return response.data as IAgencie[]
        })
      )
    } else {
      console.log('EXISTE AGENCIAS COMO DATA LOCAL (API), SE VERIFICA LA EXISTENCIA DE FECHA DE VIGENCIA DE DATA')

      const startTimeApi = this.agenciesService.getStartTimeApi();

      if (startTimeApi) {
        console.log('EXISTE FECHA DE VIGENCIA DE DATA (API), SE VERIFICA LA EXPIRACIÓN')
        const expiredApi = checkExpiration(startTimeApi, Date.now())

        if (expiredApi) {
          console.log('SI EXPIRÓ')
          return this.agenciesService.list().pipe(
            map((response: IResponse) => {
              this.agenciesService.setStartTimeApi(Date.now());
              this.agenciesService.setAgencies(response.data as IAgencie[])
              return response.data as IAgencie[]
            })
          )
        } else {
          console.log('NO EXPIRÓ, DEVUELVE INFORMACIÓN DESDE LOCALSTORAGE')
          return of(this.agenciesService.getAgenciesFromLocalStorage());
        }
      } else {
        console.log('NO EXISTE FECHA INICIO DE VIGENCIA DEL API, DEVUELVE INFORMACIÓN DESDE LOCALSTORAGE')
        this.agenciesService.setStartTimeApi(Date.now());
        return of(this.agenciesService.getAgenciesFromLocalStorage());
      }
    }
  }
}
