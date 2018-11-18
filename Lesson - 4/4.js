function solution(A) {
    let relevant = Array.from(new Set(A)).sort((a, b) => a - b).filter(elem => elem >= 1);
    if (relevant.length == 0)
        return 1;

    for (let i = 0; i < relevant.length; i++) {
        if (relevant[i] != i + 1)
            return i + 1;
    }
    return relevant.length + 1;
}