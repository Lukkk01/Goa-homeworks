def modify_dict(d):

    d.update({'age': 14})

    popped = d.popitem()

    print("წაშლილი წყვილი:", popped)

    print("განახლებული ლექსიკონი:", d)

student = {'name': 'Tamar', 'hobby': 'painting'}
modify_dict(student)