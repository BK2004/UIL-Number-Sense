function random(min, max) {
    
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function is_prime(n) {
    if (n < 2) {
        return false;
    }

    for (var i = 2; i <= Math.sqrt(n); i++) {
        if (n % i == 0) {
            return false;
        }
    }

    return true;
}