# https://www.codewars.com/kata/578bf2d8daa01a4ee8000046/train/python

import re
def encode(s):
    if not s:
        return ""

    result = []
    count = 1

    for i in range(1, len(s)):
        if s[i] == s[i - 1]:
            count += 1
        else:
            result.append(str(count) + s[i - 1])
            count = 1

    result.append(str(count) + s[-1])

    return "".join(result)



def decode(s):
    result = []
    count = ""

    for char in s:
        if char.isdigit():
            count += char
        else:
            result.append(char * int(count))
            count = ""

    return "".join(result)