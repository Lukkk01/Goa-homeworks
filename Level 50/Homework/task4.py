celsius_to_fahrenheit = lambda x: (x * 9/5) + 32

celsius = [10, 20, 30, 40]

for temperature in celsius:
    fahrenheit = celsius_to_fahrenheit(temperature)
    print(fahrenheit)