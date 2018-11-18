int solution(vector<int> &A) {
    const auto arraySize = A.size();

    auto min = 10000.0;
    auto relevantIndex = 0u;
    for (auto i = 0u; i < arraySize; i++) {
        // First we check the current one and the next one
        if (i + 1 >= arraySize)
            break;

        const auto lowPair = (A[i] + A[i + 1]) / 2.0;
        if (lowPair < min) {
            min = lowPair;
            relevantIndex = i;
        }

        // Check the next three ones
        if (i + 2 >= arraySize) {
            continue;
        }

        const auto lowTriple = (A[i] + A[i + 1] + A[i + 2]) / 3.0;
        if (lowTriple < min) {
            min = lowTriple;
            relevantIndex = i;
        }
        // The checks combined should check every smallest valid subset
        // i.e. sets of 4 are made up of two times two pairs where either equal or smaller
        // the summed average can never be lower then the sets of two or three.
    }
    return relevantIndex;
}