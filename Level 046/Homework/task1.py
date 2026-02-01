numbers = [1, 4, 7, 10, 13, 16, 19]

new_list = []
for num in numbers:
    if num % 2 != 0:
        new_list.append(num * 2)

new_list = [x * 2 for x in numbers if x % 2 != 0]


# exsample 1
numbers1 = [2, 5, 8, 11, 14, 17, 20]

new_list1 = []

for num in numbers:
    if num % 2 == 0:
        new_list1.append(num / 2)

new_list1 = [x / 2 for x in numbers if x % 2 == 0]


# exsample 2
numbers2 = [3, 6, 9, 12, -15, 18, 21, -24,]

new_list2 = [0]

for num in numbers:
    if num > 0:
        new_list2.append(num)

new_list2 = [x for x in numbers if x > 0]