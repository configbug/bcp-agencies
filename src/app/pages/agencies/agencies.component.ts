import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { SplashScreenStateService } from 'src/app/core/services/splash-screen-state.service';
import { IAgencie } from 'src/app/interfaces/agencies.interface';
import { AgencieDetailComponent } from './agencie-detail/agencie-detail.component';

@Component({
  selector: 'app-agencies',
  templateUrl: './agencies.component.html',
  styleUrls: ['./agencies.component.scss']
})
export class AgenciesComponent implements OnInit {

  geolocation!: google.maps.LatLngLiteral;
  constructor(public dialog: MatDialog, private splashScreenStateService: SplashScreenStateService) { }

  ngOnInit(): void {
    setTimeout(() => {
      this.splashScreenStateService.stop();
    }, 2000);
  }

  updateMap(item: any) {
    console.log('PARENT', item);
    this.geolocation = item;
  }

  viewAgencie(agencie: IAgencie) {
    console.log('AGENCIE : ', agencie);


    const dialogRef = this.dialog.open(AgencieDetailComponent, { data: { ...agencie } });

    dialogRef.afterClosed()
      .subscribe(result => {
        // this.listarCampanias()
      });
  }

}
