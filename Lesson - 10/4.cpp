#include <algorithm>
#include <cmath>

std::vector<int> getPeaks(std::vector<int>& A, size_t aSize) {
    std::vector<int> peaks;
    for (size_t i = 1; i < aSize - 1; i++) {
        if (A[i] > A[i - 1] && A[i] > A[i + 1]) {
            peaks.push_back(i);
        }
    }
    return peaks;
}

int solution(vector<int> &A) {
    const auto aSize = A.size();
    
    if (aSize < 3) 
        return 0;
    
    const auto peaks = getPeaks(A, aSize);
    const auto totalPeaks = peaks.size();
    
    if (totalPeaks == 0)
        return 0;
        
    if (totalPeaks == 1)
        return 1;
    
    int result = 2;
    
    int length = 2;
    int dif = peaks[totalPeaks - 1] - peaks[0];
    
    while (length <= dif) {
        const int factor = length + (dif - length) / 2;
        int requiredPeaks = factor - 1;
        
        int matchingPeakIndex = 0;
        for (size_t i = 1; i < totalPeaks; ++i) {
            if (peaks[i] - peaks[matchingPeakIndex] >= factor) {
                --requiredPeaks;
                if (requiredPeaks == 0)
                    break;
                matchingPeakIndex = i;
            }
        }
        result = std::max(result , factor - requiredPeaks);
        if (requiredPeaks > 0) {
            dif = factor - 1;
        }
        else {
            length = factor + 1;
        }
    }
    return result;
}