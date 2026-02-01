import time

def time_decorator(func):
    def wrapper(*args, **kwargs):
        start = time.time()
        result = func(*args, **kwargs)
        end = time.time()
        print('function completed in', end - start, ' seconds')
        return result
    return wrapper

@time_decorator
def task():
    total = 0
    for i in range(1000000):
        total += i
    return total

task()