import { Component, EventEmitter, Input, OnChanges, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { IAgencie } from 'src/app/interfaces/agencies.interface';
import { IResponse } from 'src/app/interfaces/response.interface';
import { AgenciesService } from 'src/app/services/agencies.service';

@Component({
  selector: 'app-list-agencies',
  templateUrl: './list-agencies.component.html',
  styleUrls: ['./list-agencies.component.scss']
})
export class ListAgenciesComponent implements OnInit, OnChanges {
  @Output() updateMapEvent = new EventEmitter<google.maps.LatLngLiteral>();
  @Output() refreshListAgenciesEvent = new EventEmitter<IAgencie[]>();

  @Input() listaAgencies!: IAgencie[];

  listAgencies: IAgencie[] = [];

  constructor(private agenciesService: AgenciesService, private router: Router, private activatedRoute: ActivatedRoute) {
    this.activatedRoute.data.subscribe(({ agencies }) => {
      this.listAgencies = agencies;
    });
  }

  ngOnInit(): void {
    this.updateMapEvent.emit({ lat: this.listAgencies[0].lat, lng: this.listAgencies[0].lon });
  }

  ngOnChanges() {
    if (this.listaAgencies) {
      this.listAgencies = this.listaAgencies;
    }
  }

  showInfo(agencie: IAgencie) {
    let geolocation = { lat: agencie.lat, lng: agencie.lon }
    this.updateMapEvent.emit(geolocation);
  }

  viewAgencie(agencie?: IAgencie) {
    if (agencie) {
      this.agenciesService.get(agencie.agencia).subscribe((response: IResponse) => {
        this.router.navigate(["/agencies/edit"], { state: { agencie: { ...agencie } } });
      })
    } else {
      this.router.navigate(["/agencies/new"], { state: { agencie: null } });

    }
  }

  viewMap(agencie?: IAgencie) {
    this.router.navigate(["/agencies-map"], { state: { agencie: { ...agencie } } });
  }
}
