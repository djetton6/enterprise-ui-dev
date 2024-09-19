import { render, screen, waitFor } from 'test/utilities';
import PackingList from '.';
import { input } from '@testing-library/user-event/dist/types/event';
import userEvent from '@testing-library/user-event';

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

it(
  'enables the "Add New Item" button when there is text in the input field', async () => {
   // be reminded of userevent
    const {user} = render(<PackingList />);
    const newItemInput = screen.getByPlaceholderText("New Item")
    //getByReturns undefined and not NULL! , needed for the user event
    const addNewItemButton  = screen.getByRole('button', {name: 'Add New Item'})

    await user.type(newItemInput,'PS4')

    expect(newItemInput).toHaveValue('PS4')

    expect(addNewItemButton).toBeEnabled()
  },
);

it('adds a new item to the unpacked item list when the clicking "Add New Item"',
  async () => {
      const { user } = render(<PackingList />);
      const newItemInput = screen.getByLabelText('New Item Name');
      const addNewItemButton  = screen.getByRole('button', {
        name: 'Add New Item',
      });

      await user.type(newItemInput, 'MacBook Pro');
      await user.click(addNewItemButton);

      expect(screen.getByLabelText('MacBook Pro')).not.toBeChecked();
  },
);

// how to get test isolation with the getByLabelText? // 
it('Removes an item' , async () => {
      const { user } = render(<PackingList />);
      const newItemInput = screen.getByLabelText('New Item Name');
      const addNewItemButton  = screen.getByRole('button', {
        name: 'Add New Item',
      });

      await user.type(newItemInput, 'MacBook Pro');
      await user.click(addNewItemButton);

      const removeItem = screen.getByLabelText('Remove MacBook Pro')

      await user.click(removeItem);

      // use waitFor(() => ) for items that need to wait for

      waitFor(() => expect(removeItem).not.toBeInTheDocument());

      
      

  },
);