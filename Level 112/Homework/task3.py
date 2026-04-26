# https://www.codewars.com/kata/59c3e819d751df54e9000098/train/python

def get_consective_items(items, key):
    items = str(items)
    key = str(key)

    max_count = 0
    current_count = 0

    for ch in items:
        if ch == key:
            current_count += 1
            max_count = max(max_count, current_count)
        else:
            current_count = 0

    return max_count