function solution(X, A) {
    let completedSet = new Set([...Array(X + 1).keys()].slice(1));

    for (let i = 0; i < A.length; i++) {
        if (completedSet.has(A[i])) {
            completedSet.delete(A[i]);
        }
        if (completedSet.size == 0)
            return i;
    }
    return -1;
}