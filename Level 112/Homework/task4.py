# https://www.codewars.com/kata/5f3afc40b24f090028233490/train/python

def swap(s, n):
    if not s:
        return ""

    bits = list(bin(n)[2:])
    bit_index = 0

    result = []

    for ch in s:
        if ch.isalpha():
            bit = int(bits[bit_index])

            if bit == 1:
                if ch.islower():
                    result.append(ch.upper())
                else:
                    result.append(ch.lower())
            else:
                result.append(ch)

            bit_index = (bit_index + 1) % len(bits)
        else:
            result.append(ch)

    return "".join(result)
