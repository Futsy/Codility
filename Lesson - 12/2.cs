using System;

class Solution {
    private int GCD(int a, int b) {
        if (b == 0)
            return a;
        return GCD(b, a % b);
    }
    
    private bool ReduceToPrimeFactor(int number, int gcd) {
        while (number != 1) {
            int numberDivisor = GCD(gcd, number);
            
            if (numberDivisor == 1)
                return false;
            
            number = number / numberDivisor;
        }
        return true;
    }
    
    public int solution(int[] A, int[] B) {
        int result = 0;
        for (int i = 0; i < A.Length; i++) {
            int a = A[i];
            int b = B[i];
            
            if (a == b) {
                result++;
                continue;
            }
            int gcd = GCD(a, b);
            
            if (gcd == 1) {
                continue;
            }
            a = a / gcd;
            b = b / gcd;
            
            result += ReduceToPrimeFactor(a, gcd) && ReduceToPrimeFactor(b, gcd) ? 1 : 0;
        }
        return result;
    }
}