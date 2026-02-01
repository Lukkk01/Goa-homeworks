# https://www.codewars.com/kata/527e4141bb2ea5ea4f00072f/train/python
# Twisted Sum

def compute_sum(n):
    total = 0
    for num in range(1, n + 1):
        total += sum(int(digit) for digit in str(num))
    return total