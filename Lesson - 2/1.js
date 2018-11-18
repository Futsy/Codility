function solution(A, K) {
    if (A.length == 0 || A.length == 1 || K == 0 || K % A.length == 0) {
        return A;
    }
    let actualShifts = K % A.length;

    return A.slice(-actualShifts, A.length).concat(A.slice(0, A.length - actualShifts));
}