balance = 1000
transactions = []

while True:
    print("\n1. ბალანსი\n2. შეტანა\n3. გატანა\n4. ბოლო 5 ტრანზაქცია\n5. გასვლა")
    try:
        choice = int(input("აირჩიეთ: "))

        if choice == 1:
            print(f"ბალანსი: {balance} ლარი")

        elif choice == 2:
            amt = float(input("თანხა: "))
            if amt <= 0:
                print("დადებითი რიცხვი შეიყვანეთ")
                continue
            balance += amt
            transactions.append({'type': 'შეტანა', 'amount': amt, 'balance': balance})

        elif choice == 3:
            amt = float(input("თანხა: "))
            if amt <= 0 or amt > balance:
                print("არასწორი თანხა")
                continue
            balance -= amt
            transactions.append({'type': 'გატანა', 'amount': amt, 'balance': balance})

        elif choice == 4:
            for t in transactions[-5:]:
                print(f"{t['type']} | {t['amount']} | ბალანსი: {t['balance']}")

        elif choice == 5:
            print(f"საბოლოო ბალანსი: {balance}")
            print(f"ტრანზაქციები: {len(transactions)}")
            break

        else:
            print("არასწორი არჩევანი")

    except ValueError:
        print("რიცხვი შეიყვანეთ")
