'https://www.codewars.com/kata/559b8e46fa060b2c6a0000bf/train/python'
# Easy Diagonal

from math import comb

def diagonal(n, p):
    return comb(n + 1, p + 1)