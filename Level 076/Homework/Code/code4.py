# https://www.codewars.com/kata/5938f5b606c3033f4700015a/train/python
# Alphabet war - airstrike - letters massacre

def alphabet_war(fight):
    left = {'w': 4, 'p': 3, 'b': 2, 's': 1}
    right = {'m': 4, 'q': 3, 'd': 2, 'z': 1}

    result = ""
    
    for i in range(len(fight)):
        if fight[i] == '*':
            continue
        elif i > 0 and fight[i - 1] == '*':
            continue
        elif i < len(fight) - 1 and fight[i + 1] == '*':
            continue
        result += fight[i]
        
    
    left_score = 0
    right_score = 0
    
    for letter in result:
        if letter in left:
            left_score += left[letter]
        elif letter in right:
            right_score += right[letter]
            
    
    if left_score > right_score:
        return 'Left side wins!'
    elif right_score > left_score:
        return 'Right side wins!'
    else:
        return "Let's fight again!"