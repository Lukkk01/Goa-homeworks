# dictionary
student = {
    "name": "nika",
    "age": 14,
    "major": "Computer Science",
    "Cm": 1.60
}
#///////////////////////////////////////////////////
student.update({"Cm": 1.75})
#///////////////////////////////////////////////////
student.update({"Hobby": "coding"})
#///////////////////////////////////////////////////
student.pop("major")
#///////////////////////////////////////////////////
student["name"] = "Luka"
#///////////////////////////////////////////////////
print(student)
