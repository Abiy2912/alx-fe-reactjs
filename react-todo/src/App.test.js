import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

describe('App', () => {
  test('adds a new todo', () => {render(<App />);

    const inputElement = screen.getByRole('textbox');
    fireEvent.change(inputElement, { target: { value: 'New Todo' } });

    const submitButton = screen.getByRole('button', { name: 'Add' });
    fireEvent.click(submitButton);

    const newTodoItem = screen.getByText('New Todo');
    expect(newTodoItem).toBeInTheDocument();
  });

  test('toggles todo completion status', () => {
    render(<App />);

    const todoItem = screen.getByText('Build a Todo List');
    const checkboxElement = todoItem.querySelector('input[type="checkbox"]');
    fireEvent.click(checkboxElement);

    expect(todoItem.querySelector('span').style.textDecoration).toBe('line-through');
  });

  test('deletes a todo', () => {
    render(<App />);

    const todoItem = screen.getByText('Learn React');
    const deleteButton = todoItem.querySelector('button');
    fireEvent.click(deleteButton);

    expect(todoItem).not.toBeInTheDocument();
  });
});