import { useEffect, useState } from 'react';
import styled from 'styled-components';

import { ReactComponent as Logo } from '../assets/logo.svg';
import Button from '../components/Button';
import Input from '../components/Input';
import { palette } from '../styles';

function App() {
  const [amount, setAmount] = useState('');
  const [fromCurrency, setFromCurrency] = useState('');
  const [toCurrency, setToCurrency] = useState('');
  const [convertedAmount, setConvertedAmount] = useState('');
  const [currencies, setCurrencies] = useState<string[]>([]);

  useEffect(() => {
    fetchCurrencies();
  }, []);

  const fetchCurrencies = async () => {
    const response = await fetch('http://localhost:3002/currencies');
    const responseJson = await response.json();
    setCurrencies(Object.keys(responseJson));
  };

  const convertAmount = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    const response = await fetch(`http://localhost:3002/convert?from=${fromCurrency}&to=${toCurrency}&amount=${amount}`);
    const responseJson = await response.json();
    setConvertedAmount(responseJson.convertedAmount);
  };

  return (
    <div>
      <StyledHeader>
        <Logo title="Cleo" />
        <p>Currency Converter</p>
      </StyledHeader>
      <ContentContainer>
        <ConverterContainer>
          <form onSubmit={convertAmount}>
            <Input label="Amount" onChange={(value) => setAmount(value)} value={amount} />
            <label htmlFor="from-currency">From Currency:</label>
            <select id="from-currency" onChange={(event) => setFromCurrency(event.target.value)}>
              <option value="">--Please choose an option--</option>
              {currencies.map((currency) => {
                return (
                  <option key={currency} value={currency}>
                    {currency}
                  </option>
                );
              })}
            </select>
            <label htmlFor="to-currency">to Currency:</label>
            <select id="to-currency" onChange={(event) => setToCurrency(event.target.value)}>
              <option value="">--Please choose an option--</option>
              {currencies.map((currency) => {
                return (
                  <option key={currency} value={currency}>
                    {currency}
                  </option>
                );
              })}
            </select>
            <Button label="Convert" />
            <ConvertedCurrencyContainer>
              <ConvertedCurrency>{Number(convertedAmount).toFixed(2)}</ConvertedCurrency>
            </ConvertedCurrencyContainer>
          </form>
        </ConverterContainer>
      </ContentContainer>
    </div>
  );
}

const StyledHeader = styled.header`
  height: 280px;
  display: flex;
  flex-flow: column;
  align-items: center;
  justify-content: center;
  background-color: ${palette.blue};
  color: ${palette.white};
`;

const ContentContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ConverterContainer = styled.div`
  border-radius: 8px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.2);
  width: 400px;
  margin-top: -50px;
  background-color: ${palette.white};
  padding: 36px 30px;
`;

const ConvertedCurrencyContainer = styled.div`
  background-color: #efefef;
  border-radius: 8px;
`;

const ConvertedCurrency = styled.h2`
  text-align: center;
`;

export default App;
