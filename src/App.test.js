import { render, screen } from '@testing-library/react';
import App from './App';

test('renders home page heading', () => {
  render(<App />);
  const heading = screen.getByRole('heading', { level: 1, name: /luxe tips/i });
  expect(heading).toBeInTheDocument();
});
