def decorator(func):
    def wrapper(*args, **kwargs):
        result = func(*args, **kwargs)
        if result is None:
            return ''
        return result.upper()
    return wrapper


@decorator
def greet(name):
    return f'Hello {name}'

print(greet('Demetre'))