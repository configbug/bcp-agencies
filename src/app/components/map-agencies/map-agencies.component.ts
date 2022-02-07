import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { catchError, map, Observable, of } from 'rxjs';

@Component({
  selector: 'app-map-agencies',
  templateUrl: './map-agencies.component.html',
  styleUrls: ['./map-agencies.component.scss']
})
export class MapAgenciesComponent implements OnInit {

  display: any;
  center: google.maps.LatLngLiteral = { lat: -71.950088, lng: -13.523304 };
  zoom = 4;

  markerOptions: google.maps.MarkerOptions = { draggable: false };
  markerPositions: google.maps.LatLngLiteral[] = [{ lat: -71.950088, lng: -13.523304 }];

  addMarker(event: google.maps.MapMouseEvent) {
    if (event.latLng) {
      this.markerPositions.push(event.latLng.toJSON());
    }
  }

  moveMap(event: google.maps.MapMouseEvent) {
    if (event.latLng) {
      this.center = (event.latLng.toJSON());
    }
  }

  move(event: google.maps.MapMouseEvent) {
    if (event.latLng) {
      this.display = event.latLng.toJSON();
    }
  }

  constructor() { }

  ngOnInit(): void {
  }

}
