let fibonacci = (upperbound) => {
    let result = [ 0, 1, 1 ];
    
    let twoBack = 1;
    let lastEntry = 1;
    
    while (true) {
        const sum = twoBack + lastEntry;
        
        if (sum > upperbound)
            break;
        result.push(sum);
        
        twoBack = lastEntry;
        lastEntry = sum;
    }
    return result;
};

function solution(A) {
    A.push(1);
    
    const upperbound = 1000000;
    let fibSequence = fibonacci(upperbound);
    
    if (fibSequence.indexOf(A.length) != -1)
        return 1;
    
    let reachCopy = Array.from({ length: A.length }, (v, i) => -1);
    for (let i = 0; i < fibSequence.length; i++) {
        if (A[fibSequence[i] - 1] == 1)
            reachCopy[fibSequence[i] - 1] = 1;
    }
        
    for (let i = 0; i < A.length; i++) {
        if (A[i]== 0 || reachCopy[i] > 0)
            continue;
        
        let smallest = upperbound + 1;
        let minimumEncountered = upperbound;
        for (let fib of fibSequence) {
            if (fib > i)
                break;
            
            const previousIndex = i - fib;
            const previous = reachCopy[previousIndex];
            if (previous > 0 && minimumEncountered > previous) {
                minimumEncountered = previous;
                smallest = previousIndex;
            }
        }
        if (smallest != upperbound + 1)
            reachCopy[i] = minimumEncountered + 1;
    }
    return reachCopy[reachCopy.length - 1];
}