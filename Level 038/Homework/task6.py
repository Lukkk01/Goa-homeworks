def tuple_info(t):
    print(f"Tuple-ის სიგრძე: {len(t)}")
    if len(t) > 0:
        print(f"პირველი ელემენტი: {t[0]}")
        print(f"ბოლო ელემენტი: {t[-1]}")
    else:
        print("Tuple ცარიელია.")

animals = ("dog", "cat", "elephant", "lion")
tuple_info(animals)

empty_tuple = ()
tuple_info(empty_tuple)