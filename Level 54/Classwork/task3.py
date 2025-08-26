# Step 1: Define the decorator
def my_decorator(func):
    def wrapper():
        print("starting.")
        result = func()
        print("started.")
        return result
    return wrapper

@my_decorator
def greet():
    return "Hello World"

