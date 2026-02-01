'https://www.codewars.com/kata/566d5e2e57d8fae53c00000c/train/python'
# Bingo Card


import random

def get_bingo_card():
    B = random.sample(range(1, 16), 5)
    I = random.sample(range(16, 31), 5)
    N = random.sample(range(31, 46), 4)
    G = random.sample(range(46, 61), 5)
    O = random.sample(range(61, 76), 5)
    
    card = []
    card += ["B" + str(num) for num in B]
    card += ["I" + str(num) for num in I]
    card += ["N" + str(num) for num in N]
    card += ["G" + str(num) for num in G]
    card += ["O" + str(num) for num in O]
    
    return card
