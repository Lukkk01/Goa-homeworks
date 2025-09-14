class Student:
    def __init__(self, name, grade):
        self.name = name
        self.grade = grade

    def check_pass(self):
        return self.grade >= 50
    
student = Student('Joe', 49)