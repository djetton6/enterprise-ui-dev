import { render, screen } from 'test/utilities';
import PackingList from '.';
import { input } from '@testing-library/user-event/dist/types/event';

it('renders the Packing List application', () => {
  render(<PackingList />);
});

it('has the correct title', async () => {
  render(<PackingList />);
  screen.getByText('Packing List');
});

it('has an input field for a new item', () => {
  render(<PackingList />)
  const inputField = screen.queryByPlaceholderText("New Item")
  expect(inputField).toBeVisible()
}
);

it(
  'has a "Add New Item" button that is disabled when the input is empty', () => {
    render(<PackingList />);
    const newItemInput = screen.queryByPlaceholderText("New Item")
    const addNewItemButton  = screen.getByRole('button', {name: 'Add New Item'})

    expect(newItemInput).toHaveValue('')
    expect(addNewItemButton).toBeDisabled()
  },
);

it.todo(
  'enables the "Add New Item" button when there is text in the input field',
  async () => {},
);

it.todo(
  'adds a new item to the unpacked item list when the clicking "Add New Item"',
  async () => {},
);
