numbers = {1, 3, 5, 7}
print("საწყისი set:", numbers)

numbers.add(9)
numbers.add(11)
print("დამატებული ელემენტების შემდეგ:", numbers)

numbers.remove(3)
numbers.remove(7)
print("წაშლილი ელემენტების შემდეგ:", numbers)

even_numbers = {2, 4, 6, 8, 10}

combined = numbers.union(even_numbers)
print("Union (გაერთიანება):", combined)

common = numbers.intersection(even_numbers)
print("Intersection (გადაკვეთა):", common)

unique = numbers.difference(even_numbers)
print("Difference (სხვაობა):", unique)