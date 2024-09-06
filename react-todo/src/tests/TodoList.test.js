import { render, screen, fireEvent } from '@testing-library/react';
import TodoList from '../components/TodoList';

const initialTodos = [
  { id: 1, text: 'Learn React', completed: false },
  { id: 2, text: 'Build a Todo List', completed: false },
  { id: 3, text: 'Write Tests', completed: true },
];

describe('TodoList', () => {
  test('renders initial todos', () => {
    render(<TodoList todos={initialTodos} />);
    const todoItems = screen.getAllByRole('listitem');
    expect(todoItems.length).toBe(initialTodos.length); 

    const todoTexts = todoItems.map((item) => item.querySelector('span').textContent);
    expect(todoTexts).toEqual(initialTodos.map((todo) => todo.text));
  });

  test('adds a new todo', () => {
    // This test will need to simulate user input and form submission.
    // You'll need to adjust this based on how your form is implemented.
    render(<TodoList todos={initialTodos} />);
    
    // (Assume a form with an input and a submit button)
    const inputElement = screen.getByRole('textbox');
    const submitButton = screen.getByRole('button');

    fireEvent.change(inputElement, { target: { value: 'New Todo Item' } }); 
    fireEvent.click(submitButton); 

    expect(screen.getAllByRole('listitem').length).toBe(initialTodos.length + 1);
    expect(screen.getByText('New Todo Item')).toBeInTheDocument();
  });

  test('toggles todo completion status', () => {
    render(<TodoList todos={initialTodos} />);

    const todoItem = screen.getByText('Learn React');
    const checkboxElement = todoItem.querySelector('input[type="checkbox"]');
    fireEvent.click(checkboxElement);

    expect(todoItem.querySelector('span').style.textDecoration).toBe('line-through'); 
  });

  test('deletes a todo', () => {
    render(<TodoList todos={initialTodos} />);

    const todoItem = screen.getByText('Write Tests');
    const deleteButton = todoItem.querySelector('button');
    fireEvent.click(deleteButton);

    expect(screen.queryByText('Write Tests')).not.toBeInTheDocument();
  });
});