import { Component, OnInit } from '@angular/core';
import { SplashScreenStateService } from 'src/app/core/services/splash-screen-state.service';

@Component({
  selector: 'app-agencies',
  templateUrl: './agencies.component.html',
  styleUrls: ['./agencies.component.scss']
})
export class AgenciesComponent implements OnInit {

  geolocation!: google.maps.LatLngLiteral;
  constructor(private splashScreenStateService: SplashScreenStateService) { }

  ngOnInit(): void {
    setTimeout(() => {
      this.splashScreenStateService.stop();
    }, 4000);
  }

  updateMap(item: any) {
    console.log('PARENT', item);
    this.geolocation = item;
  }

}
