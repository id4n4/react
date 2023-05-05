import { TodoItem } from "./TodoItem"



export const TodoList = ({ todos = [] , onDeleteTodo, onToggleTodo}) => {
  return (
    <ul className="list-group">
      {
        todos.map((todo, i) => (
          <TodoItem 
          key={i} 
          todo={todo} 
          onDeleteTodo={id => onDeleteTodo(id)}
          onToggleTodo={id => onToggleTodo(id)}
          />
        ))
      }
    </ul>
  )
}
