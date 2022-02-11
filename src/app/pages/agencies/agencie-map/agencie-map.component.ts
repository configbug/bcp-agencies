import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IAgencie } from 'src/app/interfaces/agencies.interface';

@Component({
  selector: 'app-agencie-map',
  templateUrl: './agencie-map.component.html',
  styleUrls: ['./agencie-map.component.scss']
})
export class AgencieMapComponent implements OnInit {

  geolocation!: google.maps.LatLngLiteral;

  constructor(private router: Router) {

    const data = this.router.getCurrentNavigation()!.extras.state;
    if (!data) {
      this.router.navigate(["/agencies"]);
    }
    //@ts-ignore
    const agencie = data.agencie as IAgencie;
    this.geolocation = { lat: agencie.lat, lng: agencie.lon }
  }

  ngOnInit(): void {
  }

  handleSearch(event: any) {

  }

}
