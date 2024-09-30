class GuessingGame {
    constructor() {
    }

    setRange(min, max) {
        this.minValue = min;
        this.maxValue = max;
    }

    guess() {
        return this.currentGuess = Math.round((this.minValue + this.maxValue) / 2);
    }

    lower() {
        return this.maxValue = this.currentGuess;
    }

    greater() {
        return this.minValue = this.currentGuess;
    }
}
module.exports = GuessingGame;
