function solution(A) {
    A.sort((a, b) => b - a);

    const negatives = A.filter(elem => elem < 0);
    const positives = A.filter(elem => elem > 0);

    if (negatives.length < 2 || positives.length < 2) {
        return A[0] * A[1] * A[2];
    }

    const largestNegativeValue = negatives[negatives.length - 1] * negatives[negatives.length - 2] * positives[0];
    if (positives.length < 3)
        return largestNegativeValue;

    return Math.max(largestNegativeValue, positives[0] * positives[1] * positives[2]);
}