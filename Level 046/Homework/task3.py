nums = list(range(1, 21))

squares = []

for num in nums:
    squares.append(num ** 2)

squares = [x ** 2 for x in nums]