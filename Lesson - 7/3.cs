using System;
using System.Collections;

class Solution {
    public int solution(int[] H) {
        var stack = new Stack();
        int result = 0;
        for (int i = 0; i < H.Length; i++) {
            if (stack.Count == 0) {
                result++;
                stack.Push(H[i]);
            }
            else if ((int)stack.Peek() > H[i]) {
                while (stack.Count > 0 && (int)stack.Peek() > H[i])
                    stack.Pop();
                i--;
            }
            else if ((int)stack.Peek() < H[i]) {
                result++;
                stack.Push(H[i]);
            }
        }
        return result;
    }
}