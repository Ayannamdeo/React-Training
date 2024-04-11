export function TaskList(props){
    console.log(props.tasks);
    return (
        <ul>
            {props.tasks.map(task => <li>{task}</li>)}
        </ul>
    );
}