function solution(A) {
    let sum = A.reduce((a, b) => { return a + b; }, 0);
    let currentSum = 0;

    // No need for the last element since we don't check it
    A.splice(-1, A.length);

    return Math.min(...A.map((elem) => {
        currentSum += elem;
        return Math.abs(currentSum - (sum - currentSum));
    }));
}