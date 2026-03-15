'https://www.codewars.com/kata/5245a9138ca049e9a10007b8/train/python'
# Adjacent repeated words in a string

def count_adjacent_pairs(s):
    words = s.lower().split()
    count = 0
    i = 1

    while i < len(words):
        if words[i] == words[i-1]:
            count += 1
            while i < len(words) and words[i] == words[i-1]:
                i += 1
        else:
            i += 1

    return count