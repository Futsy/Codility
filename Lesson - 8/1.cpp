#include <iostream>
#include <vector>
#include <stack>
#include <algorithm>

int solution(vector<int> &A) {
    std::stack<int> s;
    auto size = 0u;  
    for (auto i = 0u; i < A.size(); i++) {
        if (size == 0) {
            size += 1;
            s.push(A[i]);
        }
        else if (s.top() != A[i]) {
            size -= 1;
        }
        else {
            size += 1;
        }
    }
    if (size == 0)
        return 0;
    
    const size_t candidateOccurences = std::count_if(std::begin(A), std::end(A), [&s] (int i) { return i == s.top(); });
    if (candidateOccurences <= A.size() / 2)
        return 0;
    
    auto equiLeaders = 0u;
    auto totalLeaders = 0u;
    
    for (auto i = 0u; i < A.size(); i++) {
        if (A[i] == static_cast<int>(s.top())) {
            totalLeaders++;
        }
        if (leaders > (i + 1) / 2 && candidateOccurences - totalLeaders > (A.size() - 1 - i) / 2) {
            equiLeaders++;
        }
    }
    return equiLeaders;
}