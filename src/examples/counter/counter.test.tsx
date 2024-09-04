// @vitest-environment happy-dom

import { screen, render, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Counter from '.';

test('it should render the component', () => {
  render(<Counter />)
  // serialization of the actual dom - screen.debug(document.body)
});

test('it should increment when the "Increment" button is pressed',
  async () => {
    // better heueristics for the user
    const user = userEvent.setup()
    render(<Counter />);
    const currentCount = screen.getByTestId('current-count');

    expect(currentCount).toHaveTextContent('0')

    const button  = screen.getByRole('button', { name: 'Increment'})
    
    // better for user testing to use user testing
    await user.click(button)
    expect(currentCount).toHaveTextContent('1');
    
  },
);
