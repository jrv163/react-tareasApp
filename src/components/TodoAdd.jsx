import { useForm } from "../hooks/useForm"


export const TodoAdd = ({ onNewTodo }) => {

    const { description, onInputChange,
        onResetForm, } = useForm({
        description: ''
    });

   const onSubmit = (e) => {
        e.preventDefault()
        
        if( description.length <= 1 ) return;

        const newTodo ={
            id: new Date().getTime(),
            description: description,
            done: false
        }

        onNewTodo(newTodo);
        onResetForm();
   }

  return (
    <form onSubmit={ onSubmit }>
        <input 
            type='text'
            placeholder='Agrega una tarea a la lista'
            className='form-control'
            name="description"
            value={ description }
            onChange={ onInputChange }
        />

        <button 
            type="submit"
            className="btn btn-primary mt-3"
        >
             Agregar
        </button>

  </form>
  )
}
