import { Injectable } from '@angular/core';
import { AngularFire, FirebaseListObservable } from 'angularfire2';

@Injectable()
export class SkillService {
  skills: FirebaseListObservable<any[]>;

  constructor(private angularFire: AngularFire) {
    this.skills = angularFire.database.list('skills');
  }

  getSkills() {
    return this.skills;
  }

}
