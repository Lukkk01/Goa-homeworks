students = {
    "ლუკა": [95, 88, 92, 85, 90],
    "მეორელუკა": [78, 82, 80, 74, 79],
    "მესამელუკა": [65, 70, 68, 72, 66],
    "მეოთხელუკა": [55, 60, 58, 62, 57],
    "ლუკები": [45, 50, 48, 42, 47]
}

# ფუნქცია საშუალო ქულის გამოსათვლელად
def calculate_average(scores):
    return sum(scores) / len(scores)

# ფუნქცია შეფასების განსაზღვრელად
def get_grade(average):
    if 91 <= average <= 100:
        return "A"
    elif 81 <= average <= 90:
        return "B"
    elif 71 <= average <= 80:
        return "C"
    elif 61 <= average <= 70:
        return "D"
    elif 51 <= average <= 60:
        return "E"
    elif 41 <= average <= 50:
        return "FX"
    else:
        return "F"

# ფუნქცია საუკეთესო სტუდენტის პოვნისთვის
def find_top_student(students_dict):
    top_student = None
    top_average = -1
    for student, scores in students_dict.items():
        avg = calculate_average(scores)
        if avg > top_average:
            top_average = avg
            top_student = student
    return top_student, top_average

# საშუალო ქულებისა და შეფასებების გამოთვლა
student_results = []
for student, scores in students.items():
    avg = calculate_average(scores)
    grade = get_grade(avg)
    student_results.append((student, avg, grade))

# სტუდენტების კლებადობით დალაგება
student_results.sort(key=lambda x: x[1], reverse=True)

# შედეგების ფორმატირებული გამოქვეყნება
print(f"{'სტუდენტი':<10} {'საშ. ქულა':<10} {'შეფასება':<5}")
print("-" * 30)
for student, avg, grade in student_results:
    print(f"{student:<10} {avg:<10.2f} {grade:<5}")

# საუკეთესო სტუდენტის ჩვენება
top_student, top_average = find_top_student(students)
print("\nსაუკეთესო სტუდენტი:")
print(f"{top_student} - საშუალო ქულა: {top_average:.2f}, შეფასება: {get_grade(top_average)}")
