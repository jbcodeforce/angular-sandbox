import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import * as L from 'leaflet';

/**
Present a card from Lille and the localisation of podotactile bornes.
*/
@Component({
  selector: 'app-mapdemo',
  templateUrl: './mapdemo.component.html',
  styleUrls: ['./mapdemo.component.css']
})
export class MapdemoComponent implements OnInit {

  constructor(private http: HttpClient) { }

  ngOnInit() {
    const demomap = L.map('demomap').setView([50.6311634, 3.0599573], 12);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(demomap);

    const myIcon = L.icon({
      iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.2.0/images/marker-icon.png'
    });
    L.marker([50.6311634, 3.0599573], {icon: myIcon}).bindPopup('A marker').addTo(demomap).openPopup();

    this.http.get('https://opendata.lillemetropole.fr/api/records/1.0/search/?dataset=bornes-podotactiles').subscribe((data: any) => {
    data.records.forEach(podotactile => {
      L.marker([podotactile.geometry.coordinates[1], podotactile.geometry.coordinates[0]], {icon: myIcon}).addTo(demomap);
    });
  });
  } // onInit
}
