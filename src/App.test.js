import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const noSchoolMessage = screen.getByText(/No schools within range/i);
  expect(noSchoolMessage).toBeInTheDocument();
});
