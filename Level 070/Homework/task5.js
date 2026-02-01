function Employee(name, position, salary, active) {
    this.name = name;
    this.position = position;
    this.salary = salary;
    this.active = active;

    this.raiseSalary = function() {
        if (this.active) {
            this.salary *= 1.2;
            console.log(`${this.name}'s salary was increased!`);
        } else {
            console.log(`${this.name} is not active`);
        }
    }
}

const employees = [ 
    new Employee('Nika', 'Developer', 2000, true),
    new Employee('Ana', 'Designer', 1800, true),
    new Employee('Luka', 'Manager', 1600, false)
];

for (let i = 0; i < employees.length; i++) {
    employees[i].raiseSalary()
}

console.log(employees)