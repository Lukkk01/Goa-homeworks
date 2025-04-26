"""2) მომხმარებელს შემოატანინეთ რიცხვი, შემდეგ თუ ეს რიცხვი დადებითია დაბეჭდეთ ეს და კიდევ შეამოწმეთ ლუწია თუ კენტი, ხოლო თუ არაა დადებითი მხოლოდ დაბეჭდეთ რომ უარყოფითია"""
num = int(input("enter your number: "))
i = 0 
if num > 0:
    print("your number is positive")
    if i % 2 == 0:
        print("even", i)
    else:
        print("odd", i)
else:
    print("your number is negative")
