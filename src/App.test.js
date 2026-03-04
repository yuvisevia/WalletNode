// src/App.test.js
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders WalletNode title', () => {
    render(<App />);
    const titleElement = screen.getByText(/WalletNode/i);
    expect(titleElement).toBeInTheDocument();
});
