# 5) შემოიტანეთ სიტყვა input-ით და დაბეჭდეთ დიდი ასოებით
word = input("enter your word: ")
print(word.upper())
########################################################################################################################
# 6) მოცემული სიაა: ["Georgia", "Armenia", "Greece", "Norway", "Denmark"]. ყველა ქვეყანა გადააკეთეთ დიდი ასოებად და დაბეჭდეთ
countries = ["Georgia", "Armenia", "Greece", "Norway", "Denmark"]

for country in countries:
    print(country.upper())
########################################################################################################################
# 7) შემოიტანეთ სიტყვა input-ით და შეამოწმეთ, არის თუ არა ის მთლიანად დიდი ასოებით
word = input("enter word : ")

if word.isupper():
    print("word is with big letters.")
else:
    print("word is with small letters.")

