# 2) შემოიტანეთ სიტყვა input-ით და დაბეჭდეთ ის პატარა ასოებით
word = input("enter your word: ")
print(word.lower())
#############################################################################################################
# 3) შემოიტანეთ ორი სიტყვა და შეადარეთ (print(word1 == word2) ისე, რომ არ ჰქონდეს მნიშვნელობა ასოების სიდიდეს (გამოიყენეთ lower)
word1 = input("enter your word: ")
word2 = input("enter your word: ")
print(word1 == word2.lower())
#############################################################################################################
# 4) მოცემული სიაა: ["Georgia", "Armenia", "Greece", "Norway", "Denmark"]. ყველა ელემენტი გადააკეთეთ პატარა ასოებად და დაბეჭდეთ (გამოიყენეთ for ციკლი)
list = ["Georgia", "Armenia", "Greece", "Norway", "Denmark"]

for country in list:
    print(country.lower())