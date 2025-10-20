function Student(name, age, grade, active) {
    this.name = name;
    this.age = age;
    this.grade = grade;
    this.active = active;

    this.promote = function() {
        if (this.active) {
            this.grade += 1;
            console.log(`${this.name} was promoted`)
        } else {
            console.log(`${this.name} was not active`)
        }
    }
}

const student1 = new Student('Nika', 14, 8, true)
const student2 = new Student('Ana', 17, 11, false)
const student3 = new Student('Nika', 7, 2, true)

console.log(student1.promote())
console.log(student2.promote())
console.log(student3.promote())
