# 1 List
# - ცვალებადია (mutable) – ელემენტების დამატება, შეცვლა ან წაშლა შესაძლებელია.


my_list = [10, 20, 30, 40, 30]
my_list[1] = 25 

# 2. Tupl
# - უცვლელია (immutable) – ელემენტების შეცვლა ან წაშლა შეუძლებელია.


my_tuple = (1, 2, 3, 3, 4)

print(my_tuple[2])
print(my_tuple)


# 3. Set
# - უნიკალურ ელემენტებს ინახავს (no duplicates allowed).


my_set = {1, 2, 3, 3, 4}

print(my_set)
my_set.add(5)
my_set.remove(2)