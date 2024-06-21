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

  handleSearch(event: any) {
    if (event.action === 'SEARCH') {
      this.agenciesService.list().subscribe(response => {
        this.agencies = ((response.data) as IAgencie[]).filter(agencie => agencie.agencia.includes(event.query))
      })
    } else {
      this.agenciesService.list().subscribe(response => {
        this.agencies = ((response.data) as IAgencie[])
      })
    }
  }

}
