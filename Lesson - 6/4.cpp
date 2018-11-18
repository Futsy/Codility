#include <algorithm>
#include <tuple>
#include <vector>

std::vector<std::pair<long, long>> GenerateSortedMinMax(vector<int>& A) {
    std::vector<std::pair<long, long>> lowerAndUpperPairs;

    for (size_t i = 0; i < A.size(); i++) {
        const long lowerbound = static_cast<long>(i) - A[i];
        const long upperbound = static_cast<long>(i) + A[i];

        lowerAndUpperPairs.push_back(
            std::pair<long, long>(
                lowerbound,
                upperbound
            )
        );
    }

    std::sort(std::begin(lowerAndUpperPairs), std::end(lowerAndUpperPairs), [] (const auto& lhs, const auto& rhs) {
        return lhs.first < rhs.first;
    });

    return lowerAndUpperPairs;
}

int solution(vector<int> &A) {
    const auto lowerAndUpperPairs = GenerateSortedMinMax(A);

    int result = 0;
    for (size_t i = 0; i < lowerAndUpperPairs.size(); i++) {
        for (size_t j = i + 1; j < lowerAndUpperPairs.size()
            && lowerAndUpperPairs[j].first <= lowerAndUpperPairs[i].second; j++) {
            result++;
            if (result > 10000000)
                return -1;
        }
    }

    return result;
}