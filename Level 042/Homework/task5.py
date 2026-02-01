animal = {
    "type": "cat",
    "name": "Whiskers",
    "age": 3
}

animal_copy = animal.copy()

print("საწყისი animal ლექსიკონი:", animal)
print("ასლი animal_copy ლექსიკონი:", animal_copy)

animal.clear()
animal_copy.clear()

print("გასუფთავებული animal ლექსიკონი:", animal)
print("გასუფთავებული animal_copy ლექსიკონი:", animal_copy)