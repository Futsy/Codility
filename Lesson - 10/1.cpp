#include <cmath>

int factors(int number) {
	int result = 0;
	long i = 1;
	while (i * i < number) {
	    if (number % i == 0) {
	        result += 2;
	    }
	    i++;
	}
	if (i * i == number)
	    result++;
	return result;
}

int solution(int N) {
    return factors(N);
}