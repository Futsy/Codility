#include <cmath>

int solution(int N) {
    // The one most square is the smallest (A closest to B where A * B = area)
    for (int A = std::sqrt(N); A > 0; A--) {
        if (N % A == 0)
            return 2 * ((N / A) + A);
    }
    return 0;
}