function even_sum(border) {
    let sum = 0;
    for (let i = 0; i <= border; i++) {
        if (i % 2 == 0) {
            sum += i;
        }
    }
    return sum;
}