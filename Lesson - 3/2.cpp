int solution(int X, int Y, int D) {
    if (X == Y)
        return 0;

    const int distance = Y - X;
    return (distance / D) + (distance % D > 0);
}