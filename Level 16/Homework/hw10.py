# 13) შექმენით პროგრამა რომელიც მომხმარებელს შეეკითხება პაროლს სანამ ის არ შემოიყვანს goabest123-ს
pin_code = "3212"
entered_pin = ""

count = 0

while entered_pin != pin_code:
    entered_pin = input("Enter pin code: ")
    count += 1

print(f"You're authorizied. You took {count} attempts")