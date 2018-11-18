function solution(A) {
    if (A.length < 3)
        return 0;

    // Reverse sort the list
    A.sort((a, b) => b - a);

    // take triples and see if they meet the specs
    for (let i = 0; i < A.length - 2; i++) {
        const R = A[i];
        const Q = A[i + 1];
        const P = A[i + 2];

        if (P + Q > R && Q + R > P && R + P > Q) {
            return 1;
        }
    }
    return 0;
}