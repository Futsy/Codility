using System;
using System.Collections;

class Solution {
    public int solution(int[] A, int[] B) {
        var stack = new Stack();
        
        int result = 0;
        for (int i = 0; i < A.Length; i++) {
            if (stack.Count == 0 && B[i] == 0) {
                result++;
            }
            else if (B[i] == 1) {
                stack.Push(A[i]);
            }
            else {
                // Voracious fish on the stack
                while (stack.Count > 0 && A[i] > (int)stack.Peek()) {
                    stack.Pop();
                }
                if (stack.Count == 0) {
                    result++;
                }
            }
        }
        return result + stack.Count;
    }
}