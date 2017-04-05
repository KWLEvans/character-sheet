import { Component, OnInit, Input } from '@angular/core';
import { StatTileComponent } from './../stat-tile/stat-tile.component';
import { Stat } from './../stat.model';

@Component({
  selector: 'app-stat-block',
  templateUrl: './stat-block.component.html',
  styleUrls: ['./stat-block.component.css']
})
export class StatBlockComponent implements OnInit {
  @Input() stats: Stat[];
  constructor() { }

  ngOnInit() {
  }

}
