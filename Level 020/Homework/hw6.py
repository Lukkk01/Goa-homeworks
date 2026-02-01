sentence = input("შეიყვანეთ წინადადება: ")

vowel = "aeiou"
vowel_count = 0
consonant_count = 0

for char in sentence:
        print(char) 
        if char in vowel:
            vowel_count += 1
        else:
            consonant_count += 1

print("ხმოვნების რაოდენობაა:", vowel_count)
print("თანხმოვნების რაოდენობაა:", consonant_count)
