#2) შექმენით Fighter კლასი და გაუწერეთ მინიმუმ 3 ატრიბუტი, შემდეგ შექმნით ამ კლასის 3 ინსტანცია და დაბეჭდეთ ერთ-ერთის თვისებები. დაწერეთ ობიექტზე ორინეტირებული პროგრამირება

class Fighter:
    def __init__(self, health, damage, speed):
        self.health = health
        self.damage = damage
        self.speed = speed

Samurai = Fighter(90, 50, 60)
Ninja = Fighter(70, 30, 80)
Knight = Fighter(110, 60, 30)

print(f"Health: {Knight.health}")
print(f"Damage: {Knight.damage}")
print(f"Speed: {Knight.speed}")

# OOP - ობიექტზე ორიენტირებული პროგრამირება, შედგება კლასებისგან და ობიექტებისგან. ერთ კლასში შეიძლება იყოს რამდენიმე ობიექტი