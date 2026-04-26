# https://www.codewars.com/kata/566543703c72200f0b0000c9/train/python

def epidemic(tm, n, s0, i0, b, a):
    dt = tm / n

    s = s0
    i = i0
    r = 0

    max_infected = i

    for _ in range(n):
        new_s = s - dt * b * s * i
        new_i = i + dt * (b * s * i - a * i)
        new_r = r + dt * a * i

        s, i, r = new_s, new_i, new_r

        if i > max_infected:
            max_infected = i

    return int(max_infected)

