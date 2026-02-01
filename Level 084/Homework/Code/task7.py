# https://www.codewars.com/kata/517b2bcf8557c200b8000015/train/python
# Ninja vs Samurai: Attack + Block

Position = {'high': 'h', 'low': 'l'}  # don't change this!

class Warrior:
    def __init__(self, name):
        self.name = name
        self.health = 100
        self.block = ""
        self.deceased = False
        self.zombie = False

    def attack(self, enemy, position):
        damage = 0
        if enemy.block != position:
            if position == Position['high']:
                damage += 10
            else:
                damage += 5
        if enemy.block == "":
            damage += 5
        enemy.set_health(enemy.health - damage)

    def set_health(self, new_health):
        self.health = max(0, new_health)
        if self.health == 0 and not self.deceased:
            self.deceased = True
            self.zombie = False
        elif self.deceased:
            self.zombie = True