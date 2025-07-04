def print_unique_counts(lst):
    unique_elements = set(lst)
    for element in unique_elements:
        print(f"{element} - {lst.count(element)}")

fruits = ['apple', 'banana', 'apple', 'cherry', 'banana', 'banana']
print_unique_counts(fruits)