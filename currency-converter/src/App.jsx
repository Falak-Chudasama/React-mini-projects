import React, { useState, useEffect } from 'react';
import useCurrencyInfo from './hooks/useCurrencyInfo.js';
import InputBox from './components/InputBox.jsx';

function App() {

    const [fromAmount, setFromAmount] = useState(0);
    const [toAmount, setToAmount] = useState(0);
    const [from, setFrom] = useState('inr');
    const [to, setTo] = useState('usd');

    const currencyInfo = useCurrencyInfo(from);

    const swap = () => {
        const tempTo = to;
        const tempFrom = from;
        setFrom(tempTo);
        setTo(tempFrom);
        setToAmount(fromAmount);
        setFromAmount(toAmount);
    }

    const convertFromTo = useEffect(() => {
        setToAmount(fromAmount * currencyInfo[to]);
    }, [from, to, fromAmount]);

    const options = Object.keys(currencyInfo);

    return(
        <body className='bg-slate-800 grid place-items-center pt-5'>
            <div className='w-80 grid place-items-center gap-y-5'>
                <InputBox label={'from'} amount={0} onAmountChange={() => {setFromAmount(from)}} onCurrencyChange={() => {}} currencyOptions={options} selectCurrency={from}></InputBox>
                <button onClick={swap} className='bg-slate-100 p-2'>Swap</button>
                <InputBox label={'to'} amount={0} onAmountChange={() => {convertFromTo}} onCurrencyChange={() => {}} currencyOptions={options} selectCurrency={to} amountDisable={true}></InputBox>
                <button onClick={convertFromTo} className='p-2 bg-slate-100'>Convert {from.toUpperCase()} to {to.toUpperCase()}</button>
            </div>
        </body>
    );
}

export default App;