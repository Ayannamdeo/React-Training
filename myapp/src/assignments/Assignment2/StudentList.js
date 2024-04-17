// 15.Create a functional component named StudentList that displays a list of student names..
// Define an array of student names as a constant within the component.
// Use the useMemo hook to memoize the list of student names.
// Render the list of student names on the screen.
// Include a button that, when clicked, appends a new student name to the list.
import { useMemo, useState } from "react";

const initialstudents = [
  { id: 1, name: "student 1" },
  { id: 2, name: "student 2" },
  { id: 3, name: "student 3" },
  { id: 4, name: "student 4" },
];
export function StudentList() {
    const [studentState, setStudentState] = useState(initialstudents);
    const memoizedstudents = useMemo(()=>{
        let result = [];
        result = studentState.map(student => student.name) ;
        return result;
    } , [studentState])

    
    function handleAdd(){
        const newstudent = prompt("entern new student name")
        if(newstudent){
            setStudentState(prevS => [...prevS, {id: prevS.length + 1, name: newstudent}])
        }
    }
  return (
    <div>
      <h1>Question-15: StudentList</h1>
        <ul>{memoizedstudents} </ul>
        <button onClick={handleAdd}>Add student</button>
    </div>
  );
}
