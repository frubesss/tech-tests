import { fireEvent, render, screen } from '@testing-library/react';

import App from './';

describe('<App />', () => {
  it('renders correctly', () => {
    render(<App />);

    const logo = screen.getByTitle('Cleo');
    const subHeading = screen.getByText('Currency Converter');
    const inputs = screen.getAllByRole('textbox');
    const convertButton = screen.getByText('Convert');

    expect(logo).toBeInTheDocument();
    expect(subHeading).toBeInTheDocument();
    expect(inputs).toHaveLength(3);
    expect(convertButton).toBeInTheDocument();
  });

  it('customer can convert from one currency to another', async () => {
    render(<App />);

    const amountField = screen.getByLabelText('Amount');
    const fromField = screen.getByLabelText('From Currency');
    const toField = screen.getByLabelText('To Currency');
    const convertButton = screen.getByText('Convert');

    fireEvent.change(amountField, { target: { value: '100' } });
    fireEvent.change(fromField, { target: { value: 'CAD' } });
    fireEvent.change(toField, { target: { value: 'USD' } });

    fireEvent.click(convertButton);

    await screen.findByText('79.735035');
  });
});
