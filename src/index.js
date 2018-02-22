// PLEASE DON'T change function name
module.exports = function makeExchange(currency) {
    coins= {};

    if (currency < 1) {
        return coins;
    }
    if (currency > 9999) {
        coins.error='You are rich, my friend! We don\'t have so much coins for exchange';
        return coins;
    }
    else {
            var h = Math.floor(currency / 50);
            if (h > 0) {
                coins.H = h;
                currency -= h * 50;
            }
            var q = Math.floor(currency / 25);
            if (q > 0) {
                coins.Q = q;
                currency -= q * 25;
            }
            var d = Math.floor(currency / 10);
            if (d > 0) {
                coins.D = d;
                currency -= d * 10;
            }
            var n = Math.floor(currency / 5);
            if (n > 0) {
                coins.N = n;
                currency -= n * 5;
            }
            if(currency!=0) {coins.P = currency;}
            return coins;
    }
}
