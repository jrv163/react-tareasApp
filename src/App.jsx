
import './App.css'

import { TodoAdd, TodoList } from './components'
import { useTodo } from './hooks';

export const App = () => {

  const { todos, todosCount, pendingTodosCount, handleDeleteTodo, handleToggleTodo, handleNewTodo } = useTodo();
  

  return (
   <>
      <div className='container'>
          <h1>ListaTareasApp: { todosCount }, <span>Pendientes: { pendingTodosCount }</span></h1>
          <hr />

          <div className='row'>
            <div className='col-7'>

              <TodoList 
                  todos={ todos } 
                  onDeleteTodo={ handleDeleteTodo } 
                  onToggleTodo={ handleToggleTodo }
              />
            </div>

            <div className='col-5'>
                <h4>Agregar Tarea</h4>
                <hr />

              <TodoAdd onNewTodo={ handleNewTodo }/>
                
            </div>
          </div>
      </div>
   
   </>
  )
}


