function sieve(n) {
    // Eratosthenes algorithm to find all primes under n
    let array = [], upperLimit = Math.sqrt(n), output = new Set();
    output.add(2);

    // Make an array from 2 to (n - 1)
    for (let i = 0; i < n; i++)
        array.push(1);

    // Remove multiples of primes starting from 2, 3, 5,...
    for (let i = 3; i <= upperLimit; i += 2) {
        if (array[i]) {
            for (let j = i * i; j < n; j += i*2)
                array[j] = 0;
        }
    }

    // All array[i] set to 1 (true) are primes
    for (let i = 3; i < n; i += 2) {
        if (array[i]) {
            output.add(i);
        }
    }

    return output;
}

function solution(N, P, Q) {
    const sieved = sieve(N);
    const sieveLengthSqrt = Math.sqrt(sieved.size);
    const sievedList = [...sieved];
    
    let progression = [ 0 ];
    let totalCount = 0;
    let numbers = Array.from({ length: N + 1 }, (v, i) => 0);
    for (let i = 0; i < numbers.length; i++) {
        for (let j = 0; j < sieveLengthSqrt && j < i; j++) {
            if (i % sievedList[j] != 0) {
                continue;
            }
            if (sieved.has(i / sievedList[j])) {
                numbers[i] = 1;
                totalCount++;
                break;
            }
        }
        progression.push(totalCount);
    }
    
    let result = [];
    for (let i = 0; i < P.length; i++) {
        result.push(progression[Q[i] + 1] - progression[P[i]]);
    }
    return result;
}