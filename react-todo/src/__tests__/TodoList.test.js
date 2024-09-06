import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import TodoList from './TodoList';

describe('TodoList', () => {
  it('renders the initial todos', () => {
    const { getAllByText } = render(<TodoList />);
    const todoItems = getAllByText(/Learn React|Build a Todo List|Test the Todo List/);
    expect(todoItems).toHaveLength(3);
  });

  it('renders the form for adding todos', () => {
    const { getByPlaceholderText } = render(<TodoList />);
    const input = getByPlaceholderText('Add a todo');
    expect(input).toBeInTheDocument();
  });

  it('adds a new todo when the form is submitted', () => {
    const { getByPlaceholderText, getAllByText } = render(<TodoList />);
    const input = getByPlaceholderText('Add a todo');
    const newTodoText = 'New Todo';

    fireEvent.change(input, { target: { value: newTodoText } });
    fireEvent.submit(input.form);

    const todoItems = getAllByText(newTodoText);
    expect(todoItems).toHaveLength(1);
  });

  it('toggles the completion of a todo item', () => {
    const { getAllByText, getByText } = render(<TodoList />);
    const todoToToggle = getByText(/Test the Todo List/);

    fireEvent.click(todoToToggle);

    const toggledTodo = getAllByText(/Test the Todo List/);
    expect(toggledTodo[0]).toHaveStyle('text-decoration: line-through');
  });

  it('deletes a todo item when the delete button is clicked', () => {
    const { getAllByText, queryByText } = render(<TodoList />);
    const todoToDelete = getAllByText(/Build a Todo List/);
    const deleteButton = todoToDelete[0].querySelector('button');

    fireEvent.click(deleteButton);

    const deletedTodo = queryByText(/Build a Todo List/);
    expect(deletedTodo).toBeFalsy();
  });
});