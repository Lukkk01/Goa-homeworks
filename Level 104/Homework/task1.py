'https://www.codewars.com/kata/56f1c6034d0c330e4a001059/train/python'
#HTML dynamic color string generatior 

import random

def generate_color_rgb():
    r, g, b = (random.randint(0, 255) for _ in range(3))
    return f"#{r:02x}{g:02x}{b:02x}"