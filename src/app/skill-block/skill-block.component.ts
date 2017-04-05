import { Component, OnInit, Input } from '@angular/core';
import { Skill } from './../skill.model';

@Component({
  selector: 'app-skill-block',
  templateUrl: './skill-block.component.html',
  styleUrls: ['./skill-block.component.css']
})
export class SkillBlockComponent implements OnInit {
  @Input() skill;
  constructor() { }

  ngOnInit() {
  }

}
