
export function Weather(props){
 

    if(props.temperature>25){
        return <h1>it's sunny today</h1>
    } else if(props.temperature<10) {
        return <h1>it's cold today</h1>
    }
}