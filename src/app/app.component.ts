import { Component } from '@angular/core';
import { StatBlockComponent } from './stat-block/stat-block.component';
import { Stat } from './stat.model';
import { Skill } from './skill.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  stats: Stat[] = [
    new Stat("Strength", 12),
    new Stat("Dexterity", 13),
    new Stat("Constitution", 14),
    new Stat("Intelligence", 8),
    new Stat("Wisdom", 13),
    new Stat("Charisma", 14)
  ];

  skills: Skill[] = [
    new Skill("Acrobatics", "Dexterity"),
    new Skill("Animal Handling", "Wisdom"),
    new Skill("Arcana", "Intelligence"),
    new Skill("Athletics", "Strength"),
    new Skill("Deception", "Charisma"),
    new Skill("History", "Intelligence"),
    new Skill("Insight", "Wisdom"),
    new Skill("Intimidation", "Charisma"),
    new Skill("Investigation", "Intelligence"),
    new Skill("Medicine", "Wisdom"),
    new Skill("Nature", "Intelligence"),
    new Skill("Perception", "Wisdom"),
    new Skill("Performance", "Charisma"),
    new Skill("Persuasion", "Charisma"),
    new Skill("Religion", "Intelligence"),
    new Skill("Sleight of Hand", "Dexterity"),
    new Skill("Stealth", "Dexterity"),
    new Skill("Survival", "Wisdom")
  ];
}
