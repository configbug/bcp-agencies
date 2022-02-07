import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-agencies',
  templateUrl: './agencies.component.html',
  styleUrls: ['./agencies.component.scss']
})
export class AgenciesComponent implements OnInit {

  geolocation!: google.maps.LatLngLiteral;
  constructor() { }

  ngOnInit(): void { }

  updateMap(item: any) {
    console.log('PARENT', item);
    this.geolocation = item;
  }

}
