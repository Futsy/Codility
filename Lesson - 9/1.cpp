#include <algorithm>
#include <climits>

int solution(vector<int> &A) {
    int maxEnding = 0;
    int maxSlice = INT_MIN;
    
    if (A.size() == 1) {
        return A[0];
    }
    if (std::all_of(std::begin(A), std::end(A), [](int i) { return i < 0; })) {
        return *std::max_element(std::begin(A), std::end(A));
    }
    for (const auto& a: A) {
        maxEnding = a < 0 ? std::max(0, maxEnding + a) : maxEnding + a;
        maxSlice = std::max(maxSlice, maxEnding);
    }
    return maxSlice;
}