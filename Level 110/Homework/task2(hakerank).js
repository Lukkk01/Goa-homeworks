//https://www.hackerrank.com/challenges/employee-validation/problem?isFullScreen=true

function isValidEmployee(employee) {
  if (!employee.name || typeof employee.name !== "string") return false;
  if (!employee.email || !employee.email.includes("@")) return false;
  if (!employee.age || employee.age < 18) return false;

  return true;
}