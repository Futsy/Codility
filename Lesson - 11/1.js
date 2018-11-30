function solution(A) {
    let result = [];
    let aSize = A.length;
    let occurenceMapping = new Map();
    
    for (const a of A) {
        if (!occurenceMapping.has(a)) {
            occurenceMapping.set(a, 1);
        }
        else {
            occurenceMapping.set(a, occurenceMapping.get(a) + 1);
        }
    }
    
    for (let i = 0; i < aSize; i++) {
        let totalDivisors = 0;
        const root = Math.sqrt(A[i]);

        for (let divi = 1; divi <= root; ++divi) {
            if (A[i] % divi == 0) {
                const div = A[i] / divi;
                
                if (occurenceMapping.has(divi)) {
                    totalDivisors += occurenceMapping.get(divi);
                }
                if (divi != div && occurenceMapping.has(div)) {
                    totalDivisors += occurenceMapping.get(div);
                }
            }
        }
        result.push(aSize - totalDivisors);
    }
    return result;
}