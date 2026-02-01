# https://www.codewars.com/kata/5297bf69649be865e6000922/train/python
# Simple Sentences

def make_sentences(parts):
    result = []
    for i, part in enumerate(parts):
        if part == ',':
            if result:
                result[-1] += ','
        elif part != '.':
            result.append(part)
            
    return ' '.join(result) + '.'