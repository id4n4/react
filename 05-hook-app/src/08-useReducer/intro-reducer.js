const initialState = [{
    id: 1,
    todo: 'Comprar pan',
    done: false,
}]

const todoReducer = (state = initialState, action) => {
    if (action?.type === 'add') {
        return [...state, action.payload];
    }

    return state;
} 

let todos = todoReducer();
const newTodo = {
  id:2,
  todo: 'Comprar leche',
  done: false,
}

todos = todoReducer(todos, {type: 'add', payload: newTodo});

console.log({state:todos}); 