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
