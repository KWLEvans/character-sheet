import { Component, OnInit, Input } from '@angular/core';
import { Stat } from './../stat.model';

@Component({
  selector: 'app-stat-tile',
  templateUrl: './stat-tile.component.html',
  styleUrls: ['./stat-tile.component.css']
})
export class StatTileComponent implements OnInit {
  @Input() stat: Stat;

  constructor() { }

  ngOnInit() {
  }

}
