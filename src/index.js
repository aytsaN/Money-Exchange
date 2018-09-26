module.exports = function makeExchange(currency) {
    let coins = {};
    let coinValue = Math.floor(currency / 50);

    if (currency < 1) {
        return coins;
    }
    if (currency > 9999) {
        coins.error = 'You are rich, my friend! We don\'t have so much coins for exchange';
        return coins;
    } else {
        if (coinValue > 0) {
            coins.H = coinValue;
            currency -= coinValue * 50;
        }
        coinValue = Math.floor(currency / 25);
        if (coinValue > 0) {
            coins.Q = coinValue;
            currency -= coinValue * 25;
        }
        coinValue = Math.floor(currency / 10);
        if (coinValue > 0) {
            coins.D = coinValue;
            currency -= coinValue * 10;
        }
        coinValue = Math.floor(currency / 5);
        if (coinValue > 0) {
            coins.N = coinValue;
            currency -= coinValue * 5;
        }
        if (currency != 0) { coins.P = currency; }
        return coins;
    }
}