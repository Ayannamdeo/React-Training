
// 2.create a functional component called personform.
// use the usestate hook to manage three state variables: firstname, lastname, and age, all initialized to empty strings.
// render three input fields for the user to enter their first name, last name, and age.
// as the user types, update the respective state variables.
// display the entered information below the input fields.import { usestate } from "react";
import { useState } from "react";

export function PersonForm(){
    const [person, setperson] = useState({firstName:"",
                                          lastName:"",
                                          age:""        });
    const [submitted, setSubmitted] = useState(false);
    const [errormsg, setErrormsg] = useState("");


    function handleChange(event){
        const name = event.target.name;
        const value = event.target.value;

        setperson((prevState)=>({...prevState, [name]: value}))
    }

    function handleSubmit(event){
        event.preventDefault();
        if(!person.firstName || !person.lastName || !person.age){
            setErrormsg("Input Fields cannot be empty")
            return;
        }
        setSubmitted(true);
        setErrormsg("");
        console.log(person);
    }
    return(
        <div>
            <h1>Question-2: PersonForm</h1>
            <form onSubmit={handleSubmit}>
                <label>Enter the details: </label>
                <input name="firstName" type="text" value={person.firstName} onChange={handleChange} placeholder="First Name"/>
                <input name="lastName" type="text" value={person.lastName} onChange={handleChange} placeholder="Last Name"/>
                <input name="age" type="number" value={person.age} onChange={handleChange} placeholder="Age"/>
                <input type="submit"/>
            </form>
            {errormsg && <p style={{ color: "red" }}> {errormsg}</p>}
            {submitted && <h2>{`Your name is ${person.firstName} ${person.lastName} and your age is ${person.age}`}</h2>}
        </div>
    );

}