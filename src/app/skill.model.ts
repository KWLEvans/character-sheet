export class Skill {
  constructor(public name: string, public stat: string) {}

  statAbbreviation() {
    return this.stat.slice(0,3);
  }
}
