import React from 'react';

interface TodoListProps {
  items: { id: string; text: string }[];
  onDeleteTodo: (id: string) => void;
}

const TodoList: React.FC<TodoListProps> = (props) => {
  return (
    <ul>
      {props.items.map((todo) => (
        <li key={todo.id}>
          <span>{todo.text}</span>
          {/* we expect to get todoId as a parameter, for this we use bind(), we do not bind the 'this', so the 1st param is null,
          the second argument  we pass to bind() will be the first parameter received in the onDeleteTodo function, and that is the todoId*/}
          <button onClick={props.onDeleteTodo.bind(null, todo.id)}>
            DELETE
          </button>
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
