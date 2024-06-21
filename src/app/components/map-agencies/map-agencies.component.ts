import { HttpClient } from '@angular/common/http';
import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { catchError, map, Observable, of } from 'rxjs';

@Component({
  selector: 'app-map-agencies',
  templateUrl: './map-agencies.component.html',
  styleUrls: ['./map-agencies.component.scss']
})
export class MapAgenciesComponent implements OnInit, OnChanges {

  @Input() geolocation!: google.maps.LatLngLiteral;

  center!: google.maps.LatLngLiteral;
  zoom = 17;

  markerOptions: google.maps.MarkerOptions = { draggable: false };
  markerPosition!: google.maps.LatLngLiteral;

  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges() {
    this.center = this.geolocation;
    this.markerPosition = this.geolocation;
  }

}
