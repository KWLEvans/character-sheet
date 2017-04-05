import { Component, OnInit } from '@angular/core';
import { StatBlockComponent } from './stat-block/stat-block.component';
import { Stat } from './stat.model';
import { Skill } from './skill.model';
import { SkillService } from './skill.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [SkillService]
})

export class AppComponent {

  constructor(private skillService: SkillService) {};

  skills;

  stats: Stat[] = [
    new Stat("Strength", 12),
    new Stat("Dexterity", 13),
    new Stat("Constitution", 14),
    new Stat("Intelligence", 8),
    new Stat("Wisdom", 13),
    new Stat("Charisma", 14)
  ];

  ngOnInit() {
    this.skills = this.skillService.getSkills();
  }

}
