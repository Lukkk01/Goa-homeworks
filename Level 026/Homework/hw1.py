# 2) დაწერეთ პროგრამა, რომელიც ითხოვს ორ რიცხვს მომხმარებლისგან. შემოაყვანინეთ მომხმარებელს დაწყების და დასრულების რიცხვი. თუ მეორე რიცხვი ნაკლებია პირველზე, გამოუტანეთ შეტყობინება: არასწორი შუალედი. სხვა შემთხვევაში დაბეჭდეთ ყველა რიცხვი მოცემულ შუალედში ჩათვლით და იპოვეთ ამ რიცხვების ჯამი. გამოიყენეთ for ციკლი, if-else პირობა, input ფუნქცია, და int ტიპში გადაყვანა
start = int(input("enter your first number: "))
end = int(input("enter your second number: "))

if end < start:
    print("wrong interval.")
else:
    total = 0
    print("numbers in interval:")
    for number in range(start, end + 1):
        print(number)
        total += number
    print("total is:", total)
