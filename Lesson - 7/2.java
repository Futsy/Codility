import java.lang.*;
import java.util.*;

class Solution {
    public int solution(String S) {
        if (S.length() == 0) {
            return 1;
        }
        
        int openingBraces = 0;
        for (char letter : S.toCharArray()) {
            if (letter == '(') {
                openingBraces++;
            }
            else {
                --openingBraces;
                if (openingBraces < 0) {
                    return 0;
                }
            }
        }
        return openingBraces == 0 ? 1 : 0;
    }
}