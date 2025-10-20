'https://www.codewars.com/kata/517abf86da9663f1d2000003/train/python'
# Convert string to camel case

# ამოხსნა აინც რო რამე რა
def to_camel_case(text):
    if not text:
        return "" # აქ დავაბრუნებტ ცარიელ სტრინგს ტუ არაფერია

    words = []
    current = ""
    for ch in text:
        if ch == "-" or ch == "_":
            words.append(current)
            current = ""
        else:
            current += ch
    words.append(current)  # დავამატოთ ბოლო სიტყვცა

    # პირველი რჩება უცვლელად
    first = words[0]

    # დანარჩენს ვუზრდით პირველ ასოს
    rest = []
    for word in words[1:]:
        if word:
            rest.append(word[0].upper() + word[1:])
        else:
            rest.append("")

    return first + ''.join(rest)
