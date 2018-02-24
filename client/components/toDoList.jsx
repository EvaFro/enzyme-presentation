import React from 'react';
import ToDo from './toDo';

const ToDoList = ({ list }) => (
  <div>
    {list.map(todo => <ToDo todo={todo} />)}
  </div>
);

export default ToDoList;
