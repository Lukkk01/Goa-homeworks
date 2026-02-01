# 9) სთხოვეთ მომხმარებელს შეიყვანოს რიცხვი "input()"-ით და გადააკეთეთ "int"-ად. გამოიყენეთ "try" და "except", რომ გაუმკლავდეთ შეცდომას თუკი სიმბოლოები შეიყვანეს. დაბეჭდეთ „შეიყვანეთ მხოლოდ რიცხვი“
try:
    inputa = (input("enter your number: "))
except ValueError:
    print("შეიყვანე მხოლოდ რიხცვი!")
except ZeroDivisionError:
    print("ვერ შეიყვანთ ნულს!")
finally:
    print("წარმათებით შეიყვანეთ რიცხვი!")


