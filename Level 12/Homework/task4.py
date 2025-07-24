read_pages = int(input("Enter amount of pages read: "))
free_time = bool(input("Did you have free time? (True/""): "))
productive = (read_pages >= 20) and free_time

print(productive)