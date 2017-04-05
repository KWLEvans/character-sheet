export class Stat {
  constructor(public name: string, public score: number) { }

  getModifier() {
    let mod = Math.ceil((this.score-10)/2);
    return mod;
  }
}
