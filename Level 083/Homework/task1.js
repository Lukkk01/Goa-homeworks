const studentsMap = new Map([
    ['John', 85],
]);

studentsMap.set('Alice', 90);
studentsMap.set('Bob', 78);
studentsMap.set('Charlie', 92);
studentsMap.set('Diana', 88);

console.log(studentsMap.get('Alice'));
console.log(studentsMap.has('Bob'));
studentsMap.delete('John');

console.log(studentsMap);