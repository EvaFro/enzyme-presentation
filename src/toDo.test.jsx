import React from 'react';
import ToDo from '../client/components/toDo'

describe('<ToDo /> Component', () => {
  it('should render a list', () => {
    const wrapper = shallow(<ToDo />);
    expect(wrapper.is('li')).toEqual(true);
  });

  it('renders the todo given', () => {
    const wrapper = shallow(<ToDo todo="read a book" />);
    expect(wrapper.find('li').text()).toEqual('read a book');
  });
});
