constexpr int resolve(int A, int B, int K) {
    return (A >= K) ? (B - A) / K : B / K;
}

int solution(int A, int B, int K) {
    return resolve(A, B, K) + (A % K == 0 || B % K == 0);
}