export function NewContent(props){
    return(
        <div>
            <h1>{props.name==="show" ? props.name : ""}</h1>
        </div>
    );
}