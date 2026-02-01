total = 0
count = 0

while True:
    number = int(input("შეიყვანეთ რიცხვი: "))
    
    if number == -1:
        break
    total += number
    count += 1

if count > 0:
    average = total / count
    print("შეყვანილი რიცხვების საშუალოა:")
