# https://www.codewars.com/kata/566d5e2e57d8fae53c00000c/train/python
# Bingo Card

import random
def get_bingo_card():
    
    b = []
    i = []
    n = []
    g = []
    o = []
    
    while len(b) < 5:
        randnum = random.randint(1, 15)
        if "B"+str(randnum) not in b:
            b.append(f"B{randnum}")
    while len(i) < 5:
        randnum = random.randint(16, 30)
        if "I"+str(randnum) not in i:
            i.append(f"I{randnum}")
    while len(n) < 4:
        randnum = random.randint(31, 45)
        if "N"+str(randnum) not in n:
            n.append(f"N{randnum}")
    while len(g) < 5:
        randnum = random.randint(46, 60)
        if "G"+str(randnum) not in g:
            g.append(f"G{randnum}")
    while len(o) < 5:
        randnum = random.randint(61, 75)
        if "O"+str(randnum) not in o:
            o.append(f"O{randnum}")
    final_list = b+i+n+g+o
    return final_list