const { render, screen, fireEvent } = require("@testing-library/react");
const { TodoItem } = require("./src/components/TodoItem");

describe('pruebas en el componente <Todo Item', () => { 
    
    const todo = {
        id: 1,
        description: 'Leer documentación',
        done: false
    };

    const onDeleteTodoMock = jest.fn();
    const onToggleTodoMock = jest.fn();

    beforeEach( () => jest.clearAllMocks() );

    test('Debe de mostrar el Todo Pendiente de completar ', () => { 
        
        render( 
        <TodoItem 
            todo={ todo } 
           
            onToggleTodo={ onToggleTodoMock }
        /> );

        const liElement = screen.getByRole('listitem');
        console.log(liElement.innerHTML);
        expect(liElement.className).toBe('list-group-item m-6 d-flex justify-content-between');

        const spanElement = screen.getByLabelText('span');
        expect( spanElement.className ).toContain('align-self-center ')
        
     });


    test('Debe de mostrar la tarea completada ', () => { 

        todo.done = true;
        
        render( 
        <TodoItem 
            todo={ todo } 
           
            onToggleTodo={ onToggleTodoMock }
 
        /> );

        const liElement = screen.getByRole('listitem');
        console.log(liElement.innerHTML);
        expect(liElement.className).toBe('list-group-item m-6 d-flex justify-content-between');

        const spanElement = screen.getByLabelText('span');
        expect( spanElement.className ).toContain('text-decoration-line-through')
        
     });


    test('Debe de llamar el toggle Todo cuando se hace click ', () => { 

        todo.done = true;
        
        render( 
        <TodoItem 
            todo={ todo } 
           
            onToggleTodo={ onToggleTodoMock }
 
        /> );

        const spanElement = screen.getByLabelText('span');
        fireEvent.click(  spanElement );

        expect( onToggleTodoMock ).toHaveBeenCalledWith( todo.id );
        
     });


    test('Debe de llamar el delete todo ', () => { 

        todo.done = true;
        
        render( 
        <TodoItem 
            todo={ todo } 
           
            onDeleteTodo={ onDeleteTodoMock }
 
        /> );

        const deleteButton = screen.getByRole('button');
        fireEvent.click(  deleteButton );

        expect( onDeleteTodoMock ).toHaveBeenCalledWith( todo.id );
        
     });
   
 })