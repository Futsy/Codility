function solution(A) {
    let maxStartSum = Array.from({ length: A.length }, (v, i) => 0);
    let maxEnding = 0;
    
    let maxStartSumBackwards = Array.from({ length: A.length }, (v, i) => 0);
    let maxEndingBackwards = 0;
    
    const sizeMinTwo = A.length - 2;
    for (let i = 0; i < sizeMinTwo; i++) {
        maxEnding = Math.max(0, maxEnding + A[sizeMinTwo - i]);
        maxStartSum[sizeMinTwo - i] = maxEnding;
        
        maxEndingBackwards = Math.max(0, maxEndingBackwards + A[i + 1]);
        maxStartSumBackwards[i + 1] = maxEndingBackwards;
    }
    
    let result = 0;
    for (let i = 0; i < sizeMinTwo; i++) {
        result = Math.max(result, maxStartSum[i + 2] + maxStartSumBackwards[ i]);
    }
    return result;
}