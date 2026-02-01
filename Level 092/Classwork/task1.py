"https://www.codewars.com/kata/59fa8e2646d8433ee200003f/train/python"
# Sorting by bits/

def count_bits(num):
    bits = 0
    while num >= 1:
        if num % 2 == 1:
            bits += 1
        num //= 2
    return bits


def sort_by_bit(arr):
    arr.sort(key=lambda x: (count_bits(x), x))
