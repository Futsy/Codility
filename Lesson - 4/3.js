function solution(N, A) {
    let counters = Array.from({length: N}, (v, k) => 0);

    let formerLargest = 0;
    let largest = 0;
    for (const cmd of A) {
        if (cmd > N) {
            formerLargest = largest;
            continue;
        }
        const position = cmd - 1;
        if (counters[position] < formerLargest)
            counters[position] = formerLargest;
        counters[position] += 1;

        if (counters[position] > largest)
            largest = counters[position];
    }
    return counters.map(elem => elem < formerLargest ? formerLargest : elem);
}