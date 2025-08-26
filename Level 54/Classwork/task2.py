def greet_people(special, *guests, **visitors):
    #  special
    print(f" გამარჯობა, {special}! შენი მოსვლა ჩვენთვის დიდი პატივია.")

    # regular-guests
    for guest in guests:
        print(f" გამარჯობა, {guest}! მიხარია რომ მოხვედი.")
