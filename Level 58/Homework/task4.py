class Fighter:
    def __init__(self, health, damage, speed):
        self.health = health
        self.damage = damage
        self.speed = speed

    def heal(self, amount):
        self.health += amount
        print(f'Healed by {amount}')


class Archer(Fighter):
    def __init__(self, health, damage, speed, reload, range_, ):
        super().__init__(health, damage, speed)
        self.range = range_
        self.reload = reload


class Mage(Fighter):
    def __init__(self, health, damage, speed, spell, mana):
        super().__init__(health, damage, speed)
        self.spell = spell
        self.mana = mana


ninja = Fighter(100, 30, 90)
samurai = Fighter(150, 50, 60)
viking = Fighter(180, 60, 50)
warrior = Fighter(200, 40, 55)
veteran = Fighter(220, 45, 50)
tribesman = Archer(120, 25, 70, 80, 5)
necromancer = Mage(100, 35, 40, "Fireball", 200)

archer = Archer(70, 50, 50, 30, 80)
gunman = Archer(100, 75, 40, 30, 80)