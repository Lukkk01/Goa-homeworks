# 1) შექმენით პროდუქტების dictionary. შემდეგ გაფილტრეთ ეს dictionary და დატოვეთ ის პროდუქტები რომელთა ფასი ნაკლებია 100-ზე. საბოლოოდ დაბეჭდეთ ეს dict
products = {"limon": 50,"banana": 30,"pear": 120,"red apple": 90,"apple": 150,"orange": 80}

new_products = dict(filter(lambda item: item[1] < 100, products.items()))
print(new_products)
