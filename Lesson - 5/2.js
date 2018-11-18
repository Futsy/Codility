function buildLetterMap(a, c, g) {
    return new Map([
        ["A", a],
        ["C", c],
        ["G", g]
    ]);
}

function solution(S, P, Q) {
    let tracker = [];
    let currentValues = buildLetterMap(0, 0, 0);

    for (const letter of S) {
        // We use this to keep track of what was added in the iterations
        tracker.push(buildLetterMap(
            currentValues.get("A"),
            currentValues.get("C"),
            currentValues.get("G"))
        );

        currentValues.set(letter, currentValues.get(letter) + 1);
    }
    tracker.push(currentValues);

    let result = [];
    for (let i = 0; i < P.length; i++) {
        let start = tracker[P[i]];
        let end = tracker[Q[i] + 1];

        if (end.get("A") - start.get("A") > 0) {
            result.push(1);
        }
        else if (end.get("C") - start.get("C") > 0) {
            result.push(2);
        }
        else if (end.get("G") - start.get("G") > 0) {
            result.push(3);
        }
        else {
            result.push(4);
        }
    }

    return result;
}