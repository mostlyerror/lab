from functools import reduce

# Uses python3
def calc_fib_old(n):
    if (n <= 1):
        return n

    return calc_fib(n - 1) + calc_fib(n - 2)


def calc_fib(n):
    fibs = [0, 1, 1]
    for f in range(2, n):
        fibs.append(fibs[-1] + fibs[-2])
    return fibs[n]


n = int(input())
print(calc_fib(n))
