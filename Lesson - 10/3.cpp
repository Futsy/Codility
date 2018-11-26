#include <algorithm>
#include <cmath>

std::vector<int> getFactors(int number, bool sorted = true) {
    std::vector<int> factors;
	
	for (int factor = 1; factor <= std::sqrt(number); ++factor) {
        if (number % factor == 0) {
            factors.push_back(factor);
            if (factor != number / factor) {
                factors.push_back(number / factor);
            }
        }
    }
    if (sorted)
        std::sort(std::begin(factors), std::end(factors));
	return factors;
}

int solution(vector<int> &A) {
    const size_t aSize = A.size();
    
    if (aSize < 3) 
        return 0;
    
    std::vector<int> sums(aSize, 0);
    for (size_t i = 1; i < aSize; i++) {
        sums[i] = (i > 0 ? sums[i - 1] : 0) + static_cast<int>(A[i] > A[i - 1] && i != aSize - 1 &&  A[i] > A[i + 1]);
    }
    
    for (const auto& option: getFactors(aSize)) {
        bool found = true;
        int x = 0;
        while (x < static_cast<int>(aSize / option)) {
            if (sums[(option * (x + 1)) - 1] - sums[(option * x) - 1] < 1) {
                found = false;
                break;
            }
            x++;
        }
        if (found)
            return aSize / option;
    }
    
    return 0;
}