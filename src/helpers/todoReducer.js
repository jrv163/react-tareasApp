

export const todoReducer = ( initialState = [], action ) => {


    switch (action.type) {
        case '[TODO] Agregar Tarea':
           return [ ...initialState, action.payload ];

        case '[TODO] Remove Tarea':
           return initialState.filter( todo => todo.id !== action.payload );

        case '[TODO] ToggleTodo':
           return initialState.map( todo => {

                if ( todo.id === action.payload ) {// id
                    return {
                        ...todo,
                        done: !todo.done
                    }
                }

               return todo;
            });
    
        default:
            return initialState;
    }

}