#include <algorithm>
#include <vector>

int solution(std::vector<int> &A) {
    std::sort(std::begin(A), std::end(A));
    for (size_t i = 0; i < A.size(); i++) {
        if (size_t(A[i]) != i + 1)
            return 0;
    }
    return 1;
}