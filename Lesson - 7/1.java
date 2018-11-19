// you can also use imports, for example:
import java.lang.*;
import java.util.*;

// you can write to stdout for debugging purposes, e.g.
// System.out.println("this is a debug message");

class Solution {
    public int solution(String S) {
        if (S.length() == 0) {
            return 1;
        }
        
        Deque<Character> stack = new ArrayDeque<Character>();
        for (char letter : S.toCharArray()) {
            if (letter == '(' || letter == '{' || letter == '[') {
                stack.push(letter);
                continue;
            }
            if (stack.size() == 0 || GetCounterBracket(stack.peek()) != letter) {
                return 0;
            }
            stack.pop();
        }
        
        return stack.size() == 0 ? 1 : 0;
    }
    
    private char GetCounterBracket(char openingBracket) {
        switch (openingBracket) {
        case '{': return '}';
        case '(': return ')';
        default: return ']';
        }    
    }
}