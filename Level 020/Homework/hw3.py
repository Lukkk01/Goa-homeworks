even_count = 0
odd_count = 0

while True:
    number = int(input("შეიყვანეთ რიცხვი: "))
    
    if number < 0:
        break  
    elif number % 2 == 0:
        even_count += 1 
    else:
        odd_count += 1  

print("ლუწი რიცხვების რაოდენობაა:", even_count)
print("კენტი რიცხვების რაოდენობაა:", odd_count)
