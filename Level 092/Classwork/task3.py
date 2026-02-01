str = 'Ablblaa'

def case_swap(word):
    result =""

    for ch in word:
        code = ord(ch)
    
    if 65 <= code <= 90:
        result += chr(code + 32)
    
    elif 97 <= code <= 122:
        result += chr(code - 32)
    else:
        result += ch

    return result
print(case_swap(str))