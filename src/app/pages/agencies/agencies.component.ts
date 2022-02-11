import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IAgencie } from 'src/app/interfaces/agencies.interface';
import { AgenciesService } from 'src/app/services/agencies.service';

@Component({
  selector: 'app-agencies',
  templateUrl: './agencies.component.html',
  styleUrls: ['./agencies.component.scss']
})
export class AgenciesComponent implements OnInit {

  searchTerm = '';
  geolocation!: google.maps.LatLngLiteral;
  agencies!: IAgencie[];
  constructor(private agenciesService: AgenciesService, private router: Router) { }

  ngOnInit(): void { }

  updateMap(item: google.maps.LatLngLiteral) {
    this.geolocation = item;
  }

  handleSearch(r: any) {
    console.log('handleSearch', r)
    if (r.action === 'SEARCH') {
      this.agencies = []
    }
  }

}
