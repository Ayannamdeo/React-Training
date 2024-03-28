export function UserCard(props){
    return (
        <div>
            <section>
                <h2>{props.name}</h2>
                <h2>{props.email}</h2>
                <img src={props.url}
                     alt={props.name}/>
            </section>
        </div>
    );
}