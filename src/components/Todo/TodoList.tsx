import { useContext } from 'react'
import { TodoContext, TTodo } from '../../context/TodoProvider'

export default function TodoList() {
    const {state} = useContext(TodoContext)
  return (
    <div>
        {
            state.map((item: TTodo) => (
                <p>{item.title}</p>
            ))
        }
    </div>
  )
}
