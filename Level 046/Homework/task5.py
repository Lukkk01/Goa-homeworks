animals = ['tiger', 'lion', 'zebra', 'elephant', 'giraffe']

first_letters = []

for animal in animals:
    first_letters.append(animal[0])

first_letters = [x[0] for x in animals]