import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

test('selecting a skill traces where it was used and highlights projects', () => {
  render(<App />);
  fireEvent.click(screen.getAllByRole('button', { name: 'Docker' })[0]);
  expect(screen.getByText('Used in 4 places')).toBeInTheDocument();
  expect(screen.getByRole('status')).toHaveTextContent('Highlighting work that uses Docker');
  fireEvent.click(screen.getByRole('button', { name: /show all/i }));
  expect(screen.queryByRole('status')).not.toBeInTheDocument();
});
