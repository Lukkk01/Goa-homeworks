# https://www.codewars.com/kata/5469e0798a3502f4a90005c9/train/python
# Rotate Array

def rotate(data, n):
    length = len(data)
    if length == 0:
        return data

    shift = n % length
    if shift < 0:
        shift = length + shift

    result = []
    for i in range(length):
        index = (i - shift) % length
        result.append(data[index])

    return result