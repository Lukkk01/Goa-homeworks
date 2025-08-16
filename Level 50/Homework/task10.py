nums = [1, 2, 3, 4, 5, 6]

even = filter(lambda x: x % 2 == 0, nums)

add_10 = map(lambda x: x + 10, even)