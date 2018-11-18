function solution(A) {
    const upperbound = 1000000000;
    let ones = A.filter(e => e == 1).length;

    let total = 0;
    for (const entry of A) {
        if (entry == 0) {
            total += ones;
            if (total > upperbound) {
                return -1;
            }
        }
        else {
            ones--;
        }
    }
    return total;
}