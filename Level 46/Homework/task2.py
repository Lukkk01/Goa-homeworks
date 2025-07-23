words = ['apple', 'banana', 'cat', 'elephant', 'dog', 'dragonfruit']

new_words = []

for fruit in words:
    if len(fruit) > 5:
        new_words.append(fruit)

new_words = [x for x in words if len(x) > 5]