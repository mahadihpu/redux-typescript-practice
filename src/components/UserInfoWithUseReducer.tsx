import { FormEvent, useReducer } from "react"

const initialState = {
    name: "",
    age: "",
    hobbies: [] as string[],
};

type TAction =
  | { type: "addName"; payload: string }
  | { type: "addAge"; payload: string }
  | { type: "addHobby"; payload: string };


const reducer = (currentState: typeof initialState, action: TAction)  => {
     switch (action.type) {
        case "addName":
            return {...currentState, name: action.payload };
        case "addAge":
            return {...currentState, age: action.payload };
        case "addHobby":
            return {...currentState, hobbies: [...currentState.hobbies, action.payload] };           
        default:
            return currentState;
     }
}

export default function UserInfoWithUseReducer() {
    const [state, dispatch] = useReducer(reducer, initialState);

  
    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log({ state });
      };

  return (
    <div>
         <form onSubmit={handleSubmit}>
        <input
          className="border border-purple-300 m-10"
          type="text"
          name="name"
          id="name"
          placeholder="name"
          onChange={(e) => dispatch({ type: "addName", payload: e.target.value })}
        />
        <input
          className="border border-purple-300 m-10"
          type="number"
          name="age"
          id="age"
          placeholder="age"
          onChange={(e) => dispatch({ type: "addAge", payload: e.target.value })}
        />
        <input
          className="border border-purple-300 m-10"
          type="text"
          name="hobbies"
          id="hobbies"
          placeholder="hobby"
          onBlur={(e) => dispatch({type: "addHobby", payload: e.target.value})}
        />
        <button type="submit" className="px-10 py-2 bg-purple-500 text-white">
          Submit
        </button>
      </form>
    </div>
  )
}
