// 12.Create a simple voting application using the useReducer hook.
// Set up a reducer to manage the votes for different options.
// Create buttons representing voting options.
// Use the useReducer hook to access the votes state and dispatch actions.
// Allow users to vote for their preferred options.
// Display the current vote count for each option.
import { useReducer } from "react";

const initialcandidates = [
  { id: 1, name: "Narendra Modi", count: 0 },
  { id: 2, name: "Rahul gandhi", count: 0 },
  { id: 3, name: "Trump", count: 0 },
  { id: 4, name: "Biden", count: 0 },
];
const reducer = (state, action) => {

    switch (action.type) {
        case "VOTE":
          return state.map(candidate => {
            if(action.id === candidate.id){
                return {...candidate, count: candidate.count + 1};
            } else {
                return candidate;
            }
          });
    
        default:
          return state;
    }
};
export function Vote() {
    const [candidates, dispatch] = useReducer(reducer, initialcandidates)

    const handleVote = (id) => {
        dispatch({type:"VOTE", id: id});
    }
  return (
    <div>
      <h1>Question-12: Voting</h1>
      {candidates.map(candidate =>(
      <div>
        <span>Candidate Name: {candidate.name}  </span>
        <button onClick={()=> handleVote(candidate.id)}> Vote Candidate </button>
        <span> Vote Count: {candidate.count} </span>
      </div>
      
      ))}
    </div>
  );
}
