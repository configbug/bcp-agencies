import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { SplashScreenStateService } from 'src/app/core/services/splash-screen-state.service';
import { IAgencie } from 'src/app/interfaces/agencies.interface';
import { IResponse } from 'src/app/interfaces/response.interface';
import { AgenciesService } from 'src/app/services/agencies.service';
import { AgencieDetailComponent } from './agencie-detail/agencie-detail.component';

@Component({
  selector: 'app-agencies',
  templateUrl: './agencies.component.html',
  styleUrls: ['./agencies.component.scss']
})
export class AgenciesComponent implements OnInit {

  geolocation!: google.maps.LatLngLiteral;
  agencies!: IAgencie[];
  constructor(public dialog: MatDialog, private agenciesService: AgenciesService, private splashScreenStateService: SplashScreenStateService) { }

  ngOnInit(): void {
    setTimeout(() => {
      this.splashScreenStateService.stop();
    }, 2000);
  }

  updateMap(item: google.maps.LatLngLiteral) {
    this.geolocation = item;
  }

  viewAgencie(agencie: IAgencie) {
    const dialogRef = this.dialog.open(AgencieDetailComponent, { data: { ...agencie } });
    dialogRef.afterClosed().subscribe((result: IAgencie) => {
      this.agencies = this.agenciesService.getAgenciesFromLocalStorage()
    });
  }

}
