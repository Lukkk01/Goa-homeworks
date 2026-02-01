# ჩვეულებრივად
numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
new_list = []

for num in numbers:
    if num % 2 != 0: 
        new_list.append(num * 2)

print(new_list)
#///////////////////////////////////////////////////
# list comprehension
numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
new_list = [num * 2 for num in numbers if num % 2 != 0]
#///////////////////////////////////////////////////
print(new_list)
#///////////////////////////////////////////////////
# დამატებითი მაგალითები
cars = ["BMW", "Toyota", "Audi", "Honda", "Mercedes", "Ford", "Kia"]

decorated = [car + " - sold" for car in cars]
print(decorated)
#///////////////////////////////////////////////////
