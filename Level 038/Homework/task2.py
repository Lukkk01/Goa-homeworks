def manual_count(lst, element):
    count = 0
    for item in lst:
        if item == element:
            count += 1
    return count

my_list = ['apple', 'banana', 'cherry', 'banana', 'banana']

print(manual_count(my_list, 'banana')) 
print(manual_count(my_list, 'apple')) 
print(manual_count(my_list, 'orange')) 