# შექმენით 5 ცვლადი, რომლებშიც შეინახავთ განსხვავებულ ლოგიკურ და შედარების ოპერაციათა შედეგებს (უნდა იყოს შედარების და ლოგიკური ოპერატორები ერთად მაგალითად temperature > 30 and not cloudy), გვერდზე კომენტარის საშვალებით მიუწერეთ ეს შედეგი (boolean მნიშვნელობა) აიღეთ მრავალფეროვანი კომბინაციები
# 1. Check if temperature is more than 30 and it's not cloudy
temperature = 35
cloudy = False
result_1 = temperature > 30 and not cloudy  # True
print(result_1)

# 2. Check if temperature is less than or equal to 20 or it's rainy
temperature = 18
rainy = True
result_2 = temperature <= 20 or rainy  # True
print(result_2)

# 3. Check if it's sunny and temperature is between 20 and 30
sunny = True
temperature = 25
result_3 = sunny and (temperature > 20 and temperature < 30)  # True
print(result_3)

# 4. Check if it's not rainy and temperature is 25 or less
rainy = False
temperature = 22
result_4 = not rainy and temperature <= 25  # True
print(result_4)

# 5. Check if temperature is between 20 and 30 and it's cloudy
temperature = 28
cloudy = True
result_5 = (temperature > 20 and temperature < 30) and cloudy  # True
print(result_5)
