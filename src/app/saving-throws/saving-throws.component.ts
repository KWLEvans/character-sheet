import { Component, OnInit, Input } from '@angular/core';
import { Stat } from './../stat.model';


@Component({
  selector: 'app-saving-throws',
  templateUrl: './saving-throws.component.html',
  styleUrls: ['./saving-throws.component.css']
})
export class SavingThrowsComponent implements OnInit {
  @Input() stat: Stat;
  constructor() { }

  ngOnInit() {
  }

}
