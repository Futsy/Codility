function solution(A) {
    let numbers = new Map();
    
    for (let i = 0; i < A.length; i++) {
        const number = A[i];
        
        numbers.set(number, numbers.has(number) ? numbers.get(number) + 1 : 1);
        if (numbers.get(number) > A.length / 2)
            return i;
    }
    
    return -1;
}