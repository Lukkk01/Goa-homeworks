try:
    num = int(input("შეიყვანე რიცხვი: "))
    print(10 / num)
except ZeroDivisionError:
    print("ნულზე ვერ გაყობ")
except ValueError:
    print("შეიყავნეთ რიცხვი!")
else:
    print("პრობლემა არ იყო")
finally:
    print("დასრულებულია ")

