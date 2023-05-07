import { useEffect, useReducer } from "react";
import { todoReducer } from "../helpers/todoReducer";

  const init = () => {
    return JSON.parse( localStorage.getItem('todos')) || [];
  }

export const useTodo = () => {

    const [todos, dispatch] = useReducer( todoReducer, [], init);

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify( todos ) || []);
  }, [todos])
  

    const handleNewTodo = ( todo ) => {

        const action = {
          type: '[TODO] Agregar Tarea',
          payload: todo
        }
    
        dispatch( action )
      }
    
      const handleDeleteTodo = ( id ) => {
      
        dispatch({
          type: '[TODO] Remove Tarea',
          payload: id
        });
      }
    
      const handleToggleTodo = ( id ) => {
    
        dispatch({
          type: '[TODO] ToggleTodo',
          payload: id
        });
      }


    return {
        todos, 
        handleDeleteTodo, 
        handleToggleTodo, 
        handleNewTodo,
        todosCount: todos.length,
        pendingTodosCount: todos.filter( todo => !todo.done).length

    }
}