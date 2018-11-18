function solution(N) {
    console.assert(N >= 1 && N <= Number.MAX_SAFE_INTEGER, "N is out of bounds");

    return Math.max(...(N.toString(2).split("1").slice(0, -1).map(e => e.length)));
}