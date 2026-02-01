def manual_index(lst, element):
    for i in range(len(lst)):
        if lst[i] == element:
            return i
    return -1

my_list = ['apple', 'banana', 'cherry', 'banana']

print(manual_index(my_list, 'banana'))
print(manual_index(my_list, 'cherry'))
print(manual_index(my_list, 'orange'))