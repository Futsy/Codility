function gcd(a, b) {
    if (!b)
        return a;
    return gcd(b, a % b);
}

function solution(N, M) {
    return N / gcd(N, M);
}