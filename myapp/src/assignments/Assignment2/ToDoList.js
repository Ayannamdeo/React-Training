
// 3.Create a functional component called ToDoList.
// Use the useState hook to manage a state variable named todos, initialized as an empty array.
// Render a list of todos using the map function.
// Each todo should have a checkbox to mark it as completed and a delete button to remove it from the list.
// Use the useState hook to manage the state of each todo item (completed or not).import {useState} from 'react'; 
import {useState} from 'react'; 


export function ToDoList(){ 
    const [todos, setTodos] = useState([]); 
    const [todoval, setTodoval] = useState(""); 

    function handleChange(event){
        setTodoval(event.target.value)
    }
    function addTodo(event){
        if (todoval.trim() !== ""){
            setTodos([...todos, {id:todos.length + 1, value:todoval, completed:false}]);
        }
        setTodoval("");
    }
    function handleDelete(id){
        setTodos(todos.filter(todo => todo.id!== id))
    }
    function handleChecked(todo){
        setTodos(todos.map(t => {
            return todo.id === t.id ? {...t, completed: !t.completed} : t;
        }))
    }

    
                
    return (
      <div>
        <div>
          <h1>Question-3: Todo List</h1>
          <input
            type="text"
            name="todo"
            placeholder="enter todos"
            value={todoval}
            onChange={handleChange}
          />
          <button onClick={addTodo}>Add</button>
        </div>
        <ol>
            {todos.map(todo => {
                return (
                  <li key={todo.id}>
                    <input type='checkbox' checked={todo.completed} onChange={()=> handleChecked(todo)}/>
                    {todo.value}
                    <button onClick={()=> handleDelete(todo.id)}>Delete</button>
                  </li>
                );
            })}
        </ol>
      </div>
    );
}  