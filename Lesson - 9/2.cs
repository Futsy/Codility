using System;
using System.Collections.Generic;

class Solution {
    public int solution(int[] A) {
        long maxSlice = 0;
        long maxEnding = 0;
        
        if (A.Length == 0 || A.Length == 1) {
            return 0;
        }
        
        for (int i = 0; i < A.Length - 1; i++) {
            maxEnding = Math.Max(0, maxEnding + A[i + 1] - A[i]);
            maxSlice = Math.Max(maxSlice, maxEnding);
        }
        return maxSlice > Int32.MaxValue ? 0 : (int)maxSlice;
    }
}