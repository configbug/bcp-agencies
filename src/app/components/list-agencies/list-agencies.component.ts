import { Component, EventEmitter, HostListener, Input, OnChanges, OnInit, Output } from '@angular/core';
import { MatSelectionListChange } from '@angular/material/list';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { IAgencie } from 'src/app/interfaces/agencies.interface';
import { IResponse } from 'src/app/interfaces/response.interface';
import { AgenciesService } from 'src/app/services/agencies.service';
import { TGeolocation } from 'src/app/types/geolocation.type';

@Component({
  selector: 'app-list-agencies',
  templateUrl: './list-agencies.component.html',
  styleUrls: ['./list-agencies.component.scss']
})
export class ListAgenciesComponent implements OnInit, OnChanges {
  @Output() updateMapEvent = new EventEmitter<google.maps.LatLngLiteral>();
  @Output() refreshListAgenciesEvent = new EventEmitter<IAgencie[]>();

  @Input() listaAgencies!: IAgencie[];
  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    const sizeWindows = event.target.innerWidth;
    if (sizeWindows <= 992) {
      this.showActionsList = true;
    } else {
      this.showActionsList = false;
    }
  }

  showActionsList: boolean = false
  listAgencies: IAgencie[] = [];

  constructor(private agenciesService: AgenciesService, private router: Router, private activatedRoute: ActivatedRoute) {
    this.activatedRoute.data.subscribe(({ agencies }) => {
      this.listAgencies = agencies;
    });
  }

  ngOnInit(): void {
    this.updateMapEvent.emit({ lat: this.listAgencies[0].lon, lng: this.listAgencies[0].lat });
  }

  ngOnChanges() {
    if (this.listaAgencies) {
      this.listAgencies = this.listaAgencies;
    }
  }

  showInfo(agencie: IAgencie) {
    let geolocation = { lat: agencie.lon, lng: agencie.lat }
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
}
