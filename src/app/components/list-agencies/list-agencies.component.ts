import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatSelectionListChange } from '@angular/material/list';
import { IAgencie } from 'src/app/interfaces/agencies.interface';
import { AgenciesService } from 'src/app/services/agencies.service';

@Component({
  selector: 'app-list-agencies',
  templateUrl: './list-agencies.component.html',
  styleUrls: ['./list-agencies.component.scss']
})
export class ListAgenciesComponent implements OnInit {
  @Output() updateMapEvent = new EventEmitter<{ lat: number; lng: number }>();

  listAgencies: IAgencie[] = [];

  constructor(private agenciesService: AgenciesService) { }

  ngOnInit(): void {
    this.agenciesService.list().subscribe(response => {
      this.listAgencies = response.data as IAgencie[];
      this.updateMapEvent.emit({ lat: this.listAgencies[0].lon, lng: this.listAgencies[0].lat });
    })
  }

  showInfo(change: MatSelectionListChange) {
    let obj: IAgencie = change.options[0].value;
    let geolocation = { lat: obj.lon, lng: obj.lat }
    console.log("CHILD TO PARENT", geolocation);
    this.updateMapEvent.emit(geolocation);
  }
}
