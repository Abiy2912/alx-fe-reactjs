import { render, screen, fireEvent } from '@testing-library/react';
import AddTodoForm from './AddTodoForm';

describe('AddTodoForm', () => {
  test('calls onAddTodo with the new todo text', () => {
    const onAddTodo = jest.fn();
    render(<AddTodoForm onAddTodo={onAddTodo} />);

    const inputElement = screen.getByRole('textbox');
    fireEvent.change(inputElement, { target: { value: 'New Todo' } });

    const submitButton = screen.getByRole('button', { name: 'Add' });
    fireEvent.click(submitButton);

    expect(onAddTodo).toHaveBeenCalledWith('New Todo');
  });
});
import { render, screen } from '@testing-library/react';
   import AddTodoForm from '../components/AddTodoForm'; 

   describe('AddTodoForm', () => {
     it('should render the form correctly', () => {
       render(<AddTodoForm />);
       const formElement = screen.getByRole('form'); 
       expect(formElement).toBeInTheDocument(); 
     });
   });