# https://www.codewars.com/kata/536e9a7973130a06eb000e9f/train/python
# Pokemon Damage Calculator

def calculate_damage(your_type, opponent_type, attack, defense):
    effectiveness = {
        'fire':     {'fire': 0.5, 'water': 0.5, 'grass': 2.0, 'electric': 1.0},
        'water':    {'fire': 2.0, 'water': 0.5, 'grass': 0.5, 'electric': 0.5},
        'grass':    {'fire': 0.5, 'water': 2.0, 'grass': 0.5, 'electric': 1.0},
        'electric': {'fire': 1.0, 'water': 2.0, 'grass': 1.0, 'electric': 0.5}
    }
        
    effect = effectiveness[your_type][opponent_type]
    damage = 50 * (attack / defense) * effect
    return damage