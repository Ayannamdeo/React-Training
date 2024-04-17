// 16.Create a functional component named EmployeeSalary that displays the average salary of a list of employees.
// Define an array of employee objects, where each object has a name and salary property.
// Use the useMemo hook to calculate the average salary of employees.
// Ensure that the useMemo hook has a dependency on the employee data so that it recalculates when the employee data changes.
// Render the average salary on the screen.
// Include a button that, when clicked, updates the employee data with new salaries.
import { useMemo, useState } from "react";

const intialemp = [
  { name: "Alice", salary: 50000 },
  { name: "Bob", salary: 60000 },
  { name: "Charlie", salary: 70000 },
];
export function EmployeeSalary() {
  const [empstate, setEmp] = useState(intialemp);

  const avgSalary = useMemo(() => {
    const totalsalary = empstate.reduce((acc, e) => acc + e.salary, 0);
    return totalsalary / empstate.length;
  }, [empstate]);
  const updateSalaries = () => {
    const newEmployees = empstate.map((employee) => ({
      ...employee,
      salary: Math.floor(Math.random() * 20000 + 50000), // Generate random salary between 50000 and 70000
    }));
    setEmp(newEmployees);
  };
  return (
    <div>
      <h1>Question-16: Average EmployeeSalary</h1>
      <ul>
        {empstate.map((e) => (
          <li>{`Employee: ${e.name} with Salary: ${e.salary} `}</li>
        ))}
      </ul>
      <p>Average Salary: {avgSalary} </p>
      <button onClick={updateSalaries}>Update Salary</button>
    </div>
  );
}
