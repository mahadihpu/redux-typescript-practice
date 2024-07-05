import React from 'react'


type TProps = {
    count: number,
    setCount: React.Dispatch<React.SetStateAction<number>>
};

export default function Counter({count, setCount}: TProps) {
  
  return (
    <div style={{border: "3px solid orange", padding: "100px 200px"}}>
        <button onClick={() => setCount((prevCount) => prevCount + 1)}>{count}</button>
    </div>
  )
}
