import React, {useState} from 'react';
import './App.css';
import Counter from "./Components/Counter";
import Setting from "./Components/Setting";

function App() {

    const [minCount, setMinCount] = useState<number>(0)
    const [maxCount, setMaxCount] = useState<number>(5)
    const [errorMessage, setErrorMessage] = useState<string>("Max Value")

    const [count, setCount] = useState<number>(minCount)
    const [error, setError] = useState<boolean>(false)

  return (
    <div className={"App"}>
        <Setting
            minCount={minCount}
            maxCount={maxCount}
            setMaxCount={setMaxCount}
            setMinCount={setMinCount}
            setCount={setCount}
            setErrorMessage={setErrorMessage}
            setError={setError}
        />

        <Counter
            count={count}
            maxCount={maxCount}
            minCount={minCount}
            setCount={setCount}
            error={error}
            setError={setError}
            errorMessage={errorMessage}
        />
    </div>
  );
}

export default App;
