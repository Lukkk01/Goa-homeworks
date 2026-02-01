correct_pin = "group64"
attempts = 3

while attempts > 0:
    entered_pin = input("შეიყვანეთ PIN კოდი: ")
    
    if entered_pin == correct_pin:
        print("Access Granted")
    else:
        attempts -= 1
        print("არასწორი PIN. დარჩენილი მცდელობები:", attempts)

if attempts == 0:
    print("Access Denied")