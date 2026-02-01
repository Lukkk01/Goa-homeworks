# თანხმოვანი ასოების სია (ინგლისური ალფაბეტისთვის)
CONSONANTS = "bcdfghjklmnpqrstvwxyzBCDFGHJKLMNPQRSTVWXYZ"

# მომხმარებლისგან ტექსტის მიღება (მინიმუმ 4 სიტყვა)
while True:
    text = input("Enter at least 4 words: ")
    words = text.split()
    if len(words) >= 4:
        break
    print("Please enter at least 4 words.")

# ტექსტის შენახვა words.txt ფაილში
with open("words.txt", "w") as f:
    f.write(text)

# ფაილის კითხვა და დამუშავება
with open("words.txt", "r") as f:
    content = f.read()

words_list = content.split()

# სიტყვების რაოდენობა
num_words = len(words_list)

# ყველაზე მოკლე სიტყვა
shortest_word = min(words_list, key=len)

# თანხმოვანი ასოების რაოდენობა
consonant_count = sum(1 for c in content if c in CONSONANTS)

# ასოების swap case (დიდი <-> პატარა)
swapped_text = content.swapcase()

# დამუშავებული ტექსტის შენახვა processed.txt ფაილში
with open("processed.txt", "w") as f:
    f.write(swapped_text)

# შედეგის გამოქვეყნება კონსოლში
print("\n--- Text Analysis ---")
print(f"Number of words: {num_words}")
print(f"Number of consonants: {consonant_count}")
print(f"Shortest word: {shortest_word}")
print("\nProcessed text saved in 'processed.txt'")
