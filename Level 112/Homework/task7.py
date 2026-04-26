# https://www.codewars.com/kata/5353212e5ee40d4694001114/train/python

def exchange_arrays(my_array, other_array):
    my_array_copy = my_array[:]
    other_array_copy = other_array[:]

    my_array.clear()
    other_array.clear()

    my_array.extend(other_array_copy[::-1])
    other_array.extend(my_array_copy[::-1])