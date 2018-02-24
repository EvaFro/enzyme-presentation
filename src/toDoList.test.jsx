import React from 'react';
import ToDoList from '../client/components/toDoList';
import ToDo from '../client/components/toDo'

describe('<ToDoList /> Component', () => {
  it('should render a list', () => {
    const wrapper = shallow(<ToDoList list={[]}/>);
    expect(wrapper.is('div')).toEqual(true);
  });

  it('should dynamically render an given array', () => {
    const todos = ['play basketball', 'eat', 'play basketball'];
    const wrapper = shallow(<ToDoList list={todos} />);
    expect(wrapper.find(ToDo)).toHaveProperty('length', todos.length);
  });
});
