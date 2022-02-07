import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatSelectionListChange } from '@angular/material/list';
import { ActivatedRoute } from '@angular/router';
import { IAgencie } from 'src/app/interfaces/agencies.interface';
import { IResponse } from 'src/app/interfaces/response.interface';
import { AgenciesService } from 'src/app/services/agencies.service';
import { TGeolocation } from 'src/app/types/geolocation.type';

@Component({
  selector: 'app-list-agencies',
  templateUrl: './list-agencies.component.html',
  styleUrls: ['./list-agencies.component.scss']
})
export class ListAgenciesComponent implements OnInit {
  @Output() updateMapEvent = new EventEmitter<google.maps.LatLngLiteral>();
  @Output() viewAgencieEvent = new EventEmitter<IAgencie>();

  listAgencies: IAgencie[] = [];

  constructor(private agenciesService: AgenciesService, private activatedRoute: ActivatedRoute) {
    this.activatedRoute.data.subscribe(({ agencies }) => {
      this.listAgencies = agencies;
    });
  }

  ngOnInit(): void {
    this.updateMapEvent.emit({ lat: this.listAgencies[0].lon, lng: this.listAgencies[0].lat });
  }

  showInfo(change: MatSelectionListChange) {
    let obj: IAgencie = change.options[0].value;
    let geolocation = { lat: obj.lon, lng: obj.lat }
    console.log("CHILD TO PARENT", geolocation);
    this.updateMapEvent.emit(geolocation);
  }

  viewAgencie(agencie: IAgencie) {
    this.agenciesService.get(agencie.agencia).subscribe((response: IResponse) => {
      console.log('PROVIENCE DE RESPONSE', response);
      this.viewAgencieEvent.emit(response.data as IAgencie);
    })
  }
}
