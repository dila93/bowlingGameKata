export default class Game {
  totalScore: number = 0;
  rollNumber: number = 1;
  rollsWithBonus: number = 0;
  lastPines: number = 0;

  isStrike(pines: number) {
    return this.rollNumber % 2 === 1 && pines === 10;
  }

  isSpare(pines: number) {
    return this.rollNumber % 2 === 0 && this.lastPines + pines === 10;
  }

  roll(pines: number) {
    if (this.rollsWithBonus > 0) {
      this.totalScore += pines;
      this.rollsWithBonus -= 1;
    }

    if (this.isStrike(pines)) {
      this.rollsWithBonus = 2;
      this.rollNumber++;
    }

    if (this.isSpare(pines)) {
      this.rollsWithBonus = 1;
    }

    this.lastPines = pines;
    this.rollNumber += 1;
    this.totalScore += pines;
  }

  score(): number {
    return this.totalScore;
  }

  // frame()
}
