def my_decorator(func):
    def wrapper(*args, **kwargs):
        print('function start')
        result = func(*args, **kwargs)
        print('function end')
        return result
    return wrapper

@my_decorator
def greet(name):
    print(f'hello {name}')

greet('luka')