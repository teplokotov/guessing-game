class GuessingGame {
    constructor() {}
      
    setRange(min, max) {
        this.low = min;
        this.high = max;
    }
      
    guess() {
        let range = this.high - this.low;
        let middle = range / 2 + this.low;
        this.middleRounded = Math.round(middle);
        return this.middleRounded;
    }
      
    lower() {
        this.setRange(this.low, this.middleRounded);
    }
      
    greater() {
        this.setRange(this.middleRounded, this.high);
    }
}

module.exports = GuessingGame;
