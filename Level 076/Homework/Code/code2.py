# https://www.codewars.com/kata/528d36d7cc451cd7e4000339/train/python
# Who has the most money?

class Student:
    def __init__(self, name, fives, tens, twenties):
        self.name = name
        self.fives = fives
        self.tens = tens
        self.twenties = twenties


def most_money(students):
    totals = []
    for student in students:
        total = student.fives * 5 + student.tens * 10 + student.twenties * 20
        totals.append(total)

    max_total = max(totals)

    if totals.count(max_total) > 1:
        return 'all'

    richest = totals.index(max_total)
    return f"{students[richest].name}"