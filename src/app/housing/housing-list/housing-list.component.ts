import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { HousingLocation } from '../model/housing-location';

@Component({
  selector: 'app-housing-list',
  templateUrl: './housing-list.component.html',
  styleUrls: ['./housing-list.component.css']
})
export class HousingListComponent implements OnInit {

  @Input() locationList: HousingLocation[] = [];
  results: HousingLocation[] = [];
  @Output() selectedLocationEvent = new EventEmitter<HousingLocation>();

  constructor() {}


  ngOnInit(): void {
    this.results = this.locationList;
  }

  searchHousingLocations(searchText: string) {
    if (!searchText) {
      this.results = this.locationList;
    } else {
      this.results = this.locationList
        .filter(
          location => location.city.toLowerCase().includes(searchText.toLowerCase())
      );
    }
  }

  selectHousingLocation(location: HousingLocation) {
    this.selectedLocationEvent.emit(location);
  }

}
